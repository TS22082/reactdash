import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { contact: "", name: "", message: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    return (
      <div className="contactContainer">
        <form className="contactForm">
          <input
            type="text"
            name="contact"
            placeholder="Your contact info . . ."
            className="contactInput"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Your name. . ."
            className="nameInput"
            onChange={this.handleChange}
          />
        </form>
        <textarea
          name="message"
          id="message"
          className="messageInput"
          placeholder="message text. . ."
          cols="30"
          rows="10"
          onChange={this.handleChange}
        />
        <button className="btnSubmit">Submit</button>
      </div>
    );
  }
}

export default Form;
