import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';
import { message } from 'antd';
import Service from '@/service';

export default class Funnel extends PureComponent {
    state = {
        option: {},
    };
    componentWillMount() {
        Service.getFunnelData().then((res) => {
            if (res.code === 1) {
                this.setState({
                    option: res.data,
                });
            } else {
                message.error('漏斗图数据获取失败，请重试');
            }
        });
    }
    render() {
        const { option } = this.state;
        return (
            <ReactEcharts
                ref={(e) => {
                    this.echarts_react = e;
                }}
                option={option}
            />
        );
    }
}
