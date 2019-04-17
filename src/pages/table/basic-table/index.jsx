import React, { Component } from 'react';
import { Table } from 'antd';
import { basic_table } from '@/mock/data/table';

export default class BasicTable extends Component {
    state = {
        data: [],
    };
    componentWillMount() {
        this.setState({
            data: basic_table,
        });
    }
    render() {
        const { data } = this.state;
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '出生日期',
                dataIndex: 'birthday',
                key: 'birthday',
            },
            {
                title: '联系电话',
                dataIndex: 'telphone',
                key: 'telphone',
            },
            {
                title: '地址',
                dataIndex: 'address',
                key: 'address',
            },
        ];

        return <Table columns={columns} dataSource={data} />;
    }
}
