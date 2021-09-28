import { Row } from 'antd';
import React, { Component } from 'react'

// css
import './DanhSachKhenThuong.css';

// icon
import edit from '../../../../assets/png/edit.png';
import deleteIcon from '../../../../assets/png/delete.png';

export default class DanhSachKhenThuong extends Component {
    render() {
        return (
            <div className="danh-sach-khen-thuong">
                <div className="danh-sach-khen-thuong-seach">
                    <Row>
                        <div className="danh-sach-khen-thuong-seach-box">
                            <i className='bx bx-search'></i>
                            <input type="search" name="" id="" />
                        </div>  
                    </Row>
                </div>

                <div className="danh-sach-khen-thuong-table">
                    <Row>
                        
                    </Row>
                </div>
            </div>
        )
    }
}
