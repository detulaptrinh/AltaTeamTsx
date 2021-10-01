import React, { useState, Component } from 'react'
import './ClassroomSetting.css'
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
        title: 'Loại lớp',
        dataIndex: 'class',
        sorter: true,
        width: '10%'
       
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        width: '30%'
        
    },
    {
        title: 'Ghi chú',
        dataIndex: 'ghichu', 
        width: '50%'
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
        class: 'Căn bản',
        status: 'Đã vô hiệu hóa',
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
        class: 'Nâng cao',
        status: 'Đang hoạt động',
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
        class: 'Tăng cường',
        status: 'Đang hoạt động',
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
        class: 'Phụ đạo',
        status: 'Đang hoạt động',
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
        class: 'Phụ đạo',
        status: 'Đang hoạt động',
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
        class: 'Phụ đạo',
        status: 'Đang hoạt động',
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
        class: 'Phụ đạo',
        status: 'Đang hoạt động',
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
        class: 'Phụ đạo',
        status: 'Đang hoạt động',
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },

];

class ClassroomSetting extends Component {
    render(){
        return (
            <>
            <div className="section21">
            <div className="Section21__Title">
                <Row>
                    <Col span={24}>
                        <div className="title">
                            <Breadcrumb separator=">">
                                <Breadcrumb.Item className="tittle__breadcrumb__left">Cài đặt hệ thống</Breadcrumb.Item>
                                <Breadcrumb.Item className="tittle__breadcrumb__right">Thiết lập lớp học</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>


                <Row className="row1">
                    <Col span={24} className="switch__tab">
                        <Col span={5}><div className="box__select">
                            <Col span={12}>
                                <Select defaultValue="1" className="box__select__year">
                                    <Option value="1">2020-2021</Option>
                                    <Option value="2">2019-2020</Option>
                                    <Option value="3">2018-2019</Option>
                                </Select>
                            </Col>
                        </div>
                        </Col>

                        <Col span={9}>
                        </Col>

                        <Col span={10}>
                            <div className="box__btn-group">
                                <Button className="box__btn-group__add"><img style={{padding:10}} src={IconPlus}/>Thêm mới</Button>
                                {/* <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                 <p>Some contents...</p>
                                </Modal> */}
                            </div>
                        </Col>
                    </Col>
                </Row>
            </div>


            <div className="tab">

            <Col className="tab__title">   
                <Col span={12}>
                <div className="tab__title__left">
                    <p>Danh sách các loại lớp học</p>
                </div>
                </Col>

                <Col span={12}>
                <div className="tab-search-right"> 
                    <Input className="tab-search-right__input" placeholder="Tìm kiếm" />
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
                            <InputNumber min={1} max={10} defaultValue={3} />
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
export default ClassroomSetting;