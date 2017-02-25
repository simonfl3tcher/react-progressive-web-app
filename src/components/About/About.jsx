// @flow

// Dependencies
import React from 'react';
import { Link } from 'react-router';

// CSS/Assets
import './About.scss';

const About = () => (
  <div className="About">
    <div className="App-intro">
      <h1>About React PWA</h1>
      <Link className="btn" to="/">Home</Link>
    </div>
  </div>
);

export default About;
