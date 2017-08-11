import React, { Component } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Main01 from './components/Main01';
import Main02 from './components/Main02';
import Main03 from './components/Main03';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Carousel />
        <Main01 />
        <Main02 />
        <Main03 />
        <Footer />
      </div>
    );
  }
}

export default App;
