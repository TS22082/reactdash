import React, { Component } from "react";
import firebase from "../../firebase";
import Todo from "./Todo/Todo";
import Weather from "./Weather/Weather";
import Quote from "./QuoteOfDay/Quote";
import Messages from "./Messages/Messages";
import "./Home.css";

class Home extends Component {
  state = {};
  detectEsc = event => {
    if (event.keyCode === 27) {
      firebase.auth().signOut();
    }
  };
  componentDidMount() {
    document.addEventListener("keydown", this.detectEsc, false);
  }

  render() {
    return (
      <div>
        <div className="HomeContainer">
          <div className="wqContainer">
            <Weather />
            <Quote />
          </div>
          <Todo />
          <Messages />
        </div>
      </div>
    );
  }
}

export default Home;
