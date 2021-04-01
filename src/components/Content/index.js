import React, { Component } from "react";
import { Layout } from "antd";
import { Route } from "dva/router";
import UserCom from "../../routes/user/userView";
import ProfileCom from "../../routes/profile/profileView";
import HomeCom from "../../routes/home/HomePage";
import styles from "./index.less"
const { Content } = Layout;
export default class index extends Component {
    constructor(props){
        super(props)
        if(this.props.location.pathname === "/"){
            this.props.history.push("/home")
        }
    }
  render() {
    return (
      <Content>
        <div className={styles.content}>
          <Route path="/home" component={HomeCom}></Route>
          <Route path="/user" component={UserCom}></Route>
          <Route path="/profile" component={ProfileCom}></Route>
        </div>
      </Content>
    );
  }
}
