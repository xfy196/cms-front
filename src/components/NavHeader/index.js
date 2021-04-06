import React, { Component } from "react";
import {
  Layout,
  Menu,
  Image,
  Dropdown,
  Avatar,
  Button,
  Space,
  Typography,
} from "antd";
import { connect } from "dva";
import { Link } from "dva/router";
import logo from "../../assets/yay.jpg";
import styles from "./index.less";
const { Header } = Layout;
const { Text } = Typography;
@connect(({ loginmodel }) => loginmodel)
class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectKey: this.props.location.pathname.split("/")[1],
    };
  }
  componentWillMount() {
    this.props.dispatch({
      type: "loginmodel/getUserInfo",
      payload: {
        method: "POST",
      },
    });
  }
  shouldComponentUpdate() {
    let selectKey = this.props.location.pathname.split("/")[1];
    if (selectKey === this.state.selectKey) {
      return false;
    }
    this.setState({
      selectKey,
    });
    return true;
  }

  menu() {
    return (
      <Menu>
        <Menu.Item>
          <Button type="link">个人信息</Button>
        </Menu.Item>
        <Menu.Item>
          <Button danger type="link">
            退出
          </Button>
        </Menu.Item>
      </Menu>
    );
  }

  render() {
    return (
      <Header className={styles.header}>
        <div className={styles.logo}>
          <Image preview={false} src={logo}></Image>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={[this.state.selectKey]}
        >
          <Menu.Item key="home">
            <Link to="/home">首页</Link>
          </Menu.Item>
          <Menu.Item key="user">
            <Link to="/user">用户管理</Link>
          </Menu.Item>
          <Menu.Item key="profile">
            <Link to="/profile">个人中心</Link>
          </Menu.Item>
        </Menu>
        <div className={styles.userInfoBox}>
          <Dropdown placement="bottomCenter" overlay={this.menu()}>
            <Space>
              <Avatar src={"https://via.placeholder.com/100"} />
              <Text>{this.props.userInfo.username}</Text>
            </Space>
          </Dropdown>
        </div>
      </Header>
    );
  }
}
export default NavHeader;
