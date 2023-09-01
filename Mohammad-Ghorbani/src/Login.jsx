import farawin from "farawin";
import React, { useState, useEffect } from "react";

function Login({ changeForm }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleValidation = async () => {
    const usernameToEn = farawin.toEnDigit(username);
    const usernameValidation = farawin.mobileRegex;

    if (usernameToEn.length < 11) {
      setMessage("Username must be 11 characters long");
      return;
    }
    if (isNaN(usernameToEn)) {
      setMessage("Username should only contain numbers");
      return;
    }

    if (usernameValidation.test(usernameToEn)) {
      const loginResult = await farawin.testLogin(usernameToEn, password);
      setMessage(loginResult.message);
      if (loginResult.code == 200 && localStorage.token) {
        localStorage.setItem("myUsername", username);
        changeForm("Chat");
        return;
      }
    }
  };

  return (
    <div className="relative h-full flex">
      {message && (
        <div className="absolute top-4 right-1 left-1 text-center font-bold text-white text-2xl">
          <p>{message}</p>
        </div>
      )}

      <form className="w-4/12 h-5/6 bg-white m-auto rounded-lg pt-10 flex flex-col p-8 gap-14 overflow-hidden max-lg:w-11/12 max-lg:h-fit ">
        <h1 className="text-center text-5xl font-bold">Login</h1>
        <div>
          <label className="text-sm" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            onChange={handleUsernameChange}
            value={username}
            placeholder="Type your Username"
            className="w-full h-10 outline-none border-b-2"
          />
        </div>
        <div>
          <label className="text-sm" htmlFor="password">
            Password
          </label>
          <input
            onChange={handlePasswordChange}
            value={password}
            type="password"
            placeholder="Type your password"
            className="w-full h-10 outline-none border-b-2"
            id="password"
          />
          <button
            type="button"
            onClick={() => {
              alert("This feature is not yet implemented");
            }}
            className="w-fit h-fit mt-4 max-lg:m-auto max-lg:mt-3"
          >
            Forgot password?
          </button>
        </div>
        <button
          onClick={handleValidation}
          disabled={!username || !password}
          type="button"
          style={{
            background: `-webkit-linear-gradient(right,#00dbde,#fc00ff,#00dbde,#fc00ff)`,
          }}
          className="w-full h-10 rounded-3xl text-white transition ease-in-out delay-150  hover:scale-110"
        >
          LOGIN
        </button>
        <div className="text-center">
          <p className="text-gray-500">Or Sign Up Using</p>
          <button
            type="button"
            onClick={() => {
              changeForm("Register");
            }}
          >
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
