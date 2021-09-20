import React, { Component } from 'react';
import { Breadcrumb } from 'antd';


class Page6_class_detail extends Component {
    render() {
        return (
            <>
                <Breadcrumb separator=">">
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
                    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
            </>
        );
    }
}

export default Page6_class_detail;