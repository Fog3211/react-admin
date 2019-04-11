import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

class HorizontalLoginForm extends Component {
    componentDidMount() {
        this.props.form.validateFields(() => {
            // 回调函数，如果省略会报错，但好像无影响
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const {
            getFieldDecorator,
            getFieldsError,
            getFieldError,
            isFieldTouched,
        } = this.props.form;

        const userNameError =
            isFieldTouched('userName') && getFieldError('userName');
        const passwordError =
            isFieldTouched('password') && getFieldError('password');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item
                    validateStatus={userNameError ? 'error' : ''}
                    help={userNameError || ''}
                >
                    {getFieldDecorator('horizontal_userName', {
                        rules: [
                            {
                                required: true,
                                message: '用户名不能为空!',
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
                <Form.Item
                    validateStatus={passwordError ? 'error' : ''}
                    help={passwordError || ''}
                >
                    {getFieldDecorator('horizontal_password', {
                        rules: [
                            {
                                required: true,
                                message: '密码不能为空!',
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
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={hasErrors(getFieldsError())}
                    >
                        登录
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const HorizontalForm = Form.create()(HorizontalLoginForm);
export default HorizontalForm;
