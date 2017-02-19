// @flow

// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// CSS/Assets
import './assets/default.scss';

// Components
import Home from './components/Home/Home';

function App() {
  return (
    <Home />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
