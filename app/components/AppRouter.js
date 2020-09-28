import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Home from './Home';
import Premium from './Premium';
import Free from './Free';
import Subscription from './Subscription';

export default () => {
  const { location } = useLocation();

  return (
    <Switch location={location}>
      <Route path="/premium" component={Premium} />
      <Route path="/free" component={Free} />
      <Route path="/subscribe" component={Subscription} />
      <Route component={Home} />
    </Switch>
  );
};
