import React, { Component, useState } from 'react';
import { Breadcrumb } from 'antd';
import './DetailStudent.css'
import { Row, Col, Table, Tag } from 'antd';
import {
    IconEdit,
    IconTrash,
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
        dataIndex: 'buttonedit',
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
        // status: <button className="status-btn">Đang theo học</button>,
        buttonedit: <img src={IconEdit} alt="" />,
    },
    {
        key: '1',
        stt: '1',
        id: '2020-6A',
        name: 'Nguyễn Văn A',
        year: '2020-2021',
        date: '05/09/2020',
        status: 'Đã chuyển lớp',
        // status: <button className="status-btn">Đang theo học</button>,
        buttonedit: <img src={IconEdit} alt="" />,
    },
    {
        key: '1',
        stt: '1',
        id: '2020-6A',
        name: 'Nguyễn Văn A',
        year: '2020-2021',
        date: '05/09/2020',
        status: 'Đã chuyển trường',
        // status: <button className="status-btn">Đang theo học</button>,
        buttonedit: <img src={IconEdit} alt="" />,
    },
    {
        key: '1',
        stt: '1',
        id: '2020-6A',
        name: 'Nguyễn Văn A',
        year: '2020-2021',
        date: '05/09/2020',
        status: 'Đã thôi học',
        // status: <button className="status-btn">Đang theo học</button>,
        buttonedit: <img src={IconEdit} alt="" />,
    },
    {
        key: '1',
        stt: '1',
        id: '2020-6A',
        name: 'Nguyễn Văn A',
        year: '2020-2021',
        date: '05/09/2020',
        status: 'Đang tốt nghiệp',
        // status: <button className="status-btn">Đang theo học</button>,
        buttonedit: <img src={IconEdit} alt="" />,
    },
    {
        key: '1',
        stt: '1',
        id: '2020-6A',
        name: 'Nguyễn Văn A',
        year: '2020-2021',
        date: '05/09/2020',
        status: 'Đang theo học',
        // status: <button className="status-btn">Đang theo học</button>,
        buttonedit: <img src={IconEdit} alt="" />,
    },
    {
        key: '1',
        stt: '1',
        id: '2020-6A',
        name: 'Nguyễn Văn A',
        year: '2020-2021',
        date: '05/09/2020',
        status: 'Đang theo học',
        // status: <button className="status-btn">Đang theo học</button>,
        buttonedit: <img src={IconEdit} alt="" />,
    },
]; 

export default function DetailStudent() {
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
                                <button className="information-button-btn">
                                    <img src={IconTrash} alt="" />
                                </button>
                                <button className="information-button-btn" >
                                    <img src={IconEdit} alt="" />
                                </button>
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