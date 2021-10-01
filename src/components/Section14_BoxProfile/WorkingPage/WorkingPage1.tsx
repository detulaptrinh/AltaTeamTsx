import React, { Component } from 'react'
import {
    Row,
    Col,
    Table,
    Input,
    Space,
    Checkbox
} from "antd";
import {
    IconPlus,
    IconTrash,
    IconEdit
} from "../../../assets/svg"
import './woking.css'
import {
    DeleteOutlined
} from '@ant-design/icons';

const columns =  [ 
    {
      title: 'Cơ quan/ Đơn vị',
      dataIndex: 'unit',
      
    },
    {
      title: 'Tổ/ Bộ môn',
      dataIndex: 'object',
      
    },
    {
      title: 'Chức vụ',
      dataIndex: 'position',
    },
    {
        title: 'Ngày bắt đầu',
        dataIndex: 'datestart',
    },
    {
        title: 'Ngày kết thúc',
        dataIndex: 'dateend',
    },
    {
    title: '',
    dataIndex: 'icon',
    render: () => (
      <Space>
        <div className="icon__img_fix">
          <img className="iconedit" src={IconEdit}/>
          <img src={IconTrash} />
        </div>
      </Space>
    ),
    },
    
  ]; 
  const data= [
    {
      key: '1',
      unit:"THPT Campus",
      object:"Toán - Tin",
      position: 'Giảng viên',
      datestart:"01/01/2021",
      dateend:"Chưa xác định",
      icon: '',
    },
    {
      key: '2',
      unit:"THPT Campus",
      object:"Lý - Hóa",
      position: 'Giảng viên',
      datestart:"01/01/2021",
      dateend:"01/01/2025",
      icon: '',
    },
    {
        key: '3',
        unit:"THPT Campus",
        object:"Sinh - Sử",
        position: 'Trưởng bộ môn',
        datestart:"01/01/2021",
        dateend:"01/01/2025",
        icon: '',
      },
      {
        key: '4',
        unit:"THPT Campus",
        object:"Toán - Văn",
        position: 'Trưởng bộ môn',
        datestart:"01/01/2021",
        dateend:"01/01/2025",
        icon: '',
      }
  ]; 

export default class WokingPage1 extends Component {
    render() {
        return (
            <>
                <Row className="ant-row__fix">  
                    <Col span={6}>
                        <Input className="input__process"  placeholder="Tìm kiếm"/>
                    </Col>
                    <Col span={3} offset={14} >
                        <button className="btn__process__add">
                        <img src={IconPlus}/>Thêm
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Table
                        className="table__process"
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                        />
                    </Col>
                </Row>
            </>
        )
    }
}
