import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import asyncComponent from '@/utils/asyncComponent';
const Login = asyncComponent(() => import("@/pages/login/Login"))
const App = asyncComponent(() => import("@/App"))

/**
 * 使用HashRouter来引流
 */

export default class IRouter extends Component {
  render() {
    return (
        <HashRouter>
        <Switch>
          <Route path="/login" component= {Login}/>
          <Route path="/" component= {App}/>
        </Switch>
      </HashRouter>
    );
  }
}
