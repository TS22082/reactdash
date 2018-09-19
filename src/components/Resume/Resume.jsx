import React, { Component } from "react";
import "./Resume.css";
import Login from "../Login/Login";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = { showLogin: false, toggle: "Admin" };
    this.adminToggle = this.adminToggle.bind(this);
  }

  componentDidMount() {
    this.adminToggle();
  }

  adminToggle = () => {
    if (this.state.showLogin === false) {
      this.setState({ showLogin: true });
      document.getElementsByClassName("login")[0].style.height = "0vh";
      this.setState({ toggle: "Admin" });
    } else {
      this.setState({ showLogin: false });
      document.getElementsByClassName("login")[0].style.height = "10vh";
      this.setState({ toggle: "close" });
    }
  };
  render() {
    return (
      <div className="resumeContainer">
        <div className="login">
          <p className="title">Admin Login:</p>
          <div className="loginForm">
            <Login />
          </div>
        </div>
        <div className="meContainer">
          <button className="adminToggle" onClick={() => this.adminToggle()}>
            {this.state.toggle}
          </button>
          <img
            src={require("../../img/myAvatar.png")}
            alt="broke img"
            className="avatarImg"
          />
        </div>
      </div>
    );
  }
}

export default Resume;
