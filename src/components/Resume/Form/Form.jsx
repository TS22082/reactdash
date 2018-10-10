import React, { Component } from "react";
import firebase from "../../../firebase";
import "./Form.css";

const db = firebase.database();

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { contact: "", name: "", message: "" };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  submitMessage = () => {
    db.ref("messages").push({
      message: this.state.message,
      contact: this.state.contact,
      name: this.state.name
    });
    this.setState({ contact: "", name: "", message: "" });
  };

  render() {
    return (
      <div className="contactContainer">
        <form className="contactForm">
          <input
            type="text"
            name="contact"
            placeholder="phone #, email. . ."
            className="contactInput"
            onChange={this.handleChange}
            value={this.state.contact}
          />
          <input
            type="text"
            name="name"
            placeholder="Your name. . ."
            className="nameInput"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </form>
        <textarea
          name="message"
          id="message"
          className="messageInput"
          placeholder="message text. . ."
          rows="20"
          onChange={this.handleChange}
          value={this.state.message}
        />
        <button className="btnSubmit" onClick={this.submitMessage}>
          Submit
        </button>
      </div>
    );
  }
}

export default Form;
