import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import asyncComponent from '@/utils/asyncComponent';

const App = asyncComponent(() => import("@/App"));
const Login = asyncComponent(() => import("_p/login/Login"));
const Home = asyncComponent(() => import("_p/home/Home"));
const Account = asyncComponent(() => import("_p/account/Account"));


export default class IRouter extends Component {
  render() {
    return (
        <HashRouter>
          <Switch>
            <Route path="/login" component= {Login}></Route>
            <Route path="/account" component= {Account}/>
            <Route path="/" render={()=>(
              <App>
                <Switch>
                  {/* <Route path="/modals" component= {Modals}/> */}
                  {/* 没有匹配则重定向到首页 */}
                  <Route component={Home}/>
                </Switch>
              </App>
            )}>
            </Route>
          </Switch>
      </HashRouter>
    );
  }
}
