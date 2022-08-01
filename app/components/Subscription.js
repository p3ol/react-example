import { useEffect } from 'react';
import { useAudit } from '@poool/react-access';
import { Link } from 'react-router-dom';

import Header from './fragments/Header';

export default () => {
  const { lib: audit } = useAudit();

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    audit?.sendEvent('page-view', 'subscription');
    audit?.sendEvent('conversion');
  };

  const onLogin = () => {
    init();
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
