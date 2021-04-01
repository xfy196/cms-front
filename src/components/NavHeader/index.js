import React, { Component } from "react";
import { Layout, Menu, Image } from "antd";
import {Link} from "dva/router"
import logo from "../../assets/yay.jpg";
import styles from "./index.less"
const { Header } = Layout;
class NavHeader extends Component {
  render() {
    return (
      <Header className={styles.header}>
        <div className={styles.logo}>
          <Image preview={false} src={logo}></Image>
        </div>
        <Menu theme="light" mode="horizontal" selectedKeys={[this.props.location.pathname]}>
          <Menu.Item key="/home">
            <Link to="/home">首页</Link>
          </Menu.Item>
          <Menu.Item key="/user">
            <Link to="/user">用户管理</Link>
          </Menu.Item>
          <Menu.Item key="/profile">
            <Link to="/profile">个人中心</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}
export default NavHeader;
