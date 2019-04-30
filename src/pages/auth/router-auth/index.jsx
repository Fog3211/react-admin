import React, { Component } from 'react';
import { Card, Spin } from 'antd';

export default class RouterAuth extends Component {
	state = {
		global_loading: false
	};
	componentDidMount() {
		this.setState({ global_loading: true });
		setTimeout(() => {
			this.setState({ global_loading: false });
		}, 500);
	}
	render() {
		const { global_loading } = this.state;
		return (
			<Spin spinning={global_loading} size="large">
				<Card>
					<h1 style={{ fontSize: 30, height: 500, lineHeight: '500px' }} className="center">
						只有该系统用户才可以看到此页面，游客访问会跳转404页面
					</h1>
				</Card>
			</Spin>
		);
	}
}
