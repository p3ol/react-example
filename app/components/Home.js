import React from 'react';
import { Link } from 'react-router-dom';

import Header from './fragments/Header';

class Home extends React.Component {

  sendHit() {
    window.poool('config', {
      user_is_premium: window.test_user?.premium || false,
    });

    window.poool('send', 'page-view', 'page');
  }

  componentDidMount() {
    this.sendHit();
  }

  onLogin() {
    this.sendHit();
  }

  render() {
    return (
      <div className="page home">
        <div className="container">
          <Header onLogin={this.onLogin.bind(this)} />
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
  }

  componentWillUnmount() {
    window.poool('flush');
  }

}

export default Home;
