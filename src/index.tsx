import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ApiProvider } from "./context/api";

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider>
      <App />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
