import React, { Component } from 'react';
import { Steps, Icon, Card, Button, message } from 'antd';
import './index.less';

const Step = Steps.Step;
export default class StepBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        const steps = [
            {
                title: '第一步',
                content: '第一步',
            },
            {
                title: '第二步',
                content: '第二步',
            },
            {
                title: '最后一步',
                content: '最后一步',
            },
        ];
        return (
            <div>
                <Card title="基本步骤条" className="step-bar-box">
                    <Steps current={1}>
                        <Step title="完成" description="这是完成描述" />
                        <Step title="过程中" description="这是过程中描述" />
                        <Step title="等待" description="这是等待描述" />
                    </Steps>
                </Card>
                <Card title="垂直方向步骤条" className="step-bar-box">
                    <Steps direction="vertical" current={1}>
                        <Step title="完成" description="这是完成描述" />
                        <Step title="过程中" description="这是过程中描述" />
                        <Step title="等待" description="这是等待描述" />
                    </Steps>
                </Card>
                <Card title="自定义图标步骤条" className="step-bar-box">
                    <Steps current={1}>
                        <Step
                            status="finish"
                            title="登录"
                            icon={<Icon type="user" />}
                        />
                        <Step
                            status="finish"
                            title="验证"
                            icon={<Icon type="solution" />}
                        />
                        <Step
                            status="process"
                            title="支付"
                            icon={<Icon type="loading" />}
                        />
                        <Step
                            status="wait"
                            title="完成"
                            icon={<Icon type="smile-o" />}
                        />
                    </Steps>
                </Card>
                <Card title="步骤切换" className="step-bar-box">
                    <Steps current={current}>
                        {steps.map((item) => (
                            <Step key={item.title} title={item.title} />
                        ))}
                    </Steps>
                    <div className="steps-content">
                        {steps[current].content}
                    </div>
                    <div className="steps-action">
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => this.next()}>
                                下一步
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button
                                type="primary"
                                onClick={() => message.success('过程完成!')}
                            >
                                完成
                            </Button>
                        )}
                        {current > 0 && (
                            <Button
                                style={{ marginLeft: 8 }}
                                onClick={() => this.prev()}
                            >
                                上一步
                            </Button>
                        )}
                    </div>
                </Card>
                <Card title="步骤运行错误" className="step-bar-box">
                    <Steps current={1} status="error">
                        <Step title="完成" description="这是完成描述" />
                        <Step title="过程中" description="这是过程中描述" />
                        <Step title="等待" description="这是等待描述" />
                    </Steps>
                </Card>
            </div>
        );
    }
}
