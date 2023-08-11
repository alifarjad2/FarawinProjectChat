import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function FormAuth() {
  const [formType, setFormType] = useState("Login");

  const switchForm = (val) => {
    setFormType(val);
  };

  return formType === "Login" ? (
    <Login changeForm={switchForm} />
  ) : (
    <Register changeForm={switchForm} />
  );
}
