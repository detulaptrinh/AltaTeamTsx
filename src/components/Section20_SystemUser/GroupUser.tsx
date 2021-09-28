import React, { Component } from 'react'
import './GroupUser.css'
import "@fontsource/source-sans-pro";
import { DeleteOutlined, PicCenterOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Table } from 'antd';
import { Card } from 'antd';
import { Breadcrumb, Pagination, InputNumber } from 'antd';
import {
    Form,
    Input,
    Select,
    DatePicker,
} from 'antd';

import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;
const { Option } = Select;

const columns = [
    {
        title: 'Tên nhóm',
        dataIndex: 'name',
        sorter: true,
        width: '15%'
    },
    {
        title: 'Tổng số thành viên',
        dataIndex: 'member',
        sorter: true,
        width: '25%'
    },
    {
        title: 'Ghi chú',
        dataIndex: 'ghichu',
        width: '50%'
    },
    {
        title: 'Action',
        width: '10%'
    },
];

const dataSource = [
    {
        name: 'Quản trị viên',
        member: 6,
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.'
    },
    {
        name: 'Học sinh tiểu học',
        member: 8,
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.'
    },
    {
        name: 'Phòng hành chính',
        member: 7,
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.'
    },
    {
        name: 'Nhân viên',
        member: 6,
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.'
    },
    {
        name: 'Nhân viên',
        member: 6,
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.'
    },
    {
        name: 'Nhân viên',
        member: 6,
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.'
    },
    {
        name: 'Nhân viên',
        member: 6,
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.'
    },
    {
        name: 'Nhân viên',
        member: 6,
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.'
    },

];


class GroupUser extends Component {
    render(){
        return(
        <>
            <div className="Section20__Title">
                <Row>
                    <Col span={24}>
                        <div className="title">
                            <Breadcrumb separator=">">
                                <Breadcrumb.Item className="tittle__breadcrumb__left">Cài đặt hệ thống</Breadcrumb.Item>
                                <Breadcrumb.Item className="tittle__breadcrumb__right">Người dùng hệ thống</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>



                <Row className="row1">
                    <Col span={24} className="switch__tab">
                        <Col span={5}><div className="box__select">
                            <Col span={12}>
                                <Select defaultValue="1" className="box__select__year">
                                    <Option value="1">Chọn kỳ</Option>
                                    <Option value="2">HKI</Option>
                                    <Option value="3">HKII</Option>
                                    <Option value="3">HKIII</Option>
                                </Select>
                            </Col>
                            <Col span={12}>
                                <Select defaultValue="1" className="box__select__year">
                                    <Option value="1">Chọn khối</Option>
                                    <Option value="2">Khối 7</Option>
                                    <Option value="3">Khối 8</Option>
                                    <Option value="3">Khối 9</Option>
                                </Select>
                            </Col>
                        </div>
                        </Col>


                        <Col span={9}>

                            <div className="switch-group">
                                <div className="switch-group__tab-left">
                                    <a href="">Nhóm người dùng</a>
                                </div>
                                <div className="switch-group__tab-right">
                                    <a href="">Danh sách người dùng</a>
                                </div>
                            </div>


                        </Col>

                        <Col span={10}>
                            <div className="box__btn-group">
                                
                                <Button className="box__btn-group__add" ><PlusOutlined />Thêm mới</Button>
                            </div>
                        </Col>
                    </Col>
                </Row>

            </div>



            

            <div className="tab">

            <Col className="tab__title">   
            <Col span={12}>
            <div className="tab__title__left">
                <p>Danh sách các nhóm người dùng</p>
                </div>
                </Col>

                <Col span={12}>
                <div className="tab__search__right"> 
                <Input className="box__sbj-search" placeholder="Tìm kiếm" />
            </div>
            </Col>
            </Col> 
                <div className="tab__table">
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                    />
                </div>


                <Col span={24} className="pagination">
                    <Col span={12} className="pagination__left">
                        <div className="box__sbj-pagtion">
                            <p>Hiển thị</p>
                            <InputNumber min={1} max={10} defaultValue={3} />
                            <p> hàng trong mỗi trang</p>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="box__sbj-pagin">
                            <Pagination
                                showSizeChanger
                                defaultCurrent={3}
                                total={1000}
                            />
                        </div>
                    </Col>

                </Col>
            </div>



        </>
    )
    /* Modal */
}
}

export default GroupUser;