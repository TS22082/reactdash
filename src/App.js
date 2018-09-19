import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
// import Login from "./components/Login/Login";
import Resume from "./components/Resume/Resume";
import firebase from "./firebase.js";

const auth = firebase.auth();

class App extends Component {
  constructor() {
    super();
    this.state = {
      Authenticated: false
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ Authenticated: true });
      } else {
        this.setState({ Authenticated: false });
      }
    });
  }
  render() {
    if (this.state.Authenticated) {
      return (
        <div>
          <Router>
            <div>
              <Route extact path="/reactdash" component={Home} />
              <Redirect to="/reactdash" />
            </div>
          </Router>
        </div>
      );
    } else {
      return (
        <Router>
          <div>
            <Route exact path="/Resume" component={Resume} />
            <Redirect to="/Resume" />
          </div>
        </Router>
      );
    }
  }
}

export default App;
