import React, { Component } from 'react';
import './App.css';
import NavBar from './ui/NavBar';

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
