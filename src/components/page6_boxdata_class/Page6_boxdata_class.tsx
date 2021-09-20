import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import './page6_boxdata_class.css'
import { Link } from 'react-router-dom';
import { Select, Table, Modal, Form, Input, Pagination, InputNumber, Menu, Dropdown, Checkbox } from 'antd';
import { DownOutlined } from "@ant-design/icons";
import unIcon2 from '../../assets/boxdata/unIcon2.svg'
import plusIcon from '../../assets/boxdata/plusIcon.svg'
import viewIcon from '../../assets/boxdata/viewIcon.svg'
import editIcon from '../../assets/boxdata/editIcon.svg'
import trashIcon from '../../assets/boxdata/trashIcon.svg'
import uploadIcon from '../../assets/boxdata/uploadIcon.svg'
import downloadIcon from '../../assets/boxdata/downloadIcon.svg'
import searchIcon from '../../assets/boxdata/searchIcon.svg'

const { Option } = Select;

const columns = [
    {
        title: 'Mã lớp',
        dataIndex: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Tên lớp',
        dataIndex: 'title',
    },
    {
        title: 'Giáo viên chủ nhiệm',
        dataIndex: 'type',
    },
    {
        title: '',
        dataIndex: 'buttonview',
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
        name: '2020-6A',
        title: '6A',
        type: 'Nguyễn Văn A',
        buttonview: <img src={viewIcon} alt="" />,
        buttonedit: <img src={editIcon} alt="" />,
        buttontrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '2',
        name: '2020-6B',
        title: '6B',
        type: 'Phạm Thị C',
        buttonview: <img src={viewIcon} alt="" />,
        buttonedit: <img src={editIcon} alt="" />,
        buttontrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '3',
        name: '2020-6C',
        title: '6C',
        type: 'Trần Hoàng A',
        buttonview: <img src={viewIcon} alt="" />,
        buttonedit: <img src={editIcon} alt="" />,
        buttontrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '4',
        name: '2020-7A',
        title: '7A',
        type: 'Charlie',
        buttonview: <img src={viewIcon} alt="" />,
        buttonedit: <img src={editIcon} alt="" />,
        buttontrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '5',
        name: '2020-6B',
        title: '6B',
        type: 'Phạm Thị C',
        buttonview: <img src={viewIcon} alt="" />,
        buttonedit: <img src={editIcon} alt="" />,
        buttontrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '6',
        name: '2020-7C',
        title: '7C',
        type: 'Trần Hoàng A',
        buttonview: <img src={viewIcon} alt="" />,
        buttonedit: <img src={editIcon} alt="" />,
        buttontrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '7',
        name: '2020-8A',
        title: '8A',
        type: 'Phạm Thị C',
        buttonview: <img src={viewIcon} alt="" />,
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

class Page6_boxdata_class extends Component {
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

        // // tai file len
        // const [uploadModalVisible, setUploadModalVisible] = useState(false);
        // const showUploadModal = () => {
        //     setUploadModalVisible(true);
        // };
        // const handleUploadOk = () => {
        //     setUploadModalVisible(false);
        // };
        // const handleUploadCancel = () => {
        //     setUploadModalVisible(false);
        // }
        // // nhap thu cong
        // const [importModalVisible, setImportModalVisible] = useState(false);
        // const showImportModal = () => {
        //     setImportModalVisible(true);
        // };
        // const handleImportOk = () => {
        //     setImportModalVisible(false);
        // };
        // const handleImportCancel = () => {
        //     setImportModalVisible(false);
        // }

        // const menu = (
        //     <Menu className="box__btn-button_cre-open">
        //         <Menu.Item key="0">
        //             <button className="box__btn-button_cre-upload" onClick={showUploadModal}>Tải file lên</button>
        //         </Menu.Item>
        //         <Menu.Item key="1">
        //             <button className="box__btn-button_cre-import" onClick={showImportModal}>Nhập thủ công</button>
        //         </Menu.Item>
        //     </Menu>
        // );


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
                                <button className="box__chb-btn-clk"><Link to="/page5">Môn học</Link></button>
                                <button className="box__chb-btn-clk"><Link to="/page6">Lớp học</Link></button>
                                <button className="box__chb-btn-clk"><Link to="/page7">Loại điểm</Link></button>
                            </div>
                        </div>
                        <div className="box__btn">
                            <div className="box__btn-block">
                                <Select className="box__btn-block_select" defaultValue="all">
                                    <Option value="all">Tất cả khối</Option>
                                    <Option value="6">Khối 6</Option>
                                    <Option value="7">Khối 7</Option>
                                    <Option value="8">Khối 8</Option>
                                </Select>
                            </div>
                            {/* <div className="box__btn-button">
                                <button className="box__btn-button_del" onClick={showModal}>
                                    <img className="box__btn-button_del-icon" src={unIcon2} alt="" />
                                </button>
                                <Modal className="box__btn-del" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                    <h1>Xóa</h1>
                                    <p>Xác nhận muốn xóa những thông tin đã chọn? Sau khi xóa sẽ không thể hoàn tác.</p>
                                    <button className="box__btn-del-cancel" onClick={handleCancel}>Hủy</button>
                                    <button className="box__btn-del-acp" onClick={handleOk}>Lưu</button>
                                </Modal>

                                <button className="box__btn-button_export">
                                    Xuất File
                                </button>

                                <Dropdown className="box__btn-button_cre" overlay={menu} trigger={['click']}>
                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        <img className="box__btn-button_cre-icon" src={plusIcon} alt="" />
                                        Thêm mới
                                    </a>
                                </Dropdown>
                            
                                <Modal className="box__btn-upload" visible={uploadModalVisible} onOk={handleUploadOk} onCancel={handleUploadCancel}>
                                    <h1>Tải lên file</h1>
                                    <div className="box__btn-upload-fileattach">
                                        <p>Tệp đính kèm:</p>
                                        <button className="box__btn-upload-fileattach__btn1">
                                            <img src={uploadIcon} alt="" />
                                        </button>
                                        <button className="box__btn-upload-fileattach__btn2">Chọn tệp tải lên...</button>
                                    </div>
                                    <div className="box__btn-upload-filesamp">
                                        <p>Tải file mẫu:</p>
                                        <img src={downloadIcon} alt="" />
                                        <i>[Tải xuống file mẫu]</i>
                                    </div>
                                    <button className="box__btn-upload-cancel" onClick={handleUploadCancel}>Hủy</button>
                                    <button className="box__btn-upload-acp" onClick={handleUploadOk}>Tải lên</button>
                                </Modal>
                            
                                <Modal className="box__btn-import" visible={importModalVisible} onOk={handleImportOk} onCancel={handleImportCancel}>
                                    <h1>Thêm lớp học mới</h1>
                                    <Form>
                                        <p>Thông tin chung</p>
                                        <div className="box__btn-import-school">
                                            <div className="box__btn-import-block1">
                                                <p className="box__btn-import-school-txt1">Niên khóa:</p>
                                                <Select className="box__btn-import_year">
                                                    <Select value="0">2020 - 2021</Select>
                                                    <Select value="1">2019 - 2020</Select>
                                                    <Select value="2">2018 - 2019</Select>
                                                    <Select value="3">2017 - 2018</Select>
                                                </Select>
                                            </div>
                                            <div className="box__btn-import-block2">
                                                <p className="box__btn-import-school-txt2">Khoa - khối:</p>
                                                <Select className="box__btn-import_blck">
                                                    <Select value="0">Khối 6</Select>
                                                    <Select value="1">Khối 7</Select>
                                                    <Select value="2">Khối 8</Select>
                                                </Select>
                                            </div>
                                        </div>
                                        <Form.Item label="Tên lớp:">
                                            <Input />
                                        </Form.Item>
                                        <Form.Item label="Số lượng học viên:">
                                            <Input className="ant-input-sbj" />
                                        </Form.Item>
                                        <Form.Item label="Phân loại lớp:">
                                            <Select className="ant-select-opt">
                                                <Select.Option value="batbuoc">Môn học bắt buộc</Select.Option>
                                                <Select.Option value="tuchon">Môn học tự chọn</Select.Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item label="Giáo viên chủ nhiệm:">
                                            <Select className="ant-select-opt">
                                                <Select.Option value="batbuoc">Môn học bắt buộc</Select.Option>
                                                <Select.Option value="tuchon">Môn học tự chọn</Select.Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item label="Mô tả:">
                                            <Input.TextArea />
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
                                    </Form>
                                    <div className="box__btn-button-import">
                                        <button className="box__btn-button-cancel" onClick={handleImportCancel}>Hủy</button>
                                        <button className="box__btn-button-save" onClick={handleImportCancel}>Lưu</button>
                                    </div>
                                </Modal>
                       
                            </div> */}
                        </div>
                        <div className="box__sbj">
                            <div className="box__sbj-stu">
                                <p>Lớp học</p>
                                {/* <img className="box__sbj-search__icon" src={searchIcon} alt="" /> */}
                                <input className="box__sbj-search__input" type="search" placeholder="Tìm kiếm" />
                            </div>
                            <div className="box__sbj-tblclass">
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

export default Page6_boxdata_class;