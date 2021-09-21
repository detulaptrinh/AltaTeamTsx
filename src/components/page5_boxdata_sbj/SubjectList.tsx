import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import './SubjectList.css'
import { Select, Table, Modal, Form, Input, Pagination, InputNumber } from 'antd';
import unIcon from '../../assets/boxdata/unIcon.svg'
import plusIcon from '../../assets/boxdata/plusIcon.svg'
import listIcon from '../../assets/boxdata/listIcon.svg'
import editIcon from '../../assets/boxdata/editIcon.svg'
import trashIcon from '../../assets/boxdata/trashIcon.svg'

const { Option } = Select;

const columns = [
    {
        title: 'Mã môn học',
        dataIndex: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Tên môn học',
        dataIndex: 'title',

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
    {
        title: '',
        dataIndex: 'buttonedit',
    },
    {
        title: '',
        dataIndex: 'buttontrash',
    },
];

const data = [
    {
        key: '1',
        name: 'KHTN',
        title: 'Ngữ Văn',
        type: 'Môn bắt buộc',
        hk1: '4',
        hk2: '4',
        buttonedit: <img src={editIcon} alt="" />,
        buttontrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '2',
        name: 'VHXH',
        title: 'Toán',
        type: 'Môn tự chọn',
        hk1: '4',
        hk2: '4',
        buttonedit: <img src={editIcon} alt="" />,
        buttontrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '3',
        name: 'AV',
        title: 'Anh Văn',
        type: 'Môn bắt buộc',
        hk1: '4',
        hk2: '4',
        buttonedit: <img src={editIcon} alt="" />,
        buttontrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '4',
        name: 'AV',
        title: 'Anh Văn',
        type: 'Môn bắt buộc',
        hk1: '4',
        hk2: '4',
        buttonedit: <img src={editIcon} alt="" />,
        buttontrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '5',
        name: 'VHXH',
        title: 'Giáo dục công dân',
        type: 'Môn tự chọn',
        hk1: '4',
        hk2: '4',
        buttonedit: <img src={editIcon} alt="" />,
        buttontrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '6',
        name: 'KHTN',
        title: 'Sinh học',
        type: 'Môn bắc buộc',
        hk1: '4',
        hk2: '4',
        buttonedit: <img src={editIcon} alt="" />,
        buttontrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '7',
        name: 'KHXH',
        title: 'Hóa học',
        type: 'Môn tự chọn',
        hk1: '4',
        hk2: '4',
        buttonedit: <img src={editIcon} alt="" />,
        buttontrash: <img src={trashIcon} alt="" />,
    },
]; // rowSelection object indicates the need for row selection

const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};

interface DataType {
    key: React.Key;
    id: string;
    name: string;
    date: string;
    sex: string;
    object: string;
    position: string;
    status: string;
    buttonview: string;
    buttonreload: string;
    buttondelete: string;
}

class SubjectList extends Component {
    render() {
        // const [visible, setVisible] = useState(false);
        // const [isModalVisible, setIsModalVisible] = useState(false);

        // const showModal = () => {
        //     setIsModalVisible(true);
        // };

        // const handleOk = () => {
        //     setIsModalVisible(false);
        // };

        // const handleCancel = () => {
        //     setIsModalVisible(false);
        // }

        return (
            <>
                <div className="overview">
                    {/* <User/> */}
                    <div className="boxmain">
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
                                <button className="box__chb-btn-clk">Môn học</button>
                                <button className="box__chb-btn-clk">Lớp học</button>
                                <button className="box__chb-btn-clk">Loại điểm</button>
                            </div>
                        </div>
                        <div className="box__btn">
                            <div className="box__btn-block">
                                <p className="box__btn-block-title">Khối</p>
                                <Select className="box__btn-block_select" defaultValue="6">
                                    <Option value="6">6</Option>
                                    <Option value="7">7</Option>
                                    <Option value="8">8</Option>
                                </Select>
                            </div>
                            <div className="box__btn-class">
                                <p className="box__btn-class-title">Lớp</p>
                                <Select className="box__btn-class_select" defaultValue="6A1">
                                    <Option value="6A1">6A1</Option>
                                    <Option value="6A2">6A2</Option>
                                    <Option value="6A3">6A3</Option>
                                </Select>
                            </div>
                            {/* <div className="box__btn-button">
                                <button className="box__btn-button_del" onClick={showModal}>
                                    <img className="box__btn-button_del-icon" src={unIcon} alt="" />
                                </button>
                                <Modal className="box__btn-del" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                    <h1>Xóa</h1>
                                    <p>Xác nhận muốn xóa những thông tin đã chọn? Sau khi xóa sẽ không thể hoàn tác.</p>
                                    <button className="box__btn-del-cancel" onClick={handleCancel}>Hủy</button>
                                    <button className="box__btn-del-acp" onClick={handleOk}>Lưu</button>
                                </Modal>
                                <button className="box__btn-button_cre" onClick={() => setVisible(true)}>
                                    <img className="box__btn-button_cre-icon" src={plusIcon} alt="" />
                                    Thêm mới
                                </button>
                                <Modal
                                    className="box__btn-cre"
                                    centered
                                    visible={visible}
                                    onOk={() => setVisible(false)}
                                    onCancel={() => setVisible(false)}
                                >
                                    <Form>
                                        <h1>Thêm môn học mới</h1>
                                        <Form.Item label="Tổ - Bộ môn:">
                                            <Select className="ant-select-opt">
                                                <Select.Option value="khtn">Khoa học tự nhiên</Select.Option>
                                                <Select.Option value="khxh">Văn hóa xã hội</Select.Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item label="Tên môn học:">
                                            <Input />
                                        </Form.Item>
                                        <Form.Item label="Mã môn:">
                                            <Input className="ant-input-sbj" />
                                        </Form.Item>
                                        <Form.Item label="Loại môn học:">
                                            <Select className="ant-select-opt">
                                                <Select.Option value="batbuoc">Môn học bắt buộc</Select.Option>
                                                <Select.Option value="tuchon">Môn học tự chọn</Select.Option>
                                            </Select>
                                        </Form.Item>
                                        <hr />
                                        <p>Số tiết/Học kì</p>
                                        <Form.Item className="ant-input-hk1" label="Học kì I:">
                                            <Input />
                                        </Form.Item>
                                        <Form.Item className="ant-input-hk2" label="Học kì II:">
                                            <Input />
                                        </Form.Item>
                                        <button className="box__btn-button-cancel" onClick={() => setVisible(false)}>Hủy</button>
                                        <button className="box__btn-button-save" onClick={() => setVisible(false)}>Lưu</button>
                                    </Form>
                                </Modal>
                            </div> */}
                        </div>
                        <div className="box__sbj">
                            <div className="box__sbj-stu">
                                <p>Môn học</p>
                                <input className="box__sbj-search" type="search" placeholder="Tìm kiếm" />
                            </div>
                            <div className="box__sbj-tbl">
                                <Table
                                    // rowSelection={rowSelection}
                                    columns={columns}
                                    dataSource={data}
                                    pagination={false}
                                />
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
                </div>
            </>
        );
    }
}

export default SubjectList;