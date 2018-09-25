import React, { Component } from "react";
import { RadialGauge } from "react-canvas-gauges";
import "./Guages.css";

class Guages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="gauges">
          <div className="gauge">
            <RadialGauge
              title="Javascript"
              colorPlate="black"
              colorTitle="white"
              colorNeedle="white"
              colorNeedleEnd="white"
              colorBorderOuter="transparent"
              colorBorderOuterEnd="transparent"
              value={95}
              minValue={0}
              maxValue={100}
              minorTicks={2}
            />
            <p className="description">Javascript</p>
          </div>
          <div className="gauge">
            <RadialGauge
              title="ReactJS"
              colorTitle="white"
              colorPlate="black"
              colorNeedle="white"
              colorNeedleEnd="white"
              colorBorderOuter="transparent"
              colorBorderOuterEnd="transparent"
              value={92}
              minValue={0}
              maxValue={100}
              minorTicks={2}
            />
            <p className="description">ReactJS</p>
          </div>
          <div className="gauge">
            <RadialGauge
              title="CSS"
              colorTitle="white"
              colorPlate="black"
              colorNeedle="white"
              colorNeedleEnd="white"
              colorBorderOuter="transparent"
              colorBorderOuterEnd="transparent"
              value={90}
              minValue={0}
              maxValue={100}
              minorTicks={2}
            />
            <p className="description">CSS</p>
          </div>
          <div className="gauge">
            <RadialGauge
              title="Node"
              colorTitle="white"
              colorPlate="black"
              colorNeedle="white"
              colorNeedleEnd="white"
              colorBorderOuter="transparent"
              colorBorderOuterEnd="transparent"
              value={90}
              minValue={0}
              maxValue={100}
              minorTicks={2}
            />
            <p className="description">Node</p>
          </div>
          <div className="gauge">
            <RadialGauge
              title="Python"
              colorTitle="white"
              colorPlate="black"
              colorNeedle="white"
              colorNeedleEnd="white"
              colorBorderOuter="transparent"
              colorBorderOuterEnd="transparent"
              value={85}
              minValue={0}
              maxValue={100}
              minorTicks={2}
            />
            <p className="description">Python</p>
          </div>
          <div className="gauge">
            <RadialGauge
              title="C++"
              colorTitle="white"
              colorPlate="black"
              colorNeedle="white"
              colorNeedleEnd="white"
              colorBorderOuter="transparent"
              colorBorderOuterEnd="transparent"
              value={85}
              minValue={0}
              maxValue={100}
              minorTicks={2}
            />
            <p className="description">C++</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Guages;
