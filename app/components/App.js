import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PaywallContext } from '@poool/react-access';

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
    <BrowserRouter history={defaultHistory}>
      <PaywallContext
        appId="155PF-L7Q6Q-EB2GG-04TF8"
        config={{ debug: true, cookies_enabled: true, custom_segment: 'react' }}
      >
        <Routes>
          <Route path="/premium" element={<Premium />} />
          <Route path="/free" element={<Free />} />
          <Route path="/subscribe" element={<Subscription />} />
          <Route index element={<Home />} />
        </Routes>
      </PaywallContext>
    </BrowserRouter>
  );
};
