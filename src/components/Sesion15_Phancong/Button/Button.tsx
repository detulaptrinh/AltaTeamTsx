import React, { Component } from 'react'
import './Button.css'
import { Button } from 'antd';
import { PlusOutlined,DeleteOutlined } from '@ant-design/icons';



export default class Buttonn extends Component {
    render() { 
    return (
        <> 
        <div className="sesion15_divhang">
           <DeleteOutlined className="sesion15_icon" style={{ fontSize: '32px' , color: '#FF7506' }}/> 
           <b className="sesion15_b"/>
           <Button className="sesion15_button"> 
                <PlusOutlined className="sesion15_icon1" style={{  color: '#FFFFFF' }}/>
                <p className="sesion15_text">Thêm mới</p>
           </Button>
        </div>   
      </>
    )
}
}