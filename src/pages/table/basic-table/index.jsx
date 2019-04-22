import React, { Component } from 'react';
import { Table } from 'antd';
import Service from '@/service';

export default class BasicTable extends Component {
    state = {
        data: [],
    };
    componentWillMount() {
        Service.getTableData({
            type: 'basic_table',
        }).then((res) => {
            this.setState({
                data: res.data,
            });
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
            {
                title: '个人简介',
                dataIndex: 'introduction',
                key: 'introduction',
            },
        ];

        return <Table columns={columns} dataSource={data} />;
    }
}
