import React from "react";
import ReactDOM from "react-dom";

import Theme from "components/theme";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
);
