import React, { Fragment, useState } from "react";
import "./CourseSetting.css";
import chevron_big_right from "../../assets/avg/chevron_big_right.svg";
import caret_down from "../../assets/avg/caret_down.svg";
import fi_plus from "../../assets/avg/fi_plus.svg";
import fi_search from "../../assets/avg/fi_search.svg";
import fi_edit from "../../assets/avg/fi_edit-monhoc.svg";
import fi_trash from "../../assets/avg/fi_trash-xoamonhoc.svg";
import {
  Button,
  Input,
  Modal,
  Pagination,
  Select,
  Table,
  Form,
  Switch,
} from "antd";

const { Option } = Select;

const data = [
  {
    type: "Môn Căn bản",
    status: false,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.",
  },
  {
    type: "Môn Nâng cao",
    status: true,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.",
  },
  {
    type: "Môn Tăng cường",
    status: true,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.",
  },
  {
    type: "Môn Phụ đạo",
    status: true,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.",
  },
  {
    type: "Môn Phụ đạo",
    status: true,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.",
  },
  {
    type: "Môn Phụ đạo",
    status: true,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.",
  },
  {
    type: "Môn Phụ đạo",
    status: true,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.",
  },
  {
    type: "Môn Phụ đạo",
    status: true,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.",
  },
  {
    type: "Môn Phụ đạo",
    status: true,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.",
  },
];

const CourseSetting = (): JSX.Element => {
  const [isModalDel, setIsModalDel] = useState<boolean>(false);
  const [isModalAdd, setIsModalAdd] = useState<boolean>(false);

  const columns = [
    {
      title: "Loại môn",
      dataIndex: "type",
      key: "type",
      sorter: (a: any, b: any) => a.type - b.type,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: boolean) =>
        status ? (
          <span className="primary">Đang hoạt động</span>
        ) : (
          <span className="danger">Đã vô hiệu hoá</span>
        ),
    },
    {
      title: "Ghi chú",
      dataIndex: "note",
      key: "note",
    },
    {
      title: "",
      render: () => (
        <Fragment>
          <button className="btnEdit" onClick={showModalAdd}>
            <img src={fi_edit} alt="fi_edit" />
          </button>
          <button className="btnTrash" onClick={showModalDel}>
            <img src={fi_trash} alt="fi_trash" />
          </button>
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
      <div className="CourseSetting__title">
        <span>Cài đặt hệ thống</span>
        <img src={chevron_big_right} alt="chevron_big_right" />
        <h1>Thiết lập môn học</h1>
      </div>
      <div className="CourseSetting__control">
        <Select
          className="CourseSetting__select"
          defaultValue="2020-2021"
          style={{ width: 136 }}
          suffixIcon={<img src={caret_down} alt="caret_down" />}
        >
          <Option value="2019-2020">2019-2020</Option>
          <Option value="2018-2019">2018-2019</Option>
          <Option value="2017-2018">2017-2018</Option>
        </Select>
        <Button
          onClick={showModalAdd}
          className="CourseSetting__btnAdd"
          icon={<img src={fi_plus} alt="fi_plus" />}
        >
          Thêm mới
        </Button>
      </div>
      <div className="CourseSetting-content">
        <div className="CourseSetting-content__head">
          <h4>Danh sách các loại môn học</h4>
          <Input
            className="CourseSetting__search"
            placeholder="Tìm kiếm"
            prefix={<img src={fi_search} alt="fi_search" />}
          />
        </div>
        <Table
          className="CourseSetting__table"
          columns={columns}
          dataSource={data}
          pagination={false}
        />
        <div className="CourseSetting-content__foot">
          <div className="showRow">
            <span>Hiển thị</span>
            <Input className="CourseSetting__showRow" defaultValue="8" />
            <span>hàng trong mỗi trang</span>
          </div>
          <Pagination
            className="CourseSetting__pagination"
            defaultCurrent={1}
            total={50}
          />
        </div>
      </div>

      {/* MODAL DELETE COURSE */}
      <Modal
        className="CourseSetting-modal CourseSetting-modal-del"
        title="Xoá môn học"
        visible={isModalDel}
        onOk={handleOkDel}
        onCancel={handleCancelDel}
        okText="Xác nhận"
        cancelText="Huỷ"
        centered
      >
        <p className="CourseSetting-modal-del-desc">
          Xác nhận muốn xoá môn học này và toàn bộ thông tin bên trong? Sau khi
          xoá sẽ không thể hoàn tác.
        </p>
      </Modal>

      {/* MODAL ADD COURSE */}
      <Modal
        className="CourseSetting-modal CourseSetting-modal-add-edit"
        title="Thiết lập môn học"
        visible={isModalAdd}
        onCancel={handleCancelAdd}
        centered
      >
        <Form
          className="CourseSetting__form"
          name="validate_other"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          onFinish={handleAddCourse}
        >
          <Form.Item
            label="Loại môn học"
            name="type"
            rules={[{ required: true, message: "Vui lòng nhập loại môn học!" }]}
          >
            <Input className="CourseSetting__form-input" />
          </Form.Item>

          <Form.Item label="Trạng thái" name="status" valuePropName="checked">
            <div className="CourseSetting__form-switch">
              <Switch />
              <span>Đang hoạt động</span>
            </div>
          </Form.Item>

          <Form.Item
            label="Ghi chú"
            name="note"
            rules={[{ required: true, message: "Vui lòng nhập ghi chú!" }]}
          >
            <Input className="CourseSetting__form-input" />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <div className="CourseSetting__form-btns">
              <Button
                className="CourseSetting__form-cancel"
                type="primary"
                onClick={() => setIsModalAdd(false)}
              >
                Huỷ
              </Button>
              <Button
                className="CourseSetting__form-submit"
                type="primary"
                htmlType="submit"
              >
                Lưu
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default CourseSetting;
