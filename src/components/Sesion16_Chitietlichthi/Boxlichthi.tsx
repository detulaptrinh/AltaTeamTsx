import React, { Component }  from 'react'
import './Boxlichthi.css'
import { Row, Col,Button,Upload } from 'antd';
import { CloseOutlined, DownloadOutlined, PaperClipOutlined } from '@ant-design/icons';

export default class Boxlichthi extends Component {
    render() {
    return (
        <> 
        <Row >
         <Col className="sesion16__col_lichthi">
         <CloseOutlined className="sesion16__icon_close" style={{ fontSize: '24px' , color: '#C83901' }}/>
         <p className="sesion16__textct">Xem chi tiết lịch thi</p>

         <div className="sesion16__divtexthang1">
         <p className="sesion16__textmonthi">Môn thi: <p className="sesion16__texttoanhoc">Toán học</p></p>
         <p className="sesion16__textphanloai">Phân loại: <p className="sesion16__textgiuaky">Giữa kỳ</p></p>
         <p className="sesion16__textthoigian">Thời gian: <p className="sesion16__text45p">45 phút</p></p>
         <p className="sesion16__texthocky">Học kỳ: <p className="sesion16__texthocky1">Học kỳ 1</p></p>
         </div>

         <div className="sesion16__divtexthang2">
         <p className="sesion16__textngaythi">Ngày thi: <p className="sesion16__textngaythi1">20/01/2021</p></p>
         <p className="sesion16__textkhoakhoi">Khoa-khối: <p className="sesion16__text6">6</p></p>
         <p className="sesion16__textlop">Lớp: <p className="sesion16__textlop1">9A1,9A3,9A4,9A5</p></p>
         </div>

         <p className="sesion16__textphancong">Phân công chấm thi: <p className="sesion16__textnamepc">Nguyễn Văn C   Nguyễn Thị D</p></p>
  
         <div className="sesion16__divhang3">
         <PaperClipOutlined className="sesion16__icon_paper" style={{ fontSize: '24px' }}/>
         <p className="sesion16__text_dinhkem">File đính kèm: 
         <p className="sesion16__text_Loremisump">Loremisump.pdf</p>
        </p>
        </div>
        <Button className="sesion16__buttondow">
                <DownloadOutlined className="sesion16_icondow"/>
                <p className="sesion16__textdow">Tải xuống</p>
        </Button>
        </Col>    
        </Row>
        </>
    )
}
}