import React from 'react';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router';

import {
  Resource,
  RouterStore
} from '../store';
import Count from './Count';

const history = createBrowserHistory();
const store = {
  resource: new Resource(),
  router: new RouterStore(history)
}

class App extends React.Component {
  render() {
    return (
      <Provider {...store}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={Count} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;