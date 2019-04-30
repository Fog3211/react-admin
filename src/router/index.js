import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AllPages from '@/pages';
import routesConfig from './config';
import BreadcrumbCustom from '_c/breadcrumb-custom';

export default class CRouter extends Component {
    requireAuth = (permission, component) => {
        const { auth } = this.props;
        const { permissions } = auth.data;
        if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
        return component;
    };
    requireLogin = (component, permission) => {
        const { auth } = this.props;
        const { permissions } = auth.data;
        if (process.env.NODE_ENV === 'production' && !permissions) { // 线上环境判断是否登录
            return <Redirect to={'/login'} />;
        }
        return permission ? this.requireAuth(permission, component) : component;
    };
    render() {
        const {
            auth = {data: {}},
            responsive = {data: {}},
            onRouterChange
          } = this.props;
        return (
            <Switch>
                {
                    routesConfig.map(r => {
                        const route = (r,first_title) => {
                            const Page = AllPages[r.component];
                            if(Page){
                              return (
                                <Route
                                    exact
                                    key={r.key}
                                    path={r.key}
                                    render={() => {
                                        onRouterChange && onRouterChange(r);
                                        return (<div>
                                            {/* 面包屑标题导航 */}
                                            <BreadcrumbCustom first={(first_title?first_title:r.title)==='首页'?'':(first_title?first_title:r.title)} second={first_title?r.title:''} />
                                            <Page responsive={responsive} auth={auth}/>
                                        </div>);
                                    }}
                                />
                                )  
                            }
                        }
                        return r.component ? route(r) : r.subs.map((e) => route(e,r.title));
                    })
                }
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        )
    }
}