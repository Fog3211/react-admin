import React, { Component } from 'react';
import { Icon } from 'antd';
import CountUp from 'react-countup';
import classNames from 'classnames';
import './index.less';

export default class TagCard extends Component {
	render() {
		const data = this.props.data || {};
		const key = data.icon;
		return (
			<div className="tag-card">
				<div className="icon-box" style={{ backgroundColor: data.color }}>
					<Icon type={data.icon || 'team'} className="icon" />
				</div>
				<div className="info-box">
					<CountUp className="count" end={data.count || 0} duration={2} />
					<p className={classNames('info', { key })}>{data.info}</p>
				</div>
			</div>
		);
	}
}
