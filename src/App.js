import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav_bar'
import About from './components/about'
import Products from './components/products'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <About />
        <Products />
      </div>
    );
  }
}

export default App;
