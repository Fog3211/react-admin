import  React, {Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "./index.less";

class NormalLoginForm  extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [
                            {
                                required: true,
                                message: '用户名不能为空！',
                            },
                        ],
                    })(
                        <Input
                            prefix={
                                <Icon
                                    type="user"
                                    style={{ color: 'rgba(0,0,0,.25)' }}
                                />
                            }
                            placeholder="用户名"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('login_password', {
                        rules: [
                            {
                                required: true,
                                message: '密码不能为空！',
                            },
                        ],
                    })(
                        <Input
                            prefix={
                                <Icon
                                    type="lock"
                                    style={{ color: 'rgba(0,0,0,.25)' }}
                                />
                            }
                            type="password"
                            placeholder="密码"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>记住我</Checkbox>)}
                    <a href="/" className="login-form-forgot">忘记密码</a>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        登录
                    </Button>
                    或  <a href="/">立即注册</a>
                </Form.Item>
            </Form>
        );
    }
}

const LoginForm = Form.create()(NormalLoginForm);

export default LoginForm;