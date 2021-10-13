import React, { Component } from 'react'
import './ClassroomSetting.css'
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Table, Space } from 'antd';
import { Breadcrumb, Pagination, InputNumber } from 'antd';
import { IconPlus , IconEdit , IconTrash} from '../../assets/svg';
import dataClassroomSetting from '../../data/classroomSetting.json';
import {
    Input,
    Select
} from 'antd';
import { Modal } from 'antd';
     
const { Option } = Select;

interface ClassroomSetting {
    class: string;
    status: boolean;
    note: string;
}

const data: ClassroomSetting[] = dataClassroomSetting;

const columnsClassroomSetting = [
    {
        title: 'Loại lớp',
        dataIndex: 'class',
        sorter: true,
        width: '10%'
       
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        width: '30%',
        render: (status: boolean) =>
        status ? (
          <span className="primary">Đang hoạt động</span>
        ) : (
          <span className="danger">Đã vô hiệu hoá</span>
        ),
    },
    {
        title: 'Ghi chú',
        dataIndex: 'note', 
        width: '50%'
    },
   
   
    {       
        render: () => (
            <Space size="middle">
              <a><img src={IconEdit} className="edit__icon" alt="" style={{width:32,height:32}}/></a>
              <a><img src={IconTrash} className="delete__icon" alt="" style={{width:32,height:32}}/></a>
            </Space>
          ),
    },
];


function ClassroomSetting(){
return (
    <>
        <div className="section21">
            <div className="Section21__Title">
                <Row>
                    <Col span={24}>
                        <div className="title">
                            <Breadcrumb separator=">">
                                <Breadcrumb.Item className="tittle__breadcrumb__left">
                                Cài đặt hệ thống
                                </Breadcrumb.Item>
                                <Breadcrumb.Item className="tittle__breadcrumb__right">
                                Thiết lập lớp học
                                </Breadcrumb.Item>
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
                                <Button className="box__btn-group__add">
                                    <img style={{padding:10}} src={IconPlus}/>
                                    Thêm mới
                                </Button>
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
                                columns={columnsClassroomSetting}
                                dataSource={data}
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

export default ClassroomSetting;