import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div class="col-6" id="temp">
      <i class="fas fa-cloud-sun cloudy"></i>
      <span id="actualTemp">5</span>
      <sup id="celcius">
        <span>°C</span>
      </sup>
    </div>
  );
}
