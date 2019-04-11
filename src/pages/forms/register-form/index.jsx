import React, { Component } from 'react';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
    {
        value: '山东',
        label: '山东',
        children: [
            {
                value: '青岛',
                label: '青岛',
                children: [
                    {
                        value: '黄岛',
                        label: '黄岛',
                    },
                    {
                        value: '城阳',
                        label: '城阳',
                    },
                ],
            },
            {
                value: '济南',
                label: '济南',
                children: [
                    {
                        value: '历下',
                        label: '历下',
                    },
                ],
            },
        ],
    },
    {
        value: '浙江',
        label: '浙江',
        children: [
            {
                value: '杭州',
                label: '杭州',
                children: [
                    {
                        value: '西湖',
                        label: '西湖',
                    },
                ],
            },
        ],
    },
    {
        value: '江苏',
        label: '江苏',
        children: [
            {
                value: '南京',
                label: '南京',
                children: [
                    {
                        value: '中华门',
                        label: '中华门',
                    },
                ],
            },
        ],
    },
];

class NormalRegisterForm extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('register_password')) {
            callback('两次密码不一致！');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(
                (domain) => `${value}${domain}`
            );
        }
        this.setState({ autoCompleteResult });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        const websiteOptions = autoCompleteResult.map((website) => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="邮箱">
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: '请输入合法邮箱！',
                            },
                            {
                                required: true,
                                message: '邮箱不能为空！',
                            },
                        ],
                    })(<Input placeholder="邮箱地址"/>)}
                </Form.Item>
                <Form.Item label="密码">
                    {getFieldDecorator('register_password', {
                        rules: [
                            {
                                required: true,
                                message: '密码不能为空！',
                            },
                            {
                                validator: this.validateToNextPassword,
                            },
                        ],
                    })(<Input type="password" placeholder="密码"/>)}
                </Form.Item>
                <Form.Item label="确认密码">
                    {getFieldDecorator('confirm', {
                        rules: [
                            {
                                required: true,
                                message: '请确认密码！',
                            },
                            {
                                validator: this.compareToFirstPassword,
                            },
                        ],
                    })(
                        <Input
                            type="password"
                            onBlur={this.handleConfirmBlur}
                            placeholder="确认密码"
                        />
                    )}
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            昵称&nbsp;
                            <Tooltip title="你想让别人怎么称呼你？">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    }
                >
                    {getFieldDecorator('nickname', {
                        rules: [
                            {
                                required: true,
                                message: '昵称不能为空！',
                                whitespace: true,
                            },
                        ],
                    })(<Input placeholder="昵称"/>)}
                </Form.Item>
                <Form.Item label="联系地址">
                    {getFieldDecorator('residence', {
                        rules: [
                            {
                                type: 'array',
                                required: true,
                                message:
                                    '联系地址不能为空！',
                            },
                        ],
                    })(<Cascader options={residences} placeholder="联系地址" />)}
                </Form.Item>
                <Form.Item label="手机号">
                    {getFieldDecorator('phone', {
                        rules: [
                            {
                                required: true,
                                message: '手机号不能为空！',
                            },
                        ],
                    })(
                        <Input
                            addonBefore={prefixSelector}
                            placeholder="手机号"
                            style={{ width: '100%' }}
                        />
                    )}
                </Form.Item>
                <Form.Item label="网站">
                    {getFieldDecorator('website', {
                        rules: [
                            {
                                required: true,
                                message: '网站不能为空！',
                            },
                        ],
                    })(
                        <AutoComplete
                            dataSource={websiteOptions}
                            onChange={this.handleWebsiteChange}
                            placeholder="网站"
                        >
                            <Input />
                        </AutoComplete>
                    )}
                </Form.Item>
                <Form.Item
                    label="验证码"
                    extra="我们必须确认你不是机器人."
                >
                    <Row gutter={8}>
                        <Col span={12}>
                            {getFieldDecorator('captcha', {
                                rules: [
                                    {
                                        required: true,
                                        message:
                                            '请输入你获取到的验证码！',
                                    },
                                ],
                            })(<Input placeholder="验证码"/>)}
                        </Col>
                        <Col span={12}>
                            <Button>获取验证码</Button>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                        rules: [
                            {
                                required: true,
                                message:
                                    '请阅读并同意协议后注册！',
                            },
                        ],
                    })(
                        <Checkbox>
                            {/* 协议部分 */}
                            我已经阅读过 <a href="/">协议</a>
                        </Checkbox>
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const RegisterForm = Form.create()(NormalRegisterForm);

export default RegisterForm;
