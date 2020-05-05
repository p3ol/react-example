import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './Home';
import Premium from './Premium';
import Free from './Free';
import Subscription from './Subscription';

class App extends React.Component {

  constructor(props) {
    super(props);

    // Avoid redux
    window.test_user = window.test_user || {
      logged: false,
      premium: false,
    };

    this.history = createBrowserHistory();
    this.unlisten = this.history.listen(() => window.scrollTo(0, 0));
  }

  render() {
    return (
      <Router history={this.history}>
        <Switch>
          <Route path="/premium" component={Premium} />
          <Route path="/free" component={Free} />
          <Route path="/subscribe" component={Subscription} />
          <Route component={Home} />
        </Switch>
      </Router>
    );
  }

  componentWillUnmount() {
    this.unlisten();
  }
}

export default App;
