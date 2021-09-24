import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './profile.css'
import { 
  DeleteOutlined, 
  PicCenterOutlined,
  FormOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import {
  Form,
  Input,
  Select,
  DatePicker,
  Modal,
  Card,
  Row,
  Col,
  Button,
  Checkbox
} from 'antd';
import AvatarTeacher from '../../assets/images/Frame19.png'

const { confirm } = Modal;
const { Option } = Select;


export default class ProfileTeacher extends Component {
    render() {
        return (
            <>
             <Row>
                <Col span={24}>
                  <div className="title">
                    <div className="title-info-student">Hồ sơ giảng viên</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <Select id="school_year" defaultValue="2020-2021">
                    <Option value="2017-2018">2017-2018</Option>
                    <Option value="2017-2018">2018-2019</Option>
                    <Option value="2017-2018">2019-2020</Option>
                    <Option value="2017-2018" selected>2020-2021</Option>
                  </Select>
                </Col>
                <Col className="right-btn" span={8} offset={8}>
                  <div className="box">
                    <div className="btn-delete">
                      <button /* onClick={showModal} */>
                        <i className='bx bx-trash' />
                      </button>
                      <Modal 
                      className="box__btn-del" 
                      /* visible={isModalVisible} 
                      onOk={handleOk} 
                      onCancel={handleCancel} */>
                        <h1>Xóa</h1>
                        <p>Xác nhận muốn xóa những thông tin đã chọn? Sau khi xóa sẽ không thể hoàn tác.</p>
                        
                        <button className="box__btn-del-cancel" /* onClick={handleCancel} */>Hủy</button>
                        <button className="box__btn-del-acp" /* onClick={handleOk} */>Lưu</button>
                      </Modal>
                    </div>
                    <div className="btn-edit">
                      <button /* onClick={showModals}  */className="btn-bk-ff7506">
                      <Link className="" to="profile-teacher-edit"><i className='bx bx-plus'/>Chỉnh sửa</Link>
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
                    <div className="card__teacher_profile">
                        <Card title="Thông tin chung" bordered={false}>
                            <Row>
                                <Col span={4}>
                                    <img src={AvatarTeacher} alt="" />
                                </Col>
                                <Col className="mleft" span={18}>
                                    <div className="ant-col-title">Thông tin học viên</div>
                                    <Row>
                                        <Col span={8}>
                                            <Row className="ant-row-text">
                                                <Col className="text-left" span={8}>Mã giảng viên:</Col>
                                                <Col className="text-right" span={16}>MGV89K1095</Col>
                                            </Row>
                                            <Row>
                                              <Col className="text-left" span={8}></Col>
                                              <Col className="text-right" span={16}>
                                                <Checkbox className="text__content_nomain">Sinh mã tự động</Checkbox>  
                                              </Col>                                  
                                            </Row>
                                            <Row className="ant-row-text">
                                                <Col className="text-left" span={8}>Tổ - Bộ môn:</Col>
                                                <Col className="text-right" span={16}>Toán - Lý - Hóa</Col>
                                            </Row>
                                            <Row className="ant-row-text">
                                                <Col className="text-left" span={8}>Môn giảng dạy:</Col>
                                                <Col className="text-right" span={16}>Toán</Col>
                                            </Row>
                                            <Row className="ant-row-text">
                                                <Col className="text-left" span={8}>Họ và tên:</Col>
                                                <Col className="text-right" span={16}>Trần Nhựt Minh</Col>
                                            </Row>
                                            <Row className="ant-row-text">
                                                <Col className="text-left" span={8}>Ngày sinh:</Col>
                                                <Col className="text-right" span={16}>10/10/1989</Col>
                                            </Row>
                                            <Row className="ant-row-text">
                                                <Col className="text-left" span={8}>Giới tính:</Col>
                                                <Col className="text-right" span={16}>Nam</Col>
                                            </Row>
                                            <Row className="ant-row-text">
                                                <Col className="text-left" span={8}>Dân tộc:</Col>
                                                <Col className="text-right" span={16}>Kinh</Col>
                                            </Row>
                                            <Row className="ant-row-text">
                                                <Col className="text-left" span={8}>Ngày vào trường:</Col>
                                                <Col className="text-right" span={16}>Dd/Mm/Yy</Col>
                                            </Row>
                                        </Col>
                                        <Col span={8}>
                                            <Row className="ant-row-text">
                                                <Col className="text-left" span={8}>Quốc tịch:</Col>
                                                <Col className="text-right" span={16}>Việt Nam</Col>
                                            </Row>
                                            <Row className="ant-row-text">
                                                <Col className="text-left" span={8}>Tôn giáo:</Col>
                                                <Col className="text-right" span={16}>Phật giáo</Col>
                                            </Row>
                                            <Row className="ant-row-text">
                                                <Col className="text-left" span={8}>Trạng thái:</Col>
                                                <Col className="text-right" span={16}>
                                                  <div className="text-right-box">
                                                    <i className='bx bx-wifi-0'></i>Đang theo học
                                                  </div>
                                                </Col>
                                            </Row><br/>
                                            <Row className="ant-row-text">
                                                <Col className="text-left" span={8}>Môn kiêm nghiệm:</Col>
                                                <Col className="text-right" span={16}>
                                                  <button className="btn__object__student" >Toán</button>
                                                  <button className="btn__object__student">Vật Lý</button>
                                                </Col>
                                            </Row>
                                            <Row className="ant-row-text">
                                                <Col className="text-left" span={8}>Bí danh:</Col>
                                                <Col className="text-right" span={16}>Không</Col>
                                            </Row>
                                        </Col>
                                        <Col className="mt1" span={8}>
                                        <div className="ant-col-title">Địa chỉ liên hệ</div>
                                            <Row className="ant-row-text">
                                                <Col className="text-left" span={8}>Địa chỉ:</Col>
                                                <Col className="text-right" span={16}>45 Bà Huyện Thanh Quan Q.1 TP.HCM</Col>
                                            </Row>
                                            <Row className="ant-row-text">
                                                <Col className="text-left" span={8}>Email:</Col>
                                                <Col className="text-right" span={16}>nhtminh@gmail.com</Col>
                                            </Row>
                                            <Row className="ant-row-text">
                                                <Col className="text-left" span={8}>SĐT:</Col>
                                                <Col className="text-right" span={16}>0922922159</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                        <div className="box_br"><br /></div>
                        <Card bordered={false} className="communications">
                            <Row>
                                <Col span={4}>
                                </Col>
                                <Col className="mleft" span={18}>
                                    <div className="ant-col-title">Thông tin cá nhân</div>
                                    <Row>
                                    <Col span={8}>
                                        <Row className="ant-row-text">
                                            <Col className="communications-text-left">CMND/CCND:</Col>
                                            <Col className="communications-text-right">87456 - xxxx - xxxx</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="communications-text-left">Ngày cấp:</Col>
                                            <Col className="communications-text-right">Dd/Mm/Yy</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="communications-text-left">Nơi cấp:</Col>
                                            <Col className="communications-text-right">TP.HCM</Col>
                                        </Row>
                                    </Col>
                                    <Col span={8}>
                                        <Row className="ant-row-text">
                                            <Col className="text__content_nomain">
                                              <Checkbox>Đoàn viên</Checkbox>
                                            </Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="communications-text-left">Ngày vào Đoàn:</Col>
                                            <Col className="communications-text-right">Dd/Mm/Yy</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="communications-text-left">Nơi vào Đoàn:</Col>
                                            <Col className="communications-text-right">TP.HCM</Col>
                                        </Row>
                                    </Col>
                                    <Col span={8}>
                                        <Row className="ant-row-text">
                                            <Col className="text__content_nomain">
                                              <Checkbox>Đảng viên</Checkbox>
                                            </Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="communications-text-left">Ngày vào Đảng:</Col>
                                            <Col className="communications-text-right">Dd/Mm/Yy</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="communications-text-left">Nơi vào Đảng:</Col>
                                            <Col className="communications-text-right">TP.HCM</Col>
                                        </Row>
                                    </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                        <div className="box_br"><br /></div>
                        <Card bordered={false} className="communications">
                            <Row>
                                <Col span={4}>
                                </Col>
                                <Col className="mleft" span={18}>
                                    <div className="ant-col-title">Thông tin gia đình</div>
                                    <Row>
                                    <Col span={8}>
                                        <Row className="ant-row-text">
                                            <Col className="communications-text-left">Người liên hệ:</Col>
                                            <Col className="communications-text-right">Trần Nhựt Nam</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="communications-text-left">Địa chỉ:</Col>
                                            <Col className="communications-text-right">248 Calmette P.Nguyễn Thái</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="communications-text-left"></Col>
                                            <Col className="communications-text-right">Bình Q.1 TP.HCM</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="communications-text-left">SĐT:</Col>
                                            <Col className="communications-text-right">0922922159</Col>
                                        </Row>
                                    </Col>
                                    <Col span={8}>
                                    <Row className="ant-row-text">
                                            <Col className="communications-text-left">Người liên hệ2:</Col>
                                            <Col className="communications-text-right">Nguyễn Minh Châu</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="communications-text-left">Địa chỉ:</Col>
                                            <Col className="communications-text-right">248 Calmette P.Nguyễn Thái</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="communications-text-left"></Col>
                                            <Col className="communications-text-right">Bình Q.1 TP.HCM</Col>
                                        </Row>
                                        <Row className="ant-row-text">
                                            <Col className="communications-text-left">SĐT:</Col>
                                            <Col className="communications-text-right">0922922159</Col>
                                        </Row>
                                    </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    </div>
        
        
            </>
          )
    }
}
