import React, { Component } from 'react';
import Lottie from 'react-lottie';
import { Row, Col } from 'antd';
import './index.less';
import animation_list from './data';

export default class ComplexAnimation extends Component {
    constructor(props) {
        super(props);
        this.state = { isStopped: false, isPaused: false };
    }
    defaultOptions = (index) => {
        return {
            loop: true,
            autoplay: true,
            animationData: animation_list[index],
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
        };
    };
    render() {
        const { isStopped, isPaused } = this.state;
        return (
            <Row className="lottie-box">
                {animation_list.map((item, index) => {
                    return (
                        <Col md={8} xs={24} key={index} className="lottie">
                            <Lottie
                                options={this.defaultOptions(index)}
                                isStopped={isStopped}
                                isPaused={isPaused}
                            />
                        </Col>
                    );
                })}
            </Row>
        );
    }
}
