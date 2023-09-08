import React from "react";
import ReactDOM from "react-dom/client";
import FormAuthComponent from "./FormAuth";
import { Chat } from "./Chat";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormAuthComponent />
    {/* {( !localStorage.token ? <FormAuthComponent /> : <Chat/>)} */}
  </React.StrictMode>
);
