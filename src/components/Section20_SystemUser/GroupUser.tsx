import React, { Component, useState } from 'react'
import './GroupUser.css'
import { Button, Modal, Switch } from 'antd';
import { Row, Col } from 'antd';
import { Table } from 'antd';
import { Breadcrumb, Pagination, InputNumber } from 'antd';
import { IconPlus} from '../../assets/svg';
import {
    Input,
    Select,
} from 'antd';
import { columnsGroupUser,dataGroupUser } from '../../models/groupUserModel'

const { Option } = Select;

    
function GroupUser() {
        return(
        <>
        <div className="section20">
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
                        <Col span={5}>
                        <div className="box__select">
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
                                    <a href="/groupuser">Nhóm người dùng</a>
                                </div>

                                <div className="switch-group__tab-right">
                                    <a href="/listuser">Danh sách người dùng</a>
                                </div>
                            </div>
                        </Col>

                        <Col span={10}>
                            <div className="box__btn-group">                             
                                <Button className="box__btn-group__add" >
                                    <img style={{padding:10}} src={IconPlus} />Thêm mới</Button>
                                   
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
                        <div className="tab-search-right"> 
                            <Input className="tab-search-right__input"  placeholder="Tìm kiếm" />
                        </div>
                </Col>

            </Col> 
                <div className="tab-table">
                    <Table
                        columns={columnsGroupUser}
                        dataSource={dataGroupUser}
                    />
                </div>


                <Col span={24} className="pagination">
                    <Col span={12} className="pagination-left">
                        <div className="box-sbj-pagtion">
                            <p>Hiển thị</p>
                            <InputNumber min={1} max={10} defaultValue={8} />
                            <p> hàng trong mỗi trang</p>
                        </div>
                    </Col>

                    <Col span={12}>
                        <div className="box-sbj-pagin">
                            <Pagination
                                showSizeChanger
                                defaultCurrent={3}
                                total={1000}
                            />
                        </div>
                    </Col>
                </Col>
            </div>
            </div>
        </>
    )
    /* Modal */
}


export default GroupUser;