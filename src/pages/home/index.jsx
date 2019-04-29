import React, { Component } from 'react';
import { Row, Col, Card, message, Spin } from 'antd';
import VisitsStatistics from './visits-statistics';
import TagCard from './tag-card';
import AgePie from './age-pie';
import Dynamic from './dynamic';
import Service from '@/service';

export default class Home extends Component {
	state = {
		global_loading: false,
		all_data: {
			tag: [],
			visits: [],
			age: {},
			dynamic: []
		}
	};
	componentWillMount() {
		Service.getHomeData().then((res) => {
			if (res.code === 1) {
				this.setState({
					all_data: res.data
				});
			} else {
				message.error('数据获取失败，请重试');
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
		const { global_loading, all_data } = this.state;
		return (
			<Spin spinning={global_loading} size="large">
				<Row gutter={30}>
					{all_data.tag.map((item, index) => {
						return (
							<Col md={6} key={index}>
								<TagCard data={item}/>
							</Col>
						);
					})}
				</Row>
				<Row gutter={20}>
					<Col md={8}>
						<Card>
							<AgePie option={all_data.age} />
						</Card>
					</Col>
					<Col md={16}>
						<Card title="动态">
							<Dynamic data={all_data.dynamic} />
						</Card>
					</Col>
				</Row>
				<Row>
					<Col>
						<Card title="最近一周访问量统计" className="card-box">
							<VisitsStatistics data={all_data.visits} />
						</Card>
					</Col>
				</Row>
			</Spin>
		);
	}
}
