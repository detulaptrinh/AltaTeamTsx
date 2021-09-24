import React, {useState} from 'react'
import "./dash.css";
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
  InputNumber,
  Pagination
} from "antd";
import AvatarTeacher from "../../assets/images/Frame19.png";
import {Link} from "react-router-dom"

const { confirm } = Modal;
const { Option } = Select;

const columns =  [ 
    {
      title: 'STT',
      dataIndex: 'id',
      
    },
    {
      title: 'Thời gian bắt đầu',
      dataIndex: 'datestart',
    },
    {
      title: 'Thời gian kết thúc',
      dataIndex: 'dateend',
    },
    {
    title: '',
    dataIndex: 'icon',
    render: () => (
      <Space >
        <DeleteOutlined style={{ fontSize: '30px' , color: '#FF7506' }}/>
        <DeleteOutlined style={{ fontSize: '30px' , color: '#FF7506' }}/>
      </Space>
    ),
    },
    
  ]; 
  const data = [
    {
      key: '1',
      id: '1',
      year: '2020-2021',
      datestart: '05/10/2020',
      dateend: '05/10/2020',
      edit: 'Sửa',
      delete: 'Xóa',
    },
    {
      key: '2',
      id: '2',
      year: '2020-2021',
      datestart: '05/10/2020',
      dateend: '05/10/2020',
      edit: 'Sửa',
      delete: 'Xóa',
    },
    {
      key: '3',
      id: '3',
      year: '2020-2021',
      datestart: '05/10/2020',
      dateend: '05/10/2020',
      edit: 'Sửa',
      delete: 'Xóa',
    },
    {
      key: '4',
      id: '4',
      year: '2020-2021',
      datestart: '05/10/2020',
      dateend: '05/10/2020',
      edit: 'Sửa',
      delete: 'Xóa',
    },
    {
      key: '5',
      id: '5',
      year: '2020-2021',
      datestart: '05/10/2020',
      dateend: '05/10/2020',
      edit: 'Sửa',
      delete: 'Xóa',
    },
    {
      key: '6',
      id: '6',
      year: '2020-2021',
      datestart: '05/10/2020',
      dateend: '05/10/2020',
      edit: 'Sửa',
      delete: 'Xóa',
    },
    {
      key: '7',
      id: '7',
      year: 'Hóa học',
      datestart: '05/10/2020',
      dateend: '05/10/2020',
      edit: 'Sửa',
      delete: 'Xóa',
    },
  ];

export default function Page3() {
    const [visible, setVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisibles, setIsModalVisibles] = useState(false);
    const [isModalVisibless, setIsModalVisibless] = useState(false);
  
    const showModal = () => {
      setIsModalVisible(true);
    };
    const showModals = () => {
      setIsModalVisibles(true);
    }
    const showModalss = () => {
      setIsModalVisibless(true);
    }
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    }
    const handleOks = () => {
      setIsModalVisibles(false);
    };
  
    const handleCancels = () => {
      setIsModalVisibles(false);
    }
  
    const handleOkss = () => {
      setIsModalVisibless(false);
    };
  
    const handleCancelss = () => {
      setIsModalVisibless(false);
    }
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
                          <Select className="box__chb-slt_sch_select" defaultValue="THCS">
                              <Option value="THCS">THCS</Option>
                              <Option value="THPT">THPT</Option>
                          </Select>
                    </div>
                    <div className="box__chb-slt_yr">
                          <p>Niên Khóa:</p>
                          <Select className="box__chb-slt_yr_select" defaultValue="2020 - 2021">
                              <Option value="2020 - 2021">2020 - 2021</Option>
                              <Option value="2015 - 2016">2015 - 2016</Option>
                              <Option value="2018 - 2019">2018 - 2019</Option>
                          </Select>
                    </div>
                </div>
                <div className="box__chb-btn">
                    <button className="box__chb-btn-clk "><Link className="text__box_black" to="/page2">Niên Khóa</Link></button>
                    <button className="box__chb-btn-clk active"><Link className="text__box_white" to="/page3">Tổ - Bộ môn</Link></button>
                    <button className="box__chb-btn-clk "><Link className="text__box_black" to="/page4">Khoa - Khối</Link></button>
                    <button className="box__chb-btn-clk">Môn học</button>
                    <button className="box__chb-btn-clk">Lớp học</button>
                    <button className="box__chb-btn-clk">Loại điểm</button>
                </div>
              </div>
              <div className="box__btn">
                  
                  <div className="box__btn-button">
                      
                      <button className="box__btn-button_cre" onClick={() => setVisible(true)}>
                          <i className="bx bx-plus"/>
                          Thêm mới
                      </button>
                      <Modal
                          className="box__btn-cre"
                          centered
                          visible={visible}
                          onOk={() => setVisible(false)}
                          onCancel={() => setVisible(false)}  
                      >
                          <Form>
                              <h1>Thêm Tổ - Bộ môn mới</h1>
                              <Form.Item label="Tổ - Bộ môn:">
                                  <Input></Input>
                              </Form.Item>
                              <Form.Item label="Trưởng tổ - Bộ môn:">
                                  <Select className="ant-select-opt">
                                      <Select.Option value="khtn">Lê Văn B</Select.Option>
                                      <Select.Option value="khxh">Nguyễn Kim E</Select.Option>
                                  </Select>
                              </Form.Item>
                              
                              <hr />
                              <p>Danh sách môn học</p>
                              
                              <button className="box__btn-button-cancel" onClick={() => setVisible(false)}>Hủy</button>
                              <button className="box__btn-button-save" onClick={() => setVisible(false)}>Lưu</button>
                          </Form>
                      </Modal>
                  </div>
              </div>
              <div className="box__sbj">
                  <div className="box__sbj-stu">
                      <p>Môn học</p>
                      <input className="box__sbj-search" type="search" placeholder="Search" />
                  </div>
                  <div className="box__sbj-tbl">
                      <Table
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
                    <Pagination
                      showSizeChanger
                      defaultCurrent={8}
                      total={100}
                    />
                  </div>
              </div>
            </div>
          </div>
            </>
          );
    }

