import React, { Component, lazy } from "react";
import { Layout, Menu } from "antd";
import { Route } from "dva/router";
import { connect } from "dva";
import styles from "./index.less";
import { Link } from "dva/router";
import { SuspenseComponent } from "../../utils/lazyRoute";
const ProfileCom = lazy(() => import("../../routes/profile/profileContainer"));
const HomeCom = lazy(() => import("../../routes/home/homeContainer"));
const UserCom = lazy(() => import("../../routes/user/userView"));
const { Content, Sider } = Layout;
@connect(({ loginmodel }) => loginmodel)
export default class index extends Component {
  constructor(props) {
    super(props);
    if (this.props.location.pathname === "/") {
      this.props.history.push("/home");
    }
  }

  componentDidMount() {
    this.props.dispatch({
      type: "loginmodel/getUserInfo",
      payload: {
        method: "POST",
      },
    });
  }
  renderMenus(node) {
      return node.map((item) => {
        if (item.children.length > 0) {
          return (
            <Menu.SubMenu key={item.key} title={item.name}>
              {
                this.renderMenus(item.children)
              }
            </Menu.SubMenu>
          );
        }
        return (
          <Menu.Item key={item.key}>
            <Link to={item.key}>{item.name}</Link>
          </Menu.Item>
        );
      });
  }
  render() {
    return (
      <Content>
        <Layout style={{ height: "100%" }}>
          <Sider theme="light" style={{ height: "100%" }} width={200}>
              <Menu
                theme="light"
                mode="inline"
                selectedKeys={[this.props.location.pathname]}
              >
               {
                 this.props.menus.length > 0 ? this.renderMenus(this.props.menus) : ""
               }
              </Menu>
          </Sider>
          <Content>
            <div className={styles.content}>
              <Route
                path="/home"
                component={SuspenseComponent(HomeCom)}
              ></Route>
              <Route
                path="/user"
                component={SuspenseComponent(UserCom)}
              ></Route>
              <Route
                path="/profile"
                component={SuspenseComponent(ProfileCom)}
              ></Route>
            </div>
          </Content>
        </Layout>
      </Content>
    );
  }
}
