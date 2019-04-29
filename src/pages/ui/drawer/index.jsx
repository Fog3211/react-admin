import React, { Component } from 'react';
import { Row, Col, Card, Drawer, Button, Radio, Form, Input, Select, DatePicker, Icon, Spin } from 'antd';
import './index.less';

const RadioGroup = Radio.Group;
const { Option } = Select;

class DrawerUI extends Component {
	state = {
		global_loading: false,
		basic_visible: false,
		customize_visible: false,
		multilaminar_visible: false,
		placement: 'left',
		childrenDrawer: false,
		form_visible: false
	};
	componentDidMount() {
		this.setState({ global_loading: true });
		setTimeout(() => {
			this.setState({ global_loading: false });
		}, 500);
	}
	// 基本抽屉
	showBasicDrawer = () => {
		this.setState({
			basic_visible: true
		});
	};

	onBasicClose = () => {
		this.setState({
			basic_visible: false
		});
	};
	// 自定义抽屉
	showCustomizeDrawer = () => {
		this.setState({
			customize_visible: true
		});
	};

	onCustomizeClose = () => {
		this.setState({
			customize_visible: false
		});
	};
	onCustomizeChange = (e) => {
		this.setState({
			placement: e.target.value
		});
	};
	// 多层抽屉
	showMultilaminarDrawer = () => {
		this.setState({
			multilaminar_visible: true
		});
	};

	onMultilaminarClose = () => {
		this.setState({
			multilaminar_visible: false
		});
	};

	showChildrenDrawer = () => {
		this.setState({
			childrenDrawer: true
		});
	};

	onChildrenDrawerClose = () => {
		this.setState({
			childrenDrawer: false
		});
	};
	// form抽屉
	showFormDrawer = () => {
		this.setState({
			form_visible: true
		});
	};

	onFormClose = () => {
		this.setState({
			form_visible: false
		});
	};
	render() {
		const {
			global_loading,
			basic_visible,
			placement,
			customize_visible,
			multilaminar_visible,
			childrenDrawer,
			form_visible
		} = this.state;
		const { getFieldDecorator } = this.props.form;
		const { responsive = { data: {} } } = this.props;
		return (
			<Spin spinning={global_loading} size="large">
				<Card title="基础抽屉" className="drawer-box">
					<Button type="primary" onClick={this.showBasicDrawer}>
						打开
					</Button>
					<Drawer
						title="Basic Drawer"
						placement="right"
						closable={false}
						onClose={this.onBasicClose}
						visible={basic_visible}
					>
						<p>内容区域1</p>
						<p>内容区域2</p>
						<p>内容区域3</p>
					</Drawer>
				</Card>

				<Card title="自定义位置抽屉" className="drawer-box">
					<RadioGroup style={{ marginRight: 8 }} defaultValue={placement} onChange={this.onCustomizeChange}>
						<Radio value="top">顶部</Radio>
						<Radio value="bottom">底部</Radio>
						<Radio value="right">靠右</Radio>
						<Radio value="left">靠左</Radio>
					</RadioGroup>
					<Button type="primary" onClick={this.showCustomizeDrawer} className="customize-btn">
						打开
					</Button>
					<Drawer
						title="Basic Drawer"
						placement={placement}
						closable={false}
						onClose={this.onCustomizeClose}
						visible={customize_visible}
					>
						<p>内容区域1</p>
						<p>内容区域2</p>
						<p>内容区域3</p>
					</Drawer>
				</Card>
				<Card title="多层抽屉" className="drawer-box">
					<Button type="primary" onClick={this.showMultilaminarDrawer}>
						打开
					</Button>
					<Drawer
						title="多层抽屉"
						width={responsive.data.isMobile ? '160' : '520'}
						closable={false}
						onClose={this.onMultilaminarClose}
						visible={multilaminar_visible}
					>
						<Button type="primary" onClick={this.showChildrenDrawer}>
							二级抽屉
						</Button>
						<Drawer
							title="二级抽屉"
							width={responsive.data.isMobile ? '180' : '320'}
							closable={false}
							onClose={this.onChildrenDrawerClose}
							visible={childrenDrawer}
						>
							二级抽屉内容区
						</Drawer>
						<div className="btn-box">
							<Button
								style={{
									marginRight: 8
								}}
								onClick={this.onClose}
							>
								取消
							</Button>
							<Button onClick={this.onClose} type="primary">
								提交
							</Button>
						</div>
					</Drawer>
				</Card>
				<Card title="表单抽屉" className="drawer-box">
					<Button type="primary" onClick={this.showFormDrawer}>
						<Icon type="plus" />新建账户
					</Button>
					<Drawer
						title="新建账户"
						width={responsive.data.isMobile ? '320' : '720'}
						onClose={this.onFormClose}
						visible={form_visible}
					>
						<Form layout="vertical" hideRequiredMark>
							<Row gutter={16}>
								<Col md={12} xs={24}>
									<Form.Item label="姓名">
										{getFieldDecorator('name', {
											rules: [
												{
													required: true,
													message: '姓名不能为空'
												}
											]
										})(<Input placeholder="请输入姓名" />)}
									</Form.Item>
								</Col>
								<Col md={12} xs={24}>
									<Form.Item label="Url">
										{getFieldDecorator('url', {
											rules: [
												{
													required: true,
													message: 'url不能为空'
												}
											]
										})(
											<Input
												style={{ width: '100%' }}
												addonBefore="http://"
												addonAfter=".com"
												placeholder="请输入url"
											/>
										)}
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={16}>
								<Col md={12} xs={24}>
									<Form.Item label="拥有者">
										{getFieldDecorator('owner', {
											rules: [
												{
													required: true,
													message: '拥有者不能为空'
												}
											]
										})(
											<Select placeholder="请选择拥有者">
												<Option value="lufei">蒙奇D路飞</Option>
												<Option value="luojie">哥尔D罗杰</Option>
												<Option value="diqi">马歇尔D蒂奇</Option>
											</Select>
										)}
									</Form.Item>
								</Col>
								<Col md={12} xs={24}>
									<Form.Item label="类型">
										{getFieldDecorator('type', {
											rules: [
												{
													required: true,
													message: '请选择类型'
												}
											]
										})(
											<Select placeholder="请选择类型">
												<Option value="private">私人的</Option>
												<Option value="public">公开的</Option>
											</Select>
										)}
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={16}>
								<Col md={12} xs={24}>
									<Form.Item label="审核人">
										{getFieldDecorator('approver', {
											rules: [
												{
													required: true,
													message: '请选择审核人'
												}
											]
										})(
											<Select placeholder="请选择审核人">
												<Option value="luo">特拉法尔加·D·瓦铁尔·罗</Option>
												<Option value="aisi">波特卡斯·D·艾斯</Option>
											</Select>
										)}
									</Form.Item>
								</Col>
								<Col md={12} xs={24}>
									<Form.Item label="日期">
										{getFieldDecorator('dateTime', {
											rules: [
												{
													required: true,
													message: '请选择日期'
												}
											]
										})(
											<DatePicker.RangePicker
												style={{ width: '100%' }}
												getPopupContainer={(trigger) => trigger.parentNode}
											/>
										)}
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={16}>
								<Col md={12} xs={24}>
									<Form.Item label="描述">
										{getFieldDecorator('description', {
											rules: [
												{
													required: true,
													message: '描述不能为空'
												}
											]
										})(<Input.TextArea rows={4} placeholder="请输入描述" />)}
									</Form.Item>
								</Col>
							</Row>
						</Form>
						<div className="form-btn-box">
							<Button onClick={this.onFormClose} style={{ marginRight: 8 }}>
								取消
							</Button>
							<Button onClick={this.onFormClose} type="primary">
								提交
							</Button>
						</div>
					</Drawer>
				</Card>
			</Spin>
		);
	}
}

export default Form.create()(DrawerUI);
