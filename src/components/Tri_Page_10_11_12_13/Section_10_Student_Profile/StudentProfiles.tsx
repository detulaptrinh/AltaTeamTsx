import React, { useState } from 'react';
import "./StudentProfiles.css"
import {
    Row,
    Col,
    Button,
    Form,
    Input,
    DatePicker,
    Upload,
    Modal,
    Tabs,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Bonus from './Bonus';
import SelectsBlock from '../Categories/SelectBlock';
import SelectsYear from '../Categories/SelectsYear';
const { TabPane } = Tabs;
const { TextArea } = Input;

// CLICK BUTTON MODAL UPDATE

// css ant



function StudentProfiles() {


    const [visible, setVisible] = useState(false);
    return (
        <>
            <div className="studentProfile">
                <p className="studentProfileName">Hồ Sơ Học Viên</p>
                <div className="studentProfile-headers">

                    <Row>
                       
                        <Col span={5} className="studentProfile-headers-select-group">

                            <div className="studentProfile-headers-select-group-box-block">
                                <SelectsBlock/>
                            </div>
                            <div className="studentProfile-headers-select-group-box-date">
                               <SelectsYear/>
                            </div>
                        </Col>
                        <Col span={14} className="studentProfile-headers-tabs-group">
                            <div className="studentProfile-headers-tabs-group-btn">
                                <Tabs defaultActiveKey="1" type="card">
                                    <TabPane tab="Tất cả hồ sơ" key="1">
                                        Tất cả hồ sơ
                                    </TabPane>
                                    <TabPane tab="Khen thưởng" key="2">
                                        <Bonus/> 
                                    </TabPane>
                                    <TabPane tab="Kỉ luật" key="3">
                                        Kỉ luật
                                    </TabPane>
                                </Tabs>
                            </div>
                        </Col>
                        <Col span={5} className="studentProfile-headers-btn-group">
                            <div className="studentProfile-headers-btn-group-add">
                                <Button type="primary" shape="round" icon={<PlusOutlined />} onClick={() => setVisible(true)}>
                                    Thêm mới
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                
                <div className="bg-modal-update-bonus">
                    <Modal className="bg-modal-update-bonus-modal-content"
                        centered
                        visible={visible}
                        onOk={() => setVisible(false)}
                        onCancel={() => setVisible(false)} >
                        <Form>
                            <h2 className="bg-modal-update-bonus-style-name-update-bonus">Cập nhật khen thưởng</h2>
                            <Form.Item label="Học Viên" className="bg-modal-update-bonus-style-label">
                                <p className="bg-modal-update-bonus-style-txt-name">Nguyễn Ngọc Tuyết</p>
                            </Form.Item>
                            <Form.Item label="Lớp hiện tại" className="bg-modal-update-bonus-style-label">
                                <p className="bg-modal-update-bonus-style-txt-class">10A</p>
                            </Form.Item>
                            <Form.Item label="Ngày Khen Thưởng" className="bg-modal-update-bonus-style-label">
                                <DatePicker className="bg-modal-update-bonus-style-date-picker" />
                                <Button className="bg-modal-update-bonus-style-btn-semester">Học Kì I</Button>


                            </Form.Item>
                            <Form.Item label="Nội dung" className="bg-modal-update-bonus-style-label">
                                <TextArea rows={4} className="bg-modal-update-bonus-style-input" />
                            </Form.Item>

                            <Form.Item label="Học kì I:" className="bg-modal-update-bonus-style-label">
                                <Upload>
                                    <Button className="bg-modal-update-bonus-modal-content-btn-update" >Chọn tệp tải lên...</Button>
                                </Upload>,
                            </Form.Item>

                            <Button className="bg-modal-update-bonus-modal-content-btn-cancel" onClick={() => setVisible(false)}>Hủy</Button>
                            <Button className="bg-modal-update-bonus-modal-content-btn-save">Lưu</Button>
                        </Form>

                    </Modal>
                </div>
</div>

        </>
    )

}
export default StudentProfiles;