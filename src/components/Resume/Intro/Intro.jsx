import React, { Component } from "react";
import "./Intro.css";

class Intro extends Component {
  state = {};
  render() {
    return (
      <div className="intro">
        <h3 className="introTitle">About Me</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          fermentum vulputate feugiat. Ut imperdiet erat non lacus pharetra
          finibus. Duis ultricies purus vel elementum rutrum. Nulla sagittis
          tellus at turpis tincidunt finibus.
        </p>
      </div>
    );
  }
}

export default Intro;
