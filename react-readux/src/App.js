import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Menu from "../src/component/commons/menu/menu";
import Home from "../src/component/home/home";
import Content from "../src/component/content/content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
