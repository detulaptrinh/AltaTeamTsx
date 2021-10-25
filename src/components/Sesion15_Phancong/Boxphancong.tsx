import React, { Fragment, useState } from "react";
import './Boxphancong.css';
import { Row, Col, Button,Modal,Table, Space, Checkbox,Pagination, InputNumber, Form,Input,DatePicker } from 'antd';
import Title from './Title/Title';
import Buttonn from './Button/Button';
import {Link} from "react-router-dom";
import {
  IconList,
  IconEdit,
  IconTrash,
  IconDate

} from "../../assets/svg";
import dataBoxphancong from "../../data/dataBoxphancong.json";


interface dataphancong{
  key: number;
  ma: string;
  name: string;
  datebatdau: string;
  dateketthuc: string;
  danhsach: string;
  icon: string;
}
const dataBonus: dataphancong[] = dataBoxphancong;
const { TextArea } = Input;
const Boxphancong = (): JSX.Element => {
  const [isModalDel, setIsModalDel] = useState<boolean>(false);
  const [isModalEdit, setIsModalEdit] = useState<boolean>(false);

//   tao bang
  const columns =  [ 
    {
      title: '',
      dataIndex: 'row',
      render: () => (
        <Space>
          <Checkbox/>
        </Space>
      ),
    },
    {
      title: 'Mã lớp',
      dataIndex: 'ma',
      
    },
    {
      title: 'Tên lớp',
      dataIndex: 'name',
    },
    {
      title: 'Ngày bắt đầu',
      dataIndex: 'datebatdau',
    },
    {
    title: 'Ngày kết thúc',
    dataIndex: 'dateketthuc',
    },
    {
    title: 'Danh sách chủ đề',
    dataIndex: 'danhsach',
    render: () =><Link to="/danhsach"><img src={IconList}/></Link>  ,
  
    },
    {
    title: '',
    dataIndex: 'icon',
    render: () => (
      <Space >
        <img src={IconEdit} onClick={showModalEdit}/>
        <img src={IconTrash} onClick={showModalDel}/>
      </Space>
    ),
    },
    
  ]; 
  
  const showModalDel = (): void => {
    setIsModalDel(true);
  };

  const handleOkDel = (): void => {
    setIsModalDel(true);
  };

  const handleCancelDel = (): void => {
    setIsModalDel(false);
  };

  const showModalEdit = (): void => {
    setIsModalEdit(true);
  };
  const handleAddCourse = (values: any): void => {
    console.log(values);
  };
  const handleCancelEdit = (): void => {
    setIsModalEdit(false);
  };
    return (
        <Fragment>
        <Title/>
        <Buttonn/>
            <Row>
            <Col className="sesion15_box1">
                 <Col className="sesion15_box3">
                     <p className="sesion15_gv">GV Lương Hoàng</p>
                     <p className="sesion15_nienkhoa">Niên Khóa
                     <div className="sesion15_selectNK">
                        <select defaultValue="2020-2021">
                        <option value="2020-2021">2020-2021</option>
                        <option value="2019-2020">2019-2020</option>
                        <option value="2018-2019">2018-2019</option>
                        </select>
                     </div> 
                     </p>
                        
                     <p className="sesion15_bomon">Bộ Môn
                     <div className="sesion15_selectBM">
                     <select  defaultValue="Toán Đại Số">
                        <option value="Toán Đại Số">Toán Đại Số</option>
                        <option value="Ngữ Văn">Ngữ Văn</option>
                        <option value="Tiếng Anh">Tiếng Anh</option>
                     </select>
                     </div>
                    </p>
                 </Col>
                 <Button className="sesion15_btn1">
                     <p className="sesion15_textbtn1">Tô An</p>
                 </Button>
                 <Button className="sesion15_btn2">
                     <p className="sesion15_textbtn2">Hoàng Mỹ Trưng</p>
                 </Button>
                 <Button className="sesion15_btn3">
                     <p className="sesion15_textbtn2">Nguyễn Kỳ Nguyên</p>
                 </Button>
                 <Button className="sesion15_btn4">
                     <p className="sesion15_textbtn2">Mộc Tâm Tâm</p>
                 </Button>
                 <Button className="sesion15_btn5">
                     <p className="sesion15_textbtn2">Trần Thoa Hân</p>
                 </Button>
                 <Button className="sesion15_btn6">
                     <p className="sesion15_textbtn2">Nguyễn Ngọc Điệp</p>
                 </Button>
            </Col>
            <Col className="sesion15_box2">
                  <p className="sesion15_text1">Danh sách phân công giảng dạy</p>
                  <div className="sesion15_body-table">
                      <div className="sesion15_table">
                          <Table  dataSource={dataBonus} columns={columns} pagination={false} />
                      </div>
                  </div>
                  <Row>
                      <Col span={12} className="sesion15_col-left">
                          <p className="sesion15_col-left-txt-view">
                              Hiển thị
                          </p>
                          <InputNumber min={1} max={10} defaultValue={8} />
                          <p className="sesion15_col-left-txt-rol">
                              hàng trong mỗi trang
                          </p>
                      </Col>
                      <Col span={12} className="sesion15_footer-col-right">
                          <div className="sesion15_footer-col-right-pagination">
                              <Pagination
                                  showSizeChanger
                                  defaultCurrent={3}
                                  total={1000}
                              />
                          </div>
                      </Col>
                  </Row>
            </Col>
            </Row>
      {/* MODAL DELETE */}
      <Modal
        className="sesion15_modal sesion15_modal-del"
        title="Xoá phân công"
        visible={isModalDel}
        onOk={handleOkDel}
        onCancel={handleCancelDel}
        okText="Xác nhận"
        cancelText="Huỷ"
        centered
      >
        <p className="sesion15_modal-del-desc">
          Xác nhận muốn xoá phân công này và toàn bộ thông tin bên trong? Sau
          khi xoá sẽ không thể hoàn tác.
        </p>
      </Modal>

       {/* MODAL EDIT  */}
       <Modal
        className="sesion15_modal sesion15_modal-add-edit"
        title="Cập nhật lịch giảng dạy"
        visible={isModalEdit}
        onCancel={handleCancelEdit}
        centered
      >
        <Form
          className="sesion15_form"
          name="validate_other"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          onFinish={handleAddCourse}
        >
        <Form.Item label="Giảng viên: " className="sesion15_bg-modal-update-bonus-style-label">
                            <p className="sesion15_bg-modal-update-giangvien">Nguyễn Ngọc Tuyết</p>
        </Form.Item>
        <Form.Item label="Môn học: " className="sesion15_bg-modal-update-bonus-style-label">
                            <p className="sesion15_bg-modal-update-monhoc">Toán đại số</p>
        </Form.Item>
  
        <Form.Item label="Lớp học:" className="sesion15_bg-modal-update-bonus-style-label">
            <div className="sesion15_selectngonngu_LH">
                          <select defaultValue="ggg">
                          <option value="luachon">Lựa chọn</option>
                          </select>
                  </div> 
       </Form.Item>
       
        <Form.Item label="Ngày bắt đầu:" className="sesion15_bg-modal-update-bonus-style-label">
                          <DatePicker className="sesion15_bg-modal-update-bonus-style-date-picker" />
                          <img className="sesion15_iconcalendar_NBD" src={IconDate}/>
        </Form.Item> 
        <Form.Item label="Ngày kết thúc:" className="sesion15_bg-modal-update-bonus-style-label">
                          <DatePicker className="sesion15_bg-modal-update-bonus-style-date-picker" />
                          <img className="sesion15_iconcalendar_NBD" src={IconDate}/>
        </Form.Item>                  
      
          <Form.Item label="Mô tả" className="sesion15_bg-modal-update-bonus-style-label">
              <TextArea rows={4} className="sesion15_bg-modal-update-bonus-style-input" />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <div className="sesion15_form-btns">
              <Button
                className="sesion15_form-cancel"
                type="primary"
                onClick={() => setIsModalEdit(false)}
              >
                Huỷ
              </Button>
              <Button
                className="sesion15_form-submit"
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
  export default Boxphancong;