import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  // this connects to public/index.html div id="root"
  document.getElementById("root")
);
