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
                    <Col md={12} className="chart-box">
                        <Card title="关系图">
                            <Graph />
                        </Card>
                    </Col>
                    <Col md={12} className="chart-box">
                        <Card title="漏斗图">
                            <Funnel />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col md={12} className="chart-box">
                        <Card title="地图图表">
                            <Map />
                        </Card>
                    </Col>
                    <Col md={12} className="chart-box">
                        <Card title="旭日图">
                            <Sunburst />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="chart-box">
                        <Card title="类似Github的日历图">
                            <GCalendar />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
