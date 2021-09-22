import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import './DetailSubject.css'
import editIcon from '../../../assets/boxdata/editIcon.svg'
import trashIcon from '../../../assets/boxdata/trashIcon.svg'
import viewIcon from '../../../assets/boxdata/viewIcon.svg'
import { Row, Col, Table } from 'antd';
import 'antd/dist/antd.less'

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
    },
    {
        title: 'Mã môn học',
        dataIndex: 'id',
    },
    {
        title: 'Tên môn học',
        dataIndex: 'name',
        render: (text: string) => <a>{text}</a>,
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
];

const data = [
    {
        key: '1',
        stt: '1',
        id: 'D43',
        name: 'Toán học',
        type: 'Môn bắc buộc',
        hk1: '4',
        hk2: '4',
    },
    {
        key: '1',
        stt: '1',
        id: 'D43',
        name: 'Toán học',
        type: 'Môn bắc buộc',
        hk1: '4',
        hk2: '4',
    },
    {
        key: '1',
        stt: '1',
        id: 'D43',
        name: 'Toán học',
        type: 'Môn bắc buộc',
        hk1: '4',
        hk2: '4',
    },
    {
        key: '1',
        stt: '1',
        id: 'D43',
        name: 'Toán học',
        type: 'Môn bắc buộc',
        hk1: '4',
        hk2: '4',
    },
    {
        key: '1',
        stt: '1',
        id: 'D43',
        name: 'Toán học',
        type: 'Môn bắc buộc',
        hk1: '4',
        hk2: '4',
    },
    {
        key: '1',
        stt: '1',
        id: 'D43',
        name: 'Toán học',
        type: 'Môn bắc buộc',
        hk1: '4',
        hk2: '4',
    },
    {
        key: '1',
        stt: '1',
        id: 'D43',
        name: 'Toán học',
        type: 'Môn bắc buộc',
        hk1: '4',
        hk2: '4',
    },
]; // rowSelection object indicates the need for row selection



class DetailSubject extends Component {

    render() {

        return (
            <>
                <div className="section-6-4">
                    <div className="section-6-4__breadcrumb">
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

                    <div className="section-6-4__information">
                        <Row>
                            <Col span={12}>
                                <div className="information-title">Thông tin học viên</div>
                            </Col>
                            <Col className="information-button" span={12}>
                                <button className="information-button-btn" >
                                    <img src={editIcon} alt="" />
                                </button>
                                <button className="information-button-btn">
                                    <img src={trashIcon} alt="" />
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

                    <div className="section-6-4__student-list">
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
}

export default DetailSubject;