import React, { useState } from "react";
import farawin from "farawin";


function RegisterPage() {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstLoadNumber, setFirstLoadNumber] = useState(true);
  const [firstLoadPassword, setFirstLoadPassword] = useState(true);
  const [firstLoadRepeatPassword, setFirstLoadRepeatPassword] = useState(true);
  
  function numberValidation() {
    if (farawin.mobileRegex.test(number)) return true;
    return false;
  }
  function passwordValidation() {
    if (password.length < 8) return false;
    return true;
  }
  function repeatPasswordValidation() {
    if (password != repeatPassword) return false;
    return true;
  }
  return (
    <>
      <header className=" w-full h-fit text-3xl font-bold mb-8 mt-12">
        Register
      </header>
      <div id="divMobile" className="text-left">
        <label htmlFor="Mobile"> Mobile </label>
        <span
          className={
            firstLoadNumber
              ? "hidden"
              : numberValidation()
              ? "hidden"
              : "ml-40 text-red-600"
          }
        >
          {" "}
          wrong!{" "}
        </span>
        <input
          id="Mobile"
          type="tell"
          className="block w-full mb-4 mt-2 p-2 border-b-2 border-t-zinc-800 focus:outline-0"
          placeholder="Type your number"
          onInput={(event) => {
            setFirstLoadNumber(false);
            setNumber(event.target.value);
          }}
        />
      </div>
      <div id="divPassword" className="text-left">
        <label htmlFor="password"> Password </label>
        <span
          className={
            firstLoadPassword
              ? "hidden"
              : passwordValidation()
              ? "hidden"
              : "ml-36 text-red-600"
          }
        >
          {" "}
          wrong!{" "}
        </span>
        <input
          id="password"
          type="password"
          className="block w-full mb-4 mt-2 p-2 border-b-2 border-t-zinc-800 focus:outline-0"
          placeholder="Type your password"
          onInput={(event) => {
            setFirstLoadPassword(false);
            setPassword(event.target.value);
          }}
        />
      </div>
      <div id="divRepeatPassword" className="text-left">
        <label htmlFor="repeatPassword"> Repeat Password </label>
        <span
          className={
            firstLoadRepeatPassword
              ? "hidden"
              : repeatPasswordValidation()
              ? "hidden"
              : "ml-[93px] text-red-600"
          }
        >
          {" "}
          wrong!{" "}
        </span>
        <input
          id="repeatPassword"
          type="text"
          className="block w-full mt-2 p-2 border-b-2 border-t-zinc-800 focus:outline-0"
          placeholder="Type your password again"
          onInput={(event) => {
            setFirstLoadRepeatPassword(false);
            setRepeatPassword(event.target.value);
          }}
        />
      </div>
      <button
        type="submite"
        className="w-full mt-6 p-2 text-white rounded-full"
        style={{
          background:
            "-webkit-linear-gradient(right,#00dbde,#fc00ff,#00dbde,#fc00ff",
        }}
        onClick={()=>{
          if(passwordValidation() && numberValidation() && repeatPasswordValidation()){
            farawin.testRegister(number,password,"Nafise Charmchi",(res)=>{
              alert(res.message);
            })
          }
        }}
      >
        REGISTER
      </button>
    </>
  );
}
// RegisterPage();
export default RegisterPage;
