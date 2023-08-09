import farawin from "farawin";
import { useState } from "react";

const Login = ({ onFormSwitch }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let validate = false;
  if (userName && password) {
    validate = true;
  }

  const updateStatepass = (e) => {
    setPassword(e);
  };

  const updateStateUser = (e) => {
    setUserName(e);
  };

  const validateLogin = async () => {
    const EnMobile = farawin.toEnDigit(userName);
    const mobileRegex = farawin.mobileRegex;

    if (mobileRegex.test(EnMobile)) {
      await farawin.testLogin(EnMobile, password, (res) => alert(res.message));
    }
  };

  return (
    <form className="h-full w-full flex flex-col px-5 ">
      <h1 className="flex justify-center text-4xl m-8 font-bold"> Login </h1>

      <label className="text-xs mt-6" htmlFor="username">
        Username
      </label>
      <input
        onChange={(e) => updateStateUser(e.target.value)}
        type="tel"
        value={userName}
        placeholder="Type your mobile number"
        id="username"
        className="border-b-2 outline-none"
      />

      <label className="text-xs mt-6" htmlFor="password">
        Password
      </label>
      <input
        onChange={(e) => updateStatepass(e.target.value)}
        type="password"
        value={password}
        placeholder="Type your password"
        id="password"
        className="border-b-2 outline-none"
      />
      <button
        type="button"
        onClick={() => {
          alert("این امکان هنوز پیاده سازی نشده است");
        }}
        className="flex justify-end mt-4"
      >
        Forgot passwoord ?
      </button>

      <button
        disabled={validate ? false : true}
        className="text-white text-sm border mx-2 h-8 w-4/5 btn rounded-full  mt-9 self-center "
        type="button"
        onClick={validateLogin}
      >
        LOGIN
      </button>

      <button
        className="mt-14 text-xs"
        onClick={() => onFormSwitch("Register")}
        type="button"
      >
        Or Sign Up Using <br /> <b>SIGN UP</b>{" "}
      </button>
    </form>
  );
};

export default Login;
