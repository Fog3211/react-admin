import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import routes from '@/router/config';
import SiderMenu from './SiderMenu';
import './style.less';

const { Sider } = Layout;

class SiderCustom extends Component {
    static getDerivedStateFromProps(props, state) {
        if (props.collapsed !== state.collapsed) {
            const state1 = SiderCustom.setMenuOpen(props);
            const state2 = SiderCustom.onCollapse(props.collapsed);
            return {
                ...state1,
                ...state2,
                firstHide:
                    state.collapsed !== props.collapsed && props.collapsed, // 两个不等时赋值props属性值否则为false
                openKey: state.openKey || (!props.collapsed && state1.openKey),
            };
        }
        return null;
    }
    static setMenuOpen = (props) => {
        const { pathname } = props.location;
        return {
            openKey: pathname.substr(0, pathname.lastIndexOf('/')),
            selectedKey: pathname,
        };
    };
    static onCollapse = (collapsed) => {
        return {
            collapsed,
            // firstHide: collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        };
    };
    state = {
        collapsed: false,
        mode: 'inline',
        openKey: '',
        selectedKey: '',
        firstHide: true, // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
    };
    componentDidMount() {
        // SiderCustom.setMenuOpen(this.props);
        const state = SiderCustom.setMenuOpen(this.props);
        this.setState(state);
    }
    menuClick = (e) => {
        this.setState({
            selectedKey: e.key,
        });
        const { popoverHide } = this.props; // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
        popoverHide && popoverHide();
    };
    openMenu = (v) => {
        this.setState({
            openKey: v[v.length - 1],
            firstHide: false,
        });
    };
    render() {
        const {collapsed}= this.props;
        return (
            <Sider
                trigger={null}
                breakpoint="lg"
                collapsible
                collapsed={collapsed}
                style={{ overflowY: 'auto' }}
            >
                <SiderMenu
                    menus={routes.menus}
                    onClick={this.menuClick}
                    mode="inline"
                    selectedKeys={[this.state.selectedKey]}
                    openKeys={
                        this.state.firstHide ? null : [this.state.openKey]
                    }
                    onOpenChange={this.openMenu}
                />
            </Sider>
        );
    }
}

export default withRouter(SiderCustom);
