import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import asyncComponent from '@/utils/asyncComponent';

const App = asyncComponent(() => import("@/App"))
// const Login = asyncComponent(() => import("_p/login/Login"))
// const NotFound = asyncComponent(() => import("_p/notfound/NotFound"))
// const Modals = asyncComponent(() => import("_p/ui/Modals"))


export default class IRouter extends Component {
  render() {
    return (
        <HashRouter>
          <App>
            {/* <Switch>
              <Route path="/login" component= {Login}/>
              <Route path="/" exact component= {App}/>
              <Route path="/error" component= {NotFound}/>
              <Route path="/ui/modals" component= {Modals}/>
              <Redirect to="/error"/>
            </Switch> */}
          </App>
      </HashRouter>
    );
  }
}
