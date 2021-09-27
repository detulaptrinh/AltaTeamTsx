import React, { Component } from 'react'
import {
    Space,
    Collapse,
    Row,
    Col,
    Modal,
    Select,
    Upload,
    Button
} from 'antd';
import {Link} from "react-router-dom";
import {UploadOutlined,
    DownloadOutlined,
  } from '@ant-design/icons';

const { Panel } = Collapse;
const { Option } = Select;

export default class WorkingProcess extends Component {
    render() {
        return (
            <>
            <Row>
                <Col span={24}>
                  <div className="title">
                    <div className="title-info-student">Hồ sơ giảng viên</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="info__tab__box" span={8}>
                    <div className="left-tab-box">
                            <div className="left-tab-box-general-information">
                                <a href="">Thông tin chung</a>
                            </div>
                            <div className="left-tab-box-study-process">
                                <a href="">Quá trình học tập</a>
                            </div>
                        </div>
                  <Select id="school_year" defaultValue="2020-2021">
                    <Option value="2017-2018">2017-2018</Option>
                    <Option value="2017-2018">2018-2019</Option>
                    <Option value="2017-2018">2019-2020</Option>
                    <Option value="2017-2018" selected>2020-2021</Option>
                  </Select>
                  <Select id="school_year" defaultValue="Chọn lớp">
                    <Option value="2017-2018">2017-2018</Option>
                    <Option value="2017-2018">2018-2019</Option>
                    <Option value="2017-2018">2019-2020</Option>
                    <Option value="2017-2018" selected>2020-2021</Option>
                  </Select>
                </Col>
                
                <Col className="right-btn" span={8} offset={8}>
                  <div className="box">
                  <div className="btn-excel">
                  <button className="btn-bk-ffffff" /* onClick={showModals} */>Xuất file</button>
                  <Modal 
                    className="box__excel" 
                   /*  visible={isModalVisibles} 
                    onOk={handleOks} 
                    onCancel={handleCancels} */>
                    <form>
                      <h1>Tải lên file</h1>
                      <label>Tệp đính kèm: </label>
                      <Upload>
                      <Button className="bgef" icon={<UploadOutlined />}><input className="input__fixsize"></input></Button>
                      <Button className="btn__upload btn__link">Chọn tệp ảnh gửi lên</Button>
                      </Upload>
                      <label>Tải file mẫu: </label>
                      <Button icon={<DownloadOutlined />}></Button>
                      <p>[tải xuống file mẫu]</p>
                      <br/>
                      <div className="mlist_btn">
                        <button className="box__btn-del-cancel" /* onClick={handleCancels} */>Hủy</button>
                        <button className="box__btn-del-acp" /* onClick={handleOks} */>Lưu</button>
                      </div>
                    </form>
                  </Modal>
                </div>
                    
                  </div>
                </Col>
              </Row>
                <Space direction="vertical">
                    <Collapse collapsible="header">
                        <Panel header="Quá trình công tác" key="1">
                        </Panel>
                    </Collapse>
                    <Collapse collapsible="header">
                        <Panel header="Thông tin đào tạo" key="2">
                        </Panel>
                    </Collapse>
                </Space>
            </>
        )
    }
}
