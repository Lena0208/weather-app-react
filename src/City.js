import React, { useState } from "react";
import "./City.css";
import axios from "axios";

export default function City() {
  let [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="col-6" id="cityDate">
        <div id="actual-city">{weatherData.city}</div>
        <br />
        <span id="blockDate">
          <span id="current-day">Friday </span>
          <span id="current-time">16:00</span>,
          <span id="description"> {weatherData.description}</span>
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
    let city = "London";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
