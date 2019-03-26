import React, { Component } from 'react';
import { Form, Input, Button, message, Icon, Radio } from 'antd';
import './Account.less';
const FormItem = Form.Item;

class Account extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="account-container">
                <div className="account-header">
                    <span>账户中心</span>
                </div>
                <div className="profile">
                    <div className="profile-title">个人信息</div>
                    <Form className="profile-detail">
                        <FormItem>
                            {getFieldDecorator('avatar', {
                                rules: [],
                            })(
                                <Input
                                    prefix={<Icon type="user" />}
                                    type="text"
                                    placeholder="请输入用户名"
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('passWord', {
                                rules: [],
                            })(
                                <Input
                                    prefix={<Icon type="lock" />}
                                    type="password"
                                    placeholder="请输入密码"
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button
                                block
                                size="large"
                                type="primary"
                                onClick={() => {
                                    this.handleSubmit();
                                }}
                            >
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
                <div className="setting">
                    <div className="setting-title">安全设置</div>
                    <form action="" className="profile-detail" />
                </div>
            </div>
        );
    }
}
export default Form.create()(Account);