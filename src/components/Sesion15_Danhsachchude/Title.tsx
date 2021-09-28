import { RightOutlined } from '@ant-design/icons'
import React, { Component } from 'react'
import './Title.css'

export default class Title extends Component {
    render() {
    return (
        <> 
            <p className="textphancong1">Phân công giảng dạy</p>
            <RightOutlined className="iconright" style={{ fontSize: '24px' , color: '#FF7506' }}/>
            <p className="textdanhsach1">Danh sách chủ đề</p>
       </>
    )
}
}