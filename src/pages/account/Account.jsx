import React, { Component } from 'react';
import { Form, Input, Button, DatePicker, Radio, Avatar } from 'antd';
import './Account.less';
import head from '@/assets/default-head.jpg';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { MonthPicker,RangePicker } = DatePicker;

class Account extends Component {
    state = {
        avatar: head,
        nickName:'fff',
        sex: 0,
        name: 'fog3211',
        birthday:'',
        duration: '',
        degree: '本科',
        tel: '12333333323',
        email: 'dsaas@gmail.com',
    };
    changeAvatar = () => {
        console.log('更换头像');
    };
    changeNickName = () => {
        console.log('更换昵称');
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
    changeDuration = () => {
        console.log('更改在校时间');
    };
    changeDegree=()=>{
        console.log('更改学位');
    };
    changeTel=()=>{
        console.log('更改手机号');
    };
    changeEmail=()=>{
        console.log('更改邮箱');
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
                            <div className="nickName-box">
                                <span className="nickName-title">昵称</span>
                                <span className="nickName">{this.state.nickName}</span>
                                <span
                                    onClick={this.changeNickName}
                                    className="nickName-btn"
                                >
                                    修改
                                </span>
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
                                <span className="name">{this.state.name}</span>
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
                                <MonthPicker onChange={this.changeBirthday} />
                            </div>
                        </FormItem>
                        <FormItem>
                            <div className="duration-box">
                                <span className="duration-title">在校时间</span>
                                <RangePicker onChange={this.changeDuration} />
                            </div>
                        </FormItem>
                        <FormItem>
                            <div className="degree-box">
                                <span className="degree-title">学位</span>
                                <span className="degree">{this.state.degree}</span>
                                <span
                                    onClick={this.changeDegree}
                                    className="degree-btn"
                                >
                                    修改
                                </span>
                            </div>
                        </FormItem>
                        <FormItem>
                            <div className="tel-box">
                                <span className="tel-title">手机号</span>
                                <span className="tel">{this.state.tel}</span>
                                <span
                                    onClick={this.changeTel}
                                    className="tel-btn"
                                >
                                    修改
                                </span>
                            </div>
                        </FormItem>
                        <FormItem>
                            <div className="email-box">
                                <span className="email-title">邮箱</span>
                                <span className="email">
                                    {this.state.email}
                                </span>
                                <span
                                    onClick={this.changeEmail}
                                    className="email-btn"
                                >
                                    修改
                                </span>
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
