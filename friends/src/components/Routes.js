import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home';
import Friends from '../components/Friends/Friends';
import PrivateRoute from '../utils/PrivateRoute';

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/friends" component={Friends} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
