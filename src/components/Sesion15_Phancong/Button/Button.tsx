import React, { Fragment, useState  } from 'react'
import './Button.css'
import { Button,Modal } from 'antd';
import {
  IconTrash,
  IconPlus

} from "../../../assets/svg";
const Buttonn = (): JSX.Element => {
  const [isModalDel, setIsModalDel] = useState<boolean>(false);

  const showModalDel = (): void => {
    setIsModalDel(true);
  };

  const handleOkDel = (): void => {
    setIsModalDel(true);
  };
  const handleCancelDel = (): void => {
    setIsModalDel(false);
  };


    return (
        <Fragment> 
        <div className="sesion15_divhang">
           <img className="sesion15_icon" src={IconTrash} onClick={showModalDel}/>
          
           <b className="sesion15_b"/>
           <Button className="sesion15_button"> 
                <img className="sesion15_icon1" src={IconPlus}/>
                <p className="sesion15_text">Thêm mới</p>
           </Button>
        </div>  
          {/* MODAL DELETE */}
      <Modal
        className="sesion15_modal sesion15_modal-del"
        title="Xoá phân công"
        visible={isModalDel}
        onOk={handleOkDel}
        onCancel={handleCancelDel}
        okText="Xác nhận"
        cancelText="Huỷ"
        centered
      >
        <p className="sesion15_modal-del-desc">
          Xác nhận muốn xoá phân công này và toàn bộ thông tin bên trong? Sau
          khi xoá sẽ không thể hoàn tác.
        </p>
      </Modal> 
      </Fragment>
    )
};
export default Buttonn;
