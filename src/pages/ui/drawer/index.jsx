import React, { Component } from 'react';
import { Row, Col, Card, Drawer, Button, Radio } from 'antd';
import './index.less';

const RadioGroup = Radio.Group;

export default class DrawerUI extends Component {
    state = { visible: false, placement: 'left' };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    onChange = (e) => {
        this.setState({
            placement: e.target.value,
        });
    };
    render() {
        return (
            <Row>
                <Col md={8} xs={24}>
                    <Card title="基础抽屉" className="drawer-box">
                        <Button type="primary" onClick={this.showDrawer}>
                            打开
                        </Button>
                        <Drawer
                            title="Basic Drawer"
                            placement="right"
                            closable={false}
                            onClose={this.onClose}
                            visible={this.state.visible}
                        >
                            <p>内容区域1</p>
                            <p>内容区域2</p>
                            <p>内容区域3</p>
                        </Drawer>
                    </Card>
                    <Card title="自定义位置抽屉" className="drawer-box">
                        <RadioGroup
                            style={{ marginRight: 8 }}
                            defaultValue={this.state.placement}
                            onChange={this.onChange}
                        >
                            <Radio value="top">顶部</Radio>
                            <Radio value="bottom">底部</Radio>
                            <Radio value="right">靠右</Radio>
                            <Radio value="left">靠左</Radio>
                        </RadioGroup>
                        <Button type="primary" onClick={this.showDrawer}>
                            打开
                        </Button>
                        <Drawer
                            title="Basic Drawer"
                            placement={this.state.placement}
                            closable={false}
                            onClose={this.onClose}
                            visible={this.state.visible}
                        >
                            <p>内容区域1</p>
                            <p>内容区域2</p>
                            <p>内容区域3</p>
                        </Drawer>
                    </Card>
                </Col>
            </Row>
        );
    }
}
