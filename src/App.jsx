import React, { Component } from 'react';
import Routes from './router/index';
import DocumentTitle from 'react-document-title';
import { Layout, Icon } from 'antd';
import LeftNav from '_c/leftnav/LeftNav';
import Header from '_c/header';
import ThemePicker from '_c/widget/theme-picker';
import '@/style/App.less';

const { Content, Footer } = Layout;

// 引入所有的子路由
export default class App extends Component {
    state = {
        collapsed: false,
        title: '',
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    setTitle = (title) => {
        this.setState({title});
    };
    render() {
        const { collapsed, title } = this.state;
        const { auth = { data: {} }, responsive = { data: {} } } = this.props;
        return (
            <DocumentTitle title={title}>
                <Layout>
                    <ThemePicker />
                    <Layout>
                        <Header
                            toggle={this.toggle}
                            collapsed={collapsed}
                            user={auth.data || {}}
                        />
                        {/* <Content style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}>
                            <Routes auth={auth} onRouterChange={this.setTitle} />
                        </Content> */}
                        <Footer className="footer">
                            React-Admin © 2019 Created by Fog3211
                        </Footer>
                    </Layout>
                </Layout>
            </DocumentTitle>
        );
    }
}
