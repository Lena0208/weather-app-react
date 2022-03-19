import React, { useState } from "react";
import "./Search.css";

export default function Search(props) {
  let [setCity] = useState(props.defaultCity);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  return (
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
  );
}
