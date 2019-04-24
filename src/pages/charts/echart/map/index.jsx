import React, { Component } from 'react';
import { message } from 'antd';
import ReactEcharts from 'echarts-for-react';
import 'echarts/map/js/china.js';
import Service from '@/service';

export default class Map extends Component {
    state = {
        option: {},
    };
    componentWillMount() {
        Service.getMapData().then((res) => {
            if (res.code === 1) {
                this.setState({
                    option: res.data,
                });
            } else {
                message.error('地图数据获取失败，请重试');
            }
        });
    }
    render() {
        const { option } = this.state;
        return (
            <ReactEcharts
                option={option}
                style={{ height: '500px', width: '100%' }}
                className="react_for_echarts"
            />
        );
    }
}
