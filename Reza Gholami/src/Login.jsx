import farawin from "farawin";
import { useState } from "react";
///////////////////////////////////////////////////////////////
const Login = ({ changeForm }) => {
  const [userName, setUserName] = useState(""),
    [password, setPassword] = useState(""),
    [validatePass, setValidatePass] = useState(""),
    [validateUserName, setValidateUserName] = useState(""),
    updateUserName = (updateUserName) => {
      setUserName(updateUserName);
    },
    updatePassword = (updatePassword) => {
      setPassword(updatePassword);
    },
    validateName = (value) => {
      /^09([0-9]{9})$/.test(value)
        ? setValidateUserName("The username is correct")
        : setValidateUserName(
            "The mobile number starts with 09 and has 11 digits"
          );
    },
    validatePassword = (passLength) => {
      passLength < 8
        ? setValidatePass("Enter an 8-digit password")
        : setValidatePass("The password is correct");
    };
  ///////////////////////////////////////////////////////////////
  return (
    <>
      <form className="flex flex-col h-full w-full px-7 py-4">
        <h1 className="text-center my-3 font-bold text-2xl">Login</h1>
        <label className="text-xs font-bold mt-12" htmlFor="username">Username</label>
        <input
          onBlur={(e) => validateName(String(e.target.value))}
          onChange={(e) => updateUserName(e.target.value)}
          type="text"
          value={userName}
          placeholder="0912345678"
          id="username"
          className="focus:border-b-slate-400 transition-all text-base mt-2  border-b-2 outline-none"
        />
        <span className="text-xs font-bold mt-1 text-gray-500">{validateUserName}</span>
        <label className="text-xs font-bold mt-12" htmlFor="password">Password</label>
        <input
          onBlur={(e) => validatePassword(e.target.value.length)}
          onChange={(e) => updatePassword(e.target.value)}
          type="password"
          value={password}
          placeholder="Type your password"
          id="password"
          className="focus:border-b-slate-400 transition-all text-base mt-2  border-b-2 outline-none"
        />
        <span className="text-xs font-bold mt-1 text-gray-500">{validatePass}</span>
        <button
          onClick={() => {
            alert("این امکان پیاده سازی نشده است");
          }}
          className="hover:text-[#a64bf4] transition-all flex ml-auto mt-7"
        >
          Forget password?
        </button>
        <button
          className="w-full text-white text-sm py-2 mt-5 styleButton rounded-full self-center "
          type="submit"
          onClick={() => {
            farawin.testLogin(`${userName}`, `${password}`, (response) => {
              alert(response.message);
            });
          }}
        >
          LOGIN
        </button>
        <span className="text-sm text-center mt-5">Or Sign Up Using</span>
        <button
          className="hover:text-[#a64bf4] transition-all mt-3 text-xs font-bold"
          onClick={() => changeForm("Register")}
        >
          SIGN UP
        </button>
      </form>
    </>
  );
};
export default Login;
