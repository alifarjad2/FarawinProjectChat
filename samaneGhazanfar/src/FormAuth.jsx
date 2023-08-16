import farawin from "farawin";
import LoginForm from "./login";
import RegisterForm from "./register";
import { useState } from "react";
import { Messenger } from "./messenger";


export default function FormAuth() {
//   const [stateLogin , setStateLogin] = useState("login");

//  const changePage = (val) => {
//   setStateLogin(val)
//  }

  return (
   <div>
    <Messenger/>
    {/* {stateLogin === 'login' ? <LoginForm ch1 = {changePage} /> : <RegisterForm ch2 = {changePage}  />} */}
   </div>

  )

 }


