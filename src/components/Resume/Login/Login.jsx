import React, { Component } from "react";
import firebase from "../../../firebase";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("working");
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="txtInput"
          onChange={this.handleChange}
          type="text"
          name="email"
          placeholder="e-mail"
        />
        <input
          className="txtInput"
          onChange={this.handleChange}
          type="password"
          name="password"
          placeholder="password"
        />
        <input type="submit" value="login" className="inputBtn" />
      </form>
    );
  }
}

export default Login;
