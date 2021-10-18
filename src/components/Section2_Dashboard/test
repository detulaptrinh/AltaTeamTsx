import React, { useState } from "react";
import "./dash.css";
import {
  Form,
  Input,
  Select,
  Modal,
  Table,
  Space,
  InputNumber,
  Pagination,
} from "antd";
import { Link } from "react-router-dom";
import { IconEdit, IconTrash, IconShow } from "../../assets/svg";

const { confirm } = Modal;
const { Option } = Select;

const columns = [
  {
    title: "Mã khoa - khối",
    dataIndex: "id",
  },
  {
    title: "Tên khoa - khối",
    dataIndex: "name",
  },

  {
    title: "",
    dataIndex: "icon",
    render: () => (
      <Space>
        <img src={IconShow} />
        <img src={IconEdit} />
        <img src={IconTrash} />
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    id: "K09",
    name: "Khối 9",
  },
  {
    key: "2",
    id: "K10",
    name: "Khối 10",
  },
  {
    key: "3",
    id: "K11",
    name: "Khối 11",
  },
];

export default function Page4() {
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibles, setIsModalVisibles] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const showModals = () => {
    setIsModalVisibles(true);
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
  return (
    <>
      <div className="overview">
        {/* <User/> */}
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
              <button className="box__chb-btn-clk ">
                <Link className="text__box_black" to="/page2">
                  Niên Khóa
                </Link>
              </button>
              <button className="box__chb-btn-clk ">
                <Link className="text__box_black" to="/page3">
                  Tổ - Bộ môn
                </Link>
              </button>
              <button className="box__chb-btn-clk active">
                <Link className="text__box_white" to="/page4">
                  Khoa - Khối
                </Link>
              </button>
              <button className="box__chb-btn-clk">Môn học</button>
              <button className="box__chb-btn-clk">Lớp học</button>
              <button className="box__chb-btn-clk">Loại điểm</button>
            </div>
          </div>
          <div className="box__btn">
            <div className="box__btn-button__page">
              <button
                className="box__btn-button_cre"
                onClick={() => setVisible(true)}
              >
                <i className="bx bx-plus" />
                Thêm mới
              </button>
              <Modal
                className="box__btn-page4"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
              >
                <Form>
                  <h1>Thêm Khoa - Khối mới</h1>
                  <Form.Item label="Mã - Khoa khối:">
                    <Input className="custom-input"></Input>
                  </Form.Item>
                  <Form.Item label="Khoa - khối:">
                    <Input></Input>
                  </Form.Item>
                  <Form.Item label="Trưởng tổ - Bộ môn:">
                    <Select className="ant-select-opt">
                      <Select.Option value="khtn">Lê Văn B</Select.Option>
                      <Select.Option value="khxh">Nguyễn Kim E</Select.Option>
                    </Select>
                  </Form.Item>
                  <button
                    className="box__btn-button-cancel-page4"
                    onClick={() => setVisible(false)}
                  >
                    Hủy
                  </button>
                  <button
                    className="box__btn-button-save-page4"
                    onClick={() => setVisible(false)}
                  >
                    Lưu
                  </button>
                </Form>
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
                className="table__page"
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
