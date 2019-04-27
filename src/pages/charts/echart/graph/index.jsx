import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class Graph extends Component {
    render() {
        const option = this.props.option || {
            series: [],
            data: [],
        };
        return (
            <ReactEcharts
                option={option}
                style={{ height: '400px', width: '100%' }}
                className={'react_for_echarts'}
            />
        );
    }
}
