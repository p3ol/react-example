import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from './fragments/Header';

export default () => {
  useEffect(() => {
    sendHit();
  }, []);

  const sendHit = () => {
    window.poool('config', {
      user_is_premium: window.testUser?.premium || false,
    });

    window.poool('send', 'page-view', 'subscription');
  };

  const onLogin = () => {
    sendHit();
  };

  return (
    <div className="page home">
      <div className="container">
        <Header onLogin={onLogin} />

        { /* eslint-disable max-len */}
        <h1>Our offers</h1>
        <p>This is a subscription page, without any paywall, where you list all your subscription offers.</p>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/premium">Premium post</Link></li>
          <li><Link to="/free">Free post</Link></li>
        </ul>
        { /* eslint-enable max-len */}
      </div>
    </div>
  );
};
