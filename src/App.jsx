// @flow

// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// CSS/Assets
import './assets/default.scss';

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

function App() {
  return (
    <Router history={hashHistory}>
      <Route
        path="/"
        getComponent={(location, cb) => {
          System.import('./components/Home/Home').then(loadRoute(cb)).catch(errorLoading);
        }}
      />
      <Route
        path="/about"
        getComponent={(location, cb) => {
          System.import('./components/About/About').then(loadRoute(cb)).catch(errorLoading);
        }}
      />
      <Route
        path="*"
        getComponent={(location, cb) => {
          System.import('./components/NotFound/NotFound').then(loadRoute(cb)).catch(errorLoading);
        }}
      />
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
