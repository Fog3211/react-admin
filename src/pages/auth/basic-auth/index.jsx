import React, { Component } from 'react';
import { Card, Spin } from 'antd';

export default class BasicAuth extends Component {
	state = {
		global_loading: false
	};
	componentDidMount() {
		this.setState({ global_loading: true });
		setTimeout(() => {
			this.setState({ global_loading: false });
		}, 500);
	}
	authCheck = (auth) => {
		switch (auth) {
			case 'super_admin': {
				return '超级管理员';
			}
			case 'admin': {
				return '普通用户';
			}
			default:
				return '游客';
		}
	};
	render() {
		const { global_loading } = this.state;
		const { auth = { data: {} } } = this.props;
		return (
			<Spin spinning={global_loading} size="large">
				<Card title="权限信息">
					<h1 style={{ fontSize: 30, height: 500, lineHeight: '500px' }} className="center">
						您的身份权限是： {this.authCheck(auth.data.auth)}
					</h1>
				</Card>
			</Spin>
		);
	}
}
