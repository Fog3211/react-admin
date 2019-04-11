import React, { Component } from 'react';
import { Form, Input, DatePicker, TimePicker, Select, InputNumber } from 'antd';

const { Option } = Select;

export default class CheckedForm extends Component {
    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            },
        };
        return (
            <Form {...formItemLayout}>
                <Form.Item label="错误" validateStatus="error" help="应为数字和字母组合">
                    <Input placeholder="组合错误" id="error" />
                </Form.Item>

                <Form.Item label="警告" validateStatus="warning">
                    <Input placeholder="警告" id="warning" />
                </Form.Item>

                <Form.Item
                    label="验证"
                    hasFeedback
                    validateStatus="validating"
                    help="正在验证中···"
                >
                    <Input placeholder="正在验证中···" id="validating" />
                </Form.Item>

                <Form.Item label="成功" hasFeedback validateStatus="success">
                    <Input placeholder="验证成功" id="success" />
                </Form.Item>

                <Form.Item label="警告" hasFeedback validateStatus="warning">
                    <Input placeholder="带图标的警告" id="warning2" />
                </Form.Item>

                <Form.Item
                    label="错误"
                    hasFeedback
                    validateStatus="error"
                    help="应为数字和字母组合"
                >
                    <Input placeholder="带图标的错误" id="error2" />
                </Form.Item>

                <Form.Item label="成功" hasFeedback validateStatus="success">
                    <DatePicker style={{ width: '100%' }} placeholder="日期选择器" />
                </Form.Item>

                <Form.Item label="警告" hasFeedback validateStatus="warning">
                    <TimePicker style={{ width: '100%' }} placeholder="时间选择器" />
                </Form.Item>

                <Form.Item label="错误" hasFeedback validateStatus="error">
                    <Select defaultValue="1">
                        <Option value="1">选项 1</Option>
                        <Option value="2">选项 2</Option>
                        <Option value="3">选项 3</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="行内" style={{ marginBottom: 0 }}>
                    <Form.Item
                        validateStatus="error"
                        help="请选择合法的日期"
                        style={{
                            display: 'inline-block',
                            width: 'calc(50% - 12px)',
                        }}
                    >
                        <DatePicker placeholder="选择日期" />
                    </Form.Item>
                    <span
                        style={{
                            display: 'inline-block',
                            width: '24px',
                            textAlign: 'center',
                        }}
                    >
                        -
                    </span>
                    <Form.Item
                        style={{
                            display: 'inline-block',
                            width: 'calc(50% - 12px)',
                        }}
                    >
                        <DatePicker placeholder="选择日期" />
                    </Form.Item>
                </Form.Item>

                <Form.Item label="成功" hasFeedback validateStatus="success">
                    <InputNumber
                        style={{ width: '100%' }}
                        placeholder="数字选择器"
                    />
                </Form.Item>
            </Form>
        );
    }
}
