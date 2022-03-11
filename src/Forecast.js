import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div class="row" id="next4days">
      <div class="col-3">
        Monday
        <br />
        <i class="fas fa-cloud-sun-rain sun-rain"></i>
        <br />
        8°C
      </div>
      <div class="col-3">
        Tuesday
        <br />
        <i class="fas fa-cloud-sun cloud-sun"></i>
        <br />
        10°C
      </div>
      <div class="col-3">
        Wednesday
        <br />
        <i class="fas fa-sun sun"></i>
        <br />
        12°C
      </div>
      <div class="col-3">
        Thursday
        <br />
        <i class="fas fa-sun sun2"></i>
        <br />
        14°C
      </div>
    </div>
  );
}
