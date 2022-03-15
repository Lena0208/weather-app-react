import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row" id="next4days">
      <div className="col-3">
        Monday
        <br />
        <i className="fas fa-cloud-sun-rain sun-rain"></i>
        <br />
        8°C
      </div>
      <div className="col-3">
        Tuesday
        <br />
        <i className="fas fa-cloud-sun cloud-sun"></i>
        <br />
        10°C
      </div>
      <div className="col-3">
        Wednesday
        <br />
        <i className="fas fa-sun sun"></i>
        <br />
        12°C
      </div>
      <div className="col-3">
        Thursday
        <br />
        <i className="fas fa-sun sun2"></i>
        <br />
        14°C
      </div>
    </div>
  );
}
