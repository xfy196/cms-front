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
  shouldComponentUpdate() {
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
