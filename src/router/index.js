import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AllPages from '@/pages';
import routesConfig from './config';
import BreadcrumbCustom from '_c/breadcrumb-custom';

export default class CRouter extends Component {
    requireAuth = (component,auth,permissions) => {
        if(permissions){
            if(permissions.includes(auth)){
                return component;
            }else{
                return <Redirect to={'404'} />
            }
        }
        return component;
    };
    render() {
        const {
            auth = {data: {}},
            responsive = {data: {}},
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
                                        return this.requireAuth((<div>
                                            {/* 面包屑标题导航 */}
                                            <BreadcrumbCustom first={(first_title?first_title:r.title)==='首页'?'':(first_title?first_title:r.title)} second={first_title?r.title:''} />
                                            <Page responsive={responsive} auth={auth}/>
                                        </div>),auth.data.auth,r.auth);
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