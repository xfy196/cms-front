import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import HomeLayout from "./layouts/HomeLayout"
import LoginCom from "./routes/login/loginContainer"
import RegisterCom from "./routes/register/registerContainer"
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginCom} />
        <Route path="/register" component={RegisterCom}></Route>
        <Route path="/" component={HomeLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
