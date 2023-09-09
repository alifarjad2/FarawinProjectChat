import farawin from "farawin";
import { useState } from "react";

function LoginPage() {
  const [number, setNumber] = useState(null);
  const [password, setPassword] = useState("");
  const [firstLoadNumber, setFirstLoadNumber] = useState(true);
  const [firstLoadPassword, setFirstLoadPassword] = useState(true);

  function numberValidation() {
    
    if (number && farawin.mobileRegex.test(number)) return true;
    return false;
  }
  function passwordValidation() {
    if (password.length && password.length < 8) return false;
    return true;
  }

  return (
    <>
      <header className=" w-full h-fit text-3xl font-bold mb-8 mt-12">
        {" "}
        Login{" "}
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
          className="block w-full mt-2 p-2 border-b-2 border-t-zinc-800 focus:outline-0"
          placeholder="Type your password"
          onInput={(event) => {
            setFirstLoadPassword(false);
            setPassword(event.target.value);
          }}
        />
      </div>
      <p className="text-right mt-1.5">
        <a href="#" className=" text-right text-gray-600 hover:text-black">
          {" "}
          Forgot password?{" "}
        </a>
      </p>
      <button
        type="submite"
        className="w-full mt-6 p-2 text-white rounded-full"
        style={{
          background:
            "-webkit-linear-gradient(left,#00dbde,#fc00ff)",
        }}
        onClick={() => {
          if (passwordValidation() && numberValidation()) {
            farawin.testLogin(number, password, (res) => {
              if(res.code == 200) localStorage.username = number;
              alert(res.message);
              location.reload();
            });
          }
        }}
      >
        {" "}
        LOGIN{" "}
      </button>
    </>
  );
}

export default LoginPage;
