import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav_bar'
import About from './components/about'
import Products from './components/products'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <About />
        <Products />
        <Footer />
      </div>
    );
  }
}

export default App;
