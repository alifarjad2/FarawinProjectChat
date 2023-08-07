import farawin from "farawin";

const Login = ({ onFormSwitch }) => {
  return (
    <form className="h-full w-full flex flex-col px-5 ">
      <h1 className="flex justify-center text-4xl m-8 font-bold"> Login </h1>

      <label htmlFor="username">Username</label>
      <input
        type="tel"
        placeholder="Type your username"
        id="username"
        className="border-b-2 outline-none"
      />

      <label htmlFor="password" className="mt-6">
        Password
      </label>
      <input
        type="password"
        placeholder="Type your password"
        id="password"
        className="border-b-2 outline-none"
      />
      <button
        onClick={() => {
          alert("این امکان هنوز پیاده سازی نشده است");
        }}
        className="flex justify-end mt-4"
      >
        Forgot passwoord ?
      </button>

      <button
        className="text-white text-sm border mx-2 h-8 w-4/5 btn rounded-full  mt-9 self-center "
        onClick={() => {
          farawin.testLogin("09333536546", "123456789");
        }}
      >
        LOGIN
      </button>

      <button
        className="mt-14 text-xs"
        onClick={() => onFormSwitch("Register")}
      >
        Or Sign Up Using <br /> <b>SIGN UP</b>{" "}
      </button>
    </form>
  );
};

export default Login;
