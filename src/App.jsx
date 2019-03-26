import React, { Component } from 'react';
import { Row, Col } from 'antd';
import LeftNav from '_c/leftnav/LeftNav';
import Header from '_c/header/Header';
import '@/style/App.less';

// 引入所有的子路由
export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Header className="header" />
                <Row className="main">
                    <Col span={4}>
                        <LeftNav className="left-nav" />
                    </Col>
                    <Col span={20} className="main">
                        <Row className="content">{this.props.children}</Row>
                    </Col>
                </Row>
            </div>
        );
    }
}
