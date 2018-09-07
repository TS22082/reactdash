import React, { Component } from "react";
import firebase from "../../firebase";
import Todo from "./Todo/Todo";
class Home extends Component {
  state = {};

  signout = () => {
    firebase.auth().signOut();
  };
  render() {
    return (
      <div>
        <button onClick={() => this.signout()}>Logout</button>
        <div className="HomeContainer">
          <h1>hello</h1>
          <Todo />
        </div>
      </div>
    );
  }
}

export default Home;
