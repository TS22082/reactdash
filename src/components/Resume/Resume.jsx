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
      document.getElementsByClassName("nav")[0].style.height = "0px";
      this.setState({ toggle: "Admin" });
    } else {
      this.setState({ showLogin: false });
      document.getElementsByClassName("nav")[0].style.height = "100%";
      this.setState({ toggle: "close" });
    }
  };
  render() {
    return (
      <div className="resumeContainer">
        <div>
          <div className="nav">
            <p className="title">Admin Login:</p>
            <div className="loginForm">
              <Login />
            </div>
          </div>
          <button className="adminToggle" onClick={() => this.adminToggle()}>
            {this.state.toggle}
          </button>
        </div>
        <img
          src={require("../../img/myAvatar.png")}
          alt="broke img"
          className="avatarImg"
        />
      </div>
    );
  }
}

export default Resume;
