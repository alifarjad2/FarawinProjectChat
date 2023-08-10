import farawin from "farawin";
import { useState } from "react";

function Login({ props }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //farawin.toEnDigit(username);
  const usernameHandler = (val) => {
    setUsername(val);
    //console.log(username);
  };

  const passwordHandler = (val) => {
    setPassword(val);
  };

  const validateLogin = async () => {
    const usernameToEn = farawin.toEnDigit(username);
    const usernameValidation = farawin.mobileRegex;

    if (usernameValidation.test(usernameToEn)) {
      await farawin.testLogin(usernameToEn, password, (res) =>
        console.log(res)
      );
    }
  };

  return (
    <div className="h-full flex">
      <form className=" w-3/12 h-5/6 bg-white m-auto rounded-lg  pt-10 flex flex-col p-8 gap-14  overflow-hidden">
        <h1 className="text-center text-5xl font-bold ">Login</h1>
        <div>
          <label className="text-sm" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            onChange={(e) => {
              usernameHandler(e.target.value);
            }}
            value={username}
            placeholder="Type your Username"
            className="w-full  focus:outline-none border-b-2"
          />
        </div>
        <div>
          <label className="text-sm " htmlFor="password">
            Password
          </label>
          <input
            onChange={(e) => {
              passwordHandler(e.target.value);
            }}
            value={password}
            type="password"
            placeholder="Type your password"
            className="w-full  focus:outline-none border-b-2"
            id="password"
          />
          <button
            type="button"
            onClick={() => {
              alert("این امکان هنوز پیاده سازی نشده است");
            }}
            className="w-fit h-fit mt-4 max-lg:m-auto max-lg:mt-3"
          >
            Forget password?
          </button>
        </div>
        <button
          onClick={validateLogin}
          type="button"
          style={{
            background: `-webkit-linear-gradient(right,#00dbde,#fc00ff,#00dbde,#fc00ff)`,
          }}
          className="w-full h-10  rounded-3xl text-white"
        >
          LOGIN
        </button>
        <div className="text-center">
          <p className="text-gray-500">Or Sing Up Using</p>
          <button
            type="button"
            onClick={() => {
              props("Register");
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
