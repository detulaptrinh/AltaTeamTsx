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
import WokingPage1 from './WorkingPage/WorkingPage1';
import WokingPage2 from './WorkingPage/WorkingPage2';

const { Panel } = Collapse;
const { Option } = Select;

export default class WorkingProcess extends Component {
    render() {
        return (
            <>
            <div className="section14">
            <Row>
                <Col span={24}>
                  <div className="titles">
                    <div className="title-info-student">Hồ sơ giảng viên</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="info__tab__box" span={7}>
                    <div className="switch__tab__box">
                            <div className="switch__tab__box-general-information">
                                <Link to="/profile-teacher">Thông tin chung</Link>
                            </div>
                            <div className="switch__tab__box-study-process active">
                                <Link to="/profile-process" className="active">Quá trình học tập</Link>
                            </div>
                        </div>
                </Col>
                <Col span={6}>
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
                
                <Col className="right-btn" span={8} offset={3}>
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
              <div className="box__collapse">
              <Space direction="vertical">
                    <Collapse collapsible="header">
                        <Panel header="Quá trình công tác" key="1">
                          <WokingPage1/>
                        </Panel>
                    </Collapse>
                    <Collapse collapsible="header">
                        <Panel header="Thông tin đào tạo" key="2">
                          <WokingPage2/>
                        </Panel>
                    </Collapse>
                </Space>
              </div>
              </div>
            </>
        )
    }
}
