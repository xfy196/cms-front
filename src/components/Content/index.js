import React, { Component, lazy } from "react";
import { Layout } from "antd";
import { Route } from "dva/router";
import styles from "./index.less"
import {SuspenseComponent} from "../../utils/lazyRoute"
const ProfileCom = lazy(() => import("../../routes/profile/profileContainer"))
const HomeCom = lazy(() => import("../../routes/home/homeContainer"))
const UserCom = lazy(() => import("../../routes/user/userView"))
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
          <Route path="/home" component={SuspenseComponent(HomeCom)}></Route>
          <Route path="/user" component={SuspenseComponent(UserCom)}></Route>
          <Route path="/profile" component={SuspenseComponent(ProfileCom)}></Route>
        </div>
      </Content>
    );
  }
}
