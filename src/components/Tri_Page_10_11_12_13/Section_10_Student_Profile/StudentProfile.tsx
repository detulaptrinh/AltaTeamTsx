import React, { useState } from 'react';
import "./StudentProfile.css"
import {
    Row, Col, Button, Form, Space, Input, DatePicker, InputNumber, Upload, Pagination, Table, Modal
} from 'antd';

import { PlusOutlined, SearchOutlined, EyeOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const dataBonus = [
    {
        key: '1',
        id: '1235A',
        name: 'Mike',
        date: '12/20/2002',
        sex: 'Nam',
        bonus: 2,
        icon: '',
    },
    {
        key: '2',
        id: '1235A',
        name: 'John',
        date: '12/20/2002',
        sex: 'Nam',
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



function  StudentProfile() {

    
        const [visible, setVisible] = useState(false);
        return (
            <>
                <div className="studentProfile">
                    <p className="studentProfileName">Hồ Sơ Học Viên</p>
                    <div className="studentProfile-headers">
                        <Row>
                            <Col span={5} className="studentProfile-headers-select-group">

                                <div className="studentProfile-headers-select-group-box-block">
                                    <select defaultValue="Tất Cả Khối">
                                        <option value="allBlock">Tất Cả Khối</option>
                                        <option value="block6">Khối 6</option>
                                        <option value="block7">Khối 7</option>
                                        <option value="block8">Khối 8</option>
                                    </select>
                                </div>
                                <div className="studentProfile-headers-select-group-box-date">
                                    <select defaultValue="2020-2021">
                                        <option value="2020-2021">2020-2021</option>
                                        <option value="2019-2020">2019-2020</option>
                                        <option value="2018-2019">2018-2019</option>
                                        <option value="2017-2018">2017-2018</option>
                                    </select>
                                </div>
                            </Col>
                            <Col span={14} className="studentProfile-headers-tabs-group">
                                <div className="studentProfile-headers-tabs-group-btn">
                                </div>
                            </Col>
                            <Col span={5} className="studentProfile-headers-btn-group">
                                <div className="studentProfile-headers-btn-group-add">
                                    <Button type="primary" shape="round" icon={<PlusOutlined />} onClick={() => setVisible(true)}>
                                        Thêm mới
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="studentProfile-body">
                        <div className="studentProfile-body-table-group">
                            <div className="studentProfile-body-table-group-table-headers">
                                <Row>
                                    <Col span={12} className="studentProfile-body-table-group-table-headers-col-name">
                                        <p className="studentProfile-body-table-group-table-headers-name">
                                            Danh sách mã khen thưởng
                                        </p>
                                    </Col>
                                    <Col span={12} className="studentProfile-body-table-group-table-headers-col-search">
                                        <Input className="studentProfile-body-table-group-table-headers-search" title="Search" placeholder="Tìm Kiếm" prefix={<SearchOutlined />} />
                                    </Col>
                                </Row>
                            </div>
                            <div className="studentProfile-body-table-group-table-body">
                                <div className="studentProfile-body-table-group-table-body-table">
                                    <Table dataSource={dataBonus} columns={columns} pagination={false} />
                                </div>
                            </div>
                            <Row>
                                <Col span={12} className="studentProfile-body-table-group-footer-col-left">
                                    <p className="studentProfile-body-table-group-footer-col-left-txt-view">
                                        Hiển thị
                                    </p>
                                    <InputNumber min={1} max={10} defaultValue={8} />
                                    <p className="studentProfile-body-table-group-footer-col-left-txt-rol">
                                        hàng trong một trang
                                    </p>
                                </Col>
                                <Col span={12} className="studentProfile-body-table-group-footer-col-right">
                                    <div className="studentProfile-body-table-group-footer-col-right-pagination">
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

                    <div className="bg-modal-update-bonus">
                        <Modal className="bg-modal-update-bonus-modal-content"
                            centered
                            visible={visible}
                            onOk={() => setVisible(false)}
                            onCancel={() => setVisible(false)}  >
                            <Form>
                                <h2 className="bg-modal-update-bonus-style-name-update-bonus">Cập nhật khen thưởng</h2>
                                <Form.Item label="Học Viên" className="bg-modal-update-bonus-style-label">
                                    <p className="bg-modal-update-bonus-style-txt-name">Nguyễn Ngọc Tuyết</p>
                                </Form.Item>
                                <Form.Item label="Lớp hiện tại" className="bg-modal-update-bonus-style-label">
                                    <p className="bg-modal-update-bonus-style-txt-class">10A</p>
                                </Form.Item>
                                <Form.Item label="Ngày Khen Thưởng" className="bg-modal-update-bonus-style-label">
                                    <DatePicker className="bg-modal-update-bonus-style-date-picker" />
                                    <Button className="bg-modal-update-bonus-style-btn-semester">Học Kì I</Button>


                                </Form.Item>
                                <Form.Item label="Nội dung" className="bg-modal-update-bonus-style-label">
                                    <TextArea rows={4} className="bg-modal-update-bonus-style-input" />
                                </Form.Item>

                                <Form.Item label="Học kì I:" className="bg-modal-update-bonus-style-label">
                                    <Upload>
                                        <Button className="bg-modal-update-bonus-modal-content-btn-update" >Chọn tệp tải lên...</Button>
                                    </Upload>,
                                </Form.Item>

                                <Button className="bg-modal-update-bonus-modal-content-btn-cancel" onClick={() => setVisible(false)}>Hủy</Button>
                                <Button className="bg-modal-update-bonus-modal-content-btn-save">Lưu</Button>
                            </Form>

                        </Modal>
                    </div>
                </div>

            </>
        )
    
}
export default StudentProfile;