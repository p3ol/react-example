import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks';

export default ({ onLogin = () => {} }) => {
  const { login, connecting } = useAuth();

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
