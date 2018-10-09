import React, { Component } from "react";
import "./Intro.css";

class Intro extends Component {
  state = {};

  render() {
    const pStyle = {
      lineHeight: "23px"
    };
    const divStyle = {
      backgroundColor: "black",
      height: "325px"
    };
    return (
      <div className="intro" style={divStyle}>
        <h3 className="introTitle">Thomas W. Smith</h3>
        <p style={pStyle}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hello and thanks for
          visiting! I am a passionate and active "maker" with experience rapid
          prototyping IOT telametric devices. I build full stack web
          applications using various web technologies depending on what the
          project requires. Some of the languages, libraries, and platforms I'm
          happy to build with include Angular(2+), ReactJS, Node, Express,
          Mongoose, Firebase, ESP8266 boards, Arduino, Flask and the Raspberry
          Pi (SMBC). If you are interested in talking about a possible future
          project, use the form on the right to contact me.
        </p>
      </div>
    );
  }
}

export default Intro;
