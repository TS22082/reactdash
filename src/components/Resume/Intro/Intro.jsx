import React, { Component } from "react";
import "./Intro.css";

class Intro extends Component {
  state = {};
  render() {
    return (
      <div className="intro">
        <h3 className="introTitle">About Me</h3>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp; Hello everyone and thanks for visiting! This
          ReactJS and Firebase app is a work in progress. If you have any
          questions or are interested in talking about a project use the form on
          the right to contact me.
        </p>
      </div>
    );
  }
}

export default Intro;
