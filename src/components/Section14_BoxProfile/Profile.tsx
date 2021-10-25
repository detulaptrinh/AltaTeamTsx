import React, { Fragment, useState } from "react";
import {
  Row,
  Col,
  Button,
  Select,
  Table,
  Space,
  Pagination,
  InputNumber,
  Modal,
  Input,
  Upload,
  Form,
  DatePicker
} from "antd";
import {
  UploadOutlined,
  DownloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Profiles } from "../../data"
import "./profile.css";
import { IconEyesOr, IconReload, IconTrash } from "../../assets/svg";
import moment from "moment";

const { Option } = Select;

interface ICourse {
  name: string;
  id: string;
  date: string;
  sex: string;
  object: string;
  position: string;
  status: string;
}

const data: ICourse[] = Profiles


const Profile = (): JSX.Element => {
  const [isModalDel, setIsModalDel] = useState<boolean>(false);
  const [isModalUpdateQ, setIsModalUpdateQ] = useState<boolean>(false);
  const [isModalUpdateQW, setIsModalUpdateQW] = useState<boolean>(false);
  const [isModalRetired, setIsModalRetired] = useState<boolean>(false);
  const [isModalReload, setIsModalReload] = useState<boolean>(false);
  const [isModalExport, setIsModalExport] = useState<boolean>(false);
  const [isModalAdd, setIsModalAdd] = useState<boolean>(false);
  const [statusCourse, setStatusCourse] = useState<boolean>(false);

  const columns = [
    {
      title: "Mã giảng viên",
      dataIndex: "id",
      key: "id",
      sorter: (a: any, b: any) => a.type - b.type,
    },
    {
      title: "Tên giảng viên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ngày sinh",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Giới tính",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "Tổ bộ môn",
      dataIndex: "object",
      key: "object",
    },
    {
      title: "Chức vụ",
      dataIndex: "object",
      key: "object",
    },
    {
      title: "Tình trạng",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        switch (status) {
          case "pause":
            return <span className=" btn__pause"><i className="fix-0 bx bx-wifi-0" />Tạm nghỉ</span>;
          case "quitWork":
            return <span className="btn__quitWork"><i className="fix-0 bx bx-wifi-0" />Đã nghỉ việc</span>;
          case "retired":
            return <span className="btn__retired"><i className="fix-0 bx bx-wifi-0" />Nghỉ hưu</span>;
          case "quitSchool":
            return <span className="btn__quitSchool"><i className="fix-0 bx bx-wifi-0" />Đã thôi học</span>;
          default:
            return <span className="btn__woking"><i className="fix-0 bx bx-wifi-0" />Đang làm việc</span>;
        }
      },
    },

    {
      title: "",
      render: () => (
        <Fragment>
          <div className="btn___img">
            <button className="btn__img">
              <Link to="/profile-teacher">
                <img src={IconEyesOr} alt="IconEdit" />
              </Link>
            </button>
            <button className="btn__img btn-refresh">
              <img src={IconReload} alt="IconEdit" />
              <ul className="btn-refresh__menu">
                <li>
                  <Link to="profile-teacher-edit">Sửa hồ sơ</Link>
                </li>
                <li onClick={showModalUpdateQ}>
                  <a href="#">Cập nhập nghỉ hưu</a>
                </li>
                <li onClick={showModalUpdateQW}>
                  <a href="#">Cập nhập nghỉ việc</a>
                </li>
                <li onClick={showModalRetired}>
                  <a href="#">Cập nhập tạm nghỉ</a>
                </li>
              </ul>
            </button>
            <button className="btn__img" onClick={showModalDel}>
              <img src={IconTrash} alt="IconTrash" />
            </button>
          </div>
        </Fragment>
      ),
    },
  ];

  const showModalDel = (): void => {
    setIsModalDel(true);
  };

  const handleOkDel = (): void => {
    setIsModalDel(false);
  };

  const handleCancelDel = (): void => {
    setIsModalDel(false);
  };
  const showModalExport = (): void => {
    setIsModalExport(true);
  };

  const handleOkExport = (): void => {
    setIsModalExport(false);
  };

  const handleCancelExport = (): void => {
    setIsModalExport(false);
  };
  const showModalUpdateQ = (): void => {
    setIsModalUpdateQ(true);
  };

  const handleOkUpdateQ = (): void => {
    setIsModalUpdateQ(false);
  };

  const handleCancelUpdateQ = (): void => {
    setIsModalUpdateQ(false);
  };
  const showModalUpdateQW = (): void => {
    setIsModalUpdateQW(true);
  };

  const handleOkUpdateQW = (): void => {
    setIsModalUpdateQW(false);
  };

  const handleCancelUpdateQW = (): void => {
    setIsModalUpdateQW(false);
  };
  const showModalRetired = (): void => {
    setIsModalRetired(true);
  };

  const handleOkRetired = (): void => {
    setIsModalRetired(false);
  };

  const handleCancelRetired = (): void => {
    setIsModalRetired(false);
  };
  const showModalReload = (): void => {
    setIsModalReload(true);
  };

  const handleOkReload = (): void => {
    setIsModalReload(false);
  };

  const handleCancelReload = (): void => {
    setIsModalReload(false);
  };

  const showModalAdd = (): void => {
    setIsModalAdd(true);
  };

  const handleAddCourse = (values: any): void => {
    console.log(values);
  };

  const handleCancelAdd = (): void => {
    setIsModalAdd(false);
  };

  return (
    <Fragment>
      <>
        <div className="section14">
          <Row>
            <Col span={24}>
              <div className="titles">
                <span>Hồ sơ giảng viên</span>
                <i className="bx bx-chevron-right" />
                <div className="title-info-student">Tất cả hồ sơ</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Select
                className="select__dash"
                id="school_year"
                defaultValue="2020-2021"
              >
                <Option value="2017-2018">2017-2018</Option>
                <Option value="2017-2018">2018-2019</Option>
                <Option value="2017-2018">2019-2020</Option>
                <Option value="2017-2018" selected>
                  2020-2021
                </Option>
              </Select>
            </Col>
            <Col className="right-btn" span={8} offset={8}>
              <div className="box">
                <div className="btn-delete">
                  <button onClick={showModalDel}>
                    <i className="bx bx-trash" />
                  </button>
                  <Modal
                    className="box__btn__profile"
                    visible={isModalDel}
                    onOk={handleOkDel}
                    onCancel={handleCancelDel}
                  >
                    <h1>Xóa</h1>
                    <p>
                      Xác nhận muốn xóa những thông tin đã chọn? Sau khi xóa sẽ
                      không thể hoàn tác.
                    </p>

                    <button
                      className="box__btn-del-cancel"
                      onClick={handleCancelDel}
                    >
                      Hủy
                    </button>
                    <button className="box__btn-del-acp" onClick={handleOkDel}>
                      Lưu
                    </button>
                  </Modal>
                </div>

                <div className="btn-excel">
                  <button className="btn-bk-ffffff" onClick={showModalExport}>
                    Xuất file
                  </button>
                  <Modal
                    className="box__excel"
                    visible={isModalExport}
                    onOk={handleOkExport}
                    onCancel={handleCancelExport}
                  >
                    <form>
                      <h1>Tải lên file</h1>
                      <label>Tệp đính kèm: </label>
                      <Upload>
                        <Button className="bgef" icon={<UploadOutlined />}>
                          <input className="input__fixsize"></input>
                        </Button>
                        <Button className="btn__upload btn__link">
                          Chọn tệp ảnh gửi lên
                        </Button>
                      </Upload>
                      <label>Tải file mẫu: </label>
                      <Button icon={<DownloadOutlined />}></Button>
                      <p>[tải xuống file mẫu]</p>
                      <br />
                      <div className="mlist_btn">
                        <button
                          className="box__btn-del-cancel"
                        /*  onClick={handleCancels} */
                        >
                          Hủy
                        </button>
                        <button
                          className="box__btn-del-acp" /* onClick={handleOks} */
                        >
                          Lưu
                        </button>
                      </div>
                    </form>
                  </Modal>
                </div>
                <div className="btn-edit">
                  <button /* onClick={showModalss} */ className="btn-bk-ff7506">
                    <Link to="profile-teacher" className="text__box_white">
                      <i className="bx bx-plus" />
                      Thêm mới
                    </Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          <div className="box_list">
            <Row>
              <Col className="mlist" span={12}>
                <span className="list_title">Danh sách giảng viên</span>
              </Col>
              <Col className="mlist" span={9} offset={12}>
                <Input
                  className="search__profile_fix"
                  placeholder="Tìm Kiếm"
                  prefix={<SearchOutlined />}
                />
              </Col>
            </Row>
            <Row>
              <Col className="mlist1" span={22}>
                <Table
                  className="table__page"
                  /*  rowSelection={rowSelection} */
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                />
              </Col>
              <Col span={12}>
                <div className="box__inputnumber">
                  <div className="showRow">
                    <span>Hiển thị</span>
                    <Input
                      className="CourseSetting__showRow"
                      defaultValue="8"
                    />
                    <span>hàng trong mỗi trang</span>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className="box__pagnation">
                  <Pagination showSizeChanger defaultCurrent={8} total={50} />
                </div>
              </Col>
            </Row>
          </div>
          {/* modal */}
          <Modal
            className="modal__profile__updateq"
            visible={isModalUpdateQ}
            onOk={handleOkUpdateQ}
            onCancel={handleCancelUpdateQ}
          >
            <Form>
              <h1>Cập nhật nghỉ hưu</h1>
              <Form.Item label="Ngày nghỉ hưu">
                <DatePicker
                  defaultValue={moment('2015/01/01')}

                />
              </Form.Item>
              <Form.Item label="Ghi chú">
                <div className="input__note">
                  <Input className="note"
                    value="Mời bạn nhập ghi chú..."
                  ></Input>
                </div>
              </Form.Item>
              <Form.Item label="Quyết định nghỉ hưu">
                <Upload>
                  <Button className="bgef" icon={<UploadOutlined />}>
                  </Button>
                  <Button className="btn__upload btn__link">
                    Chọn tệp ảnh gửi lên
                  </Button>
                </Upload>
              </Form.Item>
              <button className="box__btn-button-cancel-page3" onClick={handleOkUpdateQ}>Hủy</button>
              <button className="box__btn-button-save-page3" onClick={handleCancelUpdateQ}>Lưu</button>
            </Form>
          </Modal>
          <Modal
            className="modal__profile__updateq"
            visible={isModalRetired}
            onOk={handleOkRetired}
            onCancel={handleCancelRetired}
          >
            <Form>
              <h1>Cập nhật tạm nghỉ</h1>
              <Form.Item label="Ngày tạm nghỉ">
                <DatePicker
                  defaultValue={moment('2015/01/01')}

                />
              </Form.Item>
              <Form.Item label="Ghi chú">
                <div className="input__note">
                  <Input className="note"
                    value="Mời bạn nhập ghi chú..."
                  ></Input>
                </div>
              </Form.Item>
              <Form.Item label="Quyết định tạm nghỉ">
                <Upload>
                  <Button className="bgef" icon={<UploadOutlined />}>
                    <Input className="input__fix"></Input>
                  </Button>
                  <Button className="btn__upload btn__link">
                    Chọn tệp ảnh gửi lên
                  </Button>
                </Upload>
              </Form.Item>
              <button className="box__btn-button-cancel-page3" onClick={handleOkRetired}>Hủy</button>
              <button className="box__btn-button-save-page3" onClick={handleOkRetired}>Lưu</button>
            </Form>
          </Modal>
          <Modal
            className="modal__profile__updateq"
            visible={isModalUpdateQW}
            onOk={handleOkUpdateQW}
            onCancel={handleCancelUpdateQW}
          >
            <Form>
              <h1>Cập nhật nghỉ việc</h1>
              <Form.Item label="Ngày nghỉ việc">
                <DatePicker
                  defaultValue={moment('2015/01/01')}

                />
              </Form.Item>
              <Form.Item label="Ghi chú">
                <div className="input__note">
                  <Input className="note"
                    value="Mời bạn nhập ghi chú..."
                  ></Input>
                </div>
              </Form.Item>
              <Form.Item label="Quyết định nghỉ việc">
                <Upload>
                  <Button className="bgef" icon={<UploadOutlined />}>
                    <Input className="input__fix"></Input>
                  </Button>
                  <Button className="btn__upload btn__link">
                    Chọn tệp ảnh gửi lên
                  </Button>
                </Upload>
              </Form.Item>
              <button className="box__btn-button-cancel-page3" onClick={handleOkUpdateQW}>Hủy</button>
              <button className="box__btn-button-save-page3" onClick={handleCancelUpdateQW}>Lưu</button>
            </Form>
          </Modal>
        </div>
      </>
    </Fragment>
  );
};

export default Profile;
