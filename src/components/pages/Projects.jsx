import React, { Component } from 'react';
import Card from './Card';

export class Projects extends Component {
  render() {
    return (
      <div>
        <div className="d-flex flex-row mx-auto">
          <Card />
          <Card />
          <Card />
        </div>
        <h4 className="lead mt-5">
          View more on{' '}
          <a
            href="https://github.com/lawybanx/repositories"
            style={{ color: '#1c1cee' }}
          >
            Github
          </a>
        </h4>
      </div>
    );
  }
}

export default Projects;
