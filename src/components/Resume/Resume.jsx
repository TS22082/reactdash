import React, { Component } from "react";
import "./Resume.css";
import Login from "../Login/Login";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = { showLogin: false, toggle: "Close" };
    this.showLogin = this.showLogin.bind(this);
  }

  showLogin = () => {
    if (this.state.showLogin === false) {
      this.setState({ showLogin: true });
      document.getElementsByClassName("login")[0].style.height = "0vh";
      this.setState({ toggle: "open" });
    } else {
      this.setState({ showLogin: false });
      document.getElementsByClassName("login")[0].style.height = "80vh";
      this.setState({ toggle: "close" });
    }
  };
  render() {
    return (
      <div>
        <h1>Resume Works</h1>
        <button id="loginToggle" onClick={() => this.showLogin()}>
          {this.state.toggle}
        </button>
        <div className="login">
          {" "}
          <Login />
        </div>
      </div>
    );
  }
}

export default Resume;
