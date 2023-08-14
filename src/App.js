import React, { Component } from 'react';
import './App.css';
import Wall from './images/Cover.png'
import Row1 from './components/1_Row.js'
import Row2 from './components/2_Row.js'
import Row3 from './components/3_Row.js'
import Row4 from './components/4_Row.js'
import Row5 from './components/5_Row.js'


class App extends Component {
  render() {
    return (
      <div id="app">
      <span className="Centerer"></span>
    <img className="Centered" src={Wall}  />
   
    <Row1 />
    <Row2 />
    <Row3 />
    <Row4 />
    <Row5 />
        
      </div>
    );
  }
}

export default App;
