import React from 'react';
import { Router, hashHistory } from 'react-router';

// Components
import App from 'containers/App';

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

const routes = {
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('pages/Home')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
    {
      path: 'about',
      getComponent(location, cb) {
        System.import('pages/About')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
  ],
};

export default () => <Router history={hashHistory} routes={routes} />;

