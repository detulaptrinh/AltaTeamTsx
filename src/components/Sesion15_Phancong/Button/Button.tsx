import React, { Component,useState } from 'react'
import './Button.css'
import { Button,Modal } from 'antd';
<<<<<<< Updated upstream
=======
import { PlusOutlined,DeleteOutlined } from '@ant-design/icons';
>>>>>>> Stashed changes
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
      const [isModalDel, setIsModalDel] = useState(false);
      const showModalDel = (): void  => {
        setIsModalDel(true);
      };
    
      const handleOkDel = (): void => {
        setIsModalDel(false);
      };
    
      const handleCancelDel = (): void => {
        setIsModalDel(false);
      };
    return (
        <> 
        {/* MODAL DELETE COURSE */}
      <Modal
        className="sesion15_Button-modal sesion15_Button-modal-del"
        title="Xoá phân công"
        visible={isModalDel}
        onOk={handleOkDel}
        onCancel={handleCancelDel}
        okText="Xác nhận"
        cancelText="Huỷ"
        centered
      >
        <p className="sesion15_Button-modal-del-desc">
          Xác nhận muốn xoá phân công này và toàn bộ thông tin bên trong? Sau khi
          xoá sẽ không thể hoàn tác.
        </p>
      </Modal>

        <div className="sesion15_divhang">
<<<<<<< Updated upstream
           <img className="sesion15_icon" src={IconTrash} onClick={showDeleteConfirm}/>
=======
           <img className="sesion15_icon" src={IconTrash} onClick={showModalDel}/>
>>>>>>> Stashed changes
          
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