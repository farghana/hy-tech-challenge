import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav_bar'
import About from './components/about'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <About />
      </div>
    );
  }
}

export default App;
