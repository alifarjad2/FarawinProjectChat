import farawin from "farawin";
import { useState } from "react";
import { Register } from "./Register";
import { Login } from "./Login";
import { Chat } from "./Chat";

// 1- کاربر بتونه درست لاگین و رجیستر کنه
// ۲- کارکرد صحیح سناریو های گفته شده
export default function FormAuth() {
  const [currentForm, setCurrentForm] = useState("Login");
  const toggleForm = (value) => {
    setCurrentForm(value);
  };

  return (
    <>
      {currentForm === "Login" && <Login switchForm={toggleForm} />}
      {currentForm === "Register" && <Register switchForm={toggleForm} />}
      {currentForm === "Chat" && localStorage.username && <Chat />}
    </>
  );
}

{
  /* <button
        className="mx-2 w-10"
        onClick={() => {
          farawin.testLogin("09393013397", "12345678");
        }}
      >
        test login
      </button>

      <button
        className="mx-2 w-10"
        onClick={() => {
          farawin.testRegister("09393013397", "12345678", "Ali Farjad");
        }}
      >
        test register
      </button> */
}
