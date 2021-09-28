import React, { Component } from 'react'
import './Boxchitiet.css'
import { Row, Col,Button,Upload } from 'antd';
import { CloseOutlined, ContactsOutlined, PaperClipOutlined } from '@ant-design/icons';

export default class Boxchitiet extends Component {
    render() {
    return (
        <> 
        <Row >
            <Col className="sesion16_col_chitietbikiemtra">
            <CloseOutlined className="sesion16_icon_close" style={{ fontSize: '24px' , color: '#C83901' }}/>
            <p className="sesion16_textct">Xem chi tiết bài kiểm tra</p>

            <p className="sesion16_textmonhoc">Môn học: <p className="sesion16_texttoanhoc">Toán học</p></p>
            <p className="sesion16_textlop">Lớp: <p className="sesion16_text6a1">6A1</p></p>
            <p className="sesion16_textkhoakhoi">Khoa-khối: <p className="sesion16_text6">6</p></p>
            <p className="sesion16_textgiangvien">Giảng viên: <p className="sesion16_textnva">Nguyễn Văn A</p></p>

            <p className="sesion16_textthoigian">Thời gian: <p className="sesion16_text45p">45 phút</p></p>
            <p className="sesion16_texthinhthuc">Hình thức: <p className="sesion16_texttuluan">Tự luận</p></p>
            <p className="sesion16_textphanloai">Phân loại: <p className="sesion16_textgiuaky">Giữa kỳ</p></p>
            <p className="sesion16_textbatdau">Ngày bắt đầu: <p className="sesion16_textbatdau1">20/01/2021 - 07:00 AM</p></p>
            <p className="sesion16_textketthuc">Ngày kết thúc: <p className="sesion16_textketthuc1">20/01/2021 - 09:00 AM</p></p>

            <Col className="sesion16_boxchitiet">
                <p className="sesion16_text_chude">Chủ đề: <p className="sesion16_text_chude1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></p>
                <p className="sesion16_text_mota">Mô tả: <p className="sesion16_text_mota1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et vestibulum ante, id malesuada libero. In hac habitasse platea dictumst. Maecenas est erat, volutpat ut hendrerit efficitur, pulvinar vitae nisi.</p></p>
                <p className="sesion16_text_caidat">Cài đặt khác: <p className="sesion16_text_caidat1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></p>
                <p className="sesion16_text_dinhkem">Tệp đính kèm: 
                    <Col className="sesion16_box_dinhkem">
                        <PaperClipOutlined className="sesion16_icon_paper" style={{ fontSize: '24px' , color: '#FF7506' }}/>
                        <b className="sesion16_b"/>
                        <p className="sesion16_text_tailen">HTKL_KT45P_10A1.doc</p>
                    </Col>
                    <Upload >
                    <Button className="sesion16_upload">Chọn tệp tải lên...</Button>
                    </Upload>
                </p>
                <p className="sesion16_text_kieufile">Kiểu file .pdf .jpeg .jpg. Dung lượng tối đa 100MB.</p>
            </Col>

            <Button className="sesion16_buttonhuy">
                <p className="sesion16_texthuy">Hủy</p>
            </Button>
            <Button className="sesion16_buttonconfirm">
                <p className="sesion16_textconfirm">Xác nhận</p>
            </Button>
        </Col>    
        </Row>    
        </>
    )
}
}