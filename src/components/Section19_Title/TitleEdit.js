import React from 'react'
import './Title.css'
import "@fontsource/mulish";
import { Button } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { Modal } from 'antd';


const { confirm } = Modal;

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
  }


function TitleEdit() {
    return (
        <>
            <div className="box">
                <div className="box__tittle">
                    <h1>Thông tin nhà trường</h1>
                </div>
                    <Select defaultValue="1" className="box__select__year">
                        <Option value="1">2020-2021</Option>
                        <Option value="2">2019-2020</Option>
                        <Option value="3">2018-2019</Option>
                    </Select>
                <div class="box__btn-group">
                    <Button className="box__btn-group__export">Xuất File</Button>
                    <Button className="box__btn-group__edit" ><FormOutlined />Chỉnh sửa</Button>
                </div>
            </div>
        </>
    )
    
}

export default TitleEdit
