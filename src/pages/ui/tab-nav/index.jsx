import React, { Component } from 'react';
import { Card, Tabs, Icon, Radio, Select} from 'antd';
import './index.less';

const TabPane = Tabs.TabPane;
const Option = Select.Option;

export default class TabNav extends Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
    }
    state = {
        mode: 'top',
        tabPosition: 'top',
        activeKey: '1', //不能为Number类型
        panes: [
            {
                title: 'Tab 1',
                content: '内容1',
                key: '1',
                closable: false,
            },
            { title: 'Tab 2', content: '内容2', key: '2' },
            { title: 'Tab 3', content: '内容3', key: '3' },
        ],
    };
    handleModeChange = (e) => {
        const mode = e.target.value;
        this.setState({ mode });
    };
    changeTabPosition = (tabPosition) => {
        this.setState({ tabPosition });
    };
    onChange = (activeKey) => {
        this.setState({ activeKey });
    };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({
            title: `新标签页${this.newTabIndex}`,
            content: '新标签页内容',
            key: activeKey,
        });
        this.setState({ panes, activeKey });
    };

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter((pane) => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };

    render() {
        const { mode, tabPosition } = this.state;
        return (
            <div>
                <Card title="基本标签页" className="tab-nav-box">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Tab 1" key="1">
                            内容1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            内容2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            内容3
                        </TabPane>
                        <TabPane tab="Tab 4" key="4" disabled>
                            禁用
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="带图标的标签页" className="tab-nav-box">
                    <Tabs defaultActiveKey="1">
                        <TabPane
                            tab={
                                <span>
                                    <Icon type="apple" />Tab 1
                                </span>
                            }
                            key="1"
                        >
                            apple
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                    <Icon type="android" />Tab 2
                                </span>
                            }
                            key="2"
                        >
                            android
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                    <Icon type="windows" />Tab 3
                                </span>
                            }
                            key="3"
                        >
                            windows
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="横纵向切换标签页" className="tab-nav-box">
                    <Radio.Group
                        onChange={this.handleModeChange}
                        value={mode}
                        style={{ marginBottom: 8 }}
                    >
                        <Radio.Button value="top">横向</Radio.Button>
                        <Radio.Button value="left">纵向</Radio.Button>
                    </Radio.Group>
                    <Tabs
                        defaultActiveKey="1"
                        tabPosition={mode}
                        style={{ height: 220 }}
                    >
                        <TabPane tab="Tab 1" key="1">
                            内容1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            内容2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            内容3
                        </TabPane>
                        <TabPane tab="Tab 4" key="4">
                            内容4
                        </TabPane>
                        <TabPane tab="Tab 5" key="5">
                            内容5
                        </TabPane>
                        <TabPane tab="Tab 6" key="6">
                            内容6
                        </TabPane>
                        <TabPane tab="Tab 7" key="7">
                            内容7
                        </TabPane>
                        <TabPane tab="Tab 8" key="8">
                            内容8
                        </TabPane>
                        <TabPane tab="Tab 9" key="9">
                            内容9
                        </TabPane>
                        <TabPane tab="Tab 10" key="10">
                            内容10
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="可调整位置标签页" className="tab-nav-box">
                    <div style={{ marginBottom: 16 }}>
                        标签位置：
                        <Select
                            value={tabPosition}
                            onChange={this.changeTabPosition}
                            dropdownMatchSelectWidth={false}
                        >
                            <Option value="top">顶部</Option>
                            <Option value="bottom">底部</Option>
                            <Option value="left">靠左</Option>
                            <Option value="right">靠右</Option>
                        </Select>
                    </div>
                    <Tabs tabPosition={tabPosition}>
                        <TabPane tab="Tab 1" key="1">
                            内容1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            内容2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            内容3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="增加删除卡片式标签页" className="tab-nav-box">
                    <Tabs
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {this.state.panes.map((pane) => (
                            <TabPane
                                tab={pane.title}
                                key={pane.key}
                                closable={pane.closable}
                            >
                                {pane.content}
                            </TabPane>
                        ))}
                    </Tabs>
                </Card>
            </div>
        );
    }
}
