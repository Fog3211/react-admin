import React, { Component } from 'react';
import { Row, Col } from 'antd';

import '@/style/App.less';
import LeftNav from '_c/leftnav/LeftNav';
import Header from '_c/header/Header';
import Footer from '_c/footer/Footer';

// 引入所有的子路由
export default class App extends Component {
    render() {
        return (
            <Row className="container">
                <Col span={4} className="left-nav">
                    <LeftNav />
                </Col>
                <Col span={20} className="main">
                    <Header />
                    <Row className="content">{this.props.children}</Row>
                    <Footer />
                </Col>
            </Row>
        );
    }
}


