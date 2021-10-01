import React, {Component} from 'react'
import './ListUser.css'
import { DeleteOutlined, PicCenterOutlined } from '@ant-design/icons';
import { PlusOutlined, FormOutlined} from '@ant-design/icons';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Table, Tag, Radio, Space } from 'antd';
import { Card } from 'antd';
import { Breadcrumb, Pagination, InputNumber } from 'antd';
import { IconEdit, IconTrash, IconPlus, IconShow} from '../../assets/svg';

import {
    Form,
    Input,
    Select,
    DatePicker,
} from 'antd';

import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

function showDeleteConfirm() {
    confirm({
      title: 'Xóa thông tin',
      content: 'Xác nhận muốn xoá thông tin này và toàn bộ thông tin bên trong? Sau khi xoá sẽ không thể hoàn tác.',
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
const { Option } = Select;

const columns = [
    {
        title: 'Tên',
        dataIndex: 'name',
        width: '20%'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        width: '25%'
    },
    {
        title: 'Nhóm người dùng',
        dataIndex: 'groupuser', 
        width: '20%'
    },
    {
        title: 'Trạng thái',
        dataIndex: 'ghichu',
        width: '30%'
    },
   
    {       
        render: () => (
            <Space size="middle">
              <a><img src={IconEdit} className="edit__icon" alt="" style={{width:32,height:32}}/></a>
              <a onClick={showDeleteConfirm}><img src={IconTrash} className="delete__icon" alt="" style={{width:32,height:32}}/></a>
            </Space>
          ),
    },
];

const dataSource = [
    {
        name: 'Nguyễn Văn C',
        email: 'abcdefkdd@gmail.com',
        groupuser: 'Quản trị viên',
        ghichu: 'Đã vô hiệu hóa',
    },
    {
        name: 'Nguyễn Văn C',
        email: 'abcdefkdd@gmail.com',
        groupuser: 'Học sinh tiểu học',
        ghichu: 'Đang hoạt động'
    },
    {
        name: 'Nguyễn Văn C',
        email: 'abcdefkdd@gmail.com',
        groupuser: 'Phòng hành chính',
        ghichu: 'Đang hoạt động'
    },
    {
        name: 'Nguyễn Văn C',
        email: 'abcdefkdd@gmail.com',
        groupuser: 'Nhân viên',
        ghichu: 'Đang hoạt động'
    },
    {
        name: 'Nguyễn Văn C',
        email: 'abcdefkdd@gmail.com',
        groupuser: 'Nhân viên',
        ghichu: 'Đang hoạt động' 
    },
    {
        name: 'Nguyễn Văn C',
        email: 'abcdefkdd@gmail.com',
        groupuser: 'Nhân viên',
        ghichu: 'Đang hoạt động'
    },
    {
        name: 'Nguyễn Văn C',
        email: 'abcdefkdd@gmail.com',
        groupuser: 'Nhân viên',
        ghichu: 'Đang hoạt động'
    },
    {
        name: 'Nguyễn Văn C',
        email: 'abcdefkdd@gmail.com',
        groupuser: 'Nhân viên',
        ghichu: 'Đang hoạt động'
    },

];



class ListUser extends Component {
    render(){
        return(
        <>
        <div className="section20">
            <div className="Section20__Title">
                <Row>
                    <Col span={24}>
                        <div className="title">
                            <Breadcrumb separator=">">
                                <Breadcrumb.Item className="tittle__breadcrumb__left">Cài đặt hệ thống</Breadcrumb.Item>
                                <Breadcrumb.Item className="tittle__breadcrumb__right">Người dùng hệ thống</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>

                <Row className="row1">
                    <Col span={24} className="switch__tab">
                        <Col span={5}><div className="box__select">
                            <Col span={12}>
                                <Select defaultValue="1" className="box__select__year">
                                    <Option value="1">Chọn kỳ</Option>
                                    <Option value="2">HKI</Option>
                                    <Option value="3">HKII</Option>
                                    <Option value="3">HKIII</Option>
                                </Select>
                            </Col>
                            <Col span={12}>
                                <Select defaultValue="1" className="box__select__year">
                                    <Option value="1">Chọn khối</Option>
                                    <Option value="2">Khối 7</Option>
                                    <Option value="3">Khối 8</Option>
                                    <Option value="3">Khối 9</Option>
                                </Select>
                            </Col>
                        </div>
                        </Col>

                        <Col span={9}>
                            <div className="switch-list">
                                <div className="switch-list__tab-left">
                                    <a href="">Nhóm người dùng</a>
                                </div>

                                <div className="switch-list__tab-right">
                                    <a href="">Danh sách người dùng</a>
                                </div>
                            </div>
                        </Col>

                        <Col span={10}>
                            <div className="box__btn-group">                             
                                <Button className="box__btn-group__add" ><img style={{padding:10}} src={IconPlus}/>Thêm mới</Button>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </div>



            <div className="tab">
            <Col className="tab__title">   
                <Col span={12}>
                    <div className="tab__title__left">
                        <p>Danh sách người dùng trên hệ thống</p>
                    </div>
                </Col>

                <Col span={12}>
                    <div className="tab-search-right"> 
                        <Input className="tab-search-right__input"  placeholder="Tìm kiếm" />
                    </div>
                </Col>
            </Col> 

                <div className="tab-table">
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                    />
                </div>


                <Col span={24} className="pagination">
                    <Col span={12} className="pagination-left">
                        <div className="box-sbj-pagtion">
                            <p>Hiển thị</p>
                            <InputNumber min={1} max={10} defaultValue={8} />
                            <p> hàng trong mỗi trang</p>
                        </div>
                    </Col>

                    <Col span={12}>
                        <div className="box-sbj-pagin">
                            <Pagination
                                showSizeChanger
                                defaultCurrent={3}
                                total={1000}
                            />
                        </div>
                    </Col>
                </Col>
            </div>
        </div>
        </>
    )
    /* Modal */
  
  }
}

export default ListUser;