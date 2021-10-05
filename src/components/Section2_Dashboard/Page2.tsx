import React, { useState } from "react";
import "./dash.css";
import { DeleteOutlined } from "@ant-design/icons";
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
  InputNumber,
  Pagination,
  ConfigProvider,
} from "antd";
import { Link } from "react-router-dom";
import { IconEdit, IconTrash } from "../../assets/svg";
import locale from "antd/lib/locale/vi_VN";
import moment from "moment";

const { confirm } = Modal;
const { Option } = Select;

interface ISchoolYear {
  index: number;
  schoolYear: string;
  timeStart: string;
  timeEnd: string;
}

const columns = [
  {
    title: "STT",
    dataIndex: "id",
  },
  {
    title: "Thời gian bắt đầu",
    dataIndex: "datestart",
  },
  {
    title: "Thời gian kết thúc",
    dataIndex: "dateend",
  },
  {
    title: "",
    dataIndex: "icon",
    render: () => (
      <Space>
        <img src={IconEdit} />
        <img src={IconTrash} />
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    id: "1",
    year: "2020-2021",
    datestart: "05/10/2020",
    dateend: "05/10/2020",
    edit: "Sửa",
    delete: "Xóa",
  },
  {
    key: "2",
    id: "2",
    year: "2020-2021",
    datestart: "05/10/2020",
    dateend: "05/10/2020",
    edit: "Sửa",
    delete: "Xóa",
  },
  {
    key: "3",
    id: "3",
    year: "2020-2021",
    datestart: "05/10/2020",
    dateend: "05/10/2020",
    edit: "Sửa",
    delete: "Xóa",
  },
  {
    key: "4",
    id: "4",
    year: "2020-2021",
    datestart: "05/10/2020",
    dateend: "05/10/2020",
    edit: "Sửa",
    delete: "Xóa",
  },
  {
    key: "5",
    id: "5",
    year: "2020-2021",
    datestart: "05/10/2020",
    dateend: "05/10/2020",
    edit: "Sửa",
    delete: "Xóa",
  },
  {
    key: "6",
    id: "6",
    year: "2020-2021",
    datestart: "05/10/2020",
    dateend: "05/10/2020",
    edit: "Sửa",
    delete: "Xóa",
  },
  {
    key: "7",
    id: "7",
    year: "Hóa học",
    datestart: "05/10/2020",
    dateend: "05/10/2020",
    edit: "Sửa",
    delete: "Xóa",
  },
];

export default function Page2() {
  const [ModalAdd, setModalAdd] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setModalAdd(false);
  };

  const handleCancelAdd = (): void => {
    setModalAdd(false);
  };
  return (
    <>
      <div className="overview">
        <div className="boxmain">
          <div className="box__title">
            <h1>Khai báo dữ liệu</h1>
          </div>
          <div className="box__chb">
            <div className="box__chb-slt">
              <p>Đang chọn xem:</p>
              <div className="box__chb-slt_sch">
                <p>Trường:</p>
                <Select
                  className="box__chb-slt_sch_selects"
                  defaultValue="THCS"
                >
                  <Option value="THCS">THCS</Option>
                  <Option value="THPT">THPT</Option>
                </Select>
              </div>
              <div className="box__chb-slt_yr">
                <p>Niên Khóa:</p>
                <Select
                  className="box__chb-slt_yr_selects"
                  defaultValue="2020 - 2021"
                >
                  <Option value="2020 - 2021">2020 - 2021</Option>
                  <Option value="2015 - 2016">2015 - 2016</Option>
                  <Option value="2018 - 2019">2018 - 2019</Option>
                </Select>
              </div>
            </div>
            <div className="box__chb-btn">
              <button className="box__chb-btn-clk active">
                <Link className="text__box_white" to="/page2">
                  Niên Khóa
                </Link>
              </button>
              <button className="box__chb-btn-clk">
                <Link className="text__box_black" to="/page3">
                  Tổ - Bộ môn
                </Link>
              </button>
              <button className="box__chb-btn-clk">
                <Link className="text__box_black" to="/page4">
                  Khoa - Khối
                </Link>
              </button>
              <button className="box__chb-btn-clk">Môn học</button>
              <button className="box__chb-btn-clk">Lớp học</button>
              <button className="box__chb-btn-clk">Loại điểm</button>
            </div>
          </div>
          <div className="box__btn__page">
            <div className="box__btn-button__page">
              <button
                className="box__btn-button_cre"
                onClick={() => setModalAdd(true)}
              >
                <i className="bx bx-plus" />
                Thêm mới
              </button>
              <Modal
                className="DeclareSchoolYear-modal DeclareSchoolYear-modal-add-edit"
                title="Thiết lập niên khoá"
                visible={ModalAdd}
                onCancel={handleCancelAdd}
                okText="Lưu"
                cancelText="Huỷ"
                centered
              >
                <div className="schoolYear">
                  <div className="schoolYear__left">
                    <p>Niên khoá:</p>
                    <div className="schoolYear__left-selects">
                      <Select
                        className="DeclareSchoolYear__select"
                        defaultValue="2020"
                        style={{ width: 144 }}
                      >
                        <Option value="2019">2019</Option>
                        <Option value="2018">2018</Option>
                      </Select>
                      <span>đến</span>
                      <Select
                        className="DeclareSchoolYear__select"
                        defaultValue="2021"
                        style={{ width: 144 }}
                      >
                        <Option value="2020">2020</Option>
                        <Option value="2019">2019</Option>
                      </Select>
                    </div>
                  </div>
                  <div className="schoolYear__right">
                    <div className="schoolYear__right-inherit">
                      <Checkbox className="DeclareSchoolYear__checkbox">
                        Kế thừa dữ liệu:
                      </Checkbox>
                      <Select
                        className="DeclareSchoolYear__select"
                        placeholder="Niên khoá"
                        style={{ width: 144 }}
                      >
                        <Option value="2015-2016">2015-2016</Option>
                        <Option value="2018-2019">2018-2019</Option>
                      </Select>
                    </div>
                    <div className="schoolYear__right-desc">
                      <img src="{fi_info}" alt="fi_info" />
                      <p>
                        Dữ liệu được kế thừa bao gồm các thông tin:
                        <br />- Thông tin học viên và Danh sách lớp học
                        <br />- Thông tin môn học
                        <br />- Phân công giảng dạy
                      </p>
                    </div>
                  </div>
                </div>
                <div className="timeSetting">
                  <h4 className="timeSetting__title">Cài đặt thời gian</h4>
                  <div className="timeSetting__control">
                    <button className="timeSetting__control-btn">
                      <img src="{minus_primary}" alt="minus_primary" />
                    </button>
                    <h6>Tên học kì:</h6>
                    <Input
                      className="timeSetting__control-input"
                      defaultValue="Học kỳ I"
                    />
                    <span>Từ</span>
                    <ConfigProvider locale={locale}>
                      <DatePicker
                        className="DeclareSchoolYear__datepicker"
                        defaultValue={moment("05/09/2020", "DD/MM/YYYY")}
                        format={"DD/MM/YYYY"}
                        suffixIcon={
                          <img src="{calendar_alt}" alt="calendar_alt" />
                        }
                      />
                    </ConfigProvider>
                    <span>đến</span>
                    <DatePicker
                      className="DeclareSchoolYear__datepicker"
                      defaultValue={moment("02/01/2021", "DD/MM/YYYY")}
                      format={"DD/MM/YYYY"}
                      suffixIcon={
                        <img src="{calendar_alt}" alt="calendar_alt" />
                      }
                    />
                  </div>
                  <div className="timeSetting__control">
                    <button className="timeSetting__control-btn">
                      <img src="{minus_primary}" alt="minus_primary" />
                    </button>
                    <h6>Tên học kì:</h6>
                    <Input
                      className="timeSetting__control-input"
                      defaultValue="Học kỳ II"
                    />
                    <span>Từ</span>
                    <DatePicker
                      className="DeclareSchoolYear__datepicker"
                      defaultValue={moment("05/09/2020", "DD/MM/YYYY")}
                      format={"DD/MM/YYYY"}
                      suffixIcon={
                        <img src="{calendar_alt}" alt="calendar_alt" />
                      }
                    />
                    <span>đến</span>
                    <DatePicker
                      className="DeclareSchoolYear__datepicker"
                      defaultValue={moment("02/01/2021", "DD/MM/YYYY")}
                      format={"DD/MM/YYYY"}
                      suffixIcon={
                        <img src="{calendar_alt}" alt="calendar_alt" />
                      }
                    />
                  </div>
                  <button className="timeSetting__btnAdd">
                    <img src="{plus_primary}" alt="plus_primary" />
                    <span>Thêm học kì mới</span>
                  </button>
                </div>
              </Modal>
            </div>
          </div>
          <div className="box__sbj">
            <div className="box__sbj-stu">
              <p>Môn học</p>
              <input
                className="box__sbj-search"
                type="search"
                placeholder="Search"
              />
            </div>
            <div className="box__sbj-tbl">
              <Table
                className="table__page pages"
                columns={columns}
                dataSource={data}
                pagination={false}
              />
            </div>
            <div className="box__sbj-pagtion">
              <div className="box__sbj-pagtion-txt">
                <p>Hiển thị</p>
                <InputNumber min={1} max={10} defaultValue={3} />
                <p> hàng trong mỗi trang</p>
              </div>
            </div>
            <div className="box__sbj-pagin">
              <Pagination showSizeChanger defaultCurrent={8} total={100} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
