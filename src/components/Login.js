import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import { Form, Input, Button, Typography } from 'antd';

const { Text } = Typography;
const Login = (props) => {
  const [isLogIn, setIsLogIn] = useState(null);
  console.log('isLogIn: ', isLogIn);

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const onFinish = (values) => {
    if (values.password == "admin" && values.username == "admin") {
      setIsLogIn(true);
    } else {
      setIsLogIn(false);
    }
    props.allowsLogin(isLogIn);
  };


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="loginScreen">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Log In
        </Button>
        </Form.Item>
        {isLogIn == false && <Text type="danger">Please enter correct username and password</Text>}
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

