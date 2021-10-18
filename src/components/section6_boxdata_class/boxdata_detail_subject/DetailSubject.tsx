import React, { Component, useState } from 'react';
import { Breadcrumb } from 'antd';
import './DetailSubject.css'
import { Row, Col, Table, Modal, Form, Select, Input, Checkbox } from 'antd';
import 'antd/dist/antd.less'
import {
    IconEdit,
    IconTrash,
    IconPlusPrimary,
} from "../../../assets/svg/index";
import dataDetailSubject from '../../../data/detailSubject.json'

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
    },
    {
        title: 'Mã môn học',
        dataIndex: 'id',
    },
    {
        title: 'Tên môn học',
        dataIndex: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Loại môn',
        dataIndex: 'type',
    },
    {
        title: 'Số tiết HK1',
        dataIndex: 'hk1',
    },
    {
        title: 'Số tiết HK2',
        dataIndex: 'hk2',
    },
];

const data: DetailSubject[] = dataDetailSubject;

interface DetailSubject {
    key: React.Key;
    stt: number;
    id: string;
    name: string;
    type: string;
    hk1: number;
    hk2: number;
}

// const data = [
//     {
//         key: '1',
//         stt: '1',
//         id: 'D43',
//         name: 'Toán học',
//         type: 'Môn bắc buộc',
//         hk1: '4',
//         hk2: '4',
//     },
//     {
//         key: '1',
//         stt: '1',
//         id: 'D43',
//         name: 'Toán học',
//         type: 'Môn bắc buộc',
//         hk1: '4',
//         hk2: '4',
//     },
//     {
//         key: '1',
//         stt: '1',
//         id: 'D43',
//         name: 'Toán học',
//         type: 'Môn bắc buộc',
//         hk1: '4',
//         hk2: '4',
//     },
//     {
//         key: '1',
//         stt: '1',
//         id: 'D43',
//         name: 'Toán học',
//         type: 'Môn bắc buộc',
//         hk1: '4',
//         hk2: '4',
//     },
//     {
//         key: '1',
//         stt: '1',
//         id: 'D43',
//         name: 'Toán học',
//         type: 'Môn bắc buộc',
//         hk1: '4',
//         hk2: '4',
//     },
//     {
//         key: '1',
//         stt: '1',
//         id: 'D43',
//         name: 'Toán học',
//         type: 'Môn bắc buộc',
//         hk1: '4',
//         hk2: '4',
//     },
//     {
//         key: '1',
//         stt: '1',
//         id: 'D43',
//         name: 'Toán học',
//         type: 'Môn bắc buộc',
//         hk1: '4',
//         hk2: '4',
//     },
// ]; // rowSelection object indicates the need for row selection



export default function DetailSubject() {
    // delete
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    }
    // edit
    const [importModalVisible, setImportModalVisible] = useState(false);
    const showImportModal = () => {
        setImportModalVisible(true);
    };
    const handleImportOk = () => {
        setImportModalVisible(false);
    };
    const handleImportCancel = () => {
        setImportModalVisible(false);
    }

    return (
        <>
            <div className="section-6-4">
                <div className="section-6-4__breadcrumb">
                    <Row>
                        <Col span={24}>
                            <div className="breadcrumb-title">
                                <div><span>Khai báo dữ liệu</span></div>
                                <i className='bx bx-chevron-right'></i>
                                <div><span>Lớp học</span></div>
                                <i className='bx bx-chevron-right'></i>
                                <div className="breadcrumb-title-active">Chi tiết lớp học</div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="section-6-4__information">
                    <Row>
                        <Col span={12}>
                            <div className="information-title">Thông tin học viên</div>
                        </Col>
                        <Col className="information-button" span={12}>
                            <button className="information-button-btn" onClick={showModal}>
                                <img src={IconTrash} alt="" />
                            </button>
                            <Modal className="box__btn-del" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <h1>Xóa</h1>
                                <p>Xác nhận muốn xóa những thông tin đã chọn? Sau khi xóa sẽ không thể hoàn tác.</p>
                                <button className="box__btn-del-cancel" onClick={handleCancel}>Hủy</button>
                                <button className="box__btn-del-acp" onClick={handleOk}>Lưu</button>
                            </Modal>

                            <button className="information-button-btn" onClick={showImportModal}>
                                <img src={IconEdit} alt="" />
                            </button>
                            <Modal className="section-6-3-input" visible={importModalVisible} onOk={handleImportOk} onCancel={handleImportCancel}>
                                <h1>Thiết lập lớp học</h1>
                                <Form>
                                    <p>Thông tin chung</p>
                                    <div className="box__btn-import-school">
                                        <div className="box__btn-import-block1">
                                            <p className="box__btn-import-school-txt1">Niên khóa:</p>
                                            <Select className="box__btn-import_year" defaultValue="0">
                                                <Select value="0">2020 - 2021</Select>
                                                <Select value="1">2019 - 2020</Select>
                                                <Select value="2">2018 - 2019</Select>
                                                <Select value="3">2017 - 2018</Select>
                                            </Select>
                                        </div>
                                        <div className="box__btn-import-block2">
                                            <p className="box__btn-import-school-txt2">Khoa - khối:</p>
                                            <Select className="box__btn-import_blck" defaultValue="0">
                                                <Select value="0">Khối 6</Select>
                                                <Select value="1">Khối 7</Select>
                                                <Select value="2">Khối 8</Select>
                                            </Select>
                                        </div>
                                    </div>
                                    <Form.Item label="Tên lớp:">
                                        <Input value="6A1" readOnly />
                                    </Form.Item>
                                    <Form.Item label="Số lượng học viên:">
                                        <Input className="ant-input-sbj" value="45" readOnly />
                                    </Form.Item>
                                    <Form.Item label="Phân loại lớp:">
                                        <Select className="ant-select-opt" defaultValue="0">
                                            <Select.Option value="0">Lớp căn bản</Select.Option>
                                            <Select.Option value="1">Lớp nâng cao</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label="Giáo viên chủ nhiệm:">
                                        <Select className="ant-select-opt" defaultValue="0">
                                            <Select.Option value="0">Trần Thị B</Select.Option>
                                            <Select.Option value="1">Trần Thị B</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label="Mô tả:">
                                        <Input.TextArea value="Loremmmmmmmmmmmmmmmmmmmm" readOnly />
                                    </Form.Item>
                                    <hr />
                                    <p>Danh sách môn học</p>
                                    <div className="box__btn-import-list">
                                        <Checkbox></Checkbox>
                                        <p className="box__btn-import-list-txt">Kế thừa dữ liệu:</p>
                                        <div className="box__btn-import-list-slct">
                                            <Select className="box__btn-import-list-select" placeholder="Niên khóa">
                                                <Select value="0">2020 - 2021</Select>
                                                <Select value="1">2019 - 2020</Select>
                                            </Select>
                                        </div>
                                    </div>
                                    <button className="box__btn-import-icon-plus">
                                        <img src={IconPlusPrimary} alt="plus_primary" />
                                        <span>Thêm học kì mới</span>
                                    </button>
                                </Form>
                                <div className="box__btn-button-import">
                                    <button className="box__btn-button-cancel" onClick={handleImportCancel}>Hủy</button>
                                    <button className="box__btn-button-save" onClick={handleImportCancel}>Lưu</button>
                                </div>
                            </Modal>
                        </Col>
                    </Row>
                    <div className="information-box">
                        <Row>
                            <Col span={12}>
                                <Row>
                                    <Col span={12}>
                                        <Row>
                                            <Col className="information-box-title-left">Niên khóa:</Col>
                                            <Col className="information-box-content">2020-2021</Col>
                                        </Row>
                                        <Row>
                                            <Col className="information-box-title-left">Khoa - Khối:</Col>
                                            <Col className="information-box-content">Khối 6</Col>
                                        </Row>
                                        <Row>
                                            <Col className="information-box-title-left">Mã lớp học:</Col>
                                            <Col className="information-box-content">2020-6A1</Col>
                                        </Row>
                                        <Row>
                                            <Col className="information-box-title-left">Tên lớp học:</Col>
                                            <Col className="information-box-content">6A1</Col>
                                        </Row>
                                    </Col>
                                    <Col span={12}>
                                        <Row>
                                            <Col className="information-box-title-center">Giáo viên chủ nhiệm:</Col>
                                            <Col className="information-box-content">Phạm Thị B</Col>
                                        </Row>
                                        <Row>
                                            <Col className="information-box-title-center">Số lượng học viên:</Col>
                                            <Col className="information-box-content">45 học viên</Col>
                                        </Row>
                                        <Row>
                                            <Col className="information-box-title-center">Loại lớp học:</Col>
                                            <Col className="information-box-content">Lớp học căn bản</Col>
                                        </Row>
                                        <Row>
                                            <Col className="information-box-title-center">Số lượng môn học:</Col>
                                            <Col className="information-box-content">10 môn học</Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row>
                                    <Col span={8} className="information-box-title-right" >Mô tả:</Col>
                                    <Col span={10} className="information-box-content">Copy
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus quam vel aliquam lacinia.</Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className="section-6-4__student-list">
                    <Row className="student-list">
                        <Col className="student-list-tab" span={24}>
                            <div className="student-list-tab-box">
                                <div className="student-list-tab-box-list">
                                    <a href="">Danh sách học viên</a>
                                </div>
                                <div className="student-list-tab-box-subject">
                                    <a href="">Danh sách môn học</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="table-list">
                        <Table
                            columns={columns}
                            dataSource={data}
                            pagination={false}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
