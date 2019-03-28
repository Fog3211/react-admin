import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import menuList from '@/config/menuList';
import './LeftNav.less';

const SubMenu = Menu.SubMenu;

export default class LeftNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuTreeNode: '',
        };
    }
    // 组件渲染之前请求数据
    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuList);
        this.setState({
            menuTreeNode,
        });
    }
    renderMenu = (data) => {
        return data.map((item) => {
            // 存在子节点则递归
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                );
            }
            //渲染最后的节点
            return (
                <Menu.Item key={item.key}>
                    <NavLink to={item.key}>
                        {/* <Icon type="pie-chart" /> */}
                        {item.title}
                    </NavLink>
                </Menu.Item>
            );
        });
    };
    render() {
        return (
            <div className="left-nav">
                <Menu theme="dark" mode="inline">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}
