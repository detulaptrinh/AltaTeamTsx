import React, { useState, Fragment } from "react";
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
import Page4 from "../../data/Page4.json";

const { confirm } = Modal;
const { Option } = Select;

interface ICourse {
  id: string;
  name: string;
}

const data: ICourse[] = Page4;

const Profile = (): JSX.Element => {
  const [isModalDel, setIsModalDel] = useState<boolean>(false);
  const [isModalAdd, setIsModalAdd] = useState<boolean>(false);
  const [isModalEdit, setIsModalEdit] = useState<boolean>(false);
  const [isModalShow, setIsModalShow] = useState<boolean>(false);

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
          <button className="btn__img" onClick={showModalShow}>
            <img src={IconShow} alt="IconEdit" />
          </button>
          <button className="btn__img" onClick={showModalEdit}>
            <img src={IconEdit} alt="IconEdit" />
          </button>
          <button className="btn__img" onClick={showModalDel}>
            <img src={IconTrash} alt="IconEdit" />
          </button>
        </Space>
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
  const showModalAdd = (): void => {
    setIsModalAdd(true);
  };

  const handleOkAdd = (): void => {
    setIsModalAdd(false);
  };

  const handleCancelAdd = (): void => {
    setIsModalAdd(false);
  };
  const showModalEdit = (): void => {
    setIsModalEdit(true);
  };

  const handleOkEdit = (): void => {
    setIsModalEdit(false);
  };

  const handleCancelEdit = (): void => {
    setIsModalEdit(false);
  };
  const showModalShow = (): void => {
    setIsModalShow(true);
  };

  const handleOkShow = (): void => {
    setIsModalShow(false);
  };

  const handleCancelShow = (): void => {
    setIsModalShow(false);
  };

  return (
    <Fragment>
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
              <button className="box__chb-btn-clk">
                  <Link className="text__box_black" to="/boxdatasbj">
                    Môn học
                  </Link>
                </button>
                <button className="box__chb-btn-clk">
                  <Link className="text__box_black" to="/boxdataclass">
                    Lớp học
                  </Link>
                </button>
                <button className="box__chb-btn-clk">
                  <Link className="text__box_black" to="/boxdatatype">
                    Loại điểm
                  </Link>
                </button>
            </div>
          </div>
          <div className="box__btn">
            <div className="box__btn-button__page">
              <button
                className="box__btn-button_cre"
                onClick={showModalAdd}
              >
                <i className="bx bx-plus" />
                Thêm mới
              </button>
              <Modal
                className="box__btn-page4"
                centered
                visible={isModalAdd}
                onOk={handleOkAdd}
                onCancel={handleCancelAdd}
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
                    onClick={handleCancelAdd}
                  >
                    Hủy
                  </button>
                  <button
                    className="box__btn-button-save-page4"
                    onClick={handleOkAdd}
                  >
                    Lưu
                  </button>
                </Form>
              </Modal>
              <Modal
                className="box__btn-page4"
                centered
                visible={isModalEdit}
                onOk={handleOkEdit}
                onCancel={handleCancelEdit}
              >
                <Form>
                  <h1>Thiết lập Khoa - Khối</h1>
                  <Form.Item label="Mã - Khoa khối:">
                    <div className="custom-input">
                      <span>K11</span>
                    </div>
                  </Form.Item>
                  <Form.Item label="Khoa - khối:">
                    <Input value="Khối 11"></Input>
                  </Form.Item>
                  <Form.Item label="Trưởng tổ - Bộ môn:">
                    <Select defaultValue="Phạm Văn G" className="ant-select-opt">
                      <Option value="khtn">Lê Văn B</Option>
                      <Option value="khxh">Nguyễn Kim E</Option>
                    </Select>
                  </Form.Item>
                  <button
                    className="box__btn-button-cancel-page4"
                    onClick={handleCancelEdit}
                  >
                    Hủy
                  </button>
                  <button
                    className="box__btn-button-save-page4"
                    onClick={handleOkEdit}
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
      <Modal
        className="box__btn__profile"
        visible={isModalDel}
        onOk={handleOkDel}
        onCancel={handleCancelDel}
      >
        <h1>Xóa</h1>
        <p>
          Xác nhận muốn xóa những thông tin đã chọn? Sau khi xóa sẽ không thể
          hoàn tác.
        </p>

        <button className="box__btn-del-cancel" onClick={handleCancelDel}>
          Hủy
        </button>
        <button className="box__btn-del-acp" onClick={handleOkDel}>
          Lưu
        </button>
      </Modal>
    </Fragment>
  );
};

export default Profile;
