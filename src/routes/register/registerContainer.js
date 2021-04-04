import React, { Component } from "react";
import RegisterView from "./registerView";
import { Form, Select } from "antd";
const { Option } = Select;
export default class registerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      residences: [
        {
          value: "zhejiang",
          label: "Zhejiang",
          children: [
            {
              value: "hangzhou",
              label: "Hangzhou",
              children: [
                {
                  value: "xihu",
                  label: "West Lake",
                },
              ],
            },
          ],
        },
        {
          value: "jiangsu",
          label: "Jiangsu",
          children: [
            {
              value: "nanjing",
              label: "Nanjing",
              children: [
                {
                  value: "zhonghuamen",
                  label: "Zhong Hua Men",
                },
              ],
            },
          ],
        },
      ],
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
  onFinish(values) {
    console.log("Received values of form: ", values);
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
          <Option value="87">+87</Option>
        </Select>
      </Form.Item>
    );
  }
  onWebsiteChange(value) {
    if (!value) {
      this.setState({ autoCompleteResult: [] });
    } else {
      this.setState({
        autoCompleteResult: [".com", ".org", ".net"].map(
          (domain) => `${value}${domain}`
        ),
      });
    }
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
      ></RegisterView>
    );
  }
}
