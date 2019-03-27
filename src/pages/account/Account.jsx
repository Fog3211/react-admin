import React, { Component } from 'react';
import { Form, Input, Button, DatePicker, Radio, Avatar } from 'antd';
import './Account.less';
import head from '@/assets/default-head.jpg';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { MonthPicker } = DatePicker;

class Account extends Component {
    state = {
        avatar: head,
        sex: 0,
        name: '',
        birthday:''
    };
    // disabledEndDate=()=>{
    //     const birthday = this.state.birthday;
    //     return birthday.valueOf()<new Date(Date.now());
    // };
    changeAvatar = () => {
        console.log('更换头像');
    };
    changeSex = (e) => {
        this.setState({
            sex: e.target.value,
        });
    };
    changeName = () => {
        console.log('更改姓名');
    };
    changeBirthday = () => {
        console.log('更改生日');
    };
    handleSubmit = () => {
        console.log('提交表单');
    };
    cancelSubmit = () => {
        console.log('取消提交');
    };
    render() {
        return (
            <div className="account-container">
                <div className="profile">
                    <div className="profile-title">个人信息</div>
                    <Form className="profile-detail">
                        <FormItem>
                            <div className="avatar-box">
                                <span className="avatar-title">头像</span>
                                <Avatar
                                    style={{
                                        backgroundColor: this.state.color,
                                        verticalAlign: 'middle',
                                    }}
                                    src={head}
                                    className="avatar"
                                />
                                <Button
                                    size="large"
                                    style={{
                                        marginLeft: 16,
                                        verticalAlign: 'middle',
                                    }}
                                    onClick={this.changeAvatar}
                                >
                                    更换头像
                                </Button>
                            </div>
                        </FormItem>
                        <FormItem>
                            <span className="sex-title">性别</span>
                            <RadioGroup
                                value={this.state.sex}
                                onChange={this.changeSex}
                            >
                                <Radio value={0}>男</Radio>
                                <Radio value={1}>女</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem>
                            <div className="name-box">
                                <span className="name-title">真实姓名</span>
                                <span className="name">{123}</span>
                                <span
                                    onClick={this.changeName}
                                    className="name-btn"
                                >
                                    修改
                                </span>
                            </div>
                        </FormItem>
                        <FormItem>
                            <div className="birthday-box">
                                <span className="birthday-title">出生年月</span>
                                <MonthPicker
                                    onChange={this.changeBirthday}
                                    // disabledDate={this.disabledEndDate}
                                    placeholder="请选择日期"
                                    className="birthday"
                                />
                            </div>
                        </FormItem>
                        <FormItem className="btn-group">
                            <Button
                                size="large"
                                type="primary"
                                onClick={this.handleSubmit}
                                className="handle-btn"
                            >
                                保存
                            </Button>
                            <Button
                                size="large"
                                onClick={this.cancelSubmit}
                                className="handle-btn"
                            >
                                取消
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}
export default Form.create()(Account);
