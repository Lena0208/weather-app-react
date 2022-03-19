import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} id="search">
          <div className="row g-3">
            <div className="col-sm-7">
              <input
                type="text"
                class="form-control search"
                placeholder="Enter your City"
                aria-label="City"
                autoFocus="on"
                onChange={handleCity}
                id="search-city"
              />
            </div>
            <div id="submit" class="col-sm">
              <input
                type="submit"
                className="form-control submit"
                value="Search"
                aria-label="search"
              />
            </div>
            <div id="currentBtn" class="col-sm">
              <input
                type="button"
                className="form-control submit"
                value="📍 Current"
                aria-label="current"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    let apiKey = "7837f66493d567007e68c9221e2ef6ed";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading..";
  }
}
