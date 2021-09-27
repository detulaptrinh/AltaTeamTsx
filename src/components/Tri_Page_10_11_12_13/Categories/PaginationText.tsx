import React, { Component } from 'react';
import { InputNumber } from 'antd';
import './Categories.css'

export default class PaginationText extends Component {
    render() {
        return (
            <div className="pagination-text">
                <p className="pagination-text-view">
                    Hiển thị
                </p>
                <InputNumber min={1} max={10} defaultValue={8} />
                <p className="pagination-text-rol">
                    hàng trong một trang
                </p>
            </div>
        )
    }
}
// onClick={() => setVisible(true)}