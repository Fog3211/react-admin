import React, { Component } from 'react';
import { List, Avatar } from 'antd';

export default class Dynamic extends Component {
    render() {
        const data = this.props.data || [];
        return (
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    pageSize: 3,
                }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item key={item.name} extra={<span>{item.time}</span>}>
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={item.name}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        );
    }
}
