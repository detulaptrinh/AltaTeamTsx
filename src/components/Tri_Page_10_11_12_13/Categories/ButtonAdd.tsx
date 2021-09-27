import React, { Component } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './Categories.css'

export default class BtnAdd extends Component {
    render() {
        return (
            <div className="button-add-box">
                <Button type="primary" shape="round" icon={<PlusOutlined />} className="button-add" >
                    Thêm mới
                </Button>
            </div>
        )
    }
}
// onClick={() => setVisible(true)}