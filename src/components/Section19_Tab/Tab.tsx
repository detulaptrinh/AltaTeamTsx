import React from 'react'
import './Tab.css'
import { FormOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Row, Col, } from 'antd';
import { Card } from 'antd';
import {
  AvatarSchool,
  Avatar613,
} from "../../assets/images"
import {
  Select
} from 'antd';

import { Modal } from 'antd';

const { confirm } = Modal;
const { Option } = Select;

function showExportFileConfirm() {
  confirm({
    title: 'Xuất file lưu',
    content: 'Xác nhận muốn xuất file này và toàn bộ thông tin bên trong? File lưu sẽ được tự động tải xuống.',
    okText: 'Xác nhận',
    okType: 'danger',
    cancelText: 'Hủy',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}


function Box() {
  return (
    <> 
    <div className="section19">
          <div className="section19__title">
                <Row>
                    <Col span={24}>
                        <div className="title">
                            <h1>Thông tin nhà trường</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="row1">
                    <Col span={24} className="switch__tab">
                        <Col span={5}><div className="box__select">
                            <Col span={12}>
                                <Select defaultValue="1" className="box__select__year">
                                    <Option value="1">2020-2021</Option>
                                    <Option value="2">2019-2020</Option>
                                    <Option value="3">2018-2019</Option>
                                  
                                </Select>
                            </Col>
                          
                        </div>
                        </Col>
                        <Col span={9}>

                        </Col>

                        <Col span={10}>
                        <div className="box__btn-group">
                          <Button className="box__btn-group__export" onClick={showExportFileConfirm}>Xuất File</Button>
                          <Button className="box__btn-group__edit" ><FormOutlined />Chỉnh sửa</Button>
                       </div>
                        </Col>
                    </Col>
                </Row>

            </div>

    
      <div className="tab">
        <Card title="Thông tin chung" className="card1">
          <Row className="row1">
            <Col span={24}>
              <div className="tab__content">
                <Col span={5}><div className="tab__content__image">
                  <img src={AvatarSchool} />
                </div>
                </Col>


                <Col span={14}>
                  <div className="tab__content__title1">Trung học cơ sở Tự lập</div>
                  <Row>
                    <Col span={12}>
                      <div className="tab__content__form-left">
                        <Row>
                          <Col className="text__left" span={8}>Tên trường: </Col>
                          <Col className="text__right" span={16}>THCS Tự Lập</Col>
                        </Row>
                        <Row className="ant-row-text">
                          <Col className="text__left" span={8}>Mã chuẩn: </Col>
                          <Col className="text__right" span={16}>20202021</Col>
                        </Row>
                        <Row>
                          <Col className="text__left" span={8}>Tỉnh/Thành phố: </Col>
                          <Col className="text__right" span={16}>Tp. Hồ Chí Minh</Col>
                        </Row>
                        <Row>
                          <Col className="text__left" span={8}>Xã/Phường: </Col>
                          <Col className="text__right" span={16}>Phường 1</Col>
                        </Row>
                        <Row>
                          <Col className="text__left" span={8}>Quận/Huyện: </Col>
                          <Col className="text__right" span={16}>Bình Thạnh</Col>
                        </Row>
                        <Row>
                          <Col className="text__left" span={8}>Trụ sở chính: </Col>
                          <Col className="text__right" span={16}>Không</Col>
                        </Row>
                        <Row>
                          <Col className="text__left" span={8}>Loại trường: </Col>
                          <Col className="text__right" span={16}>Trung học cơ sở</Col>
                        </Row>
                        <Row>
                          <Col className="text__left" span={8}>Số điện thoại: </Col>
                          <Col className="text__right" span={16}>0123456789</Col>
                        </Row>
                      </div>
                    </Col>


                    <Col span={12}>
                      <div className="tab__content__form-right">
                        <Row>
                          <Col className="text__left" span={8}>Fax:</Col>
                          <Col className="text__right" span={16}>09085677667</Col>
                        </Row>
                        <Row>
                          <Col className="text__left" span={8}>Email:</Col>
                          <Col className="text__right" span={16}>nguyenxasjke@gmail.com</Col>
                        </Row>
                        <Row>
                          <Col className="text__left" span={8}>Ngày thành lập:</Col>
                          <Col className="text__right" span={16}>05/09/2013</Col>
                        </Row>
                        <Row>
                          <Col className="text__left" span={8}>Mô hình đào tạo:</Col>
                          <Col className="text__right" span={16}>Công lập</Col>
                        </Row>
                        <Row>
                          <Col className="text__left" span={8}>Website:</Col>
                          <Col className="text__right" span={16}>https://truongabc.com.vn</Col>
                        </Row>
                        <Row>
                          <Col className="text__left" span={8}>Hiệu trưởng:</Col>
                          <Col className="text__right" span={16}>Bùi Văn Phát</Col>
                        </Row>
                        <Row>
                          <Col className="text__left" span={8}>SĐT hiệu trưởng:</Col>
                          <Col className="text__right" span={16}>0989222112</Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col span={5}>                                  
                </Col>
              </div>
            </Col>
          </Row>
        </Card>


        <Card title="Thông tin cơ sở" className="card2" >
          <Row className="row2">
            <Col span={24}>
              <div className="tab__content2">
                <Col span={5}>
                  <div className="tab__content__image2">
                    <img src={Avatar613} />
                  </div>
                </Col>

                <Col span={14}>
                  <div className="tab__content__title1">Trung học cơ sở Tự Lập Cơ Sở A</div>
                  <Row>
                    <Col span={12}>
                      <div className="tab__content__form-left">
                        <Row>
                          <Col className="text__left" span={8}>Email: </Col>
                          <Col className="text__right" span={16}>nguyesssss@gmail.com</Col>
                        </Row>
                        <Row className="ant-row-text">
                          <Col className="text__left" span={8}>SĐT: </Col>
                          <Col className="text__right" span={16}>014521447741</Col>
                        </Row>
                        
                        
                      </div>
                    </Col>


                    <Col span={12}>
                      <div className="tab__content__form-right">
                        <Row>
                          <Col className="text__left" span={8}>Người phụ trách:</Col>
                          <Col className="text__right" span={16}>Nguyễn Văn A</Col>
                        </Row>
                        <Row>
                          <Col className="text__left" span={8}>SĐT:</Col>
                          <Col className="text__right" span={16}>014521447741</Col>
                        </Row>                      
                      </div>
                    </Col>
                    
                  </Row>
                        <Row className="text__address">
                          <Col className="text__left" span={4}>Địa chỉ:</Col>
                          <Col className="text__right" span={20}>12 Nguyễn Văn A, phường 12 Quận 6, thành phố Hồ Chí Minh</Col>
                        </Row>
                       
                </Col>

                <Col span={5}>                                  
                </Col>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
      </div>
    </>
  )
  /* Modal */
  function showDeleteConfirm() {
    confirm({
      title: 'Xóa thông tin',
      content: 'Xác nhận muốn xoá thông tin này và toàn bộ thông tin bên trong? Sau khi xoá sẽ không thể hoàn tác.',
      okText: 'Xác nhận',
      okType: 'danger',
      cancelText: 'Hủy',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });

  }
}

export default Box