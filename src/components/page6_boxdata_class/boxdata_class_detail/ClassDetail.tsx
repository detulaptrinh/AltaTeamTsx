import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import './ClassDetail.css'
import editIcon from '../../assets/boxdata/editIcon.svg'
import trashIcon from '../../assets/boxdata/trashIcon.svg'

class ClassDetail extends Component {
    render() {
        return (
            <>
                <div className="box-class-detail__breadcrumb">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item className="box-class-detail__breadcrumb-item">Khai báo dữ liệu</Breadcrumb.Item>
                        <Breadcrumb.Item className="box-class-detail__breadcrumb-item">Lớp học</Breadcrumb.Item>
                        <Breadcrumb.Item className="box-class-detail__breadcrumb-item-active">Chi tiết lớp học</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="box-class-detail__box">
                    <div className="box-class-detail__box-title">
                        <p className="box-class-detail__box-title__txt">Thông tin chung</p>
                        <div className="box-class-detail__box-title__button">
                            <button className="box-class-detail__box-title__button-btn" >
                                <img src={editIcon} alt="" />
                            </button>
                            <button className="box-class-detail__box-title__button-btn">
                                <img src={trashIcon} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="box-class-detail__box-subtitle">
                        <div className="box-class-detail__box1">
                            <div className="box-class-detail__box1-title">
                                <p>Niên khóa:</p>
                                <p>Khoa - khối:</p>
                                <p>Mã lớp học:</p>
                                <p>Tên lớp học:</p>
                            </div>
                            <div className="box-class-detail__box1-txt">
                                <p>2020 - 2021</p>
                                <p>Khối 6</p>
                                <p>2020-6A1</p>
                                <p>6A1</p>
                            </div>
                        </div>
                        <div className="box-class-detail__box2"></div>
                        <div className="box-class-detail__box3"></div>
                    </div>
                </div>
            </>
        );
    }
}

export default ClassDetail;