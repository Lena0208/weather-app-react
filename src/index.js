import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import Temperature from "./Temperature";
import City from "./City";
import Forecast from "./Forecast";

import "./styles.css";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Search />
      <div className="row justify-content-between">
        <Temperature />
        <City />
      </div>
      <Forecast />
      <footer>
        <a
          href="https://github.com/Lena0208/weather-app-react"
          target="_blank"
          rel="noreferrer"
          className="linkProject"
        >
          This project
        </a>{" "}
        was coded by{" "}
        <a
          href="https://www.linkedin.com/in/lena-berger-316849197/"
          target="_blank"
          rel="noreferrer"
          className="linkMe"
        >
          Lena
        </a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
