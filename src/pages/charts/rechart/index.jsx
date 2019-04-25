import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import Line from './line';
import Bar from './bar';
import Area from './area';
import Scatter from './scatter';
import RadialBar from './radialbar';
import Service from '@/service';
import './index.less';

export default class Rechart extends Component {
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col>
                        <Card title="折线图">
                            <Line />
                        </Card>
                    </Col>
                    <Col md={12}>
                        <Card title="柱状图">
                            <Bar />
                        </Card>
                    </Col>
                    <Col md={12}>
                        <Card title="面积图">
                            <Area />
                        </Card>
                    </Col>
                    <Col md={12}>
                        <Card title="散点图">
                            <Scatter />
                        </Card>
                    </Col>
                    <Col md={12}>
                        <Card title="放射柱状图">
                            <RadialBar />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
