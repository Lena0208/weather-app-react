import React from "react";
import "./City.css";

export default function City() {
  return (
    <div className="col-6" id="cityDate">
      <div id="actual-city">Freiburg</div>
      <br />
      <span id="blockDate">
        <span id="current-day">Friday </span>
        <span id="current-time">16:00</span>,
        <span id="description"> Clouds</span>
        <br />
        Humidity: <span class="humidity"></span>
        <span id="percent">61%</span>, Wind:
        <span className="wind"> 10</span>
        <span id="wind-speed">km/h</span>
      </span>
    </div>
  );
}
