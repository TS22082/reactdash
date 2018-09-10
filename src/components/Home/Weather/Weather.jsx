import React, { Component } from "react";
import axios from "axios";
import "./Weather.css";
import WEATHER_API_KEY from "../../../weatherPrivate";

const apiCall =
  "https://api.openweathermap.org/data/2.5/weather?zip=94610,us&units=imperial&APPID=";

class Weather extends Component {
  state = {};
  componentDidMount() {
    axios.get(apiCall + WEATHER_API_KEY).then(res => {
      console.log(res.data);
      this.setState({
        temp: res.data.main.temp,
        tempMin: res.data.main.temp_min,
        tempMax: res.data.main.temp_max,
        humidity: res.data.main.humidity
      });
    });
  }
  render() {
    return (
      <div className="WeatherContainer">
        <div className="OutsideWeather">
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
      </div>
    );
  }
}

export default Weather;
