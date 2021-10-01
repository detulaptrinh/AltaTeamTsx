import React, { Component } from 'react';
import './Categories.css'

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default class Searchs extends Component {
    render() {
        return (
            <div className="box-searchs">
                <Input className="box-search-my-searchs" title="Search" placeholder="Tìm Kiếm" prefix={<SearchOutlined />} />
            </div>
        )
    }
}