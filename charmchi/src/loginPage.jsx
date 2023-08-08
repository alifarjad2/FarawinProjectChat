export default LoginPage;
function LoginPage() {
  return (
    <div className="box-border w-full flex justify-center">
      <div
        id="loginForm"
        className="w-[350px] h-[590px] rounded-md px-10 mt-16 bg-white text-center"
      >
        <header className=" w-full h-fit text-3xl font-bold mb-8 mt-12">
          {" "}
          Login{" "}
        </header>
        <div id="divMobile" className="text-left">
          <label htmlFor="Mobile"> Mobile </label>
          <input
            id="Mobile"
            type="tell"
            className="block w-full mb-4 mt-2 p-2 border-b-2 border-t-zinc-800 focus:outline-0"
            placeholder="Type your number"
          />
        </div>
        <div id="divPassword" className="text-left">
          <label htmlFor="password"> Password </label>
          <input
            id="password"
            type="password"
            className="block w-full mt-2 p-2 border-b-2 border-t-zinc-800 focus:outline-0"
            placeholder="Type your password"
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
              "-webkit-linear-gradient(right,#00dbde,#fc00ff,#00dbde,#fc00ff",
          }}
        >
          {" "}
          LOGIN{" "}
        </button>
        <p className="text-gray-600 mt-10">Or Sign Up Using</p>
        <p className="mt-2">
        <a href="#"> SIGN UP </a>
        </p>
      </div>
    </div>
  );
}
LoginPage();

