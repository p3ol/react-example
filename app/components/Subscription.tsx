import { Link } from 'react-router-dom';

import Header from './fragments/Header';

export default () => {
  return (
    <div className="page home">
      <div className="container">
        <Header />

        <h1>Our offers</h1>
        { /* eslint-disable @stylistic/max-len */}
        <p>This is a subscription page, without any paywall, where you list all your subscription offers.</p>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/premium">Premium post</Link></li>
          <li><Link to="/free">Free post</Link></li>
        </ul>
        { /* eslint-enable @stylistic/max-len */}
      </div>
    </div>
  );
};
