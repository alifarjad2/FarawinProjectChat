// import farawin from "farawin";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function FormAuth() {
  function switchForm(val) {
    setProducts(val);
  }
  const [products, setProducts] = useState("Login");
  return products === "Login" ? (
    <Login props={switchForm} />
  ) : (
    <Register props={switchForm} />
  );
}
