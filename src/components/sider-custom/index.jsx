import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import menus from '@/router/config';
import SiderMenu from './SiderMenu';

class SiderCustom extends Component {
    static setMenuOpen = (props) => {
        const { pathname } = props.location;
        return {
            openKey: pathname.substr(0, pathname.lastIndexOf('/')),
            selectedKey: pathname,
        };
    };
    state = {
        openKey: '',
        selectedKey: '',
    };
    componentDidMount() {
        const state = SiderCustom.setMenuOpen(this.props);
        this.setState(state);
    }
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
        const { selectedKey, openKey } = this.state;
        return (
            <SiderMenu
                menus={menus}
                onClick={this.menuClick}
                selectedKeys={[selectedKey]}
                mode="inline"
                openKeys={[openKey]}
                onOpenChange={this.openMenu}
            />
        );
    }
}

export default withRouter(SiderCustom);
