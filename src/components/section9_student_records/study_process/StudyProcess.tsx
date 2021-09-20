import React, { Component } from 'react'

// css
import './StudyProcess.css';

// icon antd
import { Row, Col, Card, Collapse, Space } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default class StudyProcess extends Component {
    render() {
        return (
            <div className="section-9-2">
                {/* Breadcrumb */}
                <Row>
                    <Col span={24}>
                        <div className="title">
                            <div><span>Hồ sơ học viên</span></div>
                            <i className='bx bx-chevron-right'></i>
                            <div className="title-edit-info-student">Quá trình học tập</div>
                        </div>
                    </Col>
                </Row>

                {/* switch tab */}
                <Row className="switch-tab">
                    <Col className="left-tab" span={12}>
                        <div className="left-tab-box">
                            <div className="left-tab-box-general-information">
                                <a href="">Thông tin chung</a>
                            </div>
                            <div className="left-tab-box-study-process">
                                <a href="">Quá trình học tập</a>
                            </div>
                        </div>
                    </Col>
                    <Col className="right-btn" span={12}>
                        <div className="right-btn-box">
                            <div className="btn-excel">
                                <div className="btn-bk-ffffff">Xuất file</div>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Box thông tin chung */}
                <div className="general-information">
                    <div className="general-information-title">Thông tin học viên</div>
                    <div className="general-information-box">
                        <Row>
                            <Col span={12}>
                                <Row>
                                    <Col span={12}>
                                        <Row>
                                            <Col className="title-left-104">Niên khóa:</Col>
                                            <Col className="content-right">2020-2021</Col>
                                        </Row>
                                        <Row>
                                            <Col className="title-left-104">Khoa - Khối:</Col>
                                            <Col className="content-right">Khối 6</Col>
                                        </Row>
                                        <Row>
                                            <Col className="title-left-104">Mã lớp học:</Col>
                                            <Col className="content-right">2020-6A1</Col>
                                        </Row>
                                        <Row>
                                            <Col className="title-left-104">Tên lớp học:</Col>
                                            <Col className="content-right">6A1</Col>
                                        </Row>
                                    </Col>
                                    <Col span={12}>
                                        <Row>
                                            <Col className="title-left-168">Giáo viên chủ nhiệm:</Col>
                                            <Col className="content-right">Phạm Thị B</Col>
                                        </Row>
                                        <Row>
                                            <Col className="title-left-168">Số lượng học viên:</Col>
                                            <Col className="content-right">45 học viên</Col>
                                        </Row>
                                        <Row>
                                            <Col className="title-left-168">Loại lớp học:</Col>
                                            <Col className="content-right">Lớp học căn bản</Col>
                                        </Row>
                                        <Row>
                                            <Col className="title-left-168">Số lượng môn học:</Col>
                                            <Col className="content-right">10 môn học</Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row>
                                    <Col span={8} className="content-header" >Mô tả:</Col>
                                    <Col span={10} className="content-right">Copy
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus quam vel aliquam lacinia.</Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>

                <Space direction="vertical">
                    <Collapse collapsible="header">
                        <Panel header="Kết quả học tập" key="1">
                            <div className="box">
                                <Row>
                                    <Col span={8}>
                                        <Card title="Học kỳ 1" bordered={false}>
                                            âsđâsd
                                        </Card>
                                    </Col>
                                    <Col span={8}>col-8</Col>
                                    <Col span={8}>col-8</Col>
                                </Row>
                            </div>
                        </Panel>
                    </Collapse>
                    <Collapse collapsible="header">
                        <Panel header="Danh sách khen thưởng" key="2">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                    <Collapse collapsible="header">
                        <Panel header="Danh sách kỹ luật" key="3">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </Space>
            </div>
        )
    }
}
