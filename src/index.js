import React from "react";
import ReactDOM from "react-dom";

import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import "./styles/index.css";
import App from "./App";
//import FontAwesome from "./FontAwesome";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<FontAwesome />, document.getElementById("root"));

registerServiceWorker();
