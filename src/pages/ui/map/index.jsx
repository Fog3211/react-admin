import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import ReactQMap from 'react-qmap';

export default class Map extends Component {
    state={
        apiKey:"UN6BZ-MP2W6-XWCSX-M2ATU-QORGZ-OWFOE",
        center:{
            latitude:36.003147,
            longitude: 120.12221
        },
        mySpot:{
            latitude: 36.003147,
            longitude: 120.12221
        },
        initialOptions:{
            zoomControl: true, 
            mapTypeControl: true
        },
    }
    render() {
        return (
            <Row gutter={16}>
                <Col md={24}>
                    <Card bordered={false} title="腾讯地图">
                        <ReactQMap {...this.state} style={{height: 700}}/>
                    </Card>
                </Col>
            </Row>
        );
    }
}
