import React, { Component } from "react";
import "./Resume.css";
import Login from "./Login/Login";
import { RadialGauge } from "react-canvas-gauges";
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
          <div className="gauges">
            <div className="gauge">
              <RadialGauge
                title="Javascript"
                colorPlate="black"
                colorTitle="white"
                colorNeedle="white"
                colorNeedleEnd="white"
                colorBorderOuter="transparent"
                colorBorderInner="transparent"
                colorBorderOuterEnd="transparent"
                value={92}
                minValue={0}
                maxValue={100}
                minorTicks={2}
              />
              <p className="description">Javascript</p>
            </div>
            <div className="gauge">
              <RadialGauge
                title="Node"
                colorTitle="white"
                colorPlate="black"
                colorNeedle="white"
                colorNeedleEnd="white"
                colorBorderOuter="transparent"
                colorBorderInner="transparent"
                value={85}
                minValue={0}
                maxValue={100}
                minorTicks={2}
              />
              <p className="description">Node</p>
            </div>
            <div className="gauge">
              <RadialGauge
                title="ReactJS"
                colorTitle="white"
                colorPlate="black"
                colorNeedle="white"
                colorNeedleEnd="white"
                colorBorderOuter="transparent"
                colorBorderInner="transparent"
                value={90}
                minValue={0}
                maxValue={100}
                minorTicks={2}
              />
              <p className="description">ReactJS</p>
            </div>
            <div className="gauge">
              <RadialGauge
                title="Python"
                colorTitle="white"
                colorPlate="black"
                colorNeedle="white"
                colorNeedleEnd="white"
                colorBorderOuter="transparent"
                colorBorderInner="transparent"
                value={80}
                minValue={0}
                maxValue={100}
                minorTicks={2}
              />
              <p className="description">Python</p>
            </div>
            <div className="gauge">
              <RadialGauge
                title="CSS"
                colorTitle="white"
                colorPlate="black"
                colorNeedle="white"
                colorNeedleEnd="white"
                colorBorderOuter="transparent"
                colorBorderInner="transparent"
                value={85}
                minValue={0}
                maxValue={100}
                minorTicks={2}
              />
              <p className="description">CSS</p>
            </div>
            <div className="gauge">
              <RadialGauge
                title="C++"
                colorTitle="white"
                colorPlate="black"
                colorNeedle="white"
                colorNeedleEnd="white"
                colorBorderOuter="transparent"
                colorBorderInner="transparent"
                value={85}
                minValue={0}
                maxValue={100}
                minorTicks={2}
              />
              <p className="description">C++</p>
            </div>
          </div>
          <Form />
        </div>
      </div>
    );
  }
}

export default Resume;
