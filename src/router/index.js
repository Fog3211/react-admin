import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AllPages from '@/pages';
import routesConfig from './config';

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
        return (
            <Switch>
                {
                    routesConfig.map(r => {
                        const route = r => {
                            const Page = AllPages[r.component];
                            if(Page){
                              return (
                                <Route
                                    exact
                                    key={r.key}
                                    path={r.key}
                                    render={() => {
                                        return <Page/>;
                                    }}
                                />
                                )  
                            }
                        }
                        return r.component ? route(r) : r.subs.map(r => route(r));
                    })
                }
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        )
    }
}