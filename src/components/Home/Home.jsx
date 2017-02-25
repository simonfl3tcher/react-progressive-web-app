// @flow

// Dependencies
import React from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';

// CSS/Assets
import './Home.scss';

const Home = () => (
  <div className="Home">
    <div className="App-intro">
      <img src={logo} className="logo" alt="logo" />
      <h1>Welcome to React PWA</h1>
      <Link className="btn" to="/about">About</Link>
    </div>
  </div>
);

export default Home;
