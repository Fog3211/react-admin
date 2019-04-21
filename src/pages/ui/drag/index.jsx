import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import Draggable from 'react-draggable';

export default class Drag extends Component {
    state = {};
    render() {
        return (
            <Row>
                <Col md={8} xs={24}>
                    <Card>
                        <Draggable>
                            <div>I can now be moved around!</div>
                        </Draggable>
                    </Card>
                </Col>
            </Row>
        );
    }
}
