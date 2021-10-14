import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import './PointType.css'
import { Link } from 'react-router-dom';
import { Select, Table, Modal, Form, Input, Pagination, InputNumber, Menu, Dropdown, Checkbox, Col, Row } from 'antd';
import {
    IconPlus,
    IconEdit,
    IconTrash,
} from "../../assets/svg/index";

const { Option } = Select;

const PointType = (): JSX.Element => {
    const columns = [
        {
            title: 'Loại điểm',
            dataIndex: 'type',
        },
        {
            title: 'Hệ số',
            dataIndex: 'number',
        },
        {
            title: 'Cột điểm tối thiểu',
            children: [
                {
                    title: 'Học kì 1',
                    dataIndex: 'hk1',
                },
                {
                    title: 'Học kì 2',
                    dataIndex: 'hk2',
                },
            ]
        },
        {
            title: '',
            render: () => (
                <Fragment>
                    <button className="btnEdit" >
                        <img src={IconEdit} alt="IconEdit" onClick={showEditModal} />
                    </button>
                    <button className="btnTrash" >
                        <img src={IconTrash} alt="IconTrash" onClick={showDelModal} />
                    </button>
                </Fragment>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            type: 'Kiểm tra miệng',
            number: '1',
            hk1: '3',
            hk2: '3',
        },
        {
            key: '1',
            type: 'Kiểm tra miệng',
            number: '1',
            hk1: '3',
            hk2: '3',
        },
        {
            key: '1',
            type: 'Kiểm tra miệng',
            number: '1',
            hk1: '3',
            hk2: '3',
        },
        {
            key: '1',
            type: 'Kiểm tra miệng',
            number: '1',
            hk1: '3',
            hk2: '3',
        },
        {
            key: '1',
            type: 'Kiểm tra miệng',
            number: '1',
            hk1: '3',
            hk2: '3',
        },
        {
            key: '1',
            type: 'Kiểm tra miệng',
            number: '1',
            hk1: '3',
            hk2: '3',
        },
        {
            key: '1',
            type: 'Kiểm tra miệng',
            number: '1',
            hk1: '3',
            hk2: '3',
        },
    ];



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
    // edit
    const [editModalVisible, setEditModalVisible] = useState(false);
    const showEditModal = () => {
        setEditModalVisible(true);
    };
    const handleEditOk = () => {
        setEditModalVisible(false);
    };
    const handleEditCancel = () => {
        setEditModalVisible(false);
    }
    // delete
    const [delModalVisible, setDelModalVisible] = useState(false);
    const showDelModal = () => {
        setDelModalVisible(true);
    };
    const handleDelOk = () => {
        setDelModalVisible(false);
    };
    const handleDelCancel = () => {
        setDelModalVisible(false);
    }

    return (
        <Fragment>
            <div className="section-7">
                <div className="box__title">
                    <h1>Khai báo dữ liệu</h1>
                </div>
                <div className="box__chb">
                    <div className="box__chb-slt">
                        <p>Đang chọn xem:</p>
                        <div className="box__chb-slt_sch">
                            <p>Trường:</p>
                            <Select className="box__chb-slt_sch_select" defaultValue="THCS">
                                <Option value="THCS">THCS</Option>
                                <Option value="THPT">THPT</Option>
                            </Select>
                        </div>
                        <div className="box__chb-slt_yr">
                            <p>Niên Khóa:</p>
                            <Select className="box__chb-slt_yr_select" defaultValue="2020 - 2021">
                                <Option value="2020 - 2021">2020 - 2021</Option>
                                <Option value="2015 - 2016">2015 - 2016</Option>
                                <Option value="2018 - 2019">2018 - 2019</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="box__chb-btn">
                        <button className="box__chb-btn-clk">Niên Khóa</button>
                        <button className="box__chb-btn-clk">Tổ - Bộ môn</button>
                        <button className="box__chb-btn-clk">Khoa - Khối</button>
                        <button className="box__chb-btn-clk"><Link to="/page5">Môn học</Link></button>
                        <button className="box__chb-btn-clk"><Link to="/page6">Lớp học</Link></button>
                        <button className="box__chb-btn-clk"><Link to="/page7">Loại điểm</Link></button>
                    </div>
                </div>
                <div className="box__btn">
                    <div className="box__btn-button">
                        <Row>
                            <Col span={24}>
                                <button className="box__btn-button_cre" onClick={showImportModal}>
                                    <img className="box__btn-button_cre-icon" src={IconPlus} alt="" />
                                    Thêm mới
                                </button>
                                <Modal className="section-7-create" visible={importModalVisible} onOk={handleImportOk} onCancel={handleImportCancel}>
                                    <h1>Thêm loại điểm mới</h1>
                                    <Form>
                                        <Row>
                                            <Col span={17}>
                                                <Form.Item className="create-point" label="Tên loại điểm:">
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={7}>
                                                <Form.Item label="Hệ số:">
                                                    <Select className="create-cofficient" placeholder="Hệ số điểm">
                                                        <Select.Option value="0">0</Select.Option>
                                                        <Select.Option value="1">1</Select.Option>
                                                        <Select.Option value="2">2</Select.Option>
                                                        <Select.Option value="3">3</Select.Option>
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <hr />
                                        <p>Số cột điểm mới</p>
                                        <Row>
                                            <Col span={12}>
                                                <Form.Item className="create-hk" label="Học kì I:">
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item className="create-hk" label="Học kì II:">
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Form>
                                    <div className="box__btn-button-import">
                                        <button className="box__btn-button-cancel" onClick={handleImportCancel}>Hủy</button>
                                        <button className="box__btn-button-save" onClick={handleImportCancel}>Lưu</button>
                                    </div>
                                </Modal>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="box__sbj">
                    <div className="box__sbj-stu">
                        <p>Loại điểm</p>
                        {/* <img className="box__sbj-search__icon" src={searchIcon} alt="" /> */}
                        <input className="box__sbj-search__input" type="search" placeholder="Tìm kiếm" />
                    </div>
                    <div className="table-type">
                        <Table
                            columns={columns}
                            dataSource={data}
                            pagination={false}
                        />
                        <Modal className="section-7-create" visible={editModalVisible} onOk={handleEditOk} onCancel={handleEditCancel}>
                            <h1>Chỉnh sửa loại điểm</h1>
                            <Form>
                                <Row>
                                    <Col span={17}>
                                        <Form.Item className="create-point" label="Tên loại điểm:">
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={7}>
                                        <Form.Item label="Hệ số:">
                                            <Select className="create-cofficient" placeholder="Hệ số điểm">
                                                <Select.Option value="0">0</Select.Option>
                                                <Select.Option value="1">1</Select.Option>
                                                <Select.Option value="2">2</Select.Option>
                                                <Select.Option value="3">3</Select.Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <hr />
                                <p>Số cột điểm mới</p>
                                <Row>
                                    <Col span={12}>
                                        <Form.Item className="create-hk" label="Học kì I:">
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item className="create-hk" label="Học kì II:">
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                            <div className="box__btn-button-import">
                                <button className="box__btn-button-cancel" onClick={handleImportCancel}>Hủy</button>
                                <button className="box__btn-button-save" onClick={handleImportCancel}>Lưu</button>
                            </div>
                        </Modal>
                        <Modal className="box__btn-del" visible={delModalVisible} onOk={handleDelOk} onCancel={handleDelCancel}>
                            <h1>Xóa</h1>
                            <p>Xác nhận muốn xóa những thông tin đã chọn? Sau khi xóa sẽ không thể hoàn tác.</p>
                            <button className="box__btn-del-cancel" onClick={handleDelCancel}>Hủy</button>
                            <button className="box__btn-del-acp" onClick={handleDelCancel}>Lưu</button>
                        </Modal>
                    </div>
                    <div className="box__sbj-pagtion">
                        <div className="box__sbj-pagtion-txt">
                            <p>Hiển thị</p>
                            <InputNumber min={1} max={10} defaultValue={3} />
                            <p> hàng trong mỗi trang</p>
                        </div>
                    </div>
                    <div className="box__sbj-pagin">
                        <Pagination
                            showSizeChanger
                            defaultCurrent={8}
                            total={100}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default PointType;