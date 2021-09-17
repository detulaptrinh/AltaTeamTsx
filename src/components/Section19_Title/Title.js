import React from 'react'
import './Title.css'
import { Button } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { Modal } from 'antd';


const { confirm } = Modal;

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
  }


function Tittle() {
    return (
        <>
            
                <div className="box__tittle">
                    <h1>Thông tin nhà trường</h1>
                </div>
                    <Select defaultValue="1" className="box__select__year">
                        <Option value="1">2020-2021</Option>
                        <Option value="2">2019-2020</Option>
                        <Option value="3">2018-2019</Option>
                    </Select>
                <div class="box__btn-group">
                    <Button className="box__btn-group__export" onClick={showExportFileConfirm}>Xuất File</Button>
                    <Button className="box__btn-group__edit" ><FormOutlined />Chỉnh sửa</Button>
                </div>
            
        </>
    )
    function showExportFileConfirm() {
        confirm({
          width: 435,
          height: 243,
          title: 'Xuất file lưu',
          content: 'Xác nhận muốn xuất file này và toàn bộ thông tin bên trong? File lưu sẽ được tự động tải xuống.',
          okText: 'Xác nhận',
          okType: 'danger',
          cancelText: 'Hủy',
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
}

export default Tittle
