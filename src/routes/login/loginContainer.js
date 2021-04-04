import React, { Component } from 'react'
import {connect} from "dva"
import LoginView from "./loginView"
@connect(
    ({loginModel}) => loginModel,
    dispatch => {
        return {

        }
    }
)
export default class loginContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            layout: {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
            },
            tailLayout: {
                wrapperCol: { offset: 4, span: 14 },
            },
            initialValue: {
                username: undefined,
                password: undefined,
                remember: false
            }
        }
    }
    
    /**
     * 处理点击登录的方法
     */
    handleFinish(values){
        console.log(values)
    }
    render() {
        return (
            <LoginView {...this.state} handleFinish={this.handleFinish.bind(this)}></LoginView>
        )
    }
}
// export default connect(({loginModel}) => loginModel)(loginContainer)
