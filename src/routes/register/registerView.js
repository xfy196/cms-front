import React, { Component } from "react";
import styles from "./registerView.css"
import {
  Form,
  Input,
  Cascader,
  Checkbox,
  AutoComplete,
  Button,
  Row,
  Col,
} from "antd";
export default class registerView extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className={styles.registerContainer}>
        <Form
          {...this.props.formItemLayout}
          className={styles.register}
          onFinish={this.props.onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
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

                  return Promise.reject(
                    new Error(
                      "两次密码不一致"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="请确认密码" />
          </Form.Item>

          <Form.Item
            name="nickname"
            label="昵称"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "昵称不能为空",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="请输入昵称" />
          </Form.Item>

          <Form.Item
            name="residence"
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
              placeholder="website"
            >
              <Input placeholder="请输入个人网站" />
            </AutoComplete>
          </Form.Item>

          <Form.Item
            label="Captcha"
            extra="We must make sure that your are a human."
          >
            <Row gutter={8}>
              <Col span={12}>
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
              <Col span={12}>
                <Button>获取验证码</Button>
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
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...this.props.tailFormItemLayout}
          >
            <Checkbox>
              我已阅读 <a href="">同意</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...this.props.tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
