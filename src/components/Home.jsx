import React, { Component } from 'react';
import { FaLinkedin, FaTwitter, FaDev, FaGithub } from 'react-icons/fa/index';
import { IoMdHand } from 'react-icons/io';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="cover ">
          <h1 className="cover-heading">
            Hi <IoMdHand />, I'm Awwal Bankole
          </h1>
          <p className="lead">
            I'm a Frontend and React js developer. I create websites and web
            apps. <br /> Click the button below to get in touch
          </p>
          <p className="lead">
            <Link to="/contact" className="btn btn-lg btn-secondary">
              Contact me
            </Link>
          </p>
          <p className="lead icons mt-auto">
            <a href="/">
              <FaLinkedin />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <FaDev />
            </a>
            <a href="/">
              <FaGithub />
            </a>
          </p>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
