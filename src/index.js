import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import Temperature from "./Temperature";
import City from "./City";
import Forecast from "./Forecast";

import "./styles.css";

function App() {
  return (
    <div className="container">
      <Search />
      <div class="row justify-content-between">
        <Temperature />
        <City />
      </div>
      <Forecast />
      <footer>This project was coded by Lena</footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
