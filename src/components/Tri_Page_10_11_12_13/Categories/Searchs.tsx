import React, { Component } from 'react';
import './Categories.css'

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default class Searchs extends Component {
    render() {
        return (
            <div className="box-search">
                <Input className="box-search-my-search" title="Search" placeholder="Tìm Kiếm" prefix={<SearchOutlined />} />
            </div>
        )
    }
}