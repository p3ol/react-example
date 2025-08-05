import { Pixel } from '@poool/react-access';
import { Link } from 'react-router-dom';

import { useAuth } from '../hooks';
import Header from './fragments/Header';

export default () => {
  const { premium } = useAuth();

  return (
    <div className="page home">
      <div className="container">
        <Header />
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
      <Pixel
        config={{ user_is_premium: premium || false }}
        type="page-view"
        data={{ type: 'page' }}
      />
    </div>
  );
};
