import React, { Fragment, useState } from "react";
import "./TrainingLevelsManage.css";
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
  Checkbox,
} from "antd";

const { Option } = Select;
const { TextArea } = Input;

interface ITrainingLevel {
  level: string;
  status: boolean;
  note: string;
}

const data: ITrainingLevel[] = [
  {
    level: "THCS",
    status: false,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.",
  },
  {
    level: "THCS",
    status: true,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.",
  },
  {
    level: "THCS",
    status: true,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.",
  },
  {
    level: "THCS",
    status: true,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.",
  },
  {
    level: "THCS",
    status: true,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.",
  },
  {
    level: "Đại học",
    status: true,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.",
  },
  {
    level: "Đại học",
    status: true,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.",
  },
  {
    level: "Tiểu học",
    status: true,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.",
  },
  {
    level: "Cao đẳng",
    status: true,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.",
  },
];

const TrainingLevelsManage = (): JSX.Element => {
  const [isModalDel, setIsModalDel] = useState<boolean>(false);
  const [isModalAdd, setIsModalAdd] = useState<boolean>(false);
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [isTrainingTime, setIsTrainingTime] = useState<boolean>(true);

  const columns = [
    {
      title: "Trình độ",
      dataIndex: "level",
      key: "level",
      sorter: (a: any, b: any) => a.level - b.level,
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

  const handleAddTrainingLevel = (values: any): void => {
    console.log(values);
  };

  const handleCancelAdd = (): void => {
    setIsModalAdd(false);
  };

  return (
    <Fragment>
      <div className="TrainingLevelsManage__title">
        <span>Cài đặt hệ thống</span>
        <img src={chevron_big_right} alt="chevron_big_right" />
        <h1>Quản lý các bậc đào tạo</h1>
      </div>
      <div className="TrainingLevelsManage__control">
        <Select
          className="TrainingLevelsManage__select"
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
          className="TrainingLevelsManage__btnAdd"
          icon={<img src={fi_plus} alt="fi_plus" />}
        >
          Thêm mới
        </Button>
      </div>
      <div className="TrainingLevelsManage-content">
        <div className="TrainingLevelsManage-content__head">
          <h4>Danh mục các bậc đào tạo</h4>
          <Input
            className="TrainingLevelsManage__search"
            placeholder="Tìm kiếm"
            prefix={<img src={fi_search} alt="fi_search" />}
          />
        </div>
        <Table
          className="TrainingLevelsManage__table"
          columns={columns}
          dataSource={data}
          pagination={false}
        />
        <div className="TrainingLevelsManage-content__foot">
          <div className="showRow">
            <span>Hiển thị</span>
            <Input className="TrainingLevelsManage__showRow" defaultValue="8" />
            <span>hàng trong mỗi trang</span>
          </div>
          <Pagination
            className="TrainingLevelsManage__pagination"
            defaultCurrent={1}
            total={50}
          />
        </div>
      </div>

      {/* MODAL DELETE */}
      <Modal
        className="TrainingLevelsManage-modal TrainingLevelsManage-modal-del"
        title="Xóa bậc đào tạo"
        visible={isModalDel}
        onOk={handleOkDel}
        onCancel={handleCancelDel}
        okText="Xác nhận"
        cancelText="Huỷ"
        centered
      >
        <p className="TrainingLevelsManage-modal-del-desc">
          Xác nhận muốn xoá bậc đào tạo này và toàn bộ thông tin bên trong? Sau
          khi xoá sẽ không thể hoàn tác.
        </p>
      </Modal>

      {/* MODAL ADD */}
      <Modal
        className="TrainingLevelsManage-modal TrainingLevelsManage-modal-add-edit"
        title="Thiết lập bậc đào tạo"
        visible={isModalAdd}
        onCancel={handleCancelAdd}
        centered
      >
        <Form
          className="TrainingLevelsManage__form"
          name="form-add"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          onFinish={handleAddTrainingLevel}
        >
          <Form.Item
            label="Trình độ đào tạo"
            name="level"
            rules={[
              { required: true, message: "Vui lòng nhập trình độ đào tạo!" },
            ]}
          >
            <Input className="TrainingLevelsManage__form-input" />
          </Form.Item>

          <Form.Item
            label="Hình thức đào tạo"
            name="formality"
            rules={[
              { required: true, message: "Vui lòng nhập hình thức đào tạo!" },
            ]}
          >
            <Input className="TrainingLevelsManage__form-input" />
          </Form.Item>

          <Form.Item
            label=""
            name="yearly"
            wrapperCol={{ offset: 6, span: 18 }}
          >
            <div className="yearly-form">
              <Checkbox
                onChange={() => {
                  setIsYearly(!isYearly);
                  setIsTrainingTime(!isTrainingTime);
                }}
                checked={isYearly}
                className="TrainingLevelsManage__form-checkbox"
              >
                Niên chế
              </Checkbox>
              {isYearly && (
                <Fragment>
                  <Input className="TrainingLevelsManage__form-input yearly-input" />
                  <span>Năm</span>
                  <Input className="TrainingLevelsManage__form-input yearly-input" />
                  <span>Học kỳ/Năm</span>
                </Fragment>
              )}
            </div>
            <p className="yearly-desc">
              Đào tạo theo niên chế là đào tạo them đơn vị năm học.
              <br />
              Mỗi chương trình đào tạo của một ngành, nghề được thực hiện trong
              một số tháng hoặc năm nhất định.
              <br />
              Mỗi năm học thường được tổ chức thành hai học kỳ.
            </p>
            <Checkbox
              onChange={() => {
                setIsTrainingTime(!isTrainingTime);
                setIsYearly(!isYearly);
              }}
              checked={isTrainingTime}
              className="TrainingLevelsManage__form-checkbox"
            >
              Tín chỉ
            </Checkbox>
          </Form.Item>

          {isTrainingTime && (
            <Form.Item label="Thời gian đào tạo" name="trainingTime">
              <div className="trainingTime">
                <Input className="TrainingLevelsManage__form-input trainingTime-input" />
                <span>Năm</span>
                <Input className="TrainingLevelsManage__form-input trainingTime-input" />
                <span>Học phần bắt buộc</span>
                <Input className="TrainingLevelsManage__form-input trainingTime-input" />
                <span>Học phần tự chọn</span>
              </div>
            </Form.Item>
          )}

          <Form.Item label="Ghi chú" name="note">
            <TextArea className="TrainingLevelsManage__form-textarea" />
            <Checkbox
              className="TrainingLevelsManage__form-checkbox"
              defaultChecked
            >
              Kích hoạt
            </Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <div className="TrainingLevelsManage__form-btns">
              <Button
                className="TrainingLevelsManage__form-cancel"
                type="primary"
                onClick={() => setIsModalAdd(false)}
              >
                Huỷ
              </Button>
              <Button
                className="TrainingLevelsManage__form-submit"
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

export default TrainingLevelsManage;
