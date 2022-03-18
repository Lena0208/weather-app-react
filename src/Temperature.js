import React, { useState } from "react";
import "./Temperature.css";
import axios from "axios";

export default function Temperature() {
  let [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      temperature: response.data.main.temp,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description,
    });
    setReady(true);
  }

  if (ready) {
    return (
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
    );
  } else {
    let apiKey = "7837f66493d567007e68c9221e2ef6ed";
    let city = "London";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
