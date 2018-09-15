import React, { Component } from "react";
import axios from "axios";
import "./Weather.css";
import WEATHER_API_KEY from "../../../weatherPrivate";

const API =
  "https://api.openweathermap.org/data/2.5/weather?zip=94610,us&units=imperial&APPID=";

class Weather extends Component {
  constructor() {
    super();
    this.state = {};
    this.getWeather = this.getWeather.bind(this);
  }
  getWeather = () => {
    axios.get(API + WEATHER_API_KEY).then(response => {
      const data = response.data.main;
      console.log(data);
      this.setState({
        temp: data.temp,
        tempMin: data.temp_min,
        tempMax: data.temp_max,
        humidity: data.humidity
      });
    });
    setTimeout(this.getWeather, 5000);
  };

  componentDidMount() {
    this.getWeather();
  }

  render() {
    return (
      <div className="OutsideWeather">
        <h3>Weather: Oakland CA</h3>
        <p>
          Temp: {this.state.temp}
          °F
        </p>
        <p>
          Temp Min: {this.state.tempMin}
          °F
        </p>
        <p>
          Temp Max: {this.state.tempMax}
          °F
        </p>
        <p>Humidity: {this.state.humidity}%</p>
      </div>
    );
  }
}

export default Weather;
