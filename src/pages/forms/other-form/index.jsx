import React, { Component } from 'react';
import {
    Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Icon,
    Rate,
    Checkbox,
    Row,
    Col,
} from 'antd';

const { Option } = Select;

class NormalOtherForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
            }
        });
    };

    normFile = (e) => {
        // console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="纯文本">
                    <span className="ant-form-text">中国</span>
                </Form.Item>
                <Form.Item label="单选" hasFeedback>
                    {getFieldDecorator('select', {
                        rules: [
                            {
                                required: true,
                                message: '请选择你的国家!',
                            },
                        ],
                    })(
                        <Select placeholder="请选择你的国家">
                            <Option value="china">中国</Option>
                            <Option value="usa">美国</Option>
                        </Select>
                    )}
                </Form.Item>

                <Form.Item label="多选">
                    {getFieldDecorator('select-multiple', {
                        rules: [
                            {
                                required: true,
                                message: '请选择你最喜欢的颜色!',
                                type: 'array',
                            },
                        ],
                    })(
                        <Select mode="multiple" placeholder="请选择你最喜欢的颜色">
                            <Option value="red">红色</Option>
                            <Option value="green">绿色</Option>
                            <Option value="blue">蓝色</Option>
                        </Select>
                    )}
                </Form.Item>

                <Form.Item label="数字选择器">
                    {getFieldDecorator('input-number', { initialValue: 3 })(
                        <InputNumber min={1} max={10} />
                    )}
                </Form.Item>

                <Form.Item label="开关">
                    {getFieldDecorator('switch', { valuePropName: 'checked' })(
                        <Switch />
                    )}
                </Form.Item>

                <Form.Item label="滑块">
                    {getFieldDecorator('slider')(
                        <Slider
                            marks={{
                                0: 'A',
                                20: 'B',
                                40: 'C',
                                60: 'D',
                                80: 'E',
                                100: 'F',
                            }}
                        />
                    )}
                </Form.Item>

                <Form.Item label="单选">
                    {getFieldDecorator('radio-group')(
                        <Radio.Group>
                            <Radio value="a">item 1</Radio>
                            <Radio value="b">item 2</Radio>
                            <Radio value="c">item 3</Radio>
                        </Radio.Group>
                    )}
                </Form.Item>

                <Form.Item label="单选">
                    {getFieldDecorator('radio-button')(
                        <Radio.Group>
                            <Radio.Button value="a">item 1</Radio.Button>
                            <Radio.Button value="b">item 2</Radio.Button>
                            <Radio.Button value="c">item 3</Radio.Button>
                        </Radio.Group>
                    )}
                </Form.Item>

                <Form.Item label="多选">
                    {getFieldDecorator('checkbox-group', {
                        initialValue: ['A', 'B'],
                    })(
                        <Checkbox.Group style={{ width: '100%' }}>
                            <Row>
                                <Col span={8}>
                                    <Checkbox value="A">A</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox disabled value="B">
                                        B
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox disabled value="C">
                                        C
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="D">D</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="E">E</Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>
                    )}
                </Form.Item>

                <Form.Item label="评分">
                    {getFieldDecorator('rate', {
                        initialValue: 3.5,
                    })(<Rate />)}
                </Form.Item>

                <Form.Item label="上传" extra="选择本地文件">
                    {getFieldDecorator('upload', {
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload
                            name="logo"
                            action="/upload.do"
                            listType="picture"
                        >
                            <Button>
                                <Icon type="upload" /> 点击上传
                            </Button>
                        </Upload>
                    )}
                </Form.Item>

                <Form.Item label="拖拽上传">
                    <div className="dropbox">
                        {getFieldDecorator('dragger', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload.Dragger name="files" action="/upload.do">
                                <p className="ant-upload-drag-icon">
                                    <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">拖拽上传</p>
                            </Upload.Dragger>
                        )}
                    </div>
                </Form.Item>

                <Form.Item
                    wrapperCol={{ span: 24 }}
                    style={{ textAlign: 'center' }}
                >
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const OtherForm = Form.create()(NormalOtherForm);

export default OtherForm;
