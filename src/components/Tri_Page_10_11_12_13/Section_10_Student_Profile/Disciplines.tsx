import React, { useState } from 'react';
import "./Disciplines.css"
import {
    Row,
    Col,
    Space,
    Input,
    Button,
    Upload,
    Modal,
    Form,
    DatePicker,
    InputNumber,
    Pagination,
    Table,
    Tabs
} from 'antd';
import { IconUpload } from '../../../assets/svg';
import { PlusOutlined, EyeOutlined } from '@ant-design/icons';
import Searchs from '../Categories/Searchs';
const { TextArea } = Input;

const dataBonus = [
    {
        id: '20206A',
        name: 'Trần Trung',
        date: '10/10/2002',
        sex: 'Nam',
        bonus: 2,
        icon: '',
    },
    {
        id: '20206A',
        name: 'Nguyễn Ngọc Tuyết',
        date: '10/10/2002',
        sex: 'Nam',
        bonus: 2,
        icon: '',
    },
    {
        id: '20206A',
        name: 'Hoàng Việt Cường',
        date: '10/10/2002',
        sex: 'Nữ',
        bonus: 2,
        icon: '',
    },
    {
        id: '20206A',
        name: 'Trần Thanh Tâm',
        date: '10/10/2002',
        sex: 'Nữ',
        bonus: 2,
        icon: '',
    },
    {
        id: '20206A',
        name: 'Tôn Thương Nguyệt',
        date: '10/10/2002',
        sex: 'Nữ',
        bonus: 2,
        icon: '',
    },
    {
        id: '20206A',
        name: 'Nguyễn Nhựt Chiều',
        date: '10/10/2002',
        sex: 'Nam',
        bonus: 2,
        icon: '',
    },
    {
        id: '20206A',
        name: 'Nguyễn Ngọc Diệu',
        date: '10/10/2002',
        sex: 'Nữ',
        bonus: 2,
        icon: '',
    },
    {
        id: '20206A',
        name: 'Uống Minh Minh',
        date: '10/10/2002',
        sex: 'Nam',
        bonus: 2,
        icon: '',
    },
    {
        id: '20206A',
        name: 'Ngọc Thanh Thanh',
        date: '10/10/2002',
        sex: 'Nữ',
        bonus: 2,
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
        title: 'Số lần khen thưởng',
        dataIndex: 'bonus',
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


// CLICK BUTTON MODAL UPDATE

// css ant

function Disciplines() {
    const [visible, setVisible] = useState(false);

    return (
        <>

            <div className="disciplines-headers-btn-group-add">
                <Button type="primary" shape="round" icon={<PlusOutlined />} onClick={() => setVisible(true)}>
                    Thêm mới
                </Button>
            </div>
            <div className="bg-modal-update-disciplines">
                <Modal className="bg-modal-update-disciplines-modal-content"
                    centered
                    visible={visible}
                    onOk={() => setVisible(false)}
                    onCancel={() => setVisible(false)} >
                    <Form>
                        <h2 className="bg-modal-update-disciplines-style-name-update-disciplines">Cập nhật Kỉ Luật</h2>
                        <Form.Item label="Học Viên" className="bg-modal-update-disciplines-style-label">
                            <p className="bg-modal-update-bonus-style-txt-name">Nguyễn Ngọc Tuyết</p>
                        </Form.Item>
                        <Form.Item label="Lớp hiện tại" className="bg-modal-update-disciplines-style-label">
                            <p className="bg-modal-update-disciplines-style-txt-class">10A</p>
                        </Form.Item>
                        <Form.Item label="Ngày Khen Thưởng" className="bg-modal-update-disciplines-style-label">
                            <DatePicker className="bg-modal-update-disciplines-style-date-picker" />
                            <Button className="bg-modal-update-disciplines-style-btn-semester">Học Kì I</Button>


                        </Form.Item>
                        <Form.Item label="Nội dung" className="bg-modal-update-disciplines-style-label">
                            <TextArea rows={4} className="bg-modal-update-disciplines-style-input" />
                        </Form.Item>

                        <Form.Item label="Tệp đính kèm" className="bg-modal-update-disciplines-style-label">
                            {/* <Upload>
                                <Button className="bg-modal-update-disciplines-modal-content-btn-update" >Chọn tệp tải lên...</Button>
                            </Upload>, */}
                            <button className="disciplines-btn-link-upload">
                                <img src={IconUpload} alt="" />
                            </button>
                            <button className="disciplines-btn-upload">Chọn tệp tải lên...</button>
                        </Form.Item>

                        <Button className="bg-modal-update-disciplines-modal-content-btn-cancel" onClick={() => setVisible(false)}>Hủy</Button>
                        <Button className="bg-modal-update-disciplines-modal-content-btn-save">Lưu</Button>
                    </Form>

                </Modal>
            </div>
            <div className="disciplines-body">
                <div className="disciplines-body-table-group">
                    <div className="disciplines-body-table-group-table-headers">
                        <Row>
                            <Col span={12} className="disciplines-body-table-group-table-headers-col-name">
                                <p className="disciplines-body-table-group-table-headers-name">
                                    Danh sách kỷ luật của học viên
                                </p>
                            </Col>
                            <Col span={12} className="disciplines-body-table-group-table-headers-col-search">
                                <div className="disciplines-body-table-search">
                                    <Searchs />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="disciplines-body-table-group-table-body">
                        <div className="disciplines-body-table-group-table-body-table">
                            <Table dataSource={dataBonus} columns={columns} pagination={false} />
                        </div>
                    </div>
                    <Row>
                        <Col span={12} className="disciplines-body-table-group-footer-col-left">
                            <p className="disciplines-body-table-group-footer-col-left-txt-view">
                                Hiển thị
                            </p>
                            <InputNumber min={1} max={10} defaultValue={8} />
                            <p className="disciplines-body-table-group-footer-col-left-txt-rol">
                                hàng trong một trang
                            </p>
                        </Col>
                        <Col span={12} className="disciplines-body-table-group-footer-col-right">
                            <div className="disciplines-body-table-group-footer-col-right-pagination">
                                <Pagination
                                    showSizeChanger
                                    defaultCurrent={8}
                                    total={1000}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        </>
    )

} export default Disciplines;