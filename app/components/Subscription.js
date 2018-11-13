/* eslint-disable max-len */

import React from 'react';
import { Link } from 'react-router-dom';

import Header from './fragments/Header';

class Subscription extends React.Component {

  sendHit() {
    window.poool('config', {
      user_is_premium: window.test_user?.premium || false,
    });

    window.poool('send', 'page-view', 'subscription');
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
          <h1>Our offers</h1>
          <p>This is a subscription page, without any paywall, where you list all your subscription offers.</p>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/premium">Premium post</Link></li>
            <li><Link to="/free">Free post</Link></li>
          </ul>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    window.poool('flush');
  }

}

export default Subscription;
