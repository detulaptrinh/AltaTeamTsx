import React, { Component } from 'react'
import './Button.css'
import { Button,Modal } from 'antd';
import {
  IconTrash,
  IconPlus

} from "../../../assets/svg";

function showDeleteConfirm() {
  confirm({

    title: 'Xóa phân công',
    content: 'Xác nhận muốn xoá phân công này và toàn bộ thông tin bên trong? Sau khi xoá sẽ không thể hoàn tác.',
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


export default class Buttonn extends Component {
    render() { 
    return (
        <> 
        <div className="sesion15_divhang">
           <img className="sesion15_icon" src={IconTrash} onClick={showDeleteConfirm}/>
          
           <b className="sesion15_b"/>
           <Button className="sesion15_button"> 
                <img className="sesion15_icon1" src={IconPlus}/>
                <p className="sesion15_text">Thêm mới</p>
           </Button>
        </div>   
      </>
    )
}
}