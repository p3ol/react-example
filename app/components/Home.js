import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePoool } from '@poool/react-access';

import Header from './fragments/Header';

export default () => {
  const { poool, appId, config } = usePoool();

  useEffect(() => {
    init();

    return () => poool?.('flush');
  }, [poool]);

  const init = async () => {
    poool?.('init', appId);
    poool?.('config', {
      ...config,
      user_is_premium: window.testUser?.premium || false,
    });

    await poool?.('send', 'page-view', 'page');
  };

  const onLogin = async () => {
    await poool?.('flush');
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
