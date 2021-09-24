import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import './dash.css'
import { Select, Table, Modal, Form, Input, Pagination, InputNumber } from 'antd';
/* import unIcon from '../../assets/boxdata/unIcon.svg'
import plusIcon from '../../assets/boxdata/plusIcon.svg'
import listIcon from '../../assets/boxdata/listIcon.svg'
import editIcon from '../../assets/boxdata/editIcon.svg'
import trashIcon from '../../assets/boxdata/trashIcon.svg'
 */
const { Option } = Select;

const columns = [
    {
      title: 'Tên tổ - bộ môn',
      dataIndex: 'objectname',
      sorter: (a, b) => a.objectname - b.objectname,
    },
    {
      title: 'Trưởng bộ môn',
      dataIndex: 'leader',
      sorter: (a, b) => a.leader - b.leader,
    },
    
    {
      title: '',
      dataIndex:"showlist"
    },
    {
        title:"",
        dataIndex:"edit",
    },
    {
        title:"",
        dataIndex:"delete"
    }
  ];

const data = [
    {
      key: '1',
      objectname: 'Văn hóa xã hội',
      leader: 'Nguyễn Văn A',
      showlist: 'Show',
      edit: 'Sửa',
      delete: 'Xóa',
    },
    {
      key: '2',
      objectname: 'Khoa học tự nhiên',
      leader: 'Trần Thị B',
      showlist: 'Show',
      edit: 'Sửa',
      delete: 'Xóa',
    },
    {
      key: '3',
      objectname: 'Anh Văn',
      leader: 'Phạm Ngọc C',
      showlist: 'Show',
      edit: 'Sửa',
      delete: 'Xóa',
    }
  ]; // rowSelection object indicates the need for row selection
  
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};
  
function Page3() {
    const [visible, setVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
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
                          rowSelection={rowSelection}
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

export default Page3;