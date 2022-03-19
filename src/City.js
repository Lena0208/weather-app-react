import React, { useState } from "react";
import "./City.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function City(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="col-6" id="cityDate">
        <div id="actual-city">{weatherData.city}</div>
        <br />
        <span id="blockDate">
          <span id="current-date">
            <FormattedDate date={weatherData.date} />
          </span>
          <span className="text-capitalize" id="description">
            {" "}
            {weatherData.description}
          </span>
          <br />
          Humidity: <span class="humidity">{weatherData.humidity}</span>
          <span id="percent"> %</span>, Wind:
          <span className="wind"> {weatherData.wind}</span>
          <span id="wind-speed"> km/h</span>
        </span>
      </div>
    );
  } else {
    let apiKey = "7837f66493d567007e68c9221e2ef6ed";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
