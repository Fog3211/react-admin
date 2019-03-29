import React, { Component } from 'react';
import './Header.less';
import logo from '@/assets/logo.svg';
import { Redirect } from 'react-router';

export default class Header extends Component {
    goHome=()=>{
        return (<Redirect to="/login" />)
    }
    render() {
        return (
            <div className="header">
                <div className="logo-box" onClick={this.goHome}>
                    <img src={logo} className="logo" alt="logo" />
                    <h1>React成果管理系统</h1>
                </div>
                <div className="user">
                    <span>欢迎您，{}</span>
                </div>
            </div>
        );
    }
}
