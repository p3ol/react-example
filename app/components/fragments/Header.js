import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  static defaultProps = {
    onLogin: () => {},
  }

  state = {
    connecting: false,
  }

  componentDidMount() {
    window.poool('event', 'onLoginClick', this.onLoginClick.bind(this));
  }

  onLoginClick(e) {
    this.login();
    e.originalEvent?.preventDefault();
  }

  login(e) {
    e?.preventDefault();

    if (this.state.connecting === true) {
      return false;
    }

    this.setState({ connecting: true });

    this._loginTimeout = setTimeout(() => {
      window.test_user = {
        logged: true,
        premium: true,
      };

      this.setState({ connecting: false });

      this.props.onLogin();
    }, 2000);

    return false;
  }

  showLoginState() {
    if (this.state.connecting) {
      return (
        <span>Connecting...</span>
      );
    } else if (window.test_user.logged) {
      return (
        <span>Signed as: <strong>Rick Sanchez</strong></span>
      );
    } else {
      return (
        <a href="#" onClick={this.login.bind(this)}>Sign in</a>
      );
    }
  }

  render() {
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
            { this.showLoginState() }
          </span>
        </nav>
      </header>
    );
  }

  componentWillUnmount() {
    window.poool('unevent', 'onLoginClick', this.onLoginClick.bind(this));
  }
}

export default Header;
