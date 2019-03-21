import React, { Component } from 'react';
import "./Login.scss";

export default class Login extends Component {
    render() {
        return (
            <div>
                <div>组件库后台管理系统</div>
                <div className="loginlayout">
                    <div>
                        <span>用户名：</span>
                        <input type="text" placeholder="请输入账号" />
                    </div>
                    <div>
                        <span>密码：</span>
                        <input type="password" placeholder="请输入密码" />
                    </div>
                    <button>登录</button>
                </div>
            </div>
        );
    }
}
