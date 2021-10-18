import React, { Fragment, useState } from "react";
import "./dash.css";
import {
  Form,
  Input,
  Select,
  DatePicker,
  Modal,
  Checkbox,
  Table,
  Space,
  InputNumber,
  Pagination,
  ConfigProvider,
} from "antd";
import { Link } from "react-router-dom";
import {
  IconEdit,
  IconTrash,
  IconPlusPrimary,
  IconMinusPrimary,
  IconInfo,
  IconCalendar,
} from "../../assets/svg";
import locale from "antd/lib/locale/vi_VN";
import moment from "moment";
import Page2 from "../../data/Page2.json";
const { confirm } = Modal;
const { Option } = Select;

interface ICourse {
  id: string;
  year: string;
  datestart: string;
  dateend: string;
}

const data: ICourse[] = Page2;

const Profile = (): JSX.Element => {
  const [isModalDel, setIsModalDel] = useState<boolean>(false);
  const [isModalAdd, setIsModalAdd] = useState<boolean>(false);
  const [isModalEdit, setIsModalEdit] = useState<boolean>(false);

  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      sorter: (a: any, b: any) => a.type - b.type,
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

  return (
    <Fragment>
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
            <div className="box__btn__page">
              <div className="box__btn-button__page">
                <button
                  className="box__btn-button_cre"
                  onClick={() => setIsModalAdd(true)}
                >
                  <i className="bx bx-plus" />
                  Thêm mới
                </button>
                <Modal
                  className="DeclareSchoolYear-modal DeclareSchoolYear-modal-add-edit"
                  title="Thiết lập niên khóa"
                  visible={isModalEdit}
                  onCancel={handleCancelEdit}
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
                        <img src={IconInfo} alt="fi_info" />
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
                        <img src={IconMinusPrimary} alt="minus_primary" />
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
                            <img src={IconCalendar} alt="calendar_alt" />
                          }
                        />
                      </ConfigProvider>
                      <span>đến</span>
                      <DatePicker
                        className="DeclareSchoolYear__datepicker"
                        defaultValue={moment("02/01/2021", "DD/MM/YYYY")}
                        format={"DD/MM/YYYY"}
                        suffixIcon={
                          <img src={IconCalendar} alt="calendar_alt" />
                        }
                      />
                    </div>
                    <div className="timeSetting__control">
                      <button className="timeSetting__control-btn">
                        <img src={IconMinusPrimary} alt="minus_primary" />
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
                          <img src={IconCalendar} alt="calendar_alt" />
                        }
                      />
                      <span>đến</span>
                      <DatePicker
                        className="DeclareSchoolYear__datepicker"
                        defaultValue={moment("02/01/2021", "DD/MM/YYYY")}
                        format={"DD/MM/YYYY"}
                        suffixIcon={
                          <img src={IconCalendar} alt="calendar_alt" />
                        }
                      />
                    </div>
                    <button className="timeSetting__btnAdd">
                      <img src={IconPlusPrimary} alt="plus_primary" />
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
      <Modal
        className="DeclareSchoolYear-modal DeclareSchoolYear-modal-add-edit"
        title="Thêm niên khóa"
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
              <img src={IconInfo} alt="fi_info" />
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
              <img src={IconMinusPrimary} alt="minus_primary" />
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
                suffixIcon={<img src={IconCalendar} alt="calendar_alt" />}
              />
            </ConfigProvider>
            <span>đến</span>
            <DatePicker
              className="DeclareSchoolYear__datepicker"
              defaultValue={moment("02/01/2021", "DD/MM/YYYY")}
              format={"DD/MM/YYYY"}
              suffixIcon={<img src={IconCalendar} alt="calendar_alt" />}
            />
          </div>
          <div className="timeSetting__control">
            <button className="timeSetting__control-btn">
              <img src={IconMinusPrimary} alt="minus_primary" />
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
              suffixIcon={<img src={IconCalendar} alt="calendar_alt" />}
            />
            <span>đến</span>
            <DatePicker
              className="DeclareSchoolYear__datepicker"
              defaultValue={moment("02/01/2021", "DD/MM/YYYY")}
              format={"DD/MM/YYYY"}
              suffixIcon={<img src={IconCalendar} alt="calendar_alt" />}
            />
          </div>
          <button className="timeSetting__btnAdd">
            <img src={IconPlusPrimary} alt="plus_primary" />
            <span>Thêm học kì mới</span>
          </button>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Profile;
