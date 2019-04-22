import React, { Component } from 'react';
import { Table, Input, Button, Icon } from 'antd';
import Service from '@/service';
import Highlighter from 'react-highlight-words';

export default class ScreeningTable extends Component {
    state = {
        data: [],
        selectedRowKeys: [],
        filteredInfo: null,
        sortedInfo: null,
    };
    componentWillMount() {
        Service.getTableData({
            type: 'screening_table',
        }).then((res) => {
            this.setState({
                data: res.data,
            });
        });
    }
    onSelectChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys });
    };
    // 搜索
    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
        }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={(node) => {
                        this.searchInput = node;
                    }}
                    placeholder={`搜索 ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() =>
                        this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    搜索
                </Button>
                <Button
                    onClick={() => this.handleReset(clearFilters)}
                    size="small"
                    style={{ width: 90 }}
                >
                    重置
                </Button>
            </div>
        ),
        filterIcon: (filtered) => (
            <Icon
                type="search"
                style={{ color: filtered ? '#1890ff' : undefined }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: (text) => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    });
    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = (clearFilters) => {
        clearFilters();
        this.setState({ searchText: '' });
    };
    // 排序
    handleChange = (pagination, filters, sorter) => {
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    render() {
        const { selectedRowKeys, data } = this.state;
        const len = data.length;
        const all_arr = [...Array(len).keys()];

        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};

        // 全选处理
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [
                {
                    key: 'all-data',
                    text: '全选',
                    onSelect: () => {
                        this.setState({
                            selectedRowKeys: all_arr,
                        });
                    },
                },
                {
                    key: 'male',
                    text: '选择男性',
                    onSelect: () => {
                        let newSelectedRowKeys = [];
                        data.filter((item, index) => {
                            if (item.sex === '男') {
                                newSelectedRowKeys.push(index);
                            }
                            return item.sex === '男';
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
                {
                    key: 'female',
                    text: '选择女性',
                    onSelect: () => {
                        let newSelectedRowKeys = [];
                        data.filter((item, index) => {
                            if (item.sex === '女') {
                                newSelectedRowKeys.push(index);
                            }
                            return item.sex === '女';
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
            ],
            onSelection: this.onSelection,
        };
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
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
            },
            {
                title: '出生日期',
                dataIndex: 'birthday',
                key: 'birthday',
                ...this.getColumnSearchProps('birthday'),
            },
            {
                title: '地址',
                dataIndex: 'address',
                key: 'address',
                filters: [
                    { text: '山东省', value: '山东省' },
                    { text: '浙江省', value: '浙江省' },
                    { text: '江苏省', value: '江苏省' },
                ],
                filteredValue: filteredInfo.address || null,
                onFilter: (value, record) => record.address.includes(value),
            },
        ];
        return (
            <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
                onChange={this.handleChange}
            />
        );
    }
}
