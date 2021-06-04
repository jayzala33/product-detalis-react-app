import React, { useState } from "react";
import "antd/dist/antd.css";
import { connect } from 'react-redux'
import * as productActions from '../actions/productActions'
import { Button, Table, Tag, Space } from "antd";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";


const ProductList = (props) => {
    const { Column, ColumnGroup } = Table;
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [productDetails, setProductDetails] = useState();


    const data = props.productList;
    console.log('props.productList: ', props.productList);

    // const editProduct = (record) => {
    //     console.log('wioqw', record);
    // }

    const toggleDeleteProductModal = (record) => {
        setIsDeleteModalVisible(!isDeleteModalVisible);
        setProductDetails(record);
    }

    const toggleEditProductModal = (record) => {
        setIsEditModalVisible(!isEditModalVisible);
        setProductDetails(record);
    }

    return (
        <>
            <Table dataSource={data}>
                <Column title="id" dataIndex="id" key="id" />
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="price" dataIndex="price" key="price" />
                <Column title="description" dataIndex="description" key="description" />
                <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={(tags) => (
                        <>
                            {tags && tags.map((tag) => (
                                <Tag color="blue" key={tag}>
                                    {tag}
                                </Tag>
                            ))}
                        </>
                    )}
                />
                <Column
                    title="Action"
                    key="action"
                    render={(record) => (
                        <>
                            <Space size="middle">
                                <span onClick={() => toggleEditProductModal(record)}><a>Edit</a></span>
                                <span onClick={() => toggleDeleteProductModal(record)}><a>Delete</a></span>
                            </Space>
                        </>
                    )}
                />
            </Table>
            {isDeleteModalVisible && <DeleteProduct visible={isDeleteModalVisible} productDetails={productDetails} toggleDeleteProductModal={toggleDeleteProductModal} />}
            {isEditModalVisible && <EditProduct visible={isEditModalVisible} productDetails={productDetails} toggleEditProductModal={toggleEditProductModal} />}
        </>
    );
};


const mapStateToProps = (state) => {
    return {
        productList: state.productList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        productDelete: (value) => dispatch(productActions.productDelete(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
