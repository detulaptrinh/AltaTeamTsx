import React, { useState } from 'react';
import "./Bonus.css"
import {
    Row,
    Col,

 
    Space,
    Input,

    InputNumber,

    Pagination,
    Table,

    Tabs,

} from 'antd';
import {  EyeOutlined } from '@ant-design/icons';
import Searchs from '../Categories/Searchs';

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

function Bonus() {
    return (
        <>
                <div className="bonus-body">
                    <div className="bonus-body-table-group">
                        <div className="bonus-body-table-group-table-headers">
                            <Row>
                                <Col span={12} className="bonus-body-table-group-table-headers-col-name">
                                    <p className="bonus-body-table-group-table-headers-name">
                                        Danh sách mã khen thưởng
                                    </p>
                                </Col>
                                <Col span={12} className="bonus-body-table-group-table-headers-col-search">
                                    <div className="bonus-body-table-search">
                                        <Searchs />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="bonus-body-table-group-table-body">
                            <div className="bonus-body-table-group-table-body-table">
                                <Table dataSource={dataBonus} columns={columns} pagination={false} />
                            </div>
                        </div>
                        <Row>
                            <Col span={12} className="bonus-body-table-group-footer-col-left">
                                <p className="bonus-body-table-group-footer-col-left-txt-view">
                                    Hiển thị
                                </p>
                                <InputNumber min={1} max={10} defaultValue={8} />
                                <p className="bonus-body-table-group-footer-col-left-txt-rol">
                                    hàng trong một trang
                                </p>
                            </Col>
                            <Col span={12} className="bonus-body-table-group-footer-col-right">
                                <div className="bonus-body-table-group-footer-col-right-pagination">
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

}
export default Bonus;