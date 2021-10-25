import { Breadcrumb, Row, Col, Space, Table, Button, Modal, Form, Select, DatePicker, Upload, Input, } from 'antd';
import React, { Fragment, useState } from 'react';
import "./Accept_Transfer_School.css"
import { EyeOutlined, PlusOutlined } from '@ant-design/icons';
import SelectsYear from '../Categories/SelectsYear';
import BtnAddSection10 from '../Categories/ButtonAdd';
import PaginationText from '../Categories/PaginationText';
import PaginationNumber from '../Categories/PaginationsNumber';
import dataTransferSchool from '../../../data/dataTranferSchool.json'
import { IconUpload } from '../../../assets/svg';
import Searchs from '../Categories/Searchs';
const { Option } = Select;
const { TextArea } = Input;



const data: TransferSchool[] = dataTransferSchool;

interface TransferSchool {
    id: string,
    name: string,
    date: string,
    sex: string,
    transfer: string,
    semester: string,
    block: string,
    dateTransfer: string, 
    icon: string,

}
const TransferSchool = (): JSX.Element => {
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
    const [importModalNext, setImportModalNext] = useState(false);
    const showImportModalNext = () => {
        setImportModalNext(true);
    };
    const handleImportOkx = () => {
        setImportModalNext(false);
    };
    const handleImportCancels = () => {
        setImportModalNext(false);
    };
    return (
        <>
            <Fragment>
                <div className="transfer_school_header">
                    <div className="transfer_school_header_breadcrumb_container">
                        <Breadcrumb separator=">" className="transfer_school_header_breadcrumb">
                            <Breadcrumb.Item>Hồ sơ học viên</Breadcrumb.Item>
                            <Breadcrumb.Item className="transfer_school_header_breadcrumb_transfer_school">Tiếp chận chuyển trường</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="transfer_school_header_select_btn_container">
                        <Row>
                            <Col span={12} className="transfer_school_header_select">
                                <div className="select-year-transfer-school">
                                    <SelectsYear />
                                </div>
                            </Col>
                            <Col span={12} className="transfer_school_header_button_add">
                                <div className="button-add-transfer-school">
                                    <Button type="primary" shape="round" icon={<PlusOutlined />} onClick={showImportModal} >
                                        Thêm mới
                                    </Button>
                                </div>
                                <div className="bg-modal-update-transfer-school">
                                    <Modal className="bg-modal-update-transfer-school-modal-content"
                                        visible={importModalVisible}
                                        onOk={handleImportOk}
                                        onCancel={handleImportCancel}>
                                        <Form labelCol={{ span: 7, }} wrapperCol={{ span: 10, }} layout="horizontal" >
                                            <h2 className="bg-modal-update-transfer-school-style-name-update-transfer-school">Tiếp nhận chuyển trường</h2>
                                            <Form.Item label="Tên học viên" className="bg-modal-update-transfer-school-style-label">
                                                <Input placeholder="Sample text" />
                                            </Form.Item>
                                            <Form.Item label="Mã học viên" className="bg-modal-update-transfer-school-style-label">
                                                <Input placeholder="Sample text" />
                                            </Form.Item>
                                            <Form.Item label="Ngày chuyển đến" className="bg-modal-update-transfer-school-date">
                                                <DatePicker className="bg-modal-update-bonus-style-date-picker" />
                                            </Form.Item>
                                            <Form.Item label="Học kì chuyển đến" >
                                                <div className="txtsemester">Học kì I</div>
                                            </Form.Item>
                                            <Form.Item label="Tỉnh/Thành" className="bg-modal-update-transfer-school-select-conscious">
                                                <select placeholder="Lựa Chọn">
                                                    <option value="Cantho">Cần Thơ</option>
                                                    <option value="Danang">Đà Nẵng</option>
                                                    <option value="Camau">Cà Mau</option>
                                                </select>
                                            </Form.Item>
                                            <Form.Item label="Quận/Huyện" className="bg-modal-update-transfer-school-select-district">
                                                <select placeholder="Lựa Chọn">
                                                    <option value="district1">Quận 1</option>
                                                    <option value="district2">Quận 2</option>
                                                    <option value="district3">Quận 3</option>
                                                </select>
                                            </Form.Item>
                                            <Form.Item label="Chuyển từ" className="bg-modal-update-transfer-school-style-label">
                                                <Input placeholder="Sample text" />
                                            </Form.Item>

                                            <Form.Item label="Lý do" className="bg-modal-update-transfer-school-style-reason2">
                                                <TextArea rows={3} className="bg-modal-update-transfer-school-style-reason" placeholder="Lorem ipsum dolor sit amet..." />
                                            </Form.Item>

                                            <Form.Item label="Tệp đính kèm" className="">
                                                {/* <Upload>
                                                    <Button className="bg-modal-update-transfer-school-modal-content-btn-update" >Chọn tệp tải lên...</Button>
                                                </Upload>, */}
                                                <div className="transfer-school-upload-group">
                                                    <button className="transfer-school-btn-link-upload">
                                                        <img src={IconUpload} alt="" />
                                                    </button>
                                                    <button className="transfer-school-btn-upload">Chọn tệp tải lên...</button>
                                                </div>
                                            </Form.Item>

                                            <Button className="bg-modal-update-transfer-school-modal-content-btn-cancel" onClick={handleImportCancel}>Hủy</Button>
                                            <Button className="bg-modal-update-transfer-school-modal-content-btn-next" onClick={showImportModalNext}>Tiếp Theo</Button>

                                            <Modal
                                                className="bg-modal-update-transfer-school-modal-content-next"
                                                visible={importModalNext}
                                                onOk={handleImportOkx}
                                                onCancel={handleImportCancels}>
                                                <h2 className="bg-modal-update-transfer-school-style-name-new-contact">Thêm người liên hệ</h2>
                                                <Form.Item label="Họ và tên" className="bg-modal-update-transfer-school-style-label">
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item label="Địa chỉ" className="bg-modal-update-transfer-school-style-label">
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item label="Số điện thoại" className="bg-modal-update-transfer-school-style-label">
                                                    <Input />
                                                </Form.Item>
                                                <Button className="bg-modal-update-transfer-school-modal-content-btn-cancel-next" onClick={handleImportCancels}>Hủy</Button>
                                                <Button className="bg-modal-update-transfer-school-modal-content-btn-save">Save</Button>
                                            </Modal>
                                        </Form>

                                    </Modal>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/* MODEL */}
                    <div className="transfer_school_body_group">
                        <div className="transfer_school_body_group_header">
                            <Row>
                                <Col span={12} className="transfer_school_body_group_header_left">
                                    <p className="transfer_school_body_group_header_left_name">
                                        Danh sách chuyển trường
                                    </p>
                                </Col>
                                <Col span={12} className="transfer_school_body_group_header_right">
                                    <div className="transfer_school_body_group_header_search">
                                        <Searchs />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="transfer_school_body_group_table">
                            <div className="transfer_school_body_group_table_table">
                                <Table dataSource={data} columns={columns} pagination={false} />
                            </div>
                        </div>
                        <div className="transfer_school_footer_group">
                            <Row>
                                <Col span={12} className="transfer_school_footer_group_pagination_left">
                                    <div className="transfer_school_footer_group_pagination_txt">
                                        <PaginationText />
                                    </div>
                                </Col>
                                <Col span={12} className="transfer_school_footer_group_pagination_right">
                                    <div className="transfer_school_footer_group_pagination_numb">
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
export default TransferSchool;
