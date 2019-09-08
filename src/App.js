import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './components/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="cover-container d-flex p-3 mx-auto flex-column text-center">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
