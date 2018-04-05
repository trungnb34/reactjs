import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Menu from "../src/component/commons/menu/menu";
import Home from "../src/component/home/home";
import Content from "../src/component/content/content";
import AppRouter from "./app-router";
import * as cateAction from "./actions/cate";
// import {connect} from "react-redux";

class App extends Component {

  componentDidMount() {
    // this.props.loadAllCate();
  }

  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}


export default App;
