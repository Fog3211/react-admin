import React, { Component } from 'react';
import { Row, Col, Card, Spin } from 'antd';
import LoginForm from './login-form';
import RegisterForm from './register-form';
import HorizontalForm from './horizontal-form';
import ModalForm from './modal-form';
import CheckedForm from './checked-form';
import OtherForm from './other-form';

export default class AllForms extends Component {
	state = {
		global_loading: false
	};
	componentDidMount() {
		this.setState({ global_loading: true });
		setTimeout(() => {
			this.setState({ global_loading: false });
		}, 2000);
	}
	render() {
		const { global_loading } = this.state;
		return (
			<Spin spinning={global_loading} size="large">
				<div className="all-forms">
					<Row gutter={16}>
						<Col md={12}>
							<Card title="注册表单">
								<RegisterForm />
							</Card>
						</Col>
						<Col md={12}>
							<Card title="登录表单">
								<LoginForm />
							</Card>
							<Card title="水平表单" style={{ marginTop: 20 }}>
								<HorizontalForm />
							</Card>
							<Card title="弹窗表单" style={{ marginTop: 20 }}>
								<ModalForm />
							</Card>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col md={12} style={{ marginTop: 20 }}>
							<Card title="自定义校验表单">
								<CheckedForm />
							</Card>
						</Col>
						<Col md={12} style={{ marginTop: 20 }}>
							<Card title="其他表单">
								<OtherForm />
							</Card>
						</Col>
					</Row>
				</div>
			</Spin>
		);
	}
}
