import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="col-6" id="temp">
      <i className="fas fa-cloud-sun cloudy"></i>
      <span id="actualTemp">5</span>
      <sup id="celcius">
        <span>°C</span>
      </sup>
    </div>
  );
}
