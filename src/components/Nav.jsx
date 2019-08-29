import React, { Component } from 'react';

export class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="masthead mb-auto">
          <h3 className="masthead-brand">Moh-Awwal</h3>
          <nav className="nav nav-masthead justify-content-center">
            <a
              className="nav-link active"
              href="#"
              onClick={this.props.showContent}
            >
              About
            </a>
            <a className="nav-link" href="#">
              Projects
            </a>
            <a className="nav-link" href="#">
              Contact
            </a>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Nav;
