import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Menu, Icon, Layout, Popover } from 'antd';
import SiderCustom from '_c/widget/sider-custom';
import screenfull from 'screenfull';
import { withRouter } from 'react-router-dom';
// import { connectAlita } from 'redux-alita';
import './style.less';
import logo from '@/assets/logo.svg';
import avater from '@/assets/head.png';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;

class MyHeader extends Component {
    state = {
        visible: false,
    };
    handleVisibleChange = (visible) => {
        this.setState({ visible });
    };
    popoverHide = () => {
        this.setState({
            visible: false,
        });
    };
    toggleScreenFull = () => {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    };
    logOut = () => {
        return <Redirect to="/login" />;
    };
    render() {
        const { responsive = { data: {} }, path, collapsed, toggle} = this.props;
        const { visible } = this.state;
        return (
            <Header className="header">
                {!responsive.data.isMobile ? (
                    <Popover
                        content={
                            <SiderCustom
                                path={path}
                                popoverHide={this.popoverHide}
                            />
                        }
                        trigger="click"
                        placement="bottomLeft"
                        visible={visible}
                        onVisibleChange={this.handleVisibleChange}
                    >
                        <Icon
                            type="bars"
                            className="header-trigger mobile-bar"
                        />
                    </Popover>
                ) : (
                    <Icon
                        className="header-trigger"
                        type={
                            collapsed ? 'menu-unfold' : 'menu-fold'
                        }
                        onClick={toggle}
                    />
                )}
                <Menu mode="horizontal" className="header-menu">
                    <Menu.Item key="full" onClick={this.toggleScreenFull}>
                        <Icon type="fullscreen" className="full-btn" />
                    </Menu.Item>

                    {responsive.data.isMobile ? (
                        ''
                    ) : (
                        <Menu.Item key="welcome">
                            <span className="welcome">
                                你好 - {this.props.user.userName}
                            </span>
                        </Menu.Item>
                    )}

                    <SubMenu
                        title={<img src={avater} alt="头像" className="avatar" />}
                    >
                        <Menu.Item key="setting">个人信息</Menu.Item>
                        <Menu.Item key="logout">
                            <span onClick={this.logOut}>退出登录</span>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>
        );
    }
}

// export default withRouter(connectAlita(['responsive'])(MyHeader));
export default withRouter(MyHeader);
