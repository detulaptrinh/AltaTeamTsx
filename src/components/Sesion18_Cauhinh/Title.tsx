import { RightOutlined } from '@ant-design/icons'
import React, { Component }  from 'react'
import './Title.css'

export default class Title extends Component {
    render() {
    return (
        <> 
            <p className="textcaidat">Cài đặt hệ thống</p>
            <RightOutlined className="iconrightt" style={{ fontSize: '24px' , color: '#FF7506' }}/>
            <p className="textcauhinhh">Cấu hình</p>
       </>
    )
}
}
