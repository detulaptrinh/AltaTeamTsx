import React, { Component } from 'react'

// css
import './StudenInformation.css';

import ModalDelete from '../ModalDelete';

// avatar
import { Avatar } from '../../../assets/images';

// icon antd
import { Row, Col, Card } from 'antd';

const style = { height: '16px', background: '#F2F2F2' };

export default class StudentInformation extends Component {
    render() {
        return (
            <div className="section-9-1">
                <Row>
                    <Col span={24}>
                        <div className="title">
                            <div><span>Hồ sơ học viên</span></div>
                            <i className='bx bx-chevron-right'></i>
                            <div className="title-info-student">Thông tin học viên</div>
                        </div>
                    </Col>
                </Row>

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
                            <div className="btn-delete">
                                <ModalDelete />
                            </div>
                            <div className="btn-excel">
                                <div className="btn-bk-ffffff">Xuất file</div>
                            </div>
                            <div className="btn-edit">
                                <div className="btn-bk-ff7506">
                                    <i className='bx bx-edit' ></i> Chỉnh sửa
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* card */}
                <div className="site-card-border-less-wrapper">
                    <Card title="Thông tin chung" bordered={false}>
                        <Row>
                            <Col span={6}>
                                <img src={Avatar} alt="" />
                            </Col>
                            <Col span={18}>
                                <div className="ant-col-title">Thông tin học viên</div>
                                <Row>
                                    <Col span={8}>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Họ và tên:</Col>
                                            <Col className="text-right" span={16}>Phạm Hoàng C</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Giới tính:</Col>
                                            <Col className="text-right" span={16}>Nam</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Ngày sinh:</Col>
                                            <Col className="text-right" span={16}>16/04/2000</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Nơi sinh:</Col>
                                            <Col className="text-right" span={16}>Tp.HCM</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Dân tộc:</Col>
                                            <Col className="text-right" span={16}>Kinh</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Tôn giáo:</Col>
                                            <Col className="text-right" span={16}>Không</Col>
                                        </Row>
                                    </Col>
                                    <Col span={8}>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Niên khóa:</Col>
                                            <Col className="text-right" span={16}>2020-2021</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Khối:</Col>
                                            <Col className="text-right" span={16}>7</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Lớp:</Col>
                                            <Col className="text-right" span={16}>7A</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Mã học viên:</Col>
                                            <Col className="text-right" span={16}>2020-HS1213</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Ngày nhập học:</Col>
                                            <Col className="text-right" span={16}>05/09/2013</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Hình thức:</Col>
                                            <Col className="text-right" span={16}>Trúng tuyển</Col>
                                        </Row>
                                    </Col>
                                    <Col span={8}>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Trạng thái:</Col>
                                            <Col className="text-right" span={16}>
                                                <div className="text-right-box">
                                                    <i className='bx bx-wifi-0'></i>Đang theo học
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>

                    <div style={style}></div>
                    <Card bordered={false} className="communications">
                        <Row>
                            <Col span={6}>
                            </Col>
                            <Col span={18}>
                                <div className="ant-col-title">Thông tin liên lạc</div>
                                <div>
                                    <Row className="ant-row-text">
                                        <Col className="communications-text-left">Địa chỉ:</Col>
                                        <Col className="communications-text-right">86/33 Âu Cơ, phường 9, quận Tân Bình, Thành phố Hồ Chí Minh</Col>
                                    </Row>
                                    <Row className="ant-row-text">
                                        <Col className="communications-text-left">Email:</Col>
                                        <Col className="communications-text-right">example123@gmail.com</Col>
                                    </Row>
                                    <Row className="ant-row-text">
                                        <Col className="communications-text-left">Điện thoại:</Col>
                                        <Col className="communications-text-right">0318486146</Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </div>

                {/* Thông tin gia đình */}
                <div className="site-card-border-less-wrapper site-card-border-less-wrapper-mt-0">
                    <Card title="Thông tin gia đình" bordered={false}>
                        <Row>
                            <Col span={6}>
                                <Row className="ant-row-text">
                                    <Col className="text-left" span={8}>Họ tên bố:</Col>
                                    <Col className="text-right" span={16}>Phạm Hoàng A</Col>
                                </Row>
                                <Row className="ant-row-text">
                                    <Col className="text-left" span={8}>Họ tên mẹ:</Col>
                                    <Col className="text-right" span={16}>Nguyễn Thị A</Col>
                                </Row>
                                <Row className="ant-row-text">
                                    <Col className="text-left" span={8}>Họ tên gám hộ:</Col>
                                    <Col className="text-right" span={16}>Trần Thị M</Col>
                                </Row>
                            </Col>
                            <Col span={18}>
                                <Row>
                                    <Col span={8}>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Năm sinh bố:</Col>
                                            <Col className="text-right" span={16}>1962</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Năm sinh mẹ:</Col>
                                            <Col className="text-right" span={16}>1978</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Năm sinh GH:</Col>
                                            <Col className="text-right" span={16}>1956</Col>
                                        </Row>
                                    </Col>
                                    <Col span={8}>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Nghề nghiệp bố:</Col>
                                            <Col className="text-right" span={16}>Luật sư</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Nghề nghiệp mẹ:</Col>
                                            <Col className="text-right" span={16}>Giáo viên</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Nghề nghiệp GH:</Col>
                                            <Col className="text-right" span={16}>Về hưu</Col>
                                        </Row>
                                    </Col>
                                    <Col span={8}>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Điện thoại bố:</Col>
                                            <Col className="text-right" span={16}>0352123456</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Điện thoại mẹ:</Col>
                                            <Col className="text-right" span={16}>0352321456</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Điện thoại GH:</Col>
                                            <Col className="text-right" span={16}>0352654123</Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>
        )
    }
}
