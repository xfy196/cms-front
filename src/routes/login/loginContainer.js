import React, { Component } from "react";
import { connect } from "dva";
import LoginView from "./loginView";
@connect(({ loginmodel }) => loginmodel)
export default class loginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captchaUrl: "http://localhost:7001/api/getCaptcha",
      layout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
      },
      tailLayout: {
        wrapperCol: { offset: 6, span: 16 },
      },
      initialValue: {
        username: undefined,
        password: undefined,
        remember: false,
      },
    };
  }

  componentDidMount(){
      if(localStorage.getItem("cmsToken")){
          this.props.history.push("/")
      }
  }

  /**
   * 处理点击登录的方法
   */
  async handleFinish(values) {
    //   首先验证验证码是否正确
    await this.props.dispatch({
        type: "loginmodel/captcha",
        payload: {
            method: "POST",
            data: {
                ...values
            },
        }
    })
    // this.props.history.push({
    //   pathname: "/",
    // });
  }
    /**
   * 改变captcha的改变
   */
     handleChangeCaptcha(e){
        e.target.src = this.state.captchaUrl + `?_time=` + Date.now()
      }
  render() {
    return (
      <LoginView
        {...this.state}
        handleFinish={this.handleFinish.bind(this)}
        handleChangeCaptcha={this.handleChangeCaptcha.bind(this)}
      ></LoginView>
    );
  }
}
