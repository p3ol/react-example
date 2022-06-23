import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAudit } from '@poool/react-access';

import Header from './fragments/Header';

export default () => {
  const { lib: audit } = useAudit();
  useEffect(() => {
    init();

  }, [audit]);

  const init = async () => {
    await audit?.sendEvent('page-view', 'page');
  };

  const onLogin = async () => {
    init();
  };

  return (
    <div className="page home">
      <div className="container">
        <Header onLogin={onLogin} />
        <h1>Home</h1>
        <p>
          This is a normal page, without any paywall, with premium &
          free posts
        </p>
        <ul>
          <li><Link to="/premium">Premium post</Link></li>
          <li><Link to="/free">Free post</Link></li>
          <li><Link to="/subscribe">Subscribe now!</Link></li>
        </ul>
      </div>
    </div>
  );
};
