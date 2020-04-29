import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login';
import Friends from '../components/Friends/Friends';
import PrivateRoute from '../utils/PrivateRoute';

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/friends" component={Friends} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
