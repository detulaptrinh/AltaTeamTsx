import React, { Component } from 'react'

// css
import './LearningOutcomes.css';

import { Row, Col, Card, Collapse, Space, Table } from 'antd';

const { Panel } = Collapse;

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
    {
        key: '3',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
    {
        key: '4',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
    {
        key: '5',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

export default class LearningOutcomes extends Component {
    render() {
        return (
            <div className="learning-outcomes">
                <div className="box">
                    <Row>
                        <Col span={8} className="border-top-left-radius-8">
                            <Card title="Học kỳ 1" bordered={false}>
                                <div>
                                    <h3>Học lực</h3>
                                    <p>Khá</p>
                                </div>
                                <div>
                                    <h3>Hạnh kiểm</h3>
                                    <p>Tốt</p>
                                </div>
                                <div>
                                    <h3>Điểm trung bình</h3>
                                    <p>7.7</p>
                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Học kỳ 2" bordered={false}>
                                <div>
                                    <h3>Học lực</h3>
                                    <p>Khá</p>
                                </div>
                                <div>
                                    <h3>Hạnh kiểm</h3>
                                    <p>Tốt</p>
                                </div>
                                <div>
                                    <h3>Điểm trung bình</h3>
                                    <p>7.7</p>
                                </div>
                            </Card>
                        </Col>
                        <Col span={8} className="border-top-right-radius-8">
                            <Card title="Cả năm" bordered={false}>
                                <div>
                                    <h3>Điểm trung bình</h3>
                                    <p style={{ color: '#49C510', fontWeight: 'bold' }}>7.0</p>
                                </div>
                                <div>
                                    <h3>Học lực</h3>
                                    <p style={{ color: '#49C510', fontWeight: 'bold' }}>Khá</p>
                                </div>
                                <div>
                                    <h3>Hạnh kiểm</h3>
                                    <p style={{ color: '#49C510', fontWeight: 'bold' }}>Tốt</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <Col className="switch-semester" span={12}>
                    <div className="switch-semester-left-tab-box">
                        <div className="switch-semester-left-tab-box-general-information">
                            <a href="">Học kỳ I</a>
                        </div>
                        <div className="switch-semester-left-tab-box-study-process">
                            <a href="">Học kỳ II</a>
                        </div>
                    </div>
                </Col>

                <div className="box">
                    <Table dataSource={dataSource} columns={columns} />;
                </div>
            </div>
        )
    }
}
