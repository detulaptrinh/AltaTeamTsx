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
import Disciplines from './Disciplines';
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
                                        <Disciplines/>
                                    </TabPane>
                                </Tabs>
                            </div>
                        </Col>
                        
                    </Row>
                </div>
            
</div>

        </>
    )

}
export default StudentProfiles;