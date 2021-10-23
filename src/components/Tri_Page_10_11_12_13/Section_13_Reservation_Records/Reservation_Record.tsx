import React, { Fragment, useState } from 'react';
import "./Reservation_Record.css"
import { Breadcrumb, Row, Col, Table, Space, Button, Modal, Form, Upload, Input, Select, DatePicker } from 'antd';
import SelectsYear from '../Categories/SelectsYear';
import BtnAdd from '../Categories/ButtonAdd';
import Searchs from '../Categories/Searchs';
import PaginationText from '../Categories/PaginationText';
import PaginationNumber from '../Categories/PaginationsNumber';
import { EyeOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import Search from 'antd/lib/input/Search';
import Slider from '@ant-design/react-slick';
import { IconUpload } from '../../../assets/svg';
const { Option } = Select;
const { TextArea } = Input;

const dataReservationRecords =  [

    {
        id: '20206A',
        name: 'Trần Trung',
        date: '10/10/2002',
        sex: 'Nam',
        transfer: "THCS A",
        semester: 'Học kì I',
        block: 6,
        dateTransfer: '12/12/2020',
        icon: '',
    },
    {
        id: '20206A',
        name: 'Nguyễn Ngọc Tuyết',
        date: '10/10/2002',
        sex: 'Nam',
        transfer: "THCS A",
        semester: 'Học kì I',
        block: 6,
        dateTransfer: '12/12/2020',
        icon: '',
    },
    {
        id: '20206A',
        name: 'Hoàng Việt Cường',
        date: '10/10/2002',
        sex: 'Nữ',
        transfer: "THCS A",
        semester: 'Học kì I',
        block: 6,
        dateTransfer: '12/12/2020',
        icon: '',
    },
    {
        id: '20206A',
        name: 'Trần Thanh Tâm',
        date: '10/10/2002',
        sex: 'Nữ',
        transfer: "THCS A",
        semester: 'Học kì I',
        block: 6,
        dateTransfer: '12/12/2020',
        icon: '',
    },
    {
        id: '20206A',
        name: 'Tôn Thương Nguyệt',
        date: '10/10/2002',
        sex: 'Nữ',
        transfer: "THCS A",
        semester: 'Học kì I',
        block: 6,
        dateTransfer: '12/12/2020',
        icon: '',
    },
    {
        id: '20206A',
        name: 'Nguyễn Nhựt Chiều',
        date: '10/10/2002',
        sex: 'Nam',
        transfer: "THCS A",
        semester: 'Học kì I',
        block: 6,
        dateTransfer: '12/12/2020',
        icon: '',
    },
    {
        id: '20206A',
        name: 'Nguyễn Ngọc Diệu',
        date: '10/10/2002',
        sex: 'Nữ',
        transfer: "THCS A",
        semester: 'Học kì I',
        block: 6,
        dateTransfer: '12/12/2020',
        icon: '',
    },
    {
        id: '20206A',
        name: 'Uống Minh Minh',
        date: '10/10/2002',
        sex: 'Nam',
        transfer: "THCS A",
        semester: 'Học kì I',
        block: 6,
        dateTransfer: '12/12/2020',
        icon: '',
    },
    {
        id: '20206A',
        name: 'Ngọc Thanh Thanh',
        date: '10/10/2002',
        sex: 'Nữ',
        transfer: "THCS A",
        semester: 'Học kì I',
        block: 6,
        dateTransfer: '12/12/2020',
        icon: '',
    },
];

const columns = [
    {
        title: 'Mã học viên',
        dataIndex: 'id',
    },
    {
        title: 'Tên học viên',
        dataIndex: 'name',
    },
    {
        title: 'Ngày sinh',
        dataIndex: 'date',
    },
    {
        title: 'Giới tính',
        dataIndex: 'sex',
    },
    {
        title: 'Chuyển từ',
        dataIndex: 'transfer',
    },
    {
        title: 'Học kì chuyển',
        dataIndex: 'semester',
    },
    {
        title: 'Khối',
        dataIndex: 'block',
    },
    {
        title: 'Ngày chuyển',
        dataIndex: 'dateTransfer',
    },
    {
        title: '',
        dataIndex: 'icon',
        render: () => (
            <Space>
                <EyeOutlined style={{ width: '2.668rem', height: '2.133', color: '#FF7506' }} />
            </Space>
        ),
    },
];
const ReservationRecords = (): JSX.Element => {
    const [importModalVisible, setImportModalVisible] = useState(false);
    const showImportModal = () => {
        setImportModalVisible(true);
    };
    const handleImportOk = () => {
        setImportModalVisible(false);
    };
    const handleImportCancel = () => {
        setImportModalVisible(false);
    };
    const onSearch = value => console.log(value);
    return (
        <>
            <Fragment>
                <div className="reservation-records-header">
                    <div className="reservation-records-header-breadcrumb-container">
                        <Breadcrumb separator=">" className="reservation-records-header-breadcrumb">
                            <Breadcrumb.Item>Hồ sơ học viên</Breadcrumb.Item>
                            <Breadcrumb.Item className="reservation-records-header-breadcrumb-reservation">Hồ sơ bảo lưu</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="reservation-records-header-select-btn-container">
                        <Row>
                            <Col span={12} className="reservation-records-header-select">
                                <div className="select-year-reservation-records">
                                    <SelectsYear />
                                </div>
                            </Col>
                            <Col span={12} className="reservation-records-header-button-add">
                                <div className="button-add-reservation-records">
                                    <Button type="primary" shape="round" icon={<PlusOutlined />} onClick={showImportModal} >
                                        Thêm mới
                                    </Button>
                                </div>
                                <div className="bg-modal-update-reservation-records">
                                    <Modal className="bg-modal-update-reservation-records-modal-content"
                                        visible={importModalVisible}
                                        onOk={handleImportOk}
                                        onCancel={handleImportCancel}>
                                        <Form labelCol={{ span: 7, }} wrapperCol={{ span: 10, }} layout="horizontal">
                                            <h2 className="bg-modal-update-reservation-records-style-name">Cập nhật bảo lưu</h2>
                                            <Form.Item label="Lớp hiện tại" className="bg-modal-update-reservation-records-style-select-class">
                                                <div className="bg-modal-update-reservation-records-style-select-class">
                                                    <select placeholder="Lựa Chọn">
                                                        <option value="class10a1">Lớp 10A1</option>
                                                        <option value="class10a2">Lớp 10A2</option>
                                                        <option value="class10a3">Lớp 10A3</option>
                                                    </select>
                                                </div>
                                            </Form.Item>
                                            <Form.Item label="Tên học viên">
                                                <div className="bg-modal-update-reservation-records-style-search">
                                                    <Input addonAfter={<SearchOutlined />} placeholder="Sample text" />
                                                </div>
                                            </Form.Item>
                                            <Form.Item label="Ngày bảo lưu" className="bg-modal-update-reservation-records-style-label">
                                                <DatePicker className="bg-modal-update-reservation-records-style-date-picker" />
                                                <Button className="bg-modal-update-reservation-records-style-btn-semester">Học Kì I</Button>
                                            </Form.Item>
                                            <Form.Item label="Lý do bảo lưu" className="bg-modal-update-reservation-records-style-label">
                                                <div className="bg-modal-update-reservation-records-style-input">
                                                    <TextArea rows={5} className="bg-modal-update-reservation-records-style-input" placeholder="Lorem ipsum dolor sit amet..." />
                                                </div>
                                                <div className="noteTextArea">Kết quả học tập của viên sẽ được bảo lưu trong hồ sơ học viên.</div>
                                            </Form.Item>
                                            <Form.Item label="Tệp đính kèm" className="bg-modal-update-reservation-records-style-label">
                                                {/* <Upload>
                                                    <Button className="bg-modal-update-reservation-records-modal-content-btn-update" >Chọn tệp tải lên...</Button>
                                                    <div className="noteUpload">Kích thước tệp không vượt quá 250MB.</div>
                                                </Upload> */}
                                               <div className="reservation-records-upload-container">
                                               <div className="reservation-records-upload-group">
                                                <button className="reservation-records-btn-link-upload">
                                                    <img src={IconUpload} alt="" />
                                                </button>
                                                <button className="reservation-records-btn-upload">Chọn tệp tải lên...</button>
                                                </div>
                                                <div className="noteUpload">Kích thước tệp không vượt quá 250MB.</div>
                                               </div>
                                            </Form.Item>

                                            <Button className="bg-modal-update-reservation-records-modal-content-btn-cancel" onClick={handleImportCancel}>Hủy</Button>
                                            <Button className="bg-modal-update-reservation-records-modal-content-btn-save">Lưu</Button>
                                        </Form>

                                    </Modal>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="reservation-records-body-group">
                        <div className="reservation-records-body-group-header">
                            <Row>
                                <Col span={12} className="reservation-records-body-group-header-left">
                                    <p className="reservation-records-body-group-header-left-name">
                                        Danh sách bảo lưu
                                    </p>
                                </Col>
                                <Col span={12} className="reservation-records-body-group-header-right">
                                    <div className="reservation-records-body-group-header-search">
                                        <Searchs />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="reservation-records-body-group-table">
                            <div className="reservation-records-body-group-table-table">
                                <Table dataSource={dataReservationRecords} columns={columns} pagination={false} />
                            </div>
                        </div>
                        <div className="reservation-records-footer-group">
                            <Row>
                                <Col span={12} className="reservation-records-footer-group-pagination-left">
                                    <div className="reservation-records-footer-group-pagination-txt">
                                        <PaginationText />
                                    </div>
                                </Col>
                                <Col span={12} className="reservation-records-footer-group-pagination-right">
                                    <div className="reservation-records-footer-group-pagination-numb">
                                        <PaginationNumber />
                                    </div>
                                </Col>

                            </Row>

                        </div>
                    </div>

                </div>
            </Fragment>
        </>
    )

}
export default ReservationRecords;
