import React, { Component } from 'react';
import { Row, Col, Spin } from 'antd';
import ReactQMap from 'react-qmap';

let classMap, windowMap;
export default class Map extends Component {
	state = {
		global_loading: false,
		apiKey: 'UN6BZ-MP2W6-XWCSX-M2ATU-QORGZ-OWFOE',
		center: {
			latitude: 36.003147,
			longitude: 120.12221
		},
		initialOptions: {
			zoomControl: true,
			mapTypeControl: true
		}
	};
	componentDidMount() {
		this.setState({ global_loading: true });
		setTimeout(() => {
			this.setState({ global_loading: false });
		}, 1500);
	}
	setMarker = () => {
		const { latitude, longitude } = this.state.center;
		new windowMap.Marker({
			map: classMap,
			position: new windowMap.LatLng(latitude, longitude),
			animation: windowMap.MarkerAnimation.DROP
		});
	};
	getMap = (map, wMap) => {
		classMap = map;
		windowMap = wMap;
		this.setMarker();
	};
	render() {
		const { global_loading } = this.state;
		return (
			<Spin spinning={global_loading} size="large">
				<Row gutter={16}>
					<Col md={24}>
						<ReactQMap
							{...this.state}
							style={{ height: 700 }}
							getMap={(map, wMap) => this.getMap(map, wMap)}
						/>
					</Col>
				</Row>
			</Spin>
		);
	}
}
