import React, { useState, Fragment } from 'react';
import './DetailStudent.css'
import { Row, Col, Table, Tag, Modal, Form, Select, Input, Checkbox } from 'antd';
import {
    IconEdit,
    IconTrash,
    IconPlusPrimary,
} from "../../../assets/svg/index";

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
    },
    {
        title: 'Mã học viên',
        dataIndex: 'id',
    },
    {
        title: 'Tên học viên',
        dataIndex: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Niên khóa',
        dataIndex: 'year',
    },
    {
        title: 'Ngày nhập học',
        dataIndex: 'date',
    },
    {
        title: 'Tình trạng',
        dataIndex: 'status',
        render: (tag: string) => {
            const color = tag.includes('Đang theo học') ? "green" : tag.includes('Đã chuyển lớp') ? "orange" : tag.includes('Đã chuyển trường') ? "default" : tag.includes('Đã thôi học') ? "red" : "blue"
            return <Tag color={color} key={tag}>{tag}</Tag>
            // return <Tag color={color} key={tag}><img src={ellipseIcon} alt="" /> {tag}</Tag>
        }
    },
    {
        title: '',
        render: () => (
            <Fragment>
                <button className="btnEdit" >
                    <img src={IconEdit} alt="IconEdit" />
                </button>
            </Fragment>
        ),
    },
];

const data = [
    {
        key: '1',
        stt: '1',
        id: '2020-6A',
        name: 'Nguyễn Văn A',
        year: '2020-2021',
        date: '05/09/2020',
        status: 'Đang theo học',
    },
    {
        key: '1',
        stt: '1',
        id: '2020-6A',
        name: 'Nguyễn Văn A',
        year: '2020-2021',
        date: '05/09/2020',
        status: 'Đã chuyển lớp',
    },
    {
        key: '1',
        stt: '1',
        id: '2020-6A',
        name: 'Nguyễn Văn A',
        year: '2020-2021',
        date: '05/09/2020',
        status: 'Đã chuyển trường',
    },
    {
        key: '1',
        stt: '1',
        id: '2020-6A',
        name: 'Nguyễn Văn A',
        year: '2020-2021',
        date: '05/09/2020',
        status: 'Đã thôi học',
    },
    {
        key: '1',
        stt: '1',
        id: '2020-6A',
        name: 'Nguyễn Văn A',
        year: '2020-2021',
        date: '05/09/2020',
        status: 'Đang tốt nghiệp',
    },
    {
        key: '1',
        stt: '1',
        id: '2020-6A',
        name: 'Nguyễn Văn A',
        year: '2020-2021',
        date: '05/09/2020',
        status: 'Đang theo học',
    },
    {
        key: '1',
        stt: '1',
        id: '2020-6A',
        name: 'Nguyễn Văn A',
        year: '2020-2021',
        date: '05/09/2020',
        status: 'Đang theo học',
    },
];

export default function DetailStudent() {
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
            <div className="section-6-3">
                <div className="section-6-3__breadcrumb">
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

                <div className="section-6-3__information">
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
                                <h1>Thêm lớp học mới</h1>
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

                <div className="section-6-3__student-list">
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