import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class Funnel extends Component {
    render() {
        const option = this.props.option || {};
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
