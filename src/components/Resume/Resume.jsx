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
                colorNeedle="white"
                colorNeedleEnd="white"
                colorBorderOuter="red"
                colorBorderOuterEnd="purple"
                value={92}
                minValue={0}
                maxValue={100}
                majorTicks={[
                  "0",
                  "15",
                  "30",
                  "40",
                  "50",
                  "60",
                  "70",
                  "80",
                  "90",
                  "100"
                ]}
                minorTicks={2}
              />
              <p className="description">Javascript</p>
            </div>
            <div className="gauge">
              <RadialGauge
                title="Node"
                colorPlate="black"
                colorNeedle="white"
                colorNeedleEnd="white"
                colorBorderOuter="red"
                colorBorderOuterEnd="purple"
                value={85}
                minValue={0}
                maxValue={100}
                majorTicks={[
                  "0",
                  "15",
                  "30",
                  "40",
                  "50",
                  "60",
                  "70",
                  "80",
                  "90",
                  "100"
                ]}
                minorTicks={2}
              />
              <p className="description">Node</p>
            </div>
            <div className="gauge">
              <RadialGauge
                title="ReactJS"
                colorPlate="black"
                colorNeedle="white"
                colorNeedleEnd="white"
                colorBorderOuter="red"
                colorBorderOuterEnd="purple"
                value={90}
                minValue={0}
                maxValue={100}
                majorTicks={[
                  "0",
                  "15",
                  "30",
                  "40",
                  "50",
                  "60",
                  "70",
                  "80",
                  "90",
                  "100"
                ]}
                minorTicks={2}
              />
              <p className="description">ReactJS</p>
            </div>
            <div className="gauge">
              <RadialGauge
                title="Python"
                colorPlate="black"
                colorNeedle="white"
                colorNeedleEnd="white"
                colorBorderOuter="red"
                colorBorderOuterEnd="purple"
                value={80}
                minValue={0}
                maxValue={100}
                majorTicks={[
                  "0",
                  "15",
                  "30",
                  "40",
                  "50",
                  "60",
                  "70",
                  "80",
                  "90",
                  "100"
                ]}
                minorTicks={2}
              />
              <p className="description">Python</p>
            </div>
            <div className="gauge">
              <RadialGauge
                title="CSS"
                colorPlate="black"
                colorNeedle="white"
                colorNeedleEnd="white"
                colorBorderOuter="red"
                colorBorderOuterEnd="purple"
                value={85}
                minValue={0}
                maxValue={100}
                majorTicks={[
                  "0",
                  "15",
                  "30",
                  "40",
                  "50",
                  "60",
                  "70",
                  "80",
                  "90",
                  "100"
                ]}
                minorTicks={2}
              />
              <p className="description">CSS</p>
            </div>
            <div className="gauge">
              <RadialGauge
                title="C++"
                colorPlate="black"
                colorNeedle="white"
                colorNeedleEnd="white"
                colorBorderOuter="red"
                colorBorderOuterEnd="purple"
                value={85}
                minValue={0}
                maxValue={100}
                majorTicks={[
                  "0",
                  "15",
                  "30",
                  "40",
                  "50",
                  "60",
                  "70",
                  "80",
                  "90",
                  "100"
                ]}
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
