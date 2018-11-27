import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
//import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
//import { faYoutube } from "@fortawesome/free-brands-svg-icons";

//import { loadCSS } from "fg-loadcss/src/loadCSS";
/*componentDidMount() {
loadCSS(
    "https://use.fontawesome.com/releases/v5.5.0/css/all.css",
    document.querySelector("#insertion-point-jss")
);
}*/

import "./styles/index.css";
import App from "./App";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
