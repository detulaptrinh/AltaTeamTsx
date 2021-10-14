import React, { Fragment, useState } from "react";
import {
    Row,
    Col,
    Button,
    Select,
    Table,
    Pagination,
    InputNumber,
    Modal,
    Input,
    Upload,
} from "antd";
import {
    UploadOutlined,
    DownloadOutlined,
    SearchOutlined,
  } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./profile.css";
import { 
  IconEyesOr, 
  IconReload, 
  IconTrash 
} from "../../assets/svg";
  
const { Option } = Select;

interface ICourse {
  name: string;
  id:string;
  date: string;
  sex: string;
  object: string;
  position: string;
  status: string;

}

const data: ICourse[] = [
    {
        id: "2020-6A",
        name: "Nguyễn Văn A",
        date: "12/02/1998",
        sex: "Nam",
        object: "Toán",
        position: "Giáo viên",
        status: "woking",
      },
      {
        
        id: "2020-6A",
        name: "Nguyễn Văn A",
        date: "12/02/1998",
        sex: "Nam",
        object: "Toán",
        position: "Giáo viên",
        status: "quitWork",
      },
      {
        
        id: "2020-6A",
        name: "Nguyễn Văn A",
        date: "12/02/1998",
        sex: "Nam",
        object: "Toán",
        position: "Giáo viên",
        status: "pause",
      },
      {
        
        id: "2020-6A",
        name: "Nguyễn Văn A",
        date: "12/02/1998",
        sex: "Nam",
        object: "Toán",
        position: "Giáo viên",
        status: "retired",
      },
      {
        
        id: "2020-6A",
        name: "Nguyễn Văn A",
        date: "12/02/1998",
        sex: "Nam",
        object: "Toán",
        position: "Giáo viên",
        status: "working",
      },
];

const Profiles = (): JSX.Element => {
  const [isModalDel, setIsModalDel] = useState<boolean>(false);
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
            return <span>Tạm nghỉ</span>;
          case "quitWork":
            return <span>Nghỉ việc</span>;
          case "retired":
            return <span>Nghỉ hưu</span>;
          case "quitSchool":
            return <span>Đã thôi học</span>;
          default:
            return <span>Đang làm việc</span>;        
        }
      }

    },
    
    {
      title: "",
      render: () => (
        <Fragment>
          <button className="btnEdit" onClick={showModalAdd}>
            <img src={IconEyesOr} alt="IconEdit" />
          </button>
          <button className="btnEdit" onClick={showModalAdd}>
            <img src={IconReload} alt="IconEdit" />
          </button>
          <button className="btnTrash" onClick={showModalDel}>
            <img src={IconTrash} alt="IconTrash" />
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
              <button /* onClick={showModal} */>
                <i className="bx bx-trash" />
              </button>
              <Modal
                className="box__btn__profile"
                /* visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel} */
              >
                <h1>Xóa</h1>
                <p>
                  Xác nhận muốn xóa những thông tin đã chọn? Sau khi xóa sẽ
                  không thể hoàn tác.
                </p>

                <button className="box__btn-del-cancel" /* onClick={handleCancel} */>
                  Hủy
                </button>
                <button className="box__btn-del-acp" /* onClick={handleOk} */>
                  Lưu
                </button>
              </Modal>
            </div>

            <div className="btn-excel">
              <button className="btn-bk-ffffff" /* onClick={showModals} */>
                Xuất file
              </button>
              <Modal
                className="box__excel"
                /* visible={isModalVisibles}
                onOk={handleOks}
                onCancel={handleCancels} */
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
                    <button className="box__btn-del-acp" /* onClick={handleOks} */>
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
            <Input className="CourseSetting__showRow" defaultValue="8" />
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
      </div>
    </>
    </Fragment>
  );
};

export default Profiles;
