import React, { Component } from 'react';
import { Table, Switch, Radio, Form, message } from 'antd';
import Service from '@/service';

const FormItem = Form.Item;

const title = () => '头部标题';
const showHeader = true;
const scroll = { y: 240 };
const pagination = { position: 'bottom' };

export default class DynamicTable extends Component {
    state = {
        bordered: true,
        loading: false,
        pagination,
        size: 'default',
        title: undefined,
        showHeader,
        scroll: undefined,
        hasData: true,
        data: [],
    };
    componentWillMount() {
        Service.getTableData({
            type: 'basic_table',
        }).then((res) => {
            if (res.code === 1) {
                this.setState({
                    data: res.data,
                });
            } else {
                message.error('动态表格数据获取失败，请重试');
            }
        });
    }
    handleToggle = (prop) => (enable) => {
        this.setState({ [prop]: enable });
    };

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    };

    handleTitleChange = (enable) => {
        this.setState({ title: enable ? title : undefined });
    };

    handleHeaderChange = (enable) => {
        this.setState({ showHeader: enable ? showHeader : false });
    };

    handleScollChange = (enable) => {
        this.setState({ scroll: enable ? scroll : undefined });
    };

    handleDataChange = (hasData) => {
        this.setState({ hasData });
    };

    handlePaginationChange = (e) => {
        const { value } = e.target;
        this.setState({
            pagination: value === 'none' ? false : { position: value },
        });
    };

    render() {
        const state = this.state;
        const { data } = this.state;
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                width: 100,
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                width: 100,
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                width: 100,
            },
            {
                title: '出生日期',
                dataIndex: 'birthday',
                key: 'birthday',
                width: 170,
            },
            {
                title: '联系电话',
                dataIndex: 'telphone',
                key: 'telphone',
                width: 170,
            },
            {
                title: '地址',
                dataIndex: 'address',
                key: 'address',
            },
        ];
        return (
            <div>
                <div className="components-table-demo-control-bar">
                    <Form layout="inline">
                        <FormItem label="边框">
                            <Switch
                                checked={state.bordered}
                                onChange={this.handleToggle('bordered')}
                            />
                        </FormItem>
                        <FormItem label="数据加载">
                            <Switch
                                checked={state.loading}
                                onChange={this.handleToggle('loading')}
                            />
                        </FormItem>
                        <FormItem label="标题">
                            <Switch
                                checked={!!state.title}
                                onChange={this.handleTitleChange}
                            />
                        </FormItem>
                        <FormItem label="表头">
                            <Switch
                                checked={!!state.showHeader}
                                onChange={this.handleHeaderChange}
                            />
                        </FormItem>
                        <FormItem label="滚动条">
                            <Switch
                                checked={!!state.scroll}
                                onChange={this.handleScollChange}
                            />
                        </FormItem>
                        <FormItem label="数据存在">
                            <Switch
                                checked={!!state.hasData}
                                onChange={this.handleDataChange}
                            />
                        </FormItem>
                        <div />
                        <FormItem label="大小">
                            <Radio.Group
                                size="default"
                                value={state.size}
                                onChange={this.handleSizeChange}
                            >
                                <Radio.Button value="default">默认</Radio.Button>
                                <Radio.Button value="middle">中</Radio.Button>
                                <Radio.Button value="small">小</Radio.Button>
                            </Radio.Group>
                        </FormItem>
                        <FormItem label="分页器">
                            <Radio.Group
                                value={
                                    state.pagination ? (
                                        state.pagination.position
                                    ) : (
                                        'none'
                                    )
                                }
                                onChange={this.handlePaginationChange}
                            >
                                <Radio.Button value="top">顶部</Radio.Button>
                                <Radio.Button value="bottom">底部</Radio.Button>
                                <Radio.Button value="both">上下</Radio.Button>
                                <Radio.Button value="none">无</Radio.Button>
                            </Radio.Group>
                        </FormItem>
                    </Form>
                </div>
                <Table
                    {...this.state}
                    columns={columns}
                    dataSource={state.hasData ? data : null}
                    style={{ marginTop: 10 }}
                />
            </div>
        );
    }
}
