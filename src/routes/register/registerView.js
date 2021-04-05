import React, { Component } from "react";
import styles from "./registerView.css";
import {
  Form,
  Input,
  Cascader,
  Checkbox,
  AutoComplete,
  Button,
  Row,
  Col,
  Radio,
  Image
} from "antd";
export default class registerView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.registerContainer}>
        <Form
          {...this.props.formItemLayout}
          className={styles.register}
          onFinish={this.props.onFinish}
          initialValues={{
            prefix: "86",
            gender:"男"
          }}
          scrollToFirstError
        >
          <h3 className={styles.title}>欢迎注册</h3>
          <Form.Item
            name="email"
            label="邮箱"
            rules={[
              {
                type: "email",
                message: "请输入合法邮箱",
              },
              {
                required: true,
                message: "邮箱不能为空",
              },
            ]}
          >
            <Input placeholder="请输入邮箱" />
          </Form.Item>

          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: "密码不能为空",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>

          <Form.Item
            name="repassword"
            label="确认密码"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "确认密码不能为空",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error("两次密码不一致"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="请确认密码" />
          </Form.Item>

          <Form.Item
            name="username"
            label="用户名"
            rules={[
              {
                required: true,
                message: "用户名不能为空",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="请输入昵称" />
          </Form.Item>

          <Form.Item
            name="address"
            label="住址"
            rules={[
              {
                type: "array",
                required: true,
                message: "住址不能为空",
              },
            ]}
          >
            <Cascader placeholder="请选择" options={this.props.residences} />
          </Form.Item>

          <Form.Item
            name="phone"
            label="手机号码"
            rules={[
              {
                required: true,
                message: "请输入手机号码",
              },
            ]}
          >
            <Input
              placeholder="请输入手机号码"
              addonBefore={this.props.prefixSelector()}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item
            name="gender"
            label="性别"
            rules={[
              {
                required: true,
                message: "请输入性别",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={"男"}>男</Radio>
              <Radio value={"女"}>女</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="website"
            label="个人主页"
            rules={[
              {
                required: true,
                message: "请输入个人主页",
              },
            ]}
          >
            <AutoComplete
              options={this.props.websiteOptions()}
              onChange={this.props.onWebsiteChange}
              placeholder="请输入个人网站"
            >
              <Input />
            </AutoComplete>
          </Form.Item>

          <Form.Item label="验证码" extra="验证是否为机器操作">
            <Row gutter={4}>
              <Col span={16}>
                <Form.Item
                  name="captcha"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "请输入验证码",
                    },
                  ]}
                >
                  <Input placeholder="请输入验证码" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Image height={32} alt="captcha" onClick={this.props.handleChangeCaptcha} src={this.props.captchaUrl} preview={false}/>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("请确认阅读过风险协议")),
              },
            ]}
            {...this.props.tailFormItemLayout}
          >
            <Checkbox>
              我已阅读 <a href="">风险协议</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...this.props.tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
          <Form.Item {...this.props.tailFormItemLayout}>
            已有账号<a href="/login">立即登录</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
