import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import { Form, Modal, Input, InputNumber, Button } from 'antd';
import * as productActions from '../actions/productActions'

const { TextArea } = Input;

const AddProduct = (props) => {
  const { visible } = props;

  const handleCancel = () => {
    props.toggleAddUserModal();
  };

  const onFinish = (values) => {
    const { productAdd } = props
    productAdd(values)
    props.toggleAddUserModal();
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /* eslint-disable no-template-curly-in-string */

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  return (
    <>
      <Modal
        title="Add Product Modal"
        visible={visible}
        onOk={handleCancel}
        onCancel={handleCancel}
        footer={null}
      >
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}
        >
          <Form.Item
            name={['product', 'id']}
            label="id"
            rules={[
              {
                type: 'number',
                required: true,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name={['product', 'name']}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['product', 'description']}
            label="description"
            rules={[
              {},
            ]}
          >
            <TextArea />
          </Form.Item>
          <Form.Item
            name={['product', 'price']}
            label="price"
            rules={[
              {
                type: 'number',
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Add Product
        </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    productAdd: (value) => dispatch(productActions.productAdd(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
