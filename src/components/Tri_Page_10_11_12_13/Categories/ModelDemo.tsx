import React, { Component,useState } from 'react';
import './Categories.css'

import {
    Modal, Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

// const [componentSize, setComponentSize] = useState('default');
  
// const onFormLayoutChange = ({ size }) => {
//   setComponentSize(size);
// }
function ModelDemo () {
    

        return (
            <>
                <div>
                    <Form
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        layout="horizontal"
                        initialValues={{
                            // size: componentSize,
                        }}
                        // onValuesChange={onFormLayoutChange}
                        // size={componentSize}
                        >
                        <Form.Item label="DatePicker">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item label="InputNumber">
                            <InputNumber />
                        </Form.Item>
                        <Form.Item label="Switch" valuePropName="checked">
                            <Switch />
                        </Form.Item>
                        <Form.Item label="Button">
                            <Button>Button</Button>
                        </Form.Item>
                    </Form>
                </div>

            </>
        )
    }
export default ModelDemo;

