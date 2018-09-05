import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import firebase from "./firebase.js";

const db = firebase.database();
const auth = firebase.auth();

db.ref("CON").on("value", snapshot => {
  const val = snapshot.val();
  console.log(val);
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      AuthStatus: false
    };
  }
  render() {
    return (
      <div className="App">
        {/* <Login />
        <Home /> */}

        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
