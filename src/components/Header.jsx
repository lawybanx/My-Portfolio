import React, { Component } from 'react';
import Nav from './Nav';
import Cover from './Cover';
import Footer from './Footer';

export class Header extends Component {
  state = {
    showInfo: true
  };

  showContent = () => {
    const showInfo = !this.state.showInfo;
    this.setState({ showInfo });
  };

  render() {
    return (
      <div className="cover-container d-flex p-3 mx-auto flex-column text-center">
        <Nav showContent={this.showContent} />
        {this.state.showInfo ? <Cover /> : null}
        <Footer />
      </div>
    );
  }
}

export default Header;
