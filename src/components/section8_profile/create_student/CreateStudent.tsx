import React, { Component } from 'react'
import './CreateStudent.css';
import { Row, Col, Card, Input, Checkbox, Select, DatePicker } from 'antd';
import {
    importAvatar,
    editAvatar,
  } from "../../../assets/images/index";

const style = { height: '16px', background: '#F2F2F2' };
const { Option } = Select;
export default class CreateStudent extends Component {
    render() {
        return (
            <div className="section-8-3">
                {/* Breadcrumb */}
                <Row>
                    <Col span={24}>
                        <div className="title">
                            <div><span>Hồ sơ học viên</span></div>
                            <i className='bx bx-chevron-right'></i>
                            <div className="title-create-student">Thêm học viên</div>
                        </div>
                    </Col>
                </Row>

                {/* card */}
                <div className="site-card-border-less-wrapper">
                    <Card className="card-border" title="Thông tin chung" bordered={false}>
                        <Row>
                            <Col span={6}>
                                <img src={importAvatar} alt="" />
                                <img className="card-avatar" src={editAvatar} alt="" />
                            </Col>
                            <Col span={18}>
                                <div className="ant-col-title">Thông tin học viên</div>
                                <Row>
                                    <Col span={12}>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Họ và tên:</Col>
                                            <Col className="text-right" span={16}><Input /></Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Giới tính:</Col>
                                            <Col className="text-right" span={16}>
                                                <Select defaultValue="Nam" style={{ width: 95 }} onChange={handleChange}>
                                                    <Option value="1">Nam</Option>
                                                    <Option value="2">Nữ</Option>
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Ngày sinh:</Col>
                                            <Col span={16}>
                                                <DatePicker placeholder="dd/mm/yy" />
                                            </Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Nơi sinh:</Col>
                                            <Col className="text-right" span={16}><Input /></Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Dân tộc:</Col>
                                            <Col className="text-right" span={16}><Input /></Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Tôn giáo:</Col>
                                            <Col className="text-right" span={16}><Input placeholder="" /></Col>
                                        </Row>
                                    </Col>
                                    <Col span={12} style={{ paddingLeft: '7rem' }}>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Niên khóa:</Col>
                                            <Col className="text-right" span={16}>
                                                <Select defaultValue="1" style={{ width: 360 }} onChange={handleChange}>
                                                    <Option value="1">2020-2021</Option>
                                                    <Option value="2">2019-2020</Option>
                                                    <Option value="3">2018-2019</Option>
                                                    <Option value="4">2017-2018</Option>
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Khối:</Col>
                                            <Col className="text-right" span={16}>
                                                <Select defaultValue="1" style={{ width: 120 }} onChange={handleChange}>
                                                    <Option value="1">7</Option>
                                                    <Option value="2">8</Option>
                                                    <Option value="3">9</Option>
                                                </Select>
                                                <Select defaultValue="1" style={{ width: 120, marginLeft: 20 }} onChange={handleChange}>
                                                    <Option value="1">7A</Option>
                                                    <Option value="2">7B</Option>
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Mã học viên:</Col>
                                            <Col className="text-right txt-right" span={16}>
                                                <Input className="checked-184" />
                                                <Checkbox onChange={onChange}>Sinh mã tự động</Checkbox>
                                            </Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Ngày nhập học:</Col>
                                            <Col span={16}>
                                                <DatePicker placeholder="dd/mm/yy" />
                                            </Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Hình thức:</Col>
                                            <Col className="text-right" span={16}>
                                                <Select defaultValue="1" style={{ width: 360 }} onChange={handleChange}>
                                                    <Option value="1">Trúng tuyển</Option>
                                                    <Option value="lucy">Lucy</Option>
                                                    <Option value="Yiminghe">yiminghe</Option>
                                                    <Option value="Yiminghe">yiminghe</Option>
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Trạng thái:</Col>
                                            <Col className="text-right" span={16}>
                                                <Select defaultValue="1" style={{ width: 360 }} onChange={handleChange}>
                                                    <Option value="1">Đang theo học</Option>
                                                    <Option value="2">Đã chuyển lớp</Option>
                                                    <Option value="3">Đã chuyển trường</Option>
                                                    <Option value="4">Đã thôi học</Option>
                                                </Select>
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
                                <Row>
                                    <Col span={12}>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Tỉnh/Thành phố:</Col>
                                            <Col className="text-right" span={16}><Input placeholder="" /></Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Quận/Huyện:</Col>
                                            <Col className="text-right" span={16}><Input placeholder="" /></Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Xã/Phường:</Col>
                                            <Col className="text-right" span={16}><Input placeholder="" /></Col>
                                        </Row>
                                    </Col>
                                    <Col span={12} style={{ paddingLeft: '7rem' }}>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Địa chỉ:</Col>
                                            <Col className="text-right" span={16}><Input placeholder="" /></Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Email:</Col>
                                            <Col className="text-right" span={16}><Input placeholder="example123@gmail.com" /></Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Điện thoại:</Col>
                                            <Col className="text-right" span={16}><Input placeholder="0xxxxxxxxx" /></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </div>

                {/* Thông tin gia đình */}
                <div className="site-card-border-less-wrapper site-card-border-less-wrapper-mt-0">
                    <Card title="Thông tin gia đình" bordered={false}>
                        <Row>
                            <Col span={8}>
                                <Row className="ant-row-text">
                                    <Col className="text-left" span={8}>Họ tên bố:</Col>
                                    <Col className="text-right" span={16}><Input placeholder="" /></Col>
                                </Row>
                                <Row className="ant-row-text">
                                    <Col className="text-left" span={8}>Họ tên mẹ:</Col>
                                    <Col className="text-right" span={16}><Input placeholder="" /></Col>
                                </Row>
                                <Row className="ant-row-text">
                                    <Col className="text-left" span={8}>Họ tên giám hộ:</Col>
                                    <Col className="text-right" span={16}><Input placeholder="" /></Col>
                                </Row>
                            </Col>
                            <Col span={8} className="pl-130">
                                <Row className="ant-row-text">
                                    <Col className="text-left" span={12}>Năm sinh bố:</Col>
                                    <Col className="text-right w-104" span={12}><Input style={{ width: 104 }} placeholder="" /></Col>
                                </Row>
                                <Row className="ant-row-text">
                                    <Col className="text-left" span={12}>Năm sinh mẹ:</Col>
                                    <Col className="text-right w-104" span={12}><Input style={{ width: 104 }} placeholder="" /></Col>
                                </Row>
                                <Row className="ant-row-text">
                                    <Col className="text-left" span={12}>Năm sinh GH:</Col>
                                    <Col className="text-right w-104" span={12}><Input style={{ width: 104 }} placeholder="" /></Col>
                                </Row>
                            </Col>
                            <Col span={8} style={{ paddingLeft: '1rem' }}>
                                <Row className="ant-row-text">
                                    <Col className="text-left" span={8}>Nghề nghiệp bố:</Col>
                                    <Col className="text-right" span={16}><Input placeholder="" /></Col>
                                </Row>
                                <Row className="ant-row-text">
                                    <Col className="text-left" span={8}>Nghề nghiệp mẹ:</Col>
                                    <Col className="text-right" span={16}><Input placeholder="" /></Col>
                                </Row>
                                <Row className="ant-row-text">
                                    <Col className="text-left" span={8}>Nghề nghiệp GH:</Col>
                                    <Col className="text-right" span={16}><Input placeholder="" /></Col>
                                </Row>
                            </Col>
                        </Row>

                        {/* Thông tin liên lạc */}
                        <div className="ant-col-title">Liên lạc gia đình</div>
                        <Row>
                            <Col span={8}>
                                <Row className="ant-row-text">
                                    <Col className="text-left" span={12}>Điện thoại bố:</Col>
                                    <Col className="text-right w-231" span={12}><Input style={{ width: 231 }} placeholder="" /></Col>
                                </Row>
                            </Col>
                            <Col span={8} style={{ paddingLeft: '1rem' }}>
                                <Row className="ant-row-text">
                                    <Col className="text-left" span={12}>Điện thoại mẹ:</Col>
                                    <Col className="text-right w-231" span={12}><Input style={{ width: 231 }} placeholder="" /></Col>
                                </Row>
                            </Col>
                            <Col span={8} style={{ paddingLeft: '1rem' }}>
                                <Row className="ant-row-text">
                                    <Col className="text-left" span={12}>Điện thoại giám:</Col>
                                    <Col className="text-right w-231" span={12}><Input style={{ width: 231 }} placeholder="" /></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </div>

                <div className="card-button">
                    <button className="card-button-cancel">Hủy</button>
                    <button className="card-button-save">Lưu</button>

                </div>
            </div>
        )
    }
}

// checkbox
function onChange(e: any) {
    console.log(`checked = ${e.target.checked}`);
}

// select
function handleChange(value: any) {
    console.log(`selected ${value}`);
}

// date
function onChangeDate(date: boolean, dateString: string) {
    console.log(date, dateString);
}