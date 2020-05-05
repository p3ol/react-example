import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { defaultHistory } from '../utils';
import Home from './Home';
import Premium from './Premium';
import Free from './Free';
import Subscription from './Subscription';

// Avoid redux
window.testUser = window.testUser || {
  logged: false,
  premium: false,
};

export default () => {
  useEffect(() => {
    return defaultHistory.listen(() => window.scrollTo(0, 0));
  }, []);

  return (
    <Router history={defaultHistory}>
      <Switch>
        <Route path="/premium" component={Premium} />
        <Route path="/free" component={Free} />
        <Route path="/subscribe" component={Subscription} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
};
