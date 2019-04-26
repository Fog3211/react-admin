import React, { Component } from 'react';
import { Row, Col, Card, message } from 'antd';
import VisitsStatistics from './visits-statistics';
import TagCard from './tag-card';
import './index.less';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Row gutter={30}>
                    <Col md={6}>
                        <TagCard />
                    </Col>
                    <Col md={6}>
                        <TagCard />
                    </Col>
                    <Col md={6}>
                        <TagCard />
                    </Col>
                    <Col md={6}>
                        <TagCard />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card title="最近一周访问量统计" className="">
                            <VisitsStatistics />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
