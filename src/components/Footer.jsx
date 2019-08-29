import React, { Component } from 'react';
import { FaHeadphones, FaCoffee, FaCode } from 'react-icons/fa';

export class Footer extends Component {
  render() {
    return (
      <footer className="mastfoot mt-auto text-center">
        <p>
          <FaCode /> with {' '}
          <FaHeadphones />{' '}&amp;{' '}
          <FaCoffee /> by Awwal Bankole
        </p>
      </footer>
    );
  }
}

export default Footer;
