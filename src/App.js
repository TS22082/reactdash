import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
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
      Authenticated: false
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ Authenticated: true });
        console.log(this.state.Authenticated);
      } else {
        this.setState({ Authenticated: false });
        console.log(this.state.Authenticated);
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
            <Route exact path="/login" component={Login} />
            <Redirect to="/login" />
          </div>
        </Router>
      );
    }
  }
}

export default App;
