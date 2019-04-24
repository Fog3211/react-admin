import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class Gcalendar extends Component {
    render() {
        const option = this.props.option || {};
        return (
            <ReactEcharts
                option={option}
                style={{ height: '500px', width: '100%' }}
                className="react_for_echarts"
            />
        );
    }
}
