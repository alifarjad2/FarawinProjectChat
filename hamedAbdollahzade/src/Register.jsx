import { useState } from "react";
import farawin from "farawin";

const Register = ({onFormSwitch}) => {

  const [userName,setUserName] = useState('')
  const[password,setPassword] =  useState('')
  const[flName,setflName] = useState('')
  
  const handlerSubmit = () => {
    alert("test register");
  }

  return (
    <form className="h-full w-full flex flex-col px-5" onSubmit={handlerSubmit}>
      <h1 className="flex justify-center text-4xl m-8 font-bold"> Register </h1>

      <label className="text-xs mt-6" htmlFor="username">
        Username :
      </label >
      <input
        type="tel"
        value={userName}
        placeholder="Type your username"
        id="username"
        className="border-b-2 outline-none"
      />

      <label className="text-xs mt-6" htmlFor="password1">
        Password :
      </label>
      <input
        type="password"
        value={password}
        placeholder="Type your password"
        id="password1"
        className="border-b-2 outline-none"
      />

      <label className="text-xs mt-6" htmlFor="flName">
        name :
      </label>
      <input
        type="password"
        value={flName}
        placeholder="First name Last name"
        id="flName"
        className="border-b-2 outline-none"
      />

      <button
        className="border mx-2 h-8 w-4/5 btn rounded-full  mt-8 self-center "
        onClick={() => {
        const resualt =farawin.testRegister("09333536546","12345678", "hamedAbdollahzade");
        alert (resualt.message)
      }}
      >
        register
      </button>

      <button onClick={() => onFormSwitch("login")} className=" text-xs mt-8">
        Or Sign In Using <br /> <b>SIGN In</b>{" "}
      </button>
    </form>
  );
};

export default Register;
