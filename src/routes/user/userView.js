import React, { Component, lazy } from "react";
import { Layout, Menu } from "antd";
import { Route, Link, Redirect } from "dva/router";
import { SuspenseComponent } from "../../utils/lazyRoute";
import {connect} from "dva"
const UserList = lazy(() => import("./userList"));
const UserAdd = lazy(() => import("./userAdd"));
const { Sider, Content } = Layout;
export default class userView extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Layout style={{height:"100%"}}>
        <Content>
          <Route
            path="/user/list"
            component={SuspenseComponent(UserList)}
          ></Route>
          <Route
            path="/user/add"
            component={SuspenseComponent(UserAdd)}
          ></Route>
          <Route
            path="/user"
            exact
            render={() => <Redirect to="/user/list" />}
          ></Route>
        </Content>
      </Layout>
    );
  }
}
