import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { PaywallContext } from '@poool/react-access';

import Home from './Home';
import Premium from './Premium';
import Free from './Free';
import Subscription from './Subscription';

export default () => {
  const { location } = useLocation();

  return (
    <PaywallContext
      appId="155PF-L7Q6Q-EB2GG-04TF8"
      config={{ debug: true, cookies_enabled: true, custom_segment: 'react' }}
    >
      <Switch location={location}>
        <Route path="/premium" component={Premium} />
        <Route path="/free" component={Free} />
        <Route path="/subscribe" component={Subscription} />
        <Route component={Home} />
      </Switch>
    </PaywallContext>
  );
};
