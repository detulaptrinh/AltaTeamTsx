import React, { Component } from 'react'
import './TabEdit.css'
import { DeleteOutlined, PicCenterOutlined } from '@ant-design/icons';
import { FormOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import {
  AvatarSchool,
  Avatar613,
} from "../../assets/images"
import {
  Form,
  Input,
  Select,
  DatePicker,
} from 'antd';

import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;
const { Option } = Select;


class TabEdit extends Component {
  render(){
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
                        <Col span={5}>
                        <div className="box__select">
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
                              <Button className="box__btn-group__cancel">Hủy</Button>
                              <Button className="box__btn-group__save" >Lưu</Button>
                          </div>
                        </Col>
                    </Col>
                </Row>
            </div>


      <div className="tab">
        <Card title="Thông tin chung" className="card1">
          <Row className="row1">
            <Col span={24}><div className="tabedit__content">
              <Col span={5}><div className="tabedit__content__image">
                <img src={AvatarSchool} />
              </div>
              </Col>

              <Col span={10}>
                <div className="tabedit__content__form-left">
                  <p className="title__content__form-left">Thông tin trường học</p>
                  <Form>
                    <Form.Item label="Tên trường" name="size">
                      <Input defaultValue="THCS Tự Lập" />
                    </Form.Item>

                    <Form.Item label="Mã chuẩn">
                      <Select defaultValue="20202021">
                        <Select.Option value="demo">Demo</Select.Option>
                      </Select>
                    </Form.Item>

                    <Form.Item label="Tỉnh/Thành phố">
                      <Select defaultValue="TP Hồ Chí Minh">
                        <Select.Option value="demo">Demo</Select.Option>
                      </Select>
                    </Form.Item>

                    <Form.Item label="Xã/Phường">
                      <Select defaultValue="Phường 1">
                        <Select.Option value="demo">Demo</Select.Option>
                      </Select>
                    </Form.Item>

                    <Form.Item label="Quận/Huyện">
                      <Select defaultValue="Bình Thạnh">
                        <Select.Option value="demo">Demo</Select.Option>
                      </Select>
                    </Form.Item >

                    <Form.Item label="Trụ sở chính">
                      <Input defaultValue="Không" />
                    </Form.Item>

                    <Form.Item label="Loại trường">
                      <Select defaultValue="Trung học cơ sở">
                        <Select.Option value="demo">Trung học phổ thông</Select.Option>
                      </Select>
                    </Form.Item>

                    <Form.Item label="Số điện thoại">
                      <Input defaultValue="090887222333" />
                    </Form.Item>
                  </Form>
                </div>
              </Col>

              <Col span={9}>
                <div className="tabedit__content__form-right">
                  <Form>
                    <Form.Item label="Fax">
                      <Input defaultValue="04941884194" />
                    </Form.Item>

                    <Form.Item label="Email" name="email">
                      <Input defaultValue="nguyenxasjke@gmail.com" />
                    </Form.Item>

                    <Form.Item label="Ngày thành lập">
                      <DatePicker />
                    </Form.Item>

                    <Form.Item label="Mô hình đào tạo">
                      <Select defaultValue="Công lập">
                        <Select.Option value="demo">Demo</Select.Option>
                      </Select>
                    </Form.Item>

                    <Form.Item label="Website" name="website">
                      <Input defaultValue="https://truongabc.com.vn" />
                    </Form.Item>

                    <Form.Item label="Hiệu trưởng" name="hieutruong">
                      <Input defaultValue="Bùi văn Phát" />
                    </Form.Item>

                    <Form.Item label="SĐT hiệu trưởng">
                      <Input defaultValue="04941884194" />
                    </Form.Item>
                  </Form>
                </div>
              </Col>
            </div></Col>
          </Row>
        </Card>


        <Card title="Thông tin cơ sở" className="card2" >
          <Row className="row2">
            <Col span={24}><div className="tabedit__content2">
              <Col span={5}>
                <div className="tabedit__content__image2">
                  <img src={Avatar613} />
                </div>
              </Col>

              <Col span={10}>
                <div className="tabedit__content2__form-left__top">
                  <Form >
                    <Form.Item label="Tên cơ sở" name="tencoso">
                      <Input defaultValue="Cơ sở A" />
                    </Form.Item>

                    <Form.Item label="Địa chỉ" name="diachi">
                      <Input defaultValue="233 Nguyễn Thị C Quận Bình Thạnh, TP HCM" />
                    </Form.Item>

                    <Form.Item label="SĐT trường">
                      <Input defaultValue="01258411" />
                    </Form.Item>
                  </Form>
                </div>
              </Col>


              <Col span={9}>
                <div className="tabedit__content2__form-right__top">
                  <Form>
                    <Form.Item label="Người phụ trách">
                      <Input defaultValue="Nguyễn Văn D" />
                    </Form.Item>

                    <Form.Item label="Di động">
                      <Input defaultValue="41984291895" />
                    </Form.Item>

                    <Form.Item label="Email">
                      <Input defaultValue="exxxx@gmail.com.vn" />
                    </Form.Item>
                  </Form>
                </div>
              </Col>

              <div className="tabedit__content__rec"></div>

            </div>
            </Col>
          </Row>

          <div className="br__box">
            <br />
          </div>

          <Row className="row3">
            <Col span={24}><div className="tabedit__content2">
              <Col span={5}>
                <div className="tabedit__content__image3">
                  <img src={Avatar613} />
                </div>
              </Col>

              <Col span={10}>
                <div className="tabedit__content2__form-left__bottom">
                  <Form>
                    <Form.Item label="Tên cơ sở">
                      <Input defaultValue="Cơ sở A" />
                    </Form.Item>

                    <Form.Item label="Địa chỉ">
                      <Input defaultValue="233 Nguyễn Thị C Quận Bình Thạnh, TP HCM" />
                    </Form.Item>

                    <Form.Item label="SĐT trường">
                      <Input defaultValue="01258411" />
                    </Form.Item>         
                  </Form>
                </div>
              </Col>

              <Col span={9}>
                <div className="tabedit__content2__form-right__bottom">
                  <Form>
                    <Form.Item label="Người phụ trách">
                      <Input defaultValue="Nguyễn Văn D" />
                    </Form.Item>

                    <Form.Item label="Di động">
                      <Input defaultValue="30194915951" />
                    </Form.Item>
                    
                    <Form.Item label="Email">
                      <Input defaultValue="exxxx@gmail.com.vn" />
                    </Form.Item>
                  </Form>
                </div>
              </Col>

              <div className="tabedit__content__rec"></div>

            </div>
            </Col>
          </Row>
        </Card>
      </div>
      </div>
    </>
  )
  /* Modal */
  }
}

export default TabEdit;