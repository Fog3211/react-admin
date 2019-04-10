import React, { Component } from 'react';
import { Card, Form, Input, Button, message, Icon, Radio } from 'antd';
import './index.less';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class Login extends Component {
    state = {
        value: 0,
    };

    onChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success(
                    `亲，${userInfo.userName}成功登录了,密码是${userInfo.passWord}`
                );
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-container">
                <Card title="成果管理系统登录" className="login-card">
                    <Form className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                // initialValue:'jack',
                                // 规则写在这里面
                                rules: [
                                    {
                                        required: true,
                                        message: '用户名不能为空',
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
                            <RadioGroup
                                onChange={this.onChange}
                                value={this.state.value}
                            >
                                <Radio value={0}>学生</Radio>
                                <Radio value={1}>教师</Radio>
                            </RadioGroup>
                            <a href='/home' style={{float:'right'}} className="visit">游客登录</a>
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

export default Form.create()(Login);
