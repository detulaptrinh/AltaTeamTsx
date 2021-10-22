import React, { Component } from 'react'
import './Boxcaidat.css'
import { Row, Col  } from 'antd';
import Title from './Title';
import {Link} from "react-router-dom"

export default class Boxcaidat extends Component {
    render() {
    return (
        <>
        <Title/>
        <Row>
        <Link to="/cauhinh">
            <Col className="sesion18__boxCH">
                <p className="sesion18__textcauhinh">Cấu hình</p>
                <p className="sesion18__textch">Theme, các thông tin khác về cấu hình</p>
                <div className="sesion18__elipse"/>
                <div className="sesion18__elipse1"/>
                <div className="sesion18__elipse2"/>
            </Col>
        </Link>
            <Col className="sesion18__boxTT">
                <p className="sesion18__textcauhinh">Thông tin trường</p>
                <p className="sesion18__textch">Thông tin chung của trường, các cơ sở</p>
                <div className="sesion18__elipse"/>
                <div className="sesion18__elipse1"/>
                <div className="sesion18__elipse2"/>
            </Col>
            <Col className="sesion18__boxND">
                <p className="sesion18__textcauhinh">Người dùng hệ thống</p>
                <p className="sesion18__textch">Phần nhóm người dùng, quản lý thông tin<br/> người dùng và phân quyền sử dụng</p>
                <div className="sesion18__elipse"/>
                <div className="sesion18__elipse1"/>
                <div className="sesion18__elipse2"/>
            </Col>
            <Col className="sesion18__boxTL">
                <p className="sesion18__textcauhinh">Thiết lập lớp học</p>
                <p className="sesion18__textch">Loại lớp cơ bản, nâng cao</p>
                <div className="sesion18__elipse"/>
                <div className="sesion18__elipse1"/>
                <div className="sesion18__elipse2"/>
            </Col>
            <Col className="sesion18__boxMH">
                <p className="sesion18__textcauhinh">Thiết lập môn học</p>
                <p className="sesion18__textch">Thông tin các hệ đào tạo của trường</p>
                <div className="sesion18__elipse"/>
                <div className="sesion18__elipse1"/>
                <div className="sesion18__elipse2"/>
            </Col>
            <Col className="sesion18__boxDT">
                <p className="sesion18__textcauhinh">Quản lý trình độ đào tạo</p>
                <p className="sesion18__textch">Thông tin các hệ đào tạo của trường</p>
                <div className="sesion18__elipse"/>
                <div className="sesion18__elipse1"/>
                <div className="sesion18__elipse2"/>
            </Col>
        </Row>          
        </>
    )
}
}