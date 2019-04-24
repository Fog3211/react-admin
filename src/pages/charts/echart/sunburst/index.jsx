import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { message } from 'antd';
import Service from '@/service';
import echarts from 'echarts';

export default class Sunburst extends Component {
    state = {
        option: {},
    };
    componentWillMount() {
        Service.getSunburstData()
            .then((res) => {
                if (res.code === 1) {
                    this.setState({
                        option: res.data,
                    });
                } else {
                    message.error('旭日图数据获取失败，请重试');
                }
            })
            .then(() => {
                let dom = ReactDOM.findDOMNode(this.refs.sunburst);
                let myChart = echarts.init(dom);
                myChart.setOption(this.state.option, true);
            });
    }
    render() {
        return (
            <div
                ref="sunburst"
                style={{ height: '600px', width: '100%' }}
                className="react_for_echarts"
            />
        );
    }
}
