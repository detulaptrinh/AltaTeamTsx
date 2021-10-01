import React, { Component } from 'react';
import "./Reservation_Record.css"
import { Breadcrumb, Row, Col, Table,Space } from 'antd';
import SelectsYear from '../Categories/SelectsYear';
import BtnAdd from '../Categories/ButtonAdd';
import Searchs from '../Categories/Searchs';
import PaginationText from '../Categories/PaginationText';
import PaginationNumber from '../Categories/PaginationsNumber';
import { EyeOutlined } from '@ant-design/icons';

const dataReservationRecords = [
    {
        key: '1',
        id: '1235A',
        name: 'Mike',
        date: '12/20/2002',
        sex: 'Nam',
        transfer: 2,
        semester: 'THCS A',
        block: 6,
        dateTransfer: '12/20/2020',
        icon: '',
    },
    {
        key: '2',
        id: '1235A',
        name: 'John',
        date: '12/20/2002',
        sex: 'Nam',
        transfer: 2,
        semester: 'THCS A',
        block: 7,
        dateTransfer: '12/20/2020',
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
export default class ReservationRecords extends Component {
    render() {
        return (
            <>
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
                                    <BtnAdd />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="reservation-records-body-group">
                        <div className="reservation-records-body-group-header">
                            <Row>
                                <Col span={12} className="reservation-records-body-group-header-left">
                                    <p className="reservation-records-body-group-header-left-name">
                                        Danh sách mã khen thưởng
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
            </>
        )
    }
}