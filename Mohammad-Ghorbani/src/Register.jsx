import { useState } from "react";

function Register({ changeForm }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
  };

  const validation = async () => {
    const usernameToEn = farawin.toEnDigit(username);
    const usernameValidation = farawin.mobileRegex;

    if (usernameToEn.length < 11) {
      setMessage("Username must 11 characters long");
      return;
    }
    if (isNaN(usernameToEn)) {
      setMessage("Username should only contain numbers");
      return;
    }
    if (repeatPassword !== password) {
      setMessage("The password and password repeat don't match");
      return;
    }

    if (usernameValidation.test(usernameToEn)) {
      let result = {};
      result = await farawin.testRegister(usernameToEn, password, "User");
      setMessage(result.message);
      if (result.code == 200) {
        setUsername("");
        setPassword("");
        setRepeatPassword("");
        return;
      }
    }
  };

  return (
    <div className="relative h-full flex ">
      <div className="absolute top-4 right-1 left-1 text-center font-bold text-white text-2xl">
        <p>{message}</p>
      </div>

      <form className=" w-3/12 h-5/6 bg-white m-auto rounded-lg  pt-10 flex flex-col p-8 gap-11 ">
        <h1 className="text-center text-5xl font-bold ">Register</h1>
        <div>
          <label className="text-sm" htmlFor="username">
            Username
          </label>
          <input
            onChange={handleUsernameChange}
            value={username}
            id="username"
            type="text"
            placeholder="Type your Username"
            className="w-full  h-10 outline-none border-b-2"
          />
        </div>
        <div>
          <label className="text-sm" htmlFor="password">
            Password
          </label>
          <input
            onChange={handlePasswordChange}
            value={password}
            id="password"
            type="password"
            placeholder="Type your password"
            className="w-full  h-10 outline-none border-b-2"
          />
        </div>
        <div>
          <label className="text-sm" htmlFor="repeatPassword">
            Repeat Password
          </label>
          <input
            onChange={handleRepeatPasswordChange}
            value={repeatPassword}
            id="repeatPassword"
            type="password"
            placeholder="Repeat your password"
            className="w-full h-10 outline-none border-b-2"
          />
        </div>

        <button
          onClick={validation}
          type="button"
          style={{
            background: `-webkit-linear-gradient(right,#00dbde,#fc00ff,#00dbde,#fc00ff)`,
          }}
          className="w-full h-10 rounded-3xl text-white transition ease-in-out delay-150  hover:scale-110"
        >
          SIGN UP
        </button>
        <div className="text-center">
          <p className="text-gray-500">Or Login Using</p>
          <button
            type="button"
            onClick={() => {
              changeForm("Login");
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
