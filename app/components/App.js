import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { defaultHistory } from '../utils';
import AppRouter from './AppRouter';

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
        <Route component={AppRouter} />
      </Switch>
    </Router>
  );
};
