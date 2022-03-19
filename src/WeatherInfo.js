import React, { useState } from "react";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function WeatherInfo(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="row">
        <div className="col-6" id="temp">
          <img
            src={weatherData.icon}
            alt={weatherData.description}
            className="icon"
          />
          <span id="actualTemp">{Math.round(weatherData.temperature)}</span>
          <sup id="celcius">
            <span>°C</span>
          </sup>
        </div>
        <div className="col-6" id="cityDate">
          <div id="actual-city" defaultCity="Freiburg im Breisgau">
            {weatherData.city}
          </div>
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
      </div>
    );
  } else {
    let apiKey = "7837f66493d567007e68c9221e2ef6ed";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }
}
