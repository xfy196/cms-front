import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import styles from "./loginView.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
export default class loginView extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }
  render() {
    return (
      <div className={styles.loginContainer}>
        <Form
        initialValues={this.props.initialValue}
          className={styles.loginBox}
          {...this.props.layout}
          form={this.props.form}
          onFinish={this.props.handleFinish}
        >
          <h3 className={styles.title}>欢迎登录</h3>
          <Form.Item
            name="username"
            label="账户"
            rules={[
              {
                required: true,
                message: "账户必须输入",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: "密码必须输入",
              },
            ]}
          >
            <Input prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item {...this.props.tailLayout}>
            <Form.Item
              style={{ float: "left" }}
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item style={{ float: "right" }}>
              <Button type="link">忘记密码</Button>
            </Form.Item>
          </Form.Item>

          <Form.Item {...this.props.tailLayout}>
            <Form.Item style={{ float: "left" }}>
              <Button type="primary" htmlType="submit">
                确认
              </Button>
            </Form.Item>
            <Form.Item style={{ float: "right" }}>
              <Button type="link">已有账号现在登录</Button>
            </Form.Item>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
