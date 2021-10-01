import React, { Component } from 'react'
import './Button.css'
import { Button } from 'antd';
import { PlusOutlined,DeleteOutlined } from '@ant-design/icons';
import {
  IconTrash,

} from "../../../assets/svg";


export default class Buttonn extends Component {
    render() { 
    return (
        <> 
        <div className="sesion15_divhang">
           <img className="sesion15_icon" src={IconTrash}/>
          
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