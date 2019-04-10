import React, { Component } from 'react';
import Routes from './router/index';
import DocumentTitle from 'react-document-title';
import { Layout, notification, Icon } from 'antd';
import SiderCustom from '_c/sider-custom';
import Header from '_c/header';
import ThemePicker from '_c/theme-picker';
import '@/style/App.less';
import { connect } from 'react-redux';

const { Content, Footer, Sider } = Layout;

class App extends Component {
    state = {
        collapsed: false,
        title: '',
    };
    componentWillMount() {
        this.getClientWidth();
        window.onresize = () => {
            this.getClientWidth();
        };
    }
    componentDidMount() {
        const openNotification = () => {
            notification.open({
                message: 'React-Admin By Fog3211',
                description: (
                    <div className="notification">
                        <p>
                            GitHub地址：
                            <a
                                href="https://github.com/fog3211"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://github.com/fog3211
                            </a>
                        </p>
                        <p>
                            博客地址：
                            <a
                                href="https://fog3211.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://fog3211.com/
                            </a>
                        </p>
                    </div>
                ),
                icon: (
                    <Icon
                        type="smile"
                        size="large"
                        style={{ color: 'green', marginTop: 40 }}
                    />
                ),
                style: {
                    marginTop: 70,
                    marginRight: 10,
                },
            });
        };
        openNotification();
    }
    getClientWidth = () => {
        const cW = window.innerWidth;
        this.props.handleResponsive(cW);
    };
    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    };
    setTitle = (title) => {
        this.setState({ title });
    };
    render() {
        const { collapsed, title } = this.state;
        const { auth = { data: {} }, responsive = { data: {} } } = this.props;
        return (
            <DocumentTitle title={title}>
                <Layout style={{ minHeight: '100vh' }}>
                    <ThemePicker />
                    <Header user={auth.data || {}} responsive={responsive} />
                    <Layout>
                        {!responsive.data.isMobile && (
                            <Sider
                                collapsible
                                collapsed={collapsed}
                                onCollapse={this.onCollapse}
                            >
                                <SiderCustom collapsed={collapsed} />
                            </Sider>
                        )}
                        <Layout style={{ flexDirection: 'column' }}>
                            <Content className="content">
                                {/* <Routes auth={auth} onRouterChange={this.setTitle} /> */}
                            </Content>
                            <Footer className="footer">
                                React-Admin © 2019 Created by Fog3211
                            </Footer>
                        </Layout>
                    </Layout>
                </Layout>
            </DocumentTitle>
        );
    }
}

//需要渲染什么数据
function mapStateToProps(state) {
    return {
        responsive: state,
    };
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
    return {
        handleResponsive: (cW) => dispatch({ type: 'responsive', width: cW }),
    };
}

export default (App = connect(mapStateToProps, mapDispatchToProps)(App));
