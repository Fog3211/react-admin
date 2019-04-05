import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import asyncComponent from '@/utils/asyncComponent';

const App = asyncComponent(() => import("@/App"));
const Login = asyncComponent(() => import("_p/login/Login"));
const Home = asyncComponent(() => import("_p/home/Home"));
const NotFound = asyncComponent(() => import("_p/notfound/NotFound"));
const Account = asyncComponent(() => import("_p/account/Account"));


export default class IRouter extends Component {
  render() {
    return (
        <HashRouter>
          <Switch>
          <Route path="/" render={() => <Redirect to="/home"/>} exact />    
          <Route path="/home" component= {App} />
          <Route path="/login" component= {Login}/>
          <Route path="/account" component= {Account}/>
          <Route path="/404" component= {NotFound}/>
          <Route component={NotFound} />
          </Switch>
      </HashRouter>
    );
  }
}
