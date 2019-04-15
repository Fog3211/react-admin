import React, { Component } from 'react';
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './index.less';
import Service from '@/service';

const FormItem = Form.Item;

class Login extends Component {
    state = {
        value: 0,
        remember: false,
    };
    componentDidMount() {
        let userName = sessionStorage.getItem('remember');
        let value = {
            userName,
        };
        this.props.form.setFieldsValue(value);
    }
    handleSubmit = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (this.state.remember) {
                    sessionStorage.setItem('remember', values.userName);
                } else {
                    sessionStorage.removeItem('remember');
                }
                // 登录接口
                Service.login({
                    userName: values.userName,
                    passWord: values.passWord,
                }).then((res) => {
                    if (res.resCode === 1) {
                        sessionStorage.setItem('userName', values.userName);
                        // redux权限部分
                        message.success(res.msg);
                        this.props.history.push('/');
                    } else {
                        message.error(res.msg);
                    }
                });
            } else {
                message.error(`尴尬，登录失败`);
            }
        });
    };
    rememberMe = (e) => {
        this.setState({
            remember: e.target.checked,
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-container">
                <Card title="React后台管理系统" className="login-card">
                    <Form className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [
                                    {
                                        required: true,
                                        message: '用户名不能为空！',
                                    },
                                    {
                                        min: 3,
                                        max: 10,
                                        message: '用户名长度为3~10位',
                                    },
                                    {
                                        //   pattern:/^\w+$/g,
                                        pattern: new RegExp('^\\w+$', 'g'),
                                        message: '正则不匹配',
                                    },
                                ],
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
                                rules: [
                                    {
                                        required: true,
                                        message: '密码不能为空！',
                                    },
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="lock" />}
                                    type="password"
                                    placeholder="请输入密码"
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            <Checkbox onChange={this.rememberMe}>记住我</Checkbox>
                            <Link to="/" className="visit">
                                游客登录
                            </Link>
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
                </Card>
            </div>
        );
    }
}
export default withRouter(Form.create()(Login));
