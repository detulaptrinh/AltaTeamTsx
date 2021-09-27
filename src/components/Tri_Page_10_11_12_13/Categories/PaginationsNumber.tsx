import React, { Component } from 'react';
import { Pagination } from 'antd';
import './Categories.css'

export default class PaginationNumber extends Component {
    render() {
        return (
            <div className="pagination-number">
                <Pagination
                    showSizeChanger
                    defaultCurrent={8}
                    total={1000}
                />
            </div>
        )
    }
}
// onClick={() => setVisible(true)}