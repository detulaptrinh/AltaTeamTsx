import React, { Fragment, useState } from "react";
import './Boxchude.css';
import { Row, Col, Button,Modal,Table, Pagination, InputNumber   } from 'antd';
import Title from './Title';
import Buttonnn from './Button';
import {
  IconEdit,
  IconTrash,
} from "../../assets/svg";
import dataBoxchude from "../../data/dataBoxchude.json";

interface datachude{
  key: number;
  chude: string;
  mieuta: string;
  dateketthuc: string;
}
const dataBonus: datachude[] = dataBoxchude;

const Boxchude = (): JSX.Element => {
  const [isModalDel, setIsModalDel] = useState<boolean>(false);
//   tao bang
const columns =  [ 
    {
      title: 'Chủ đề',
      dataIndex: 'chude',
      
    },
    {
      title: 'Miêu tả',
      dataIndex: 'mieuta',
    },
    {
    title: 'Ngày kết thúc',
    dataIndex: 'dateketthuc',
    },   
  ]; 
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
           <Title/>
           <Buttonnn/>
           <Row>
            <Col className="sesion15__box1">
                 <Col className="sesion15__box3">
                     <p className="sesion15__gv">GV Lương Hoàng</p>
                     <p className="sesion15__nienkhoa">Niên Khóa
                     <div className="sesion15__selectNK">
                        <select defaultValue="2020-2021">
                        <option value="2020-2021">2020-2021</option>
                        <option value="2019-2020">2019-2020</option>
                        <option value="2018-2019">2018-2019</option>
                        </select>
                     </div>   
                     </p>
                        
                     <p className="sesion15__bomon">Bộ Môn
                     <div className="sesion15__selectBM">
                     <select  defaultValue="Toán Đại Số">
                        <option value="Toán Đại Số">Toán Đại Số</option>
                        <option value="Ngữ Văn">Ngữ Văn</option>
                        <option value="Tiếng Anh">Tiếng Anh</option>
                     </select>
                        </div>
                     </p>
     
                 </Col>
                 <Button className="sesion15__btn1">
                     <p className="sesion15__textbtn1">Tô An</p>
                 </Button>
                 <Button className="sesion15__btn2">
                     <p className="sesion15__textbtn2">Hoàng Mỹ Trưng</p>
                 </Button>
                 <Button className="sesion15__btn3">
                     <p className="sesion15__textbtn2">Nguyễn Kỳ Nguyên</p>
                 </Button>
                 <Button className="sesion15__btn4">
                     <p className="sesion15__textbtn2">Mộc Tâm Tâm</p>
                 </Button>
                 <Button className="sesion15__btn5">
                     <p className="sesion15__textbtn2">Trần Thoa Hân</p>
                 </Button>
                 <Button className="sesion15__btn6">
                     <p className="sesion15__textbtn2">Nguyễn Ngọc Điệp</p>
                 </Button>
            </Col>
          
            <Col className="sesion15__box2">
                  <div className="sesion15__divicon">
                     <img className="sesion15__iconform" src={IconEdit}/>
                     <img className="sesion15__icondelet" src={IconTrash} onClick={showModalDel}/>
                  </div>
                  <p className="sesion15__text1">Danh sách chủ đề</p>
            
                  <p className="sesion15__textGV">Giảng viên: <p className="sesion15__textGV1">Lương Hoàng D</p></p> 
                  <p className="sesion15__textLH">Lớp học: <p className="sesion15__textLH1">6D</p></p>
                  <p className="sesion15__textMH">Môn học: <p className="sesion15__textMH1">Tin học kèm toán</p></p>
                  <div className="sesion15__body-table">
                            <div className="sesion15__table">
                                <Table dataSource={dataBonus} columns={columns} pagination={false} />
                            </div>
                  </div>
                  <Row>
                      <Col span={12} className="sesion15__col-left">
                          <p className="sesion15__col-left-txt-view">
                              Hiển thị
                          </p>
                          <InputNumber min={1} max={10} defaultValue={8} />
                          <p className="sesion15__col-left-txt-rol">
                              hàng trong mỗi trang
                          </p>
                      </Col>
                      <Col span={12} className="sesion15__footer-col-right">
                          <div className="sesion15__footer-col-right-pagination">
                              <Pagination
                                  showSizeChanger
                                  defaultCurrent={3}
                                  total={1000}
                              />
                          </div>
                      </Col>
                  </Row>
            </Col>
            </Row>
      {/* MODAL DELETE */}
      <Modal
        className="sesion15__modal sesion15__modal-del"
        title="Xoá phân công"
        visible={isModalDel}
        onOk={handleOkDel}
        onCancel={handleCancelDel}
        okText="Xác nhận"
        cancelText="Huỷ"
        centered
      >
        <p className="sesion15__modal-del-desc">
          Xác nhận muốn xoá phân công này và toàn bộ thông tin bên trong? Sau
          khi xoá sẽ không thể hoàn tác.
        </p>
      </Modal>
      </Fragment>
    );
};

export default Boxchude;