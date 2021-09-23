import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import './PointType.css'
import { Link } from 'react-router-dom';
import { Select, Table, Modal, Form, Input, Pagination, InputNumber, Menu, Dropdown, Checkbox, Col, Row } from 'antd';
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
        type: 'Kiểm tra miệng',
        number: '1',
        hk1: '3',
        hk2: '3',
        buttonedit: <img src={editIcon} alt="" />,
        buttontrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '1',
        type: 'Kiểm tra miệng',
        number: '1',
        hk1: '3',
        hk2: '3',
        buttonedit: <img src={editIcon} alt="" />,
        buttontrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '1',
        type: 'Kiểm tra miệng',
        number: '1',
        hk1: '3',
        hk2: '3',
        buttonedit: <img src={editIcon} alt="" />,
        buttontrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '1',
        type: 'Kiểm tra miệng',
        number: '1',
        hk1: '3',
        hk2: '3',
        buttonedit: <img src={editIcon} alt="" />,
        buttontrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '1',
        type: 'Kiểm tra miệng',
        number: '1',
        hk1: '3',
        hk2: '3',
        buttonedit: <img src={editIcon} alt="" />,
        buttontrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '1',
        type: 'Kiểm tra miệng',
        number: '1',
        hk1: '3',
        hk2: '3',
        buttonedit: <img src={editIcon} alt="" />,
        buttontrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '1',
        type: 'Kiểm tra miệng',
        number: '1',
        hk1: '3',
        hk2: '3',
        buttonedit: <img src={editIcon} alt="" />,
        buttontrash: <img src={trashIcon} alt="" />,
    },
];


class PointType extends Component {
    render() {
        return (
            <>
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
                                    <button className="box__btn-button_cre">
                                        <img className="box__btn-button_cre-icon" src={plusIcon} alt="" />
                                        Thêm mới
                                    </button>
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
            </>
        );
    }
}

export default PointType;