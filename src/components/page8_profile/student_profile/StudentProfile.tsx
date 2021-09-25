import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import './StudentProfile.css'
import { Select, Table, Tag, Modal, Form, Input, Pagination, InputNumber, Menu, Dropdown, Checkbox, Col, Row } from 'antd';
import unIcon2 from '../../../assets/boxdata/unIcon2.svg'
import plusIcon from '../../../assets/boxdata/plusIcon.svg'
import viewIcon from '../../../assets/boxdata/viewIcon.svg'
import editIcon from '../../../assets/boxdata/editIcon.svg'
import trashIcon from '../../../assets/boxdata/trashIcon.svg'
import updateIcon from '../../../assets/boxdata/updateIcon.svg'

const { Option } = Select;

const columns = [
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
        title: 'Ngày sinh',
        dataIndex: 'date',
    },
    {
        title: 'Giới tính',
        dataIndex: 'sex',
    },
    {
        title: 'Dân tộc',
        dataIndex: 'nation',
    },
    {
        title: 'Lớp',
        dataIndex: 'class',
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
        dataIndex: 'btnview',
    },
    {
        title: '',
        dataIndex: 'btnupdate',
    },
    {
        title: '',
        dataIndex: 'btntrash',
    },
];

const data = [
    {
        key: '1',
        id: '2020-6A',
        name: 'Nguyễn Văn A',
        date: '12/02/1998',
        sex: 'Nam',
        nation: 'Kinh',
        class: '6A',
        status: 'Đang theo học',
        // status: <button className="status-btn">Đang theo học</button>,
        btnview: <img src={viewIcon} alt="" />,
        btnupdate: <img src={updateIcon} alt="" />,
        btntrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '1',
        id: '2020-6A',
        name: 'Nguyễn Văn A',
        date: '12/02/1998',
        sex: 'Nam',
        nation: 'Kinh',
        class: '6A',
        status: 'Đã chuyển lớp',
        // status: <button className="status-btn">Đang theo học</button>,
        btnview: <img src={viewIcon} alt="" />,
        btnupdate: <img src={updateIcon} alt="" />,
        btntrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '1',
        id: '2020-6A',
        name: 'Đã thôi học',
        date: '12/02/1998',
        sex: 'Nam',
        nation: 'Kinh',
        class: '6A',
        status: 'Đã tốt nghiệp',
        // status: <button className="status-btn">Đang theo học</button>,
        btnview: <img src={viewIcon} alt="" />,
        btnupdate: <img src={updateIcon} alt="" />,
        btntrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '1',
        id: '2020-6A',
        name: 'Nguyễn Văn A',
        date: '12/02/1998',
        sex: 'Nam',
        nation: 'Kinh',
        class: '6A',
        status: 'Đã chuyển trường',
        // status: <button className="status-btn">Đang theo học</button>,
        btnview: <img src={viewIcon} alt="" />,
        btnupdate: <img src={updateIcon} alt="" />,
        btntrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '1',
        id: '2020-6A',
        name: 'Nguyễn Văn A',
        date: '12/02/1998',
        sex: 'Nam',
        nation: 'Kinh',
        class: '6A',
        status: 'Đang theo học',
        // status: <button className="status-btn">Đang theo học</button>,
        btnview: <img src={viewIcon} alt="" />,
        btnupdate: <img src={updateIcon} alt="" />,
        btntrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '1',
        id: '2020-6A',
        name: 'Nguyễn Văn A',
        date: '12/02/1998',
        sex: 'Nam',
        nation: 'Kinh',
        class: '6A',
        status: 'Đang theo học',
        // status: <button className="status-btn">Đang theo học</button>,
        btnview: <img src={viewIcon} alt="" />,
        btnupdate: <img src={updateIcon} alt="" />,
        btntrash: <img src={trashIcon} alt="" />,
    },
    {
        key: '1',
        id: '2020-6A',
        name: 'Nguyễn Văn A',
        date: '12/02/1998',
        sex: 'Nam',
        nation: 'Kinh',
        class: '6A',
        status: 'Đang theo học',
        // status: <button className="status-btn">Đang theo học</button>,
        btnview: <img src={viewIcon} alt="" />,
        btnupdate: <img src={updateIcon} alt="" />,
        btntrash: <img src={trashIcon} alt="" />,
    },
]; // 


class StudentProfile extends Component {
    render() {
        return (
            <div className="section-8">
                <div className="box__title">
                    <h1>Hồ sơ học viên</h1>
                </div>
                <div className="box__btn">
                    <Row>
                        <Col className="box__btn-blk" span={6}>
                            <div className="box__btn-block">
                                <Select className="box__btn-block_select" placeholder="Tất cả khối">
                                    <Option value="7">Khối 6</Option>
                                    <Option value="8">Khối 7</Option>
                                    <Option value="8">Khối 8</Option>
                                </Select>
                            </div>
                            <div className="box__btn-class">
                                <Select className="box__btn-class_select" placeholder="2020-2021">
                                    <Option value="6A2">2019-2020</Option>
                                    <Option value="6A3">2018-2019</Option>
                                    <Option value="6A3">2017-2018</Option>
                                </Select>
                            </div>
                        </Col>
                        <Col className="box__btn-tag" span={10}>
                            <button className="box__btn-tag-active">Tất cả hồ sơ</button>
                            <button className="box__btn-tag-none">Khen thưởng</button>
                            <button className="box__btn-tag-none">Kỷ luật</button>
                        </Col>
                        <Col className="box__btn-button" span={8}>
                            <button className="box__btn-button_del">
                                <img className="box__btn-button_del-icon" src={unIcon2} alt="" />
                            </button>
                            <button className="box__btn-button_export">
                                Xuất File
                            </button>
                            <button className="box__btn-button_cre">
                                <img className="box__btn-button_cre-icon" src={plusIcon} alt="" />
                                Thêm mới
                            </button>
                        </Col>
                    </Row>
                </div>
                <div className="box__sbj">
                    <div className="box__sbj-stu">
                        <p>Loại điểm</p>
                        {/* <img className="box__sbj-search__icon" src={searchIcon} alt="" /> */}
                        <input className="box__sbj-search__input" type="search" placeholder="Tìm kiếm" />
                    </div>
                    <div className="table-list">
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
        );
    }
}

export default StudentProfile;