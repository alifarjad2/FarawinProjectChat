import farawin from "farawin";
import LoginForm from "./login";
import RegisterForm from "./register";
import { useState } from "react";

export default function FormAuth() {
  const [stateLogin , setStateLogin] = useState("login");

 const changePage = (val) => {
  setStateLogin(val)
 }

  return (
   <div>
    {stateLogin === 'login' ? <LoginForm ch1 = {changePage} /> : <RegisterForm ch2 = {changePage}  />}
   </div>

  )

 }


