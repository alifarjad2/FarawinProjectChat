import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Chat from "./Chat";

export default function FormAuth() {
  const [formType, setFormType] = useState("Login");

  const switchForm = (val) => {
    setFormType(val);
  };

  // return formType === "Login" ? (
  //   <Login changeForm={switchForm} />
  // ) : (
  //   <Register changeForm={switchForm} />
  // );
  if (formType === "Login") {
    return <Login changeForm={switchForm} />;
  }
  if (formType === "Register") {
    return <Register changeForm={switchForm} />;
  }
  if (formType === "Chat") {
    return <Chat changeForm={switchForm} />;
  }
}
