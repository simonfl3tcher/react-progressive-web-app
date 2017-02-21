// @flow

// Dependencies
import React from 'react';
import { Link } from 'react-router';

// CSS/Assets
import './NotFound.scss';

function NotFound() {
  return (
    <div className="NotFound">
      <div className="App-intro">
        <h1>404 - not found :(</h1>
        <Link className="btn" to="/">Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
