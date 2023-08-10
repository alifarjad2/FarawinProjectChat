import { useState } from "react";

function Register({ props }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const usernameHandler = (val) => {
    setUsername(val);
  };
  const passwordHandler = (val) => {
    setPassword(val);
  };
  const repeatPasswordHandler = (val) => {
    setRepeatPassword(val);
  };

  const validation = async () => {
    const usernameToEn = farawin.toEnDigit(username);
    const usernameValidation = farawin.mobileRegex;
    if (repeatPassword !== password) {
      alert("The password and password repeat don't match");
    } else if (usernameValidation.test(usernameToEn)) {
      await farawin.testRegister(usernameToEn, password, "User", (res) => {
        alert(res.message);
        if (res.code == 200) {
          setUsername("");
          setPassword("");
          setRepeatPassword("");
        }
      });
    }
  };

  return (
    <div className="h-full flex ">
      <form className=" w-3/12 h-5/6 bg-white m-auto rounded-lg  pt-10 flex flex-col p-8 gap-14 ">
        <h1 className="text-center text-5xl font-bold ">Register</h1>
        <div>
          <label className="text-sm" htmlFor="username">
            Username
          </label>
          <input
            onChange={(e) => {
              usernameHandler(e.target.value);
            }}
            value={username}
            id="username"
            type="text"
            placeholder="Type your Username"
            className="w-full  focus:outline-none border-b-2"
          />
        </div>
        <div>
          <label className="text-sm" htmlFor="password">
            Password
          </label>
          <input
            onChange={(e) => {
              passwordHandler(e.target.value);
            }}
            value={password}
            id="password"
            type="password"
            placeholder="Type your password"
            className="w-full  focus:outline-none border-b-2"
          />
        </div>
        <div>
          <label className="text-sm" htmlFor="repeatPassword">
            Repeat Password
          </label>
          <input
            onChange={(e) => {
              repeatPasswordHandler(e.target.value);
            }}
            value={repeatPassword}
            id="repeatPassword"
            type="password"
            placeholder="Repeat your password"
            className="w-full  focus:outline-none border-b-2"
          />
        </div>

        <button
          onClick={validation}
          type="button"
          style={{
            background: `-webkit-linear-gradient(right,#00dbde,#fc00ff,#00dbde,#fc00ff)`,
          }}
          className="w-full h-11  rounded-3xl text-white"
        >
          SIGN UP
        </button>
        <div className="text-center">
          <p className="text-gray-500">Or Login Using</p>
          <button
            type="button"
            onClick={() => {
              props("Login");
            }}
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}
export default Register;
