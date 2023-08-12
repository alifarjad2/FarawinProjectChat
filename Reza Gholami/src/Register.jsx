import farawin from "farawin";
import { useState } from "react";
/////////////////////////////////////////////////////
const Register = ({ changeForm }) => {
  const [userName, setUserName] = useState(""),
    [password, setPassword] = useState(""),
    [passwordRepeat, setPasswordRepeat] = useState(""),
    [name, setName] = useState(""),
    [validateUserName, setValidateUserName] = useState(""),
    [validatePass, setValidatePass] = useState(""),
    [validatePassRepeat, setValidatePassRepeat] = useState(""),
    updateUserName = (updateUserName) => {
      setUserName(updateUserName);
    },
    updatePassword = (updatePassword) => {
      setPassword(updatePassword);
    },
    updatePasswordRepeat = (updatePasswordRepeat) => {
      setPasswordRepeat(updatePasswordRepeat);
    },
    updateName = (updateName) => {
      setName(updateName);
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
    },
    validatePasswordRpt = (pass) => {
      pass == password
        ? setValidatePassRepeat("The repeat password  is correct")
        : setValidatePassRepeat("Password repetition does not match");
    };
  /////////////////////////////////////////////////////////
  return (
    <form className="flex flex-col h-full w-full px-7 py-4 ">
      <h1 className="text-center my-3 font-bold text-2xl"> Register </h1>
      <label className="text-xs font-bold mt-3" htmlFor="username">Username</label>
      <input
        onBlur={(e) => validateName(String(e.target.value))}
        onChange={(e) => updateUserName(e.target.value)}
        type="text"
        value={userName}
        placeholder="Type your username"
        id="username"
        className="focus:border-b-slate-400 transition-all text-base mt-1  border-b-2 outline-none"
      />
      <span className="text-xs font-bold mt-1 text-gray-500">{validateUserName}</span>
      <label className="text-xs font-bold mt-4" htmlFor="password">Password</label>
      <input
        onBlur={(e) => validatePassword(e.target.value.length)}
        onChange={(e) => updatePassword(e.target.value)}
        type="password"
        value={password}
        placeholder="Type your password"
        id="password"
        className="focus:border-b-slate-400 transition-all text-base mt-1  border-b-2 outline-none"
      />
      <span className="text-xs font-bold mt-1 text-gray-500">{validatePass}</span>
      <label className="text-xs font-bold mt-4" htmlFor="passwordRepeat">Password</label>
      <input
        onBlur={(e) => validatePasswordRpt(e.target.value)}
        onChange={(e) => updatePasswordRepeat(e.target.value)}
        type="password"
        value={passwordRepeat}
        placeholder="Type your repeat password"
        id="passwordRepeat"
        className="focus:border-b-slate-400 transition-all text-base mt-1  border-b-2 outline-none"
      />
      <span className="text-xs font-bold mt-1 text-gray-500">{validatePassRepeat}</span>
      <label className="text-xs font-bold mt-4" htmlFor="name">name</label>
      <input
        onChange={(e) => updateName(e.target.value)}
        type="text"
        value={name}
        placeholder="Your Name"
        id="name"
        className="focus:border-b-slate-400 transition-all text-base mt-1  border-b-2 outline-none"
      />
      <button
        className="w-full text-white text-sm py-2 mt-5 styleButton rounded-full self-center "
        onClick={() => {
          const result = farawin.testRegister(
            `${userName}`,
            `${password}`,
            `${name}`
          );
          alert(result.message);
        }}
      >
        REGISTER
      </button>
      <span className="text-sm text-center mt-4">Or Log in Using</span>
      <button
        onClick={() => changeForm("login")}
        className="hover:text-[#a64bf4] transition-all mt-3 text-xs font-bold"
      >
        LOGIN
      </button>
    </form>
  );
};

export default Register;
