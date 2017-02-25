// @flow

// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// CSS/Assets
import './assets/default.scss';

require('offline-plugin/runtime').install();

const errorLoading = err => console.error('Dynamic page loading failed', err);
const loadRoute = cb => module => cb(null, module.default);

const App = () => (
  <Router history={hashHistory}>
    <Route
      path="/"
      getComponent={(location, cb) => {
        System.import('./components/Home/Home')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }}
    />
    <Route
      path="/about"
      getComponent={(location, cb) => {
        System.import('./components/About/About')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }}
    />
    <Route
      path="*"
      getComponent={(location, cb) => {
        System.import('./components/NotFound/NotFound')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }}
    />
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
