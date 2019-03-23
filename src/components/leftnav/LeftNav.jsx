import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import menuList from "@/config/menuList";
import './LeftNav.less';
import logo from '@/assets/logo.svg';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class LeftNav extends Component {
    render() {
        return (
			<div>
				<div className="logo">
				<img src={logo} className="logo" alt="logo" />
					<h1>Imooc Ms</h1>
				</div>
			</div>
        );
    }
}
