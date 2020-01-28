import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import store from './store';
import Header from './components/Header';
import CreateList from './pages/createList';
import './index.css';
import App from './App';
import theme from './theme';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/lista/:action" component={CreateList} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
