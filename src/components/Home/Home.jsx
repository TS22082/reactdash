import React, { Component } from "react";
import firebase from "../../firebase";

class Home extends Component {
  state = {};

  signout = () => {
    firebase
      .auth()
      .signOut()
      .catch(e => {
        console.log(e);
      });
  };
  render() {
    return (
      <div>
        <button onClick={() => this.signout()}>Logout</button>
      </div>
    );
  }
}

export default Home;
