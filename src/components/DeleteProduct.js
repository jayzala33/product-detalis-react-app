import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import { Form, Modal, Input, InputNumber, Button } from 'antd';
import * as productActions from '../actions/productActions'

const DeleteProduct = (props) => {
  const { visible } = props;

  const handleCancel = () => {
    props.toggleDeleteProductModal();
  };

  const onDelete = () => {
    const { productDelete } = props
    props.toggleDeleteProductModal();
    productDelete(props.productDetails)
  };

  return (
    <>
      <Modal
        title="Delete Modal"
        visible={visible}
        onOk={handleCancel}
        onCancel={handleCancel}
        footer={null}
      >
        <div>Product ID : {props.productDetails.id}</div>
        <div>Product Name : {props.productDetails.name}</div>
        <div>Product Price : {props.productDetails.price}</div>
        <div>Product Description : {props.productDetails.description}</div>
        <div>Product Discount : {props.productDetails.discount}</div>
        <div>Product Available : {props.productDetails.available}</div>
        <Button type="primary" onClick={onDelete}>
          Delete Product
        </Button>
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
    productDelete: (value) => dispatch(productActions.productDelete(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProduct)
