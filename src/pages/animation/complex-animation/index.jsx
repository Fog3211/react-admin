import React, { Component } from 'react';
import Lottie from 'react-lottie';
import { Row, Col, Spin } from 'antd';
import './index.less';
import animation_list from './data';

export default class ComplexAnimation extends Component {
	constructor(props) {
		super(props);
		this.state = { global_loading: false, isStopped: false, isPaused: false };
	}
	componentDidMount() {
		this.setState({ global_loading: true });
		setTimeout(() => {
			this.setState({ global_loading: false });
		}, 1500);
	}
	defaultOptions = (index) => {
		return {
			loop: true,
			autoplay: true,
			animationData: animation_list[index],
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice'
			}
		};
	};
	render() {
		const { global_loading, isStopped, isPaused } = this.state;
		return (
			<Spin spinning={global_loading} size="large">
				<Row className="lottie-box">
					{animation_list.map((item, index) => {
						return (
							<Col md={8} xs={24} key={index} className="lottie">
								<Lottie
									options={this.defaultOptions(index)}
									isStopped={isStopped}
									isPaused={isPaused}
								/>
							</Col>
						);
					})}
				</Row>
			</Spin>
		);
	}
}
