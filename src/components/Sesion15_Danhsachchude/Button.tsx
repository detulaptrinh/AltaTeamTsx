import React, { Component } from 'react'
import './Button.css'
import { Button } from 'antd';
import { PlusOutlined,DeleteOutlined } from '@ant-design/icons';



export default class Buttonnn extends Component {
    render() {
    return (
        <> 
           <Button className="sesion15__button"> 
                <p className="sesion15__textphanconggd">Phân công giảng dạy</p>
           </Button>
      </>
    )
}
}