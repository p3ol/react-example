import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AccessContext } from '@poool/react-access';

import { defaultHistory } from '../utils';
import Home from './Home';
import Premium from './Premium';
import Free from './Free';
import Subscription from './Subscription';
import Auth from './Auth';

export default () => {
  useEffect(() => {
    return defaultHistory.listen(() => window.scrollTo(0, 0));
  }, []);

  return (
    <BrowserRouter history={defaultHistory}>
      <Auth>
        <AccessContext
          appId="155PF-L7Q6Q-EB2GG-04TF8"
          config={{
            debug: true,
            cookies_enabled: true,
            custom_segment: 'react',
          }}
          withAudit={true}
        >
          <Routes>
            <Route path="/premium" element={<Premium />} />
            <Route path="/free" element={<Free />} />
            <Route path="/subscribe" element={<Subscription />} />
            <Route index element={<Home />} />
          </Routes>

        </AccessContext>
      </Auth>
    </BrowserRouter>
  );
};
