// @flow

// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// CSS/Assets
import './assets/default.scss';

// Components
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
