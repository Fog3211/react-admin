import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

class BreadcrumbCustom extends Component {
    render() {
        const orgin = (
            <Breadcrumb.Item>
                <Link to={'/app/home'}>主页</Link>
            </Breadcrumb.Item>
        );
        const first =
            <Breadcrumb.Item>{this.props.first}</Breadcrumb.Item> || '';
        const second =
            <Breadcrumb.Item>{this.props.second}</Breadcrumb.Item> || '';
        return (
            <span>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    {orgin}
                    {first}
                    {second}
                </Breadcrumb>
            </span>
        );
    }
}

export default BreadcrumbCustom;
