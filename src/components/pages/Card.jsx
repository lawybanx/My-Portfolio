import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Card() {
  return (
    <div
      className="card mr-5"
      style={{ width: '20rem', background: 'transparent' }}
    >
      <div className="card-header" style={{ padding: '100px' }}>
        Picture
      </div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/">
          <FaGithub className="icons" />
        </a>{' '}
        <a
          href="https://github.com/lawybanx"
          className="btn btn-sm btn-secondary"
        >
          Demo
        </a>
      </div>
    </div>
  );
}
