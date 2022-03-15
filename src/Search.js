import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form id="search">
      <div className="row g-3">
        <div className="col-sm-7">
          <input
            type="text"
            class="form-control search"
            placeholder="Enter your City"
            aria-label="City"
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
