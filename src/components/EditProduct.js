import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import { Form, Modal, Input, InputNumber, Button, Radio } from 'antd';
import * as productActions from '../actions/productActions'

const { TextArea } = Input;

const EditProduct = (props) => {
  const { visible } = props;
  const [isRadioChange, setIsRadioChange] = useState(props.productDetails.available)

  const handleCancel = () => {
    props.toggleEditProductModal();
  };

  const onFinish = (values) => {
    const { productEdit } = props
    productEdit(values)
    props.toggleEditProductModal();
  };

  const onChangeRadio = (e) => {
    setIsRadioChange(e.target.value,)
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
        title="Edit Product Modal"
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
            initialValue={props.productDetails.id}
            rules={[
              {
                type: 'number',
                required: true,
              },
            ]}
          >
            <InputNumber disabled />
          </Form.Item>
          <Form.Item
            name={['product', 'name']}
            label="Name"
            initialValue={props.productDetails.name}
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
            initialValue={props.productDetails.description}
            rules={[
              {},
            ]}
          >
            <TextArea />
          </Form.Item>
          <Form.Item
            name={['product', 'price']}
            label="price"
            initialValue={props.productDetails.price}
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
          <Form.Item
            name={['product', 'discount']}
            label="discount"
            initialValue={props.productDetails.discount}
            rules={[{ type: 'number', }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name={['product', 'available']}
            label="Available"
            initialValue={props.productDetails.available}
          >
            <Radio.Group onChange={onChangeRadio} value={isRadioChange} >
              <Radio value={'available'}>Yes</Radio>
              <Radio value={'not-available'}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Edit Product
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
    productEdit: (value) => dispatch(productActions.productEdit(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)
