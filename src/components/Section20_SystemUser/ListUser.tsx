import React, { Component, useState } from 'react'
import './ListUser.css'
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Table } from 'antd';
import { Breadcrumb, Pagination, InputNumber } from 'antd';
import { IconPlus, IconTrash, IconEdit } from '../../assets/svg';
import dataListUser from '../../data/listUser.json'
import {
    Input,
    Select
} from 'antd';

import { Modal, Switch, Space, Form } from 'antd';

const { Option } = Select;

interface ListUser {
    name: string;
    email: string;
    groupuser: string;
    note: boolean;
}

const data: ListUser[] = dataListUser;

function ListUser() {
    const columnsListUser = [
        {
            title: 'Tên',
            dataIndex: 'name',
            width: '15%'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width: '25%'
        },
        {
            title: 'Nhóm người dùng',
            dataIndex: 'groupuser',
            width: '20%'
        },
        {
            title: 'Trạng thái',
            dataIndex: 'note',
            width: '30%',
            render: (status: boolean) =>
                status ? (
                    <span className="note-text">Đang hoạt động</span>
                ) : (
                    <span className="note-text">Đã vô hiệu hoá</span>
                ),
        },

        {
            render: () => (
                <Space size="middle">
                    <a onClick={showaddNewModal}><img src={IconEdit} className="edit__icon" alt="" style={{ width: 32, height: 32 }} /></a>
                    <a onClick={showdeleteModal}><img src={IconTrash} className="delete__icon" alt="" style={{ width: 32, height: 32 }} /></a>
                </Space>
            ),
        },
    ];

    const [addNewModal, setaddNewModal] = useState(false);

    const [deleteModal, setdeleteModal] = useState(false);

    const showdeleteModal = () => {
        setdeleteModal(true);
    };

    const handleCancelDelete = () => {
        setdeleteModal(false);
    }

    const showaddNewModal = () => {
        setaddNewModal(true);
    };

    const handleSave = () => {
        setaddNewModal(false);
    };

    const handleCancel = () => {
        setaddNewModal(false);
    };
    return (
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
                                <div className="switch-list">
                                    <div className="switch-list__tab-left">
                                        <a href="/groupuser">Nhóm người dùng</a>
                                    </div>

                                    <div className="switch-list__tab-right">
                                        <a href="/listuser">Danh sách người dùng</a>
                                    </div>
                                </div>
                            </Col>

                            <Col span={10}>
                                <div className="box__btn-group">
                                    <Button className="box__btn-group__add" onClick={showaddNewModal} ><img style={{ padding: 10 }} src={IconPlus} />Thêm mới</Button>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </div>



                <div className="tab">
                    <Col className="tab__title">
                        <Col span={12}>
                            <div className="tab__title__left">
                                <p>Danh sách người dùng trên hệ thống</p>
                            </div>
                        </Col>

                        <Col span={12}>
                            <div className="tab-search-right">
                                <Input className="tab-search-right__input" placeholder="Tìm kiếm" />
                            </div>
                        </Col>
                    </Col>

                    <div className="tab-table">
                        <Table
                            columns={columnsListUser}
                            dataSource={data}
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

                {/* Modal Add New*/}
                <Modal className="modal-groupuser" title="Thiết lập người dùng" visible={addNewModal}>
                    <Form>
                        <div className="form-control">
                            <label>Tên người dùng<span className="obligatory">*</span> </label>
                            <Input />
                        </div>

                        <div className="form-control">
                            <label>Email<span className="obligatory">*</span></label>
                            <Input />
                        </div>

                        <div className="form-control">
                            <label>Nhóm người dùng<span className="obligatory">*</span></label>
                            <Input />
                        </div>

                        <div className="form-switch">
                            <Switch />
                            <label>Đang hoạt động</label>
                        </div>

                        <div className="btn-group__modal">
                            <Button className="modal__btn-group__cancel" onClick={handleCancel}>Hủy</Button>
                            <Button className="modal__btn-group__save" onClick={handleSave}>Lưu</Button>
                        </div>
                    </Form>
                </Modal>

                {/* Modal Delete*/}
                <Modal className="modal-delete" title="Xóa tài khoản" visible={deleteModal}>
                    <p className="modal-delete-content">Xác nhận muốn xoá nhóm người này và toàn bộ thông tin bên trong? Sau khi xoá sẽ không thể hoàn tác.</p>
                    <div className="btn-group__modal">
                        <Button className="modal__btn-group__cancel" onClick={handleCancelDelete}>Hủy</Button>
                        <Button className="modal__btn-group__save" >Xác nhận</Button>
                    </div>
                </Modal>
            </div>
        </>
    )

}


export default ListUser;