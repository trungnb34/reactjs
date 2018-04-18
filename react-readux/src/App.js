import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from "../src/component/layout/menu/menu";
import Home from "../src/component/home/home";
import Content from "../src/component/content/content";
import AppRouter from "./component/route/app-router";
import * as cateAction from "./actions/cate";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}


export default App;
