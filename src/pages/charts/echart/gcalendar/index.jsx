import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { message } from 'antd';
import Service from '@/service';

export default class Gcalendar extends Component {
    state={
        option:{}
    }
    componentWillMount(){
        Service.getGcalendarData().then((res) => {
            if (res.code === 1) {
                this.setState({
                    option: res.data,
                });
            } else {
                message.error('日历坐标系数据获取失败，请重试');
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
