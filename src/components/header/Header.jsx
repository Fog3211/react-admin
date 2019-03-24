import React, { Component } from 'react';
import './Header.less';
import logo from '@/assets/logo.svg';

export default class Header extends Component {
    goHome=()=>{
        console.log("返回主页");
    }
    render() {
        return (
            <div className="header">
                <div className="logo-box" onClick={this.goHome}>
                    <img src={logo} className="logo" alt="logo" />
                    <h1>React-Admin</h1>
                </div>
                <div className="user">
                    <span>欢迎您，{}</span>
                    <a href="#1">退出</a>
                </div>
            </div>
        );
    }
}
