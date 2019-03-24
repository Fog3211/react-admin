import React, { Component } from 'react';
import LeftNav from '_c/leftnav/LeftNav';
import Header from '_c/header/Header';
import '@/style/App.less';

// 引入所有的子路由
export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Header className="header" />
                <LeftNav className="left-nav"/>
                <div className="content">{this.props.children}</div>
            </div>
        );
    }
}
