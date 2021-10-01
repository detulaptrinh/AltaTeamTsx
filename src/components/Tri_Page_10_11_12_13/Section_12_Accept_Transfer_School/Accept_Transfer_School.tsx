import { Breadcrumb, Row, Col, Space, Table } from 'antd';
import React, { Component } from 'react';
import "./Accept_Transfer_School.css"
import { EyeOutlined } from '@ant-design/icons';
import SelectsYear from '../Categories/SelectsYear';
import BtnAddSection10 from '../Categories/ButtonAdd';
import PaginationText from '../Categories/PaginationText';
import PaginationNumber from '../Categories/PaginationsNumber';
import Searchs from '../Categories/Searchs';



const dataTransferSchool = [
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


export default class TransferSchool extends Component {
    render() {
        return (
            <>
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
                                    <BtnAddSection10 />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="transfer_school_body_group">
                        <div className="transfer_school_body_group_header">
                            <Row>
                                <Col span={12} className="transfer_school_body_group_header_left">
                                    <p className="transfer_school_body_group_header_left_name">
                                        Danh sách mã khen thưởng
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
                                <Table dataSource={dataTransferSchool} columns={columns} pagination={false} />
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
            </>
        )
    }
}