import React, { Component } from "react";
import "./Intro.css";

class Intro extends Component {
  state = {};
  render() {
    return (
      <div className="intro">
        <h3 className="introTitle">About Me</h3>
        <p>
          Hello everyone! This full stack ReactJS app is a work in progress.
          Thank you for visiting! If you have any questions or are interested in
          talking about a project use the form on the right to contact me.
        </p>
      </div>
    );
  }
}

export default Intro;
