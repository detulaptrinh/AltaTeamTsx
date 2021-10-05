import React, { useState } from "react";
import "./profile.css";
import {
  DeleteOutlined,
  PicCenterOutlined,
  FormOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
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
  Checkbox,
  Table,
  Space,
} from "antd";
import { AvatarTeacher } from "../../assets/images";
import { IconTrash } from "../../assets/svg";
import { Link } from "react-router-dom";

const { confirm } = Modal;
const { Option } = Select;

const columns = [
  {
    title: "Người liên hệ",
    dataIndex: "name",
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
  },
  {
    title: "SĐT",
    dataIndex: "phonenumber",
  },
  {
    title: "",
    dataIndex: "icon",
    render: () => (
      <Space>
        <img src={IconTrash} alt="" />
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "Lê Hoàng Long",
    address: "245 Camltte Q.1 TP.HCM",
    phonenumber: "0922922159",
    icon: "",
  },
  {
    key: "2",
    name: "Lê Hoàng Long",
    address: "245 Camltte Q.1 TP.HCM",
    phonenumber: "0922922159",
    icon: "",
  },
];

export default function ProfileTeacherEdit() {
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibles, setIsModalVisibles] = useState(false);
  const [isModalVisibless, setIsModalVisibless] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const showModals = () => {
    setIsModalVisibles(true);
  };
  const showModalss = () => {
    setIsModalVisibless(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleOks = () => {
    setIsModalVisibles(false);
  };

  const handleCancels = () => {
    setIsModalVisibles(false);
  };

  const handleOkss = () => {
    setIsModalVisibless(false);
  };

  const handleCancelss = () => {
    setIsModalVisibless(false);
  };
  return (
    <>
      <div className="section14">
        <Row>
          <Col span={24}>
            <div className="titles">
              <span>Hồ sơ giảng viên</span>
              <i className="bx bx-chevron-right" />
              <div className="title-info-student">
                Chỉnh sửa thông tin giảng viên
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="info__tab__box" span={7}>
            <div className="switch__tab__box">
              <div className="switch__tab__box-general-information active">
                <Link to="/profile-teacher" className="active">
                  Thông tin chung
                </Link>
              </div>
              <div className="switch__tab__box-study-process">
                <Link to="/profile-process">Quá trình học tập</Link>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <Select id="school_year" defaultValue="2020-2021">
              <Option value="2017-2018">2017-2018</Option>
              <Option value="2017-2018">2018-2019</Option>
              <Option value="2017-2018">2019-2020</Option>
              <Option value="2017-2018" selected>
                2020-2021
              </Option>
            </Select>
          </Col>
          <Col className="right-btn" span={8} offset={1}>
            <div className="box">
              <div className="btn-delete">
                <button onClick={showModal}>
                  <i className="bx bx-trash" />
                </button>
                <Modal
                  className="box__btn-del"
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <h1>Xóa</h1>
                  <p>
                    Xác nhận muốn xóa những thông tin đã chọn? Sau khi xóa sẽ
                    không thể hoàn tác.
                  </p>

                  <button
                    className="box__btn-del-cancel"
                    onClick={handleCancel}
                  >
                    Hủy
                  </button>
                  <button className="box__btn-del-acp" onClick={handleOk}>
                    Lưu
                  </button>
                </Modal>
              </div>
              <div className="btn-edit">
                <button className="btn-bk-ff7506">
                  <Link className="text__box_white" to="profile-teacher-edit">
                    Lưu
                  </Link>
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
              <Col className="mleft1" span={18}>
                <div className="ant-col-title">Thông tin học viên</div>
                <Row>
                  <Col span={9}>
                    <Row className="ant-row-text">
                      <Col className="text-left-edit" span={8}>
                        Mã giảng viên:
                      </Col>
                      <Col className="text-right" span={12}>
                        <Input
                          className="input__textr__profile"
                          defaultValue="MGV89K1095"
                        ></Input>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="text-left-edit" span={8}></Col>
                      <Col className="text-right-edit" span={12}>
                        <Checkbox className="text__content_nomain">
                          Sinh mã tự động
                        </Checkbox>
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="text-left-edit" span={8}>
                        Tổ - Bộ môn:
                      </Col>
                      <Col className="text-right-edit" span={12}>
                        <Select
                          defaultValue="Toán - Lý - Hóa"
                          style={{ width: 210 }}
                        >
                          <Option value="Toán - Lý - Hóa">
                            Toán - Lý - Hóa
                          </Option>
                          <Option value="Toán - Lý - Hóa">
                            Toán - Lý - Hóa
                          </Option>
                          <Option value="Toán - Lý - Hóa">
                            Toán - Lý - Hóa
                          </Option>
                        </Select>
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="text-left-edit" span={8}>
                        Môn giảng dạy:
                      </Col>
                      <Col className="text-right-edit" span={12}>
                        <Select defaultValue="Toán" style={{ width: 210 }}>
                          <Option value="Toán">Toán</Option>
                          <Option value="Toán">Toán</Option>
                          <Option value="Toán">Toán</Option>
                        </Select>
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="text-left-edit" span={8}>
                        Họ và tên:
                      </Col>
                      <Col className="text-right-edit" span={12}>
                        <Select
                          defaultValue="Trần Nhựt Minh"
                          style={{ width: 210 }}
                        >
                          <Option value="Trần Nhựt Minh">Trần Nhựt Minh</Option>
                          <Option value="Trần Nhựt Minh">Trần Nhựt Minh</Option>
                          <Option value="Trần Nhựt Minh">Trần Nhựt Minh</Option>
                        </Select>
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="text-left-edit" span={8}>
                        Ngày sinh:
                      </Col>
                      <Col className="text-right-edit" span={12}>
                        <DatePicker />
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="text-left-edit" span={8}>
                        Giới tính:
                      </Col>
                      <Col className="text-right-edit" span={12}>
                        <Select defaultValue="Nam" style={{ width: 210 }}>
                          <Option value="Nam">Nam</Option>
                          <Option value="Nữ">Nữ</Option>
                        </Select>
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="text-left-edit" span={8}>
                        Dân tộc:
                      </Col>
                      <Col className="text-right-edit" span={12}>
                        <Select defaultValue="Kinh" style={{ width: 210 }}>
                          <Option value="Kinh">Kinh</Option>
                          <Option value="Kinh">Kinh</Option>
                          <Option value="Kinh">Kinh</Option>
                        </Select>
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="text-left-edit" span={8}>
                        Ngày vào trường:
                      </Col>
                      <Col className="text-right-edit" span={16}>
                        <DatePicker />
                      </Col>
                    </Row>
                  </Col>
                  <Col className="box__right__mr" span={7}>
                    <Row className="ant-row-text">
                      <Col className="text-left-edit" span={8}>
                        Quốc tịch:
                      </Col>
                      <Col className="text-right-edit" span={12}>
                        <Select defaultValue="Việt Nam" style={{ width: 210 }}>
                          <Option value="Việt Nam">Việt Nam</Option>
                          <Option value="Việt Nam">Việt Nam</Option>
                          <Option value="Việt Nam">Việt Nam</Option>
                        </Select>
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="text-left-edit" span={8}>
                        Tôn giáo:
                      </Col>
                      <Col className="text-right-edit" span={12}>
                        <Select
                          defaultValue="Đang giảng dạy"
                          style={{ width: 210 }}
                        >
                          <Option value="Phật giáo">Phật giáo</Option>
                          <Option value="Thiên Chúa giáo">
                            Thiên Chúa giáo
                          </Option>
                        </Select>
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="text-left-edit" span={8}>
                        Trạng thái:
                      </Col>
                      <Col className="text-right-edit" span={16}>
                        <Select defaultValue="Không" style={{ width: 210 }}>
                          <Option value="Không">Không</Option>
                          <Option value="Không">Không</Option>
                        </Select>
                      </Col>
                    </Row>
                    <br />
                    <Row className="ant-row-text">
                      <Col className="text-left-edit" span={8}>
                        Môn kiêm nghiệm:
                      </Col>
                      <Col className="text-right-edit" span={16}>
                        <button className="btn__object__student">Toán</button>
                        <button className="btn__object__student">Vật Lý</button>
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="text-left-edit" span={8}>
                        Bí danh:
                      </Col>
                      <Col className="text-right-edit" span={16}>
                        <Select
                          defaultValue="Đang giảng dạy"
                          style={{ width: 210 }}
                        >
                          <Option value="Đang giảng dạy">Đang giảng dạy</Option>
                          <Option value="Nghỉ dạy">Nghỉ dạy</Option>
                        </Select>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="mt" span={8}>
                    <div className="ant-col-title">Địa chỉ liên hệ</div>
                    <Row className="ant-row-text">
                      <Col className="text-left-edit" span={8}>
                        Tỉnh/ Thành:
                      </Col>
                      <Col className="text-right-edit" span={16}>
                        <Select defaultValue="Tp.HCM" style={{ width: 210 }}>
                          <Option value="Tp.HCM">Tp.HCM</Option>
                          <Option value="Tp.HCM">Tp.HCM</Option>
                        </Select>
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="text-left-edit" span={8}>
                        Xã/ Phường
                      </Col>
                      <Col className="text-right-edit" span={16}>
                        <Select defaultValue="1" style={{ width: 210 }}>
                          <Option value="1">1</Option>
                          <Option value="1">1</Option>
                        </Select>
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="text-left-edit" span={8}>
                        Quận/ Huyện:
                      </Col>
                      <Col className="text-right-edit" span={16}>
                        <Select defaultValue="1" style={{ width: 210 }}>
                          <Option value="1">1</Option>
                          <Option value="1">1</Option>
                        </Select>
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="text-left-edit" span={8}>
                        Địa chỉ:
                      </Col>
                      <Col className="text-right-edit" span={16}>
                        <Select
                          defaultValue="45 Bà Huyện Thanh Quan"
                          style={{ width: 210 }}
                        >
                          <Option value="45 Bà Huyện Thanh Quan">
                            45 Bà Huyện Thanh Quan
                          </Option>
                          <Option value="45 Bà Huyện Thanh Quan">
                            45 Bà Huyện Thanh Quan
                          </Option>
                        </Select>
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="text-left-edit" span={8}>
                        Email:
                      </Col>
                      <Col className="text-right-edit" span={16}>
                        <Select
                          defaultValue="nhtminh@gmail.com"
                          style={{ width: 210 }}
                        >
                          <Option value="nhtminh@gmail.com">
                            nhtminh@gmail.com
                          </Option>
                          <Option value="nhtminh@gmail.com">
                            nhtminh@gmail.com
                          </Option>
                        </Select>
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="text-left-edit" span={8}>
                        SĐT:
                      </Col>
                      <Col className="text-right-edit" span={16}>
                        <Select
                          defaultValue="0922922159"
                          style={{ width: 210 }}
                        >
                          <Option value="0922922159">0922922159</Option>
                          <Option value="0922922159">0922922159</Option>
                        </Select>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
          <div className="box_br">
            <br />
          </div>
          <Card bordered={false} className="communications">
            <Row>
              <Col span={4}></Col>
              <Col className="mleft" span={18}>
                <div className="ant-col-title">Thông tin cá nhân</div>
                <Row>
                  <Col span={8}>
                    <Row className="ant-row-text">
                      <Col className="communications-text-left-edit">
                        Giới tính:
                      </Col>
                      <Col className="communications-text-right-edit">
                        <Input
                          className="input__textr__profile"
                          defaultValue="Nam"
                        />
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="communications-text-left-edit">
                        Dân tộc:
                      </Col>
                      <Col className="communications-text-right-edit">
                        <Input
                          className="input__textr__profile"
                          defaultValue="Kinh"
                        />
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="communications-text-left-edit">
                        Ngày vào trường:
                      </Col>
                      <Col className="communications-text-right-edit">
                        <Input
                          className="input__textr__profile"
                          defaultValue="16/04/2000"
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col span={8}>
                    <Row className="ant-row-text">
                      <Col className="text__content_nomain">
                        <Checkbox>Đoàn viên</Checkbox>
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="communications-text-left-edit">
                        Dân tộc:
                      </Col>
                      <Col className="communications-text-right-edit">
                        <Input
                          className="input__textr__profile"
                          defaultValue="Kinh"
                        />
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="communications-text-left-edit">
                        Ngày vào Đoàn:
                      </Col>
                      <Col className="communications-text-right-edit">
                        <Input
                          className="input__textr__profile"
                          defaultValue="16/04/2000"
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col span={8}>
                    <Row className="ant-row-text">
                      <Col className="text__content_nomain">
                        <Checkbox>Đảng viên</Checkbox>
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="communications-text-left-edit">
                        Dân tộc:
                      </Col>
                      <Col className="communications-text-right-edit">
                        <Input
                          className="input__textr__profile"
                          defaultValue="Kinh"
                        />
                      </Col>
                    </Row>
                    <Row className="ant-row-text">
                      <Col className="communications-text-left-edit">
                        Ngày vào Đoàn:
                      </Col>
                      <Col className="communications-text-right-edit">
                        <Input
                          className="input__textr__profile"
                          defaultValue="16/04/2000"
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
          <div className="box_br">
            <br />
          </div>
          <Card bordered={false} className="communications">
            <Row>
              <Col span={4}></Col>
              <Col className="mleft" span={18}>
                <Row>
                  <Col className="mt2" span={20}>
                    <span className="ant-col-title mt1 ">
                      Thông tin gia đình
                    </span>
                  </Col>
                  <Col className="mt2" span={4}>
                    <button className="btn__profile" onClick={showModals}>
                      Thêm
                    </button>
                    <Modal
                      className="box__add__profile"
                      visible={isModalVisibles}
                      onOk={handleOks}
                      onCancel={handleCancels}
                    >
                      <h1>Xóa</h1>
                    </Modal>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Table
                      className="table__edit__profile"
                      columns={columns}
                      dataSource={data}
                      pagination={false}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </>
  );
}
