import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import App from '@/App';
import Login from '_p/login';
import NotFound from '_p/notfound';
import Agreement from '_p/agreement';

export default class IRouter extends Component {
  render() {
    return (
        <HashRouter>
          <Switch>
            <Route path="/" render={() => <Redirect to="/app/home"/>} exact/>
            <Route path="/app" component= {App} />
            <Route path="/login" component= {Login}/>
            <Route path="/agreement" component= {Agreement}/>
            <Route path="/404" component= {NotFound}/>
            <Route component={NotFound} />
          </Switch>
      </HashRouter>
    );
  }
}
