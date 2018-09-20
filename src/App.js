import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";
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
              <Home />
            </div>
          </Router>
        </div>
      );
    } else {
      return (
        <Router>
          <div>
            <Resume />
          </div>
        </Router>
      );
    }
  }
}

export default App;
