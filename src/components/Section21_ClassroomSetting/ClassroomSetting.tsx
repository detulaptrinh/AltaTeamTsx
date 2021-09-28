import React, { useState } from 'react'
import './ClassroomSetting.css'
import { DeleteOutlined, PicCenterOutlined } from '@ant-design/icons';
import { PlusOutlined, FormOutlined} from '@ant-design/icons';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Table, Tag, Radio, Space } from 'antd';
import { Card } from 'antd';
import { Breadcrumb, Pagination, InputNumber } from 'antd';
import editIcon from '../../assets/avg/edit.svg'
import deleteIcon from '../../assets/avg/delete.svg'
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
              <a><img src={editIcon} className="edit__icon" alt="" style={{width:32,height:32}}/></a>
              <a onClick={showDeleteConfirm}><img src={deleteIcon} className="delete__icon" alt="" style={{width:32,height:32}}/></a>
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

function ClassroomSetting() {
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    return (
        <>
        

            <div className="Section20__Title">
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

                            <div className="left-tab-box">
                                <div className="left-tab-box-general-information">
                                    <a href="">Nhóm người dùng</a>
                                </div>
                                <div className="left-tab-box-study-process">
                                    <a href="">Danh sách người dùng</a>
                                </div>
                            </div>


                        </Col>

                        <Col span={10}>
                            <div className="box__btn-group">
                                
                                <Button className="box__btn-group__add" onClick={showModal} ><PlusOutlined />Thêm mới</Button>

                                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                 <p>Some contents...</p>
                                </Modal>
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
                <div className="tab__search__right"> 
                <Input className="box__sbj-search" placeholder="Tìm kiếm" />
            </div>
            </Col>
            </Col> 
                <div className="tab__table">
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                    />
                </div>


                <Col span={24} className="pagination">
                    <Col span={12} className="pagination__left">
                        <div className="box__sbj-pagtion">
                            <p>Hiển thị</p>
                            <InputNumber min={1} max={10} defaultValue={3} />
                            <p> hàng trong mỗi trang</p>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="box__sbj-pagin">
                            <Pagination
                                showSizeChanger
                                defaultCurrent={3}
                                total={1000}
                            />
                        </div>
                    </Col>

                </Col>
            </div>



        </>
    )
    /* Modal */

    }

export default ClassroomSetting