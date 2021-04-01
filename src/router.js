import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import HomeLayout from "./layouts/HomeLayout"
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={HomeLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
