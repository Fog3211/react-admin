import React, { Component } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const style = {
	top: 0,
	right: 110,
    lineHeight: '24px'
};

export default class RadialBarUI extends Component {
	render() {
		const data = this.props.data || [];
		return (
			<ResponsiveContainer width="100%" height={300}>
				<RadialBarChart cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
					<RadialBar
						minAngle={15}
						label={{ position: 'insideStart', fill: '#fff' }}
						background
						clockWise
						dataKey="uv"
					/>
					<Legend
						iconSize={10}
						width={100}
						height={140}
						layout="vertical"
						verticalAlign="middle"
						wrapperStyle={style}
					/>
				</RadialBarChart>
			</ResponsiveContainer>
		);
	}
}
