import React, { Component } from "react";
import "./Resume.css";
import Login from "./Login/Login";
import Guages from "./Guages/Guages";
import Intro from "./Intro/Intro";
import Form from "./Form/Form";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = { showLogin: false, toggle: "Admin", toggleView: "intro" };
    this.adminToggle = this.adminToggle.bind(this);
    this.displayToggle = this.displayToggle.bind(this);
    this.setView = this.setView.bind(this);
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

  displayToggle = () => {
    if (this.state.toggleView === "gauges") {
      return <Guages />;
    } else if (this.state.toggleView === "intro") {
      return <Intro />;
    }
  };

  setView = view => {
    if (view === "gauges") {
      this.setState({ toggleView: "gauges" });
      document.getElementsByClassName("abtBtn")[0].style.backgroundColor =
        "white";
      document.getElementsByClassName("abtBtn")[0].style.color = "black";

      document.getElementsByClassName("skillsBtn")[0].style.backgroundColor =
        "black";
      document.getElementsByClassName("skillsBtn")[0].style.color = "white";
    } else if (view === "intro") {
      this.setState({ toggleView: "intro" });
      document.getElementsByClassName("abtBtn")[0].style.backgroundColor =
        "black";
      document.getElementsByClassName("abtBtn")[0].style.color = "white";

      document.getElementsByClassName("skillsBtn")[0].style.backgroundColor =
        "white";
      document.getElementsByClassName("skillsBtn")[0].style.color = "black";
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
                <button
                  onClick={() => this.setView("intro")}
                  className="abtBtn"
                >
                  About
                </button>
                <button
                  onClick={() => this.setView("gauges")}
                  className="skillsBtn"
                >
                  Skills
                </button>
              </div>
            </div>
            {this.displayToggle()}
          </div>
          <Form />
        </div>
      </div>
    );
  }
}

export default Resume;

// class Resume extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { display: 'intro' };
//     this.createGuages = this.createGuages.bind(this);
//   }
//   toggleDisplay = () => {
//     if(this.state.display === 'gauges') {
//       return <Guages />;
//     } else (this.state === 'intro') {
//       return <Intro />;
//     }
//   };

// render() {
//   return (
//     <div className="container">
//       {this.toggleDisplay}
//     </div>
//     );
//   }
// }
