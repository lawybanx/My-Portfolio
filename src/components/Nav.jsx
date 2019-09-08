import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="masthead mb-auto">
          <Link to="/">
            <h3 className="masthead-brand">Moh-Awwal</h3>
          </Link>
          <nav className="nav nav-masthead justify-content-center">
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
            <Link className="nav-link" to="/">
              Contact
            </Link>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Nav;
