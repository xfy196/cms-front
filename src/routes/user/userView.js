import React, { Component, lazy } from "react";
import { Layout, Menu } from "antd";
import { Route, Link, Redirect } from "dva/router";
import { SuspenseComponent } from "../../utils/lazyRoute";
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
        <Sider theme="light">
          <Menu
            theme="light"
            mode="vertical"
            selectedKeys={[this.props.location.pathname]}
          >
            <Menu.Item key="/user/list">
              <Link to="/user/list">用户列表</Link>
            </Menu.Item>
            <Menu.Item key="/user/add">
              <Link to="/user/add">添加用户</Link>
            </Menu.Item>
          </Menu>
        </Sider>
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
