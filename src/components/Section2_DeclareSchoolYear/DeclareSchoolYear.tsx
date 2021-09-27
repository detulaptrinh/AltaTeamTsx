import React, { Fragment, useState } from "react";
import "./DeclareSchoolYear.css";
import {
  Button,
  Checkbox,
  ConfigProvider,
  DatePicker,
  Input,
  Modal,
  Pagination,
  Select,
  Table,
} from "antd";
import caret_down from "../../assets/avg/caret_down.svg";
import fi_plus from "../../assets/avg/fi_plus.svg";
import fi_search from "../../assets/avg/fi_search.svg";
import fi_edit from "../../assets/avg/fi_edit-monhoc.svg";
import fi_trash from "../../assets/avg/fi_trash-xoamonhoc.svg";
import fi_info from "../../assets/avg/fi_info.svg";
import minus_primary from "../../assets/avg/MinusPrimary.svg";
import plus_primary from "../../assets/avg/PlusPrimary.svg";
import calendar_alt from "../../assets/avg/u_calendar-alt.svg";
import moment from "moment";
import locale from "antd/lib/locale/vi_VN";

const { Option } = Select;

interface ISchoolYear {
  index: number;
  schoolYear: string;
  timeStart: string;
  timeEnd: string;
}

const data: ISchoolYear[] = [
  {
    index: 1,
    schoolYear: "2020-2021",
    timeStart: "05/10/2020",
    timeEnd: "05/10/2021",
  },
  {
    index: 2,
    schoolYear: "2019-2020",
    timeStart: "05/10/2020",
    timeEnd: "05/10/2021",
  },
  {
    index: 3,
    schoolYear: "2018-2019",
    timeStart: "05/10/2020",
    timeEnd: "05/10/2021",
  },
  {
    index: 4,
    schoolYear: "2017-2018",
    timeStart: "05/10/2020",
    timeEnd: "05/10/2021",
  },
  {
    index: 5,
    schoolYear: "2016-2017",
    timeStart: "05/10/2020",
    timeEnd: "05/10/2021",
  },
  {
    index: 6,
    schoolYear: "2015-2016",
    timeStart: "05/10/2020",
    timeEnd: "05/10/2021",
  },
  {
    index: 7,
    schoolYear: "2015-2016",
    timeStart: "05/10/2020",
    timeEnd: "05/10/2021",
  },
  {
    index: 8,
    schoolYear: "2013-2014",
    timeStart: "05/10/2020",
    timeEnd: "05/10/2021",
  },
];

const DeclareSchoolYear = (): JSX.Element => {
  const [isModalDel, setIsModalDel] = useState<boolean>(false);
  const [isModalAdd, setIsModalAdd] = useState<boolean>(false);

  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      sorter: (a: any, b: any) => a.index - b.index,
    },
    {
      title: "Niên khoá",
      dataIndex: "schoolYear",
      key: "schoolYear",
      sorter: (a: any, b: any) => a.schoolYear - b.schoolYear,
    },
    {
      title: "Thời gian bắt đầu",
      dataIndex: "timeStart",
      key: "timeStart",
    },
    {
      title: "Thời gian kết thúc",
      dataIndex: "timeEnd",
      key: "timeEnd",
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

  const handleCancelAdd = (): void => {
    setIsModalAdd(false);
  };

  return (
    <Fragment>
      <h1 className="DeclareSchoolYear__title">Khai báo dữ liệu</h1>
      <div className="DeclareSchoolYear__body">
        <div className="DeclareSchoolYear__menu">
          <div className="DeclareSchoolYear__menu-head">
            <p>Đang chọn xem:</p>
            <div className="DeclareSchoolYear__menu-select">
              <span>Trường:</span>
              <Select
                className="DeclareSchoolYear__select"
                defaultValue="THCS"
                style={{ width: 144 }}
                suffixIcon={<img src={caret_down} alt="caret_down" />}
              >
                <Option value="THCS">THCS</Option>
                <Option value="THPT">THPT</Option>
              </Select>
            </div>
            <div className="DeclareSchoolYear__menu-select">
              <span>Niên khoá:</span>
              <Select
                className="DeclareSchoolYear__select"
                defaultValue="2020-2021"
                style={{ width: 144 }}
                suffixIcon={<img src={caret_down} alt="caret_down" />}
              >
                <Option value="2015-2016">2015-2016</Option>
                <Option value="2018-2019">2018-2019</Option>
              </Select>
            </div>
          </div>
          <div className="DeclareSchoolYear__menu-btns">
            <Button className="btn-active">Niên khoá</Button>
            <Button>Tổ - Bộ môn</Button>
            <Button>Khoa - Khối</Button>
            <Button>Môn học</Button>
            <Button>Lớp học</Button>
            <Button>Loại điểm</Button>
          </div>
        </div>
        <div className="DeclareSchoolYear__data">
          <div className="DeclareSchoolYear__data-head">
            <Button
              onClick={showModalAdd}
              className="DeclareSchoolYear__btnAdd"
              icon={<img src={fi_plus} alt="fi_plus" />}
            >
              Thêm mới
            </Button>
          </div>
          <div className="DeclareSchoolYear__data-body">
            <div className="body-title">
              <h4>Niên khoá</h4>
              <Input
                className="DeclareSchoolYear__search"
                placeholder="Tìm kiếm"
                prefix={<img src={fi_search} alt="fi_search" />}
              />
            </div>
            <Table
              className="DeclareSchoolYear__table"
              columns={columns}
              dataSource={data}
              pagination={false}
            />
            <div className="body-pagination">
              <div className="showRow">
                <span>Hiển thị</span>
                <Input
                  className="DeclareSchoolYear__showRow"
                  defaultValue="8"
                />
                <span>hàng trong mỗi trang</span>
              </div>
              <Pagination
                className="DeclareSchoolYear__pagination"
                defaultCurrent={1}
                total={50}
              />
            </div>
          </div>
        </div>
      </div>

      {/* MODAL DELETE */}
      <Modal
        className="DeclareSchoolYear-modal DeclareSchoolYear-modal-del"
        title="Xoá niên khoá"
        visible={isModalDel}
        onOk={handleOkDel}
        onCancel={handleCancelDel}
        okText="Xác nhận"
        cancelText="Huỷ"
        centered
      >
        <p className="DeclareSchoolYear-modal-del-desc">
          Xác nhận muốn xoá niên khoá này và toàn bộ thông tin bên trong? Sau
          khi xoá sẽ không thể hoàn tác.
        </p>
      </Modal>

      {/* MODAL ADD */}
      <Modal
        className="DeclareSchoolYear-modal DeclareSchoolYear-modal-add-edit"
        title="Thiết lập niên khoá"
        visible={isModalAdd}
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
                suffixIcon={<img src={caret_down} alt="caret_down" />}
              >
                <Option value="2019">2019</Option>
                <Option value="2018">2018</Option>
              </Select>
              <span>đến</span>
              <Select
                className="DeclareSchoolYear__select"
                defaultValue="2021"
                style={{ width: 144 }}
                suffixIcon={<img src={caret_down} alt="caret_down" />}
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
                suffixIcon={<img src={caret_down} alt="caret_down" />}
              >
                <Option value="2015-2016">2015-2016</Option>
                <Option value="2018-2019">2018-2019</Option>
              </Select>
            </div>
            <div className="schoolYear__right-desc">
              <img src={fi_info} alt="fi_info" />
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
              <img src={minus_primary} alt="minus_primary" />
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
                suffixIcon={<img src={calendar_alt} alt="calendar_alt" />}
              />
            </ConfigProvider>
            <span>đến</span>
            <DatePicker
              className="DeclareSchoolYear__datepicker"
              defaultValue={moment("02/01/2021", "DD/MM/YYYY")}
              format={"DD/MM/YYYY"}
              suffixIcon={<img src={calendar_alt} alt="calendar_alt" />}
            />
          </div>
          <div className="timeSetting__control">
            <button className="timeSetting__control-btn">
              <img src={minus_primary} alt="minus_primary" />
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
              suffixIcon={<img src={calendar_alt} alt="calendar_alt" />}
            />
            <span>đến</span>
            <DatePicker
              className="DeclareSchoolYear__datepicker"
              defaultValue={moment("02/01/2021", "DD/MM/YYYY")}
              format={"DD/MM/YYYY"}
              suffixIcon={<img src={calendar_alt} alt="calendar_alt" />}
            />
          </div>
          <button className="timeSetting__btnAdd">
            <img src={plus_primary} alt="plus_primary" />
            <span>Thêm học kì mới</span>
          </button>
        </div>
      </Modal>
    </Fragment>
  );
};

export default DeclareSchoolYear;
