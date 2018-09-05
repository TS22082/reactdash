import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import firebase from "./firebase.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Home />
      </div>
    );
  }
}

export default App;
