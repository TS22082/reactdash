import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  state = {};
  render() {
    return (
      <div className="contactContainer">
        <form className="contactForm">
          <input
            type="text"
            name="contact"
            placeholder="Your contact info . . ."
            className="contactInput"
          />
          <input
            type="text"
            name="name"
            placeholder="Your name. . ."
            className="nameInput"
          />
        </form>
        <textarea
          name="messageText"
          id="messageText"
          className="messageText"
          placeholder="message text. . ."
          cols="30"
          rows="10"
        />
        <button className="btnSubmit">Submit</button>
      </div>
    );
  }
}

export default Form;
