import React from 'react'
import './Tab.css'
import "@fontsource/source-sans-pro";
import{ DeleteOutlined, PicCenterOutlined } from '@ant-design/icons';
import{ FormOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import image1 from '../../assets/images/frame19.png'
import image2 from '../../assets/images/frame613.png'
import {
  Form,
  Input,
  Select,
  DatePicker,
} from 'antd';

import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;


function Box() {
    return (
      <>
        <div className="tab">
        <Card title="Thông tin chung" className="card1">
          <Row className="row1">
            <Col span={24}><div className="tab__content">
              <Col span={5}><div className="tab__content__image">
                <img src={image1} />
              </div>
              </Col>


              <Col span={10}>
                <div className="tab__content__form-left">
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
                <div className="tab__content__form-right">
                  <Form>
                    <Form.Item label="Fax" name="size">
                      <Input defaultValue="04941884194" />
                    </Form.Item>
                    <Form.Item label="Email" name="size">
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
                    <Form.Item label="Website" name="size">
                      <Input defaultValue="https://truongabc.com.vn" />
                    </Form.Item>
                    <Form.Item label="Hiệu trưởng" name="size">
                      <Input defaultValue="Bùi văn Phát" />
                    </Form.Item>
                    <Form.Item label="SĐT hiệu trưởng" name="size">
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
            <Col span={24}><div className="tab__content2">
              <Col span={5}>
                <div className="tab__content__image2">
                  <img src={image2} />
                </div>
              </Col>

              <Col span={10}>
                <div className="tab__content2__form-left__top">
                  <Form >
                    <Form.Item label="Tên cơ sở" name="size">
                      <Input defaultValue="Cơ sở A" />
                    </Form.Item>
                    <Form.Item label="Địa chỉ" name="size">
                      <Input defaultValue="233 Nguyễn Thị C Quận Bình Thạnh, TP HCM" />
                    </Form.Item>
                    <Form.Item label="SĐT trường">
                      <Input defaultValue="01258411" />
                    </Form.Item>
                  </Form>
                </div>

              </Col>


              <Col span={9}>
                <div className="tab__content2__form-right__top">
                  <Form>
                    <Form.Item label="Người phụ trách" name="size">
                      <Input defaultValue="Nguyễn Văn D" />
                    </Form.Item>
                    <Form.Item label="Di động" name="size">
                      <Input defaultValue="41984291895" />
                    </Form.Item>
                    <Form.Item label="Email">
                      <Input defaultValue="exxxx@gmail.com.vn" />
                    </Form.Item>
                  </Form>
                </div>

              </Col>

              <div className="tab__content__rec"></div>

            </div>
            </Col>
          </Row>

          <div className="br__box">
            <br />
          </div>

          <Row className="row3">
            <Col span={24}><div className="tab__content2">
              <Col span={5}>
                <div className="tab__content__image3">
                  <img src={image2} />
                </div>
              </Col>

              <Col span={10}>

                <div className="tab__content2__form-left__bottom">
                  <Form>
                    <Form.Item label="Tên cơ sở" name="size">
                      <Input defaultValue="Cơ sở A" />
                    </Form.Item>
                    <Form.Item label="Địa chỉ" name="size">
                      <Input defaultValue="233 Nguyễn Thị C Quận Bình Thạnh, TP HCM" />
                    </Form.Item>
                    <Form.Item label="SĐT trường">
                      <Input defaultValue="01258411" />
                    </Form.Item>
                  </Form>
                </div>
              </Col>


              <Col span={9}>

                <div className="tab__content2__form-right__bottom">
                  <Form>
                    <Form.Item label="Người phụ trách" name="size">
                      <Input defaultValue="Nguyễn Văn D" />
                    </Form.Item>
                    <Form.Item label="Di động" name="size">
                      <Input defaultValue="30194915951" />
                    </Form.Item>
                    <Form.Item label="Email">
                      <Input defaultValue="exxxx@gmail.com.vn" />
                    </Form.Item>
                  </Form>
                </div>
              </Col>

              <div className="tab__content__rec"></div>

            </div>
            </Col>
          </Row>
        </Card>
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