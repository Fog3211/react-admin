import React, { Component } from 'react';
import { Table, message, Spin } from 'antd';
import Service from '@/service';

export default class BasicTable extends Component {
	state = {
		global_loading: false,
		data: []
	};
	componentWillMount() {
		Service.getTableData({
			type: 'basic_table'
		}).then((res) => {
			if (res.code === 1) {
				this.setState({
					data: res.data
				});
			} else {
				message.error('基础表格数据获取失败，请重试');
			}
		});
	}
	componentDidMount() {
		this.setState({ global_loading: true });
		setTimeout(() => {
			this.setState({ global_loading: false });
		}, 1500);
	}
	render() {
		const { global_loading, data } = this.state;
		const columns = [
			{
				title: '姓名',
				dataIndex: 'name',
				key: 'name'
			},
			{
				title: '性别',
				dataIndex: 'sex',
				key: 'sex'
			},
			{
				title: '年龄',
				dataIndex: 'age',
				key: 'age'
			},
			{
				title: '出生日期',
				dataIndex: 'birthday',
				key: 'birthday'
			},
			{
				title: '联系电话',
				dataIndex: 'telphone',
				key: 'telphone'
			},
			{
				title: '地址',
				dataIndex: 'address',
				key: 'address'
			}
		];

		return (
			<Spin spinning={global_loading} size="large">
				<Table columns={columns} dataSource={data} />
			</Spin>
		);
	}
}
