import React, { Component } from 'react';
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './index.less';
import Service from '@/service';
import { connect } from 'react-redux';

const FormItem = Form.Item;

class Login extends Component {
	state = {
		value: 0,
		remember: false
	};
	componentDidMount() {
		let userName = sessionStorage.getItem('remember');
		this.props.form.setFieldsValue({ userName });
	}
	handleLogin = () => {
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
					passWord: values.passWord
				}).then((res) => {
					if (res.resCode === 1) {
						sessionStorage.setItem('userName', values.userName);
						// redux权限部分
						this.props.handleAuth(res.auth);
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
			remember: e.target.checked
		});
	};
	handleEnter = (e) => {
		if (e.keyCode === 13) {
			this.handleLogin();
		}
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="login-container">
				<Card title="React后台管理系统" className="login-card">
					<Form className="login-form" onKeyDown={this.handleEnter}>
						<FormItem>
							{getFieldDecorator('userName', {
								rules: [
									{
										required: true,
										message: '用户名不能为空！'
									},
									{
										min: 3,
										max: 10,
										message: '用户名长度为3~10位'
									}
								]
							})(<Input prefix={<Icon type="user" />} type="text" placeholder="请输入用户名" />)}
						</FormItem>
						<FormItem>
							{getFieldDecorator('passWord', {
								rules: [
									{
										required: true,
										message: '密码不能为空！'
									},
									{
										min: 6,
										max: 16,
										message: '密码长度为6~16位'
									}
								]
							})(<Input prefix={<Icon type="lock" />} type="password" placeholder="请输入密码" />)}
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
									this.handleLogin();
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

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}
function mapDispatchToProps(dispatch) {
	return {
		handleAuth: (auth) => dispatch({ type: 'auth', auth: auth })
	};
}

let App= withRouter(Form.create()(Login));
export default (App = connect(mapStateToProps, mapDispatchToProps)(App));
// export default withRouter(Form.create()((Login = connect(mapStateToProps, mapDispatchToProps)(Login))));
