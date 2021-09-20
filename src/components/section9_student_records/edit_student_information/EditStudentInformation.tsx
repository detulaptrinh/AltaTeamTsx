import React, { Component } from 'react'

// css
import './EditStudentInformation.css';

// icon antd
import { Row, Col, Card, Input, Checkbox, Select, DatePicker } from 'antd';

// avatar
import avatar_thong_tin from '../../../assets/avg/avatar-thong tin.png';

const style = { height: '16px', background: '#F2F2F2' };

const { Option } = Select; //select

export default class EditStudentInformation extends Component {
    render() {
        return (
            <div className="section-9-1-1">
                {/* Breadcrumb */}
                <Row>
                    <Col span={24}>
                        <div className="title">
                            <div><span>Hồ sơ học viên</span></div>
                            <i className='bx bx-chevron-right'></i>
                            <div className="title-edit-info-student">Chỉnh sửa thông tin học viên</div>
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
                            <div className="btn-delete">
                                <i className='bx bx-trash' ></i>
                            </div>
                            <div className="btn-excel">
                                <div className="btn-bk-cancel">Huỷ</div>
                            </div>
                            <div className="btn-edit">
                                <div className="btn-bk-ff7506">
                                    <i className='bx bx-edit' ></i> Lưu
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
                                <img src={avatar_thong_tin} alt="" />
                            </Col>
                            <Col span={18}>
                                <div className="ant-col-title">Thông tin học viên</div>
                                <Row>
                                    <Col span={12}>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Họ và tên:</Col>
                                            <Col className="text-right" span={16}><Input placeholder="Phạm Hoàng C" /></Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Giới tính:</Col>
                                            <Col className="text-right" span={16}>
                                                <Select defaultValue="lucy" style={{ width: 95 }} onChange={handleChange}>
                                                    <Option value="jack">Jack</Option>
                                                    <Option value="lucy">Lucy</Option>
                                                    <Option value="Yiminghe">yiminghe</Option>
                                                    <Option value="Yiminghe">yiminghe</Option>
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Ngày sinh:</Col>
                                            <Col span={16}>
                                                <DatePicker onChange={onChangeDate} />
                                            </Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Nơi sinh:</Col>
                                            <Col className="text-right" span={16}><Input placeholder="Phạm Hoàng C" /></Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Dân tộc:</Col>
                                            <Col className="text-right" span={16}><Input placeholder="Phạm Hoàng C" /></Col>
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
                                                <Select defaultValue="lucy" style={{ width: 360 }} onChange={handleChange}>
                                                    <Option value="jack">Jack</Option>
                                                    <Option value="lucy">Lucy</Option>
                                                    <Option value="Yiminghe">yiminghe</Option>
                                                    <Option value="Yiminghe">yiminghe</Option>
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Khối:</Col>
                                            <Col className="text-right" span={16}>
                                                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                                    <Option value="jack">Jack</Option>
                                                    <Option value="lucy">Lucy</Option>
                                                    <Option value="Yiminghe">yiminghe</Option>
                                                    <Option value="Yiminghe">yiminghe</Option>
                                                </Select>
                                                <Select defaultValue="lucy" style={{ width: 120, marginLeft: 20 }} onChange={handleChange}>
                                                    <Option value="jack">Jack</Option>
                                                    <Option value="lucy">Lucy</Option>
                                                    <Option value="Yiminghe">yiminghe</Option>
                                                    <Option value="Yiminghe">yiminghe</Option>
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Mã học viên:</Col>
                                            <Col className="text-right" span={16}>
                                                <Input className="checked-184" placeholder="Phạm Hoàng C" />
                                                <Checkbox onChange={onChange}>Sinh mã tự động</Checkbox>
                                            </Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Ngày nhập học:</Col>
                                            <Col span={16}>
                                                <DatePicker onChange={onChangeDate} />
                                            </Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Hình thức:</Col>
                                            <Col className="text-right" span={16}>
                                                <Select defaultValue="lucy" style={{ width: 360}} onChange={handleChange}>
                                                    <Option value="jack">Jack</Option>
                                                    <Option value="lucy">Lucy</Option>
                                                    <Option value="Yiminghe">yiminghe</Option>
                                                    <Option value="Yiminghe">yiminghe</Option>
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Trạng thái:</Col>
                                            <Col className="text-right" span={16}>
                                                <Select defaultValue="lucy" style={{ width: 360 }} onChange={handleChange}>
                                                    <Option value="jack">Jack</Option>
                                                    <Option value="lucy">Lucy</Option>
                                                    <Option value="Yiminghe">yiminghe</Option>
                                                    <Option value="Yiminghe">yiminghe</Option>
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
                                            <Col className="text-right" span={16}><Input placeholder="" /></Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="text-left" span={8}>Điện thoại:</Col>
                                            <Col className="text-right" span={16}><Input placeholder="" /></Col>
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
                                    <Col className="text-right w-104" span={12}><Input placeholder="" /></Col>
                                </Row>
                                <Row className="ant-row-text">
                                    <Col className="text-left" span={12}>Năm sinh mẹ:</Col>
                                    <Col className="text-right w-104" span={12}><Input placeholder="" /></Col>
                                </Row>
                                <Row className="ant-row-text">
                                    <Col className="text-left" span={12}>Năm sinh GH:</Col>
                                    <Col className="text-right w-104" span={12}><Input placeholder="" /></Col>
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
                                    <Col className="text-right w-231" span={12}><Input placeholder="" /></Col>
                                </Row>
                            </Col>
                            <Col span={8} style={{ paddingLeft: '1rem' }}>
                                <Row className="ant-row-text">
                                    <Col className="text-left" span={12}>Điện thoại mẹ:</Col>
                                    <Col className="text-right w-231" span={12}><Input placeholder="" /></Col>
                                </Row>
                            </Col>
                            <Col span={8} style={{ paddingLeft: '1rem' }}>
                                <Row className="ant-row-text">
                                    <Col className="text-left" span={12}>Điện thoại giám:</Col>
                                    <Col className="text-right w-231" span={12}><Input placeholder="" /></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>
        )
    }
}

// checkbox
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

// select
function handleChange(value) {
    console.log(`selected ${value}`);
}

// date
function onChangeDate(date, dateString) {
    console.log(date, dateString);
}