import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

const App = () => import("@/App");
const Login = () => import("_p/login/Login");
const NotFound = () => import("_p/notfound/NotFound");
const Account = () => import("_p/account/Account");

export default class IRouter extends Component {
  render() {
    return (
        <HashRouter>
          <Switch>
            <Route path="/" render={() => <Redirect to="/app/home"/>} exact />    
            <Route path="/app" component= {App} />
            <Route path="/login" component= {Login}/>
            <Route path="/account" component= {Account}/>
            <Route path="/404" component= {NotFound}/>
            <Route component={NotFound} />
          </Switch>
      </HashRouter>
    );
  }
}
