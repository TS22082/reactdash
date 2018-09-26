import React, { Component } from "react";
import "./Resume.css";
import Login from "./Login/Login";
import Guages from "./Guages/Guages";
import Form from "./Form/Form";

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
        <div className="mainContainer">
          <div className="leftSide">
            <div className="resumeNav">
              <div className="navBtns">
                <button>About</button>
                <button>Skills</button>
              </div>
            </div>
            <Guages />
          </div>
          <Form />
        </div>
      </div>
    );
  }
}

export default Resume;
