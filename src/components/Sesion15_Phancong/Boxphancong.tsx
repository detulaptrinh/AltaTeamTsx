import React, { Component } from 'react'
import './Boxphancong.css'
import { Row, Col, Button,Modal,Table, Space, Checkbox,Pagination, InputNumber   } from 'antd';
import Title from './Title/Title'
import Buttonn from './Button/Button'
import {Link} from "react-router-dom"
import {
  IconList,
  IconEdit,
  IconTrash,

} from "../../assets/svg";
import dataBoxphancong from "../../data/dataBoxphancong.json";

function showDeleteConfirm() {
  confirm({

    title: 'Xóa phân công',
    content: 'Xác nhận muốn xoá phân công này và toàn bộ thông tin bên trong? Sau khi xoá sẽ không thể hoàn tác.',
    okText: 'Xác nhận',
    okType: 'danger',
    cancelText: 'Hủy',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}
const { confirm } = Modal;

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
        <img src={IconEdit}/>
        <img src={IconTrash} onClick={showDeleteConfirm}/>
      </Space>
    ),
    },
    
  ]; 
  

  export default class Boxphancong extends Component {
    render() {
    return (
        <>
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
      </>
    )
}

}