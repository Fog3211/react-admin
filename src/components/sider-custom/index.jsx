import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import menus from '@/router/config';
import SiderMenu from './SiderMenu';

const { Sider } = Layout;

class SiderCustom extends Component {
    state = {
        openKey: '',
        selectedKey: '',
    };
    menuClick = (e) => {
        this.setState({
            selectedKey: e.key,
        });
        const { popoverHide } = this.props; 
        // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
        popoverHide && popoverHide();
    };
    openMenu = (v) => {
        this.setState({
            openKey: v[v.length - 1],
        });
    };
    render() {
        const { collapsed } = this.props;
        return (
            <Sider
                breakpoint="lg"
                collapsed={collapsed}
                style={{ overflowY: 'auto' }}
            >
                <SiderMenu
                    menus={menus}
                    onClick={this.menuClick}
                    selectedKeys={[this.state.selectedKey]}
                    mode="inline"
                    openKeys={[this.state.openKey]}
                    onOpenChange={this.openMenu}
                />
            </Sider>
        );
    }
}

export default withRouter(SiderCustom);
