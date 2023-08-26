import React from "react";
import ReactDOM from "react-dom/client";
import FormAuthComponent from "./FormAuth";
import "./index.css";
import { Messenger } from "./messenger";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  {localStorage.token ? <Messenger/> :  <FormAuthComponent />}
  </React.StrictMode>
);
