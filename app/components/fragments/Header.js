import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePoool } from '@poool/react-access';

export default ({ onLogin = () => {} }) => {
  const [connecting, setConnecting] = useState(false);
  const { poool } = usePoool();

  useEffect(() => {
    poool?.('event', 'onLoginClick', onLoginClick);
    return () => poool?.('unevent', 'onLoginClick', onLoginClick);
  }, []);

  const onLoginClick = e => {
    e.originalEvent?.preventDefault();
    login();
  };

  const login = async e => {
    e?.preventDefault();

    if (connecting) {
      return;
    }

    setConnecting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    window.testUser = { logged: true, premium: true };
    setConnecting(false);

    onLogin();
  };

  return (
    <header className="mb-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Newspaper</Link>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/premium" className="nav-item nav-link">
              Premium post
            </Link>
            <Link to="/free" className="nav-item nav-link">
              Free Post
            </Link>
            <Link to="/subscribe" className="nav-item nav-link">
              Subscribe now!
            </Link>
          </div>
        </div>

        <span className="navbar-text">
          { connecting ? (
            <span>Connecting...</span>
          ) : window.testUser.logged ? (
            <span>Signed as: <strong>Rick Sanchez</strong></span>
          ) : (
            <a href="#" onClick={login}>Sign in</a>
          ) }
        </span>
      </nav>
    </header>
  );
};
