import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/css/App.css';
import '../styles/css/normalize.css';

import Header from './Header'
import PhotoGrid from './PhotoGrid'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PhotoGrid />
        <Footer />
      </div>
    );
  }
}

export default App;
