import { useState } from "react";

function Login({ props }) {
  const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const handler = (value) => {
    setUsername(value);
  };

  return (
    <div
      className="h-full flex "
      style={{
        background: `url(
            https://colorlib.com/etc/lf/Login_v4/images/bg-01.jpg
          )`,
      }}
    >
      <form className=" w-3/12 h-5/6 bg-white m-auto rounded-lg  pt-10 flex flex-col p-8 gap-14 ">
        <h1 className="text-center text-5xl font-bold ">Login</h1>
        <div>
          <label className="text-sm" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            onChange={(e) => {
              handler(e.target.value);
            }}
            value={username}
            placeholder="Type your Username"
            className="w-full  focus:outline-none border-b-2"
          />
        </div>
        <div>
          <label className="text-sm" htmlFor="password">
            Password
          </label>
          <input
            type="text"
            placeholder="Type your password"
            className="w-full  focus:outline-none border-b-2"
            id="password"
          />
          <div className="text-end">Forget password?</div>
        </div>
        <button
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
            type="submit"
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
