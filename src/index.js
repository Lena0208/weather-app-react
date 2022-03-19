import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import Forecast from "./Forecast";
import "bootstrap/dist/css/bootstrap.css";

import "./styles.css";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Search defaultCity="Freiburg im Breisgau" />
      <div className="row justify-content-between"></div>
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
