import React, { Component } from "react";
import RegisterView from "./registerView";
import { Form, Select } from "antd";
import { regionData} from 'element-china-area-data'
import {connect} from "dva"
const { Option } = Select;

@connect(
  ({loginmodel}) => loginmodel
)
export default class registerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captchaUrl: "http://localhost:7001/api/getCaptcha",
      residences: regionData,
      formItemLayout: {
        labelCol: {
          xs: {
            span: 22,
          },
          sm: {
            span: 6,
          },
        },
        wrapperCol: {
          xs: {
            span: 22,
          },
          sm: {
            span: 14,
          },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 22,
            offset: 0,
          },
          sm: {
            span: 14,
            offset: 6,
          },
        },
      },
      autoCompleteResult: [],
    };
  }
  async onFinish(values) {
    delete values.agreement
    delete values.repassword
    delete values.prefix
    await this.props.dispatch({
      type: "loginmodel/signup",
      payload: {
        method: "POST",
        data: {
          ...values
        }
      }
    })
    this.props.history.push({
      pathname: "/login"
    })
  }
  websiteOptions(){
      return this.state.autoCompleteResult.map((website) => ({
        label: website,
        value: website,
      }));
  }
  prefixSelector() {
    return (
      <Form.Item name="prefix" noStyle>
        <Select
          style={{
            width: 70,
          }}
        >
          <Option value="86">+86</Option>
        </Select>
      </Form.Item>
    );
  }
  onWebsiteChange(value) {
    if (!value) {
      this.setState({ autoCompleteResult: [] });
    } else {
      this.setState({
        autoCompleteResult: [".com", ".org", ".net", ".top"].map(
          (domain) => `${value}${domain}`
        ),
      });
    }
  }
  /**
   * 改变captcha的改变
   */
  handleChangeCaptcha(e){
    e.target.src = this.state.captchaUrl + `?_time=` + Date.now()
  }
  render() {
    return (
      <RegisterView
        {...this.state}
        {...this.props}
        onFinish={this.onFinish.bind(this)}
        onWebsiteChange={this.onWebsiteChange.bind(this)}
        prefixSelector={this.prefixSelector.bind(this)}
        websiteOptions={this.websiteOptions.bind(this)}
        handleChangeCaptcha={this.handleChangeCaptcha.bind(this)}
      ></RegisterView>
    );
  }
}
// export default connect((state) => state)(registerContainer)