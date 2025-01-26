import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const auth_user = useSelector((state) => state.auth_user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      dispatch({
        type: "USER_LOGGED_IN_REQUEST",
        payload: {
          email: values.email,
          password: values.password,
          onSuccess: () => {
            console.log("Login was successful");
            navigate("/");
          },
        },
      });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100svh",
        backgroundImage: 'url("office.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
        title={<h2 style={{color: "#1677ff"}}>Login To the Admin Template</h2>}
      >
        <Form
          name="login"
          initialValues={{
            remember: true,
          }}
          style={{
            width: 360,
            maxWidth: 360,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input size="large" prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="">Forgot password</a>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button
              loading={auth_user?.loading}
              size="large"
              block
              type="primary"
              htmlType="submit"
            >
              Log in
            </Button>
            <div style={{ marginTop: 10 }}>
              or <a href="">Register now!</a>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
