import React, { Component } from 'react'
import './Boxbaikiemtra.css'
import { Row, Col, Button,Table,DatePicker,Input,Pagination, InputNumber   } from 'antd';
import { PlusOutlined,SearchOutlined, CalendarOutlined,EyeOutlined } from '@ant-design/icons';
import {
  IconDate,

} from "../../assets/svg";
import dataBoxbaikiemtra from "../../data/dataBoxbaikiemtra.json";

interface databaikiemtra{
  key: number;
  date: string;
  khoakhoi: string;
  lop: string;
  mon: string;
  giangvien: string;
  noidung: string;
  thoiluong: string;
  tinhtrang: string;
  pheduyet: string;
  icon: string;
}
const dataBonus: databaikiemtra[] = dataBoxbaikiemtra;


//   tao bang
const columns =  [ 
    {
      title: 'Ngày làm bài',
      dataIndex: 'date',
      
    },
    {
      title: 'Khoa-Khối',
      dataIndex: 'khoakhoi',
      sorter: {
        compare: (a: any, b : any) => a.khoakhoi - b.khoakhoi,
        multiple: 3,
      },
    },
    {
    title: 'Lớp',
    dataIndex: 'lop',
    sorter: {
        compare: (a: any, b : any) => a.lop - b.lop,
        multiple: 3,
      },
    },   
    {
    title: 'Môn học',
    dataIndex: 'mon',
    sorter: {
        compare: (a: any, b : any) => a.mon - b.mon,
        multiple: 3,
      },
    },  
    {
    title: 'Giảng viên',
    dataIndex: 'giangvien',
    },
    {
    title: 'Nội dung kiểm tra',
    dataIndex: 'noidung',
    },  

    {
    title: 'Thời lượng',
    dataIndex: 'thoiluong',
    },  

    {
    title: 'Tình trạng',
    dataIndex: 'tinhtrang',
    },  

    {
    title: 'Phê Duyệt',
    dataIndex: 'pheduyet',
    },
    {
    title: '',
    dataIndex: 'icon',
    render: () => <EyeOutlined style={{ fontSize: '32px' , color: '#FF7506' }}/>,
    },   
                    
    
  ]; 
 
  export default class Boxbaikiemtra extends Component {
    render() {
    return (
        <> 
        <p className="sesion16___textbaikiemtra">Quản lý bài kiểm tra</p>
        <div className="sesion16___divselect">
            <div className="sesion16___selectTT">
                <select  defaultValue="Tình trạng">
                <option value="TT01">Tình trạng</option>
                <option value="TT02">Chờ phê duyệt</option>
                <option value="TT03">Chưa diễn ra</option>
                <option value="TT04">Đã tiến hành</option>
                </select>
            </div>
            <div className="sesion16___selectCL">
                <select  defaultValue="Chọn lớp">
                <option value="CL01">Chọn lớp</option>
                <option value="CL02">6A1</option>
                <option value="CL03">8C</option>
                <option value="CL04">7B</option>
                </select>
            </div>
            <div className="sesion16___selectCK">
                <select  defaultValue="Chọn khối">
                <option value="CK01">Chọn khối</option>
                <option value="CK02">6</option>
                <option value="CK03">7</option>
                <option value="CK04">8</option>
                </select>
            </div>
            <p className="sesion16___texttungay">Từ ngày</p>
                <DatePicker className="sesion16___datepicker"/>
                <img className="sesion16___iconcalendar" src={IconDate}/>
              
            <p className="sesion16___textdenngay">Đến ngày</p>
                <DatePicker className="sesion16___datepicker"/>
                <img className="sesion16___iconcalendar1" src={IconDate}/>
        </div>
       
    
        <div className="sesion16___divbutton">
            <Button className="sesion16___butttonadd">
                <PlusOutlined  className="sesion16___iconplus"/>
                <p className="sesion16___textadd">Thêm mới</p>
            </Button>
        </div>

        <Row>
            <Col className="sesion16___colbaikiemtra">
                <p className="sesion16___textxemchitiet">Xem chi tiết bài kiểm tra</p>
                <Col span={12} className="sesion16___col-search">
                    <Input className="sesion16___table-headers-search"  placeholder="Tìm Kiếm" prefix={<SearchOutlined />} />
                </Col>
                <div className="sesion16___body-table">
                      <div className="sesion16___table">
                          <Table dataSource={dataBonus} columns={columns} pagination={false}/>
                      </div>
                </div>
                <Row>
                    <Col span={12} className="sesion16___col-left">
                        <p className="sesion16___col-left-txt-view">
                            Hiển thị
                        </p>
                        <InputNumber min={1} max={10} defaultValue={8} />
                        <p className="sesion16___col-left-txt-rol">
                            hàng trong mỗi trang
                        </p>
                    </Col>
                    <Col span={12} className="sesion16___footer-col-right">
                        <div className="sesion16___footer-col-right-pagination">
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