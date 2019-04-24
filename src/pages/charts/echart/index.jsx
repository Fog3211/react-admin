import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import Graph from './graph';
import GCalendar from './gcalendar';
import Funnel from './funnel';
import Map from './map';
import Sunburst from './sunburst';
import './index.less';

export default class Echart extends Component {
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col md={12}>
                        <Card title="关系图" className="chart-box">
                            <Graph />
                        </Card>
                    </Col>
                    <Col md={12}>
                        <Card title="漏斗图" className="chart-box">
                            <Funnel />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col md={12}>
                        <Card title="地图图表" className="chart-box">
                            <Map />
                        </Card>
                    </Col>
                    <Col md={12}>
                        <Card title="旭日图" className="chart-box">
                            <Sunburst />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col>
                        <Card title="日历坐标系" className="chart-box">
                            <GCalendar />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
