import React, { Component } from 'react';
import { Row, Col, Card, Icon } from 'antd';
import { icon_avatar_list, icon_font_list } from './data';
import "./index.less";
import "@/assets/iconfont/iconfont";

export default class Icons extends Component {
    state = {
        icon_avatar_list: [],
        icon_font_list: [],
    };
    componentWillMount() {
        this.setState({
            icon_avatar_list,
            icon_font_list,
        });
    }
    render() {
        const { icon_font_list, icon_avatar_list } = this.state;
        return (
            <Row>
                <Col>
                    <Card bordered={false} title="官方图标库">
                        <Row className="icons-list">
                            {icon_font_list.map((item, index) => {
                                return (
                                    <Col key={index} className="icon-box" md={4} xs={8}>
                                        <Icon
                                            type={item}
                                            className="icon"
                                        />
                                        <p>{item}</p>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Card> 
                </Col>
                <Col>
                    <Card bordered={false} title="iconfont图标库（Symbol格式）">
                        <Row className="icons-list">
                        {
                            icon_avatar_list.map((item,index)=>{
                                return (
                                <Col key={index} className="icon-box" md={4} xs={8}>
                                    <svg className="icon" aria-hidden="true">
                                        <use xlinkHref={item.code}></use>   
                                    </svg>
                                    <p>{item.name}</p>
                                </Col>)
                            })
                        }
                        </Row>
                    </Card>
                </Col>
            </Row>
        );
    }
}
