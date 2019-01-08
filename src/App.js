import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import NavBar from './ui/NavBar';
import Home from './container/Home';

class App extends Component {
  render() {
    const logo = 'Gedaam'
    return (
      <div className="container pt-4">
        <NavBar logo={logo} />
        {this.props.children}
      </div>
    );
  }
}


export default App;
