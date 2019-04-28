import React, { Component } from 'react';
import { Row, Col, Card, message } from 'antd';
import VisitsStatistics from './visits-statistics';
import TagCard from './tag-card';
import AgePie from './age-pie';
import Dynamic from './dynamic';
import Service from '@/service';

export default class Home extends Component {
    state = {
        all_data: {
            tag: [],
            visits: [],
            age:{},
            dynamic:[]
        },
    };
    componentWillMount() {
        Service.getHomeData().then((res) => {
            if (res.code === 1) {
                this.setState({
                    all_data: res.data,
                });
            } else {
                message.error('数据获取失败，请重试');
            }
        });
    }
    render() {
        const { all_data } = this.state;
        return (
            <div>
                <Row gutter={30}>
                    {all_data.tag.map((item, index) => {
                        return (
                            <Col md={6} key={index}>
                                <TagCard data={item} />
                            </Col>
                        );
                    })}
                </Row>
                <Row gutter={20}>
                    <Col md={8}>
                        <Card>
                            <AgePie option={all_data.age}/>
                        </Card>
                    </Col>
                    <Col md={16}>
                        <Card title="动态">
                            <Dynamic data={all_data.dynamic}/>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card title="最近一周访问量统计" className="card-box">
                            <VisitsStatistics data={all_data.visits} />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
