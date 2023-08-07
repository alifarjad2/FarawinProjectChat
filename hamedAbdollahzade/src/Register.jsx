import farawin from "farawin";

const Register = () => {
  return (
    <form className="h-full w-full flex flex-col px-5">
      <h1 className="flex justify-center text-4xl m-8 font-bold"> Register </h1>

      <label className="mt-4" htmlFor="username">
        Username
      </label>
      <input
        type="tel"
        placeholder="Type your username"
        id="username"
        className="border-b-2 outline-none"
      />

      <label className="mt-4" htmlFor="password1">
        Password
      </label>
      <input
        type="password"
        placeholder="Type your password"
        id="password1"
        className="border-b-2 outline-none"
      />

      <label className="mt-4" htmlFor="password2">
        Retry Password
      </label>
      <input
        type="password"
        placeholder="Type your password"
        id="password2"
        className="border-b-2 outline-none"
      />

      <button
        className="border mx-2 h-8 w-4/5 btn rounded-full  mt-8 self-center "
        onClick={() => {
          farawin.testRegister("09333536546", "12345678", "hamedAbdollahzade");
        }}
      >
        register
      </button>

      <button onClick={() => onFormSwitch("login")} className=" text-xs mt-8">
        Or Sign In Using <br /> <b>SIGN In</b>{" "}
      </button>
    </form>
  );
};

export default Register;
