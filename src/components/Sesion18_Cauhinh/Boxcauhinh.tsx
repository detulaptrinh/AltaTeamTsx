import React, { Component }  from 'react'
import './Boxcauhinh.css'
import { Row, Col,Button,Checkbox   } from 'antd';
import Title from './Title';

export default class Boxcauhinh extends Component {
    render() {
    return (
        <> 
           <Title/> 
           <Row>
            <Col className="sesion18_boxcauhinh">
                <p className="sesison18_txtcauhinh">Cấu hình</p>
                <Col className="sesison18_colcauhinh"></Col>
                <p className="sesison18_textthemsudung">Theme đang sử dụng</p>

                <Col className="sesison18_theme1"></Col>
                <p className="sesison18_texttheme1">Lorem ipsum dolor sit</p>
                <Col className="sesison18_theme2"></Col>
                <p className="sesison18_texttheme2">Lorem ipsum dolor sit</p>
                <Col className="sesison18_theme3"></Col>
                <p className="sesison18_texttheme3">Lorem ipsum dolor sit</p>
                <Col className="sesison18_theme4"></Col>
                <p className="sesison18_texttheme4">Lorem ipsum dolor sit</p>
                <Col className="sesison18_theme5"></Col>
                <p className="sesison18_texttheme5">Lorem ipsum dolor sit</p>
                <Col className="sesison18_theme6"></Col>
                <p className="sesison18_texttheme6">Lorem ipsum dolor sit</p>
                
                <b className="sesison18_b"/>
               
                <p className="sesison18_txttheme">Theme hiện có</p>

                <p className="sesison18_txtcaptcha">Captcha:</p>
                <Checkbox className="sesison18_checkbox">
                    <p className="sesison18_textcheck">Kích hoạt captcha khi đăng nhập vào hệ thống</p>
                </Checkbox>
                
                <p className="sesison18_txtngonngu">Ngôn ngữ:</p>
                <div className="sesison18_selectngonngu">
                        <select defaultValue="ggg">
                        <option value="vietnam">Tiếng Việt</option>
                        <option value="english">Tiếng Anh</option>
                        </select>
                </div> 
                <Button className="sesison18_buttoncancel"> 
                <p className="sesison18_texthuy">Hủy</p>
                </Button>
                <Button className="sesison18_buttonsave"> 
                <p className="sesison18_textsave">Lưu</p>
                </Button>
            </Col>
            </Row>
       </>
    )
}
}
