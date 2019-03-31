import React, { Component } from 'react';
import Routes from './router/index';
import DocumentTitle from 'react-document-title';
import { Layout, notification, Icon } from 'antd';
import SiderCustom from '_c/widget/sider-custom';
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
    componentDidMount() {
        const openNotification = () => {
            notification.open({
              message: 'React-Admin By Fog3211',
              description: (
                  <div className="notification">
                      <p>
                          GitHub地址： <a href="https://github.com/fog3211" target="_blank" rel="noopener noreferrer">https://github.com/fog3211</a>
                      </p>
                      <p>
                          博客地址： <a href="https://fog3211.com/" target="_blank" rel="noopener noreferrer">https://fog3211.com/</a>
                      </p>
                  </div>
              ),
              icon: <Icon type="smile" size="large" style={{ color: 'green',marginTop: 40 }} />,
              style: {
                marginTop: 70,
                marginRight: 10,
              },
              duration: 4,
            });
        };
        openNotification();
    }
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
                {!responsive.data.isMobile && <SiderCustom collapsed={collapsed} />}
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
