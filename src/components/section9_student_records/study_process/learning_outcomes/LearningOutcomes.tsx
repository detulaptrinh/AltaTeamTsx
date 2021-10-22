import React, { Component } from 'react'

// css
import './LearningOutcomes.css';

import { Row, Col, Card, Collapse, Space, Table } from 'antd';

const { Panel } = Collapse;

const dataSource = [
    {
        key: '1',
        monhoc: 'Toán Đại Số',
        chuyencan: 32,
        ktdaugio: 10,
        muoilamphut: 10,
        bonmuoilamphut: 10,
        cuoiky: 10,
        diemtb: 10,
    },
    {
        key: '2',
        monhoc: 'Toán Hình Học',
        chuyencan: 32,
        ktdaugio: 10,
        muoilamphut: 10,
        bonmuoilamphut: 10,
        cuoiky: 10,
        diemtb: 10,
    },
    {
        key: '3',
        monhoc: 'Sinh Học',
        chuyencan: 32,
        ktdaugio: 10,
        muoilamphut: 10,
        bonmuoilamphut: 10,
        cuoiky: 10,
        diemtb: 10,
    },
    {
        key: '4',
        monhoc: 'Vật Lý',
        chuyencan: 32,
        ktdaugio: 10,
        muoilamphut: 10,
        bonmuoilamphut: 10,
        cuoiky: 10,
        diemtb: 10,
    },
    {
        key: '5',
        monhoc: 'Địa Lý',
        chuyencan: 32,
        ktdaugio: 10,
        muoilamphut: 10,
        bonmuoilamphut: 10,
        cuoiky: 10,
        diemtb: 10,
    },
    {
        key: '6',
        monhoc: 'Tiếng Anh',
        chuyencan: 32,
        ktdaugio: 10,
        muoilamphut: 10,
        bonmuoilamphut: 10,
        cuoiky: 10,
        diemtb: 10,
    },
    {
        key: '7',
        monhoc: 'Ngữ Văn',
        chuyencan: 32,
        ktdaugio: 10,
        muoilamphut: 10,
        bonmuoilamphut: 10,
        cuoiky: 10,
        diemtb: 10,
    },
    {
        key: '8',
        monhoc: 'Lịch Sử',
        chuyencan: 32,
        ktdaugio: 10,
        muoilamphut: 10,
        bonmuoilamphut: 10,
        cuoiky: 10,
        diemtb: 10,
    },
];

const columns = [
    {
        title: 'Môn học',
        dataIndex: 'monhoc',
        key: 'monhoc',
    },
    {
        title: 'Chuyên cần',
        dataIndex: 'chuyencan',
        key: 'chuyencan',
    },
    {
        title: 'Kiểm tra đầu giờ',
        dataIndex: 'ktdaugio',
        key: 'ktdaugio',
    },
    {
        title: '15 phút',
        dataIndex: 'muoilamphut',
        key: 'muoilamphut',
    },
    {
        title: '45 phút',
        dataIndex: 'bonmuoilamphut',
        key: 'bonmuoilamphut',
    },
    {
        title: 'Cuối kỳ',
        dataIndex: 'cuoiky',
        key: 'cuoiky',
    },
    {
        title: 'Điểm trung bình',
        dataIndex: 'diemtb',
        key: 'diemtb',
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

                {/* table */}
                <div className="box">
                    <Table dataSource={dataSource} columns={columns} />
                </div>
            </div>
        )
    }
}
