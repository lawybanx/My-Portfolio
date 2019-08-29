import React, { Component } from 'react';

export class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="masthead mb-auto">
          <h3 className="masthead-brand">Moh-Awwal</h3>
          <nav className="nav nav-masthead justify-content-center">
            <button
              className="nav-link active"
              onClick={this.props.showContent}
              style={{
                borderTop: 'none',
                borderRight: 'none',
                borderLeft: 'none'
              }}
            >
              About
            </button>
            <a className="nav-link" href="/">
              Projects
            </a>
            <a className="nav-link" href="/">
              Contact
            </a>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Nav;
