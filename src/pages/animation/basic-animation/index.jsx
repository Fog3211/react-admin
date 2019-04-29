import React, { Component } from 'react';
import { Row, Col, Card, Switch, Spin } from 'antd';
import './index.less';
import list from './data.js';

class BasicAnimation extends Component {
	state = {
		global_loading: false,
		animated: false,
		animated_index: -1
	};
	componentDidMount() {
		this.setState({ global_loading: true });
		setTimeout(() => {
			this.setState({ global_loading: false });
		}, 1500);
	}
	animatedAll = (checked) => {
		this.setState({ animated: checked });
	};
	animatedOne = (index) => {
		this.setState({ animated_index: index });
	};
	animatedOneOver = () => {
		this.setState({ animated_index: -1 });
	};
	render() {
		const animation_list = list;
		const { global_loading, animated, animated_index } = this.state;
		return (
			<Spin spinning={global_loading} size="large">
				<div className="animation-container">
					<Row className="switch-box">
						<span className="all-animation">全部动画</span>
						<Switch onChange={this.animatedAll} />
					</Row>
					<Row gutter={10}>
						{animation_list.map((item, index) => (
							<Col className="gutter-row" md={6} key={index}>
								<div className="gutter-box">
									<Card
										className={`${animated || animated_index === index
											? 'animated infinite'
											: ''} ${item}`}
										onMouseEnter={() => this.animatedOne(index)}
										onMouseLeave={() => this.animatedOneOver()}
									>
										<div className="animation-item">
											<h3>{item}</h3>
										</div>
									</Card>
								</div>
							</Col>
						))}
					</Row>
				</div>
			</Spin>
		);
	}
}

export default BasicAnimation;
