import React, { Component, useState } from 'react'
import './GroupUser.css'
import { Button, Modal, Form, Checkbox} from 'antd';
import { Row, Col } from 'antd';
import { Table, Space } from 'antd';
import { Breadcrumb, Pagination, InputNumber } from 'antd';
import { Link } from "react-router-dom";
import { IconPlus, IconEdit, IconTrash} from '../../assets/svg';
import {
    Input,
    Select,
} from 'antd';
import dataGroupUser from '../../data/groupUser.json'


const { Option } = Select;

const { TextArea } = Input;

interface GroupUser {
    name: string;
    member: number;
    note: string;
}

const data: GroupUser[] = dataGroupUser;



function GroupUser() {
    const columnsGroupUser = [
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
            dataIndex: 'note',
            width: '50%'
        },
        {       
            render: () => (
                <Space size="middle">
                  <a onClick={showaddNewModal}><img src={IconEdit} className="edit__icon" alt="" style={{width:32,height:32}}/></a>
                  <a onClick={showdeleteModal}><img src={IconTrash} className="delete__icon" alt="" style={{width:32,height:32}}/></a>
                </Space>
              ),
        },
    ];

    const [addNewModal, setaddNewModal] = useState(false);

    const [deleteModal, setdeleteModal] = useState(false);

    const [option, setoption] = useState(false);

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
    
        return(
        <>
        <div className="section20">
            <div className="Section20__Title">
                <Row>
                    <Col span={24}>
                        <div className="title">
                            <Breadcrumb separator=">">
                                <Breadcrumb.Item className="tittle__breadcrumb__left">
                                    Cài đặt hệ thống
                                </Breadcrumb.Item>
                                <Breadcrumb.Item className="tittle__breadcrumb__right">
                                    Người dùng hệ thống
                                </Breadcrumb.Item>
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
                                <Link to="/groupuser">
                                <div className="switch-group__tab-left">
                                    <a>Nhóm người dùng</a>
                                </div>
                                </Link>

                                <Link to="/listuser">
                                <div className="switch-group__tab-right">
                                    <a>Danh sách người dùng</a>
                                </div>
                                </Link>
                            </div>
                        </Col>

                        <Col span={10}>
                            <div className="box__btn-group">                             
                                <Button className="box__btn-group__add" onClick={showaddNewModal}>
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
            <Modal className="modal-groupuser" title="Thiết lập nhóm người dùng" visible={addNewModal}>
                <Form>
                    <div className="form-control">
                        <label>Tên nhóm:</label>
                        <Input />
                    </div>

                    <div className="form-control">
                        <label>Ghi chú:</label>
                        <TextArea rows={4} className="modal-group-textarea" />
                    </div>

                    <div className="form-checkbox">
                        <div className="form-label">
                            <label>Phân quyền:</label>
                        </div>    
                        <div className="checkbox">
                            <Checkbox
                            >Toàn quyền quản trị
                            </Checkbox>
                            <Checkbox
                             onChange={() => {
                                setoption(!option);
                              }}
                              checked={option}
                            >Tùy chọn                    
                            </Checkbox>
                       </div>
                    </div>
                </Form>

                {option && (
                <Form className="form-option">
                <div className="form-checkbox">
                     <div className="form-label">
                        <label>Khai báo dữ liệu:</label>
                     </div>
                        <div className="checkbox">
                       <Checkbox
                       >Xem
                       </Checkbox>
                       <Checkbox
                       >Chỉnh sửa
                       </Checkbox>
                       <Checkbox
                       >Xóa
                       </Checkbox>
                       <Checkbox
                       >Thêm mới                 
                       </Checkbox>
                       </div>
                    </div>

                    <div className="form-checkbox">
                     <div className="form-label">
                        <label>Hồ sơ học viên:</label>
                     </div>
                        <div className="checkbox">
                       <Checkbox
                       >Xem
                       </Checkbox>
                       <Checkbox
                       >Chỉnh sửa
                       </Checkbox>
                       <Checkbox
                       >Xóa
                       </Checkbox>
                       <Checkbox
                       >Thêm mới                 
                       </Checkbox>
                       </div>
                    </div>

                    <div className="form-checkbox">
                     <div className="form-label">
                        <label>Hồ sơ giảng viên:</label>
                     </div>
                        <div className="checkbox">
                       <Checkbox
                       >Xem
                       </Checkbox>
                       <Checkbox
                       >Chỉnh sửa
                       </Checkbox>
                       <Checkbox
                       >Xóa
                       </Checkbox>
                       <Checkbox
                       >Thêm mới                 
                       </Checkbox>
                       </div>
                    </div>

                    <div className="form-checkbox">
                     <div className="form-label">
                        <label>Thi cử:</label>
                     </div>
                        <div className="checkbox">
                       <Checkbox
                       >Xem
                       </Checkbox>
                       <Checkbox
                       >Chỉnh sửa
                       </Checkbox>
                       <Checkbox
                       >Xóa
                       </Checkbox>
                       <Checkbox
                       >Thêm mới                 
                       </Checkbox>
                       <Checkbox>
                       Nhập điểm               
                       </Checkbox>
                       </div>
                    </div>

                    <div className="form-checkbox">
                     <div className="form-label">
                        <label>Cài đặt hệ thống:</label>
                     </div>
                        <div className="checkbox">
                       <Checkbox
                       >Xem
                       </Checkbox>
                       <Checkbox
                       >Chỉnh sửa
                       </Checkbox>
                       <Checkbox
                       >Xóa
                       </Checkbox>
                       <Checkbox
                       >Thêm mới                 
                       </Checkbox>
                       </div>
                    </div>
                </Form>
                )}
                <div className="btn-group__modal">
                        <Button className="modal__btn-group__cancel" onClick={handleCancel}>Hủy</Button>
                        <Button className="modal__btn-group__save" onClick={handleSave}>Lưu</Button>
                    </div>
                </Modal>

                {/* Modal Delete*/}
                <Modal className="modal-delete" title="Xóa nhóm người dùng" visible={deleteModal}>
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

export default GroupUser;