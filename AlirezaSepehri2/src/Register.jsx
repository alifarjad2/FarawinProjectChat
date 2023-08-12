function Register({ props }) {
  return (
    <div
      className="h-full flex "
      style={{
        background: `url(
            https://colorlib.com/etc/lf/Login_v4/images/bg-01.jpg
          )`,
      }}
    >
      <form
        action=""
        className=" w-3/12 h-5/6 bg-white m-auto rounded-lg  pt-10 flex flex-col p-8 gap-8 "
      >
        <h1 className="text-center text-5xl font-bold ">Register</h1>
        <div>
          <div className="text-sm">Username</div>
          <input
            id="username"
            type="text"
            placeholder="Type your Username"
            className="w-full  focus:outline-none border-b-2"
          />
        </div>
        <div>
          <div className="text-sm">Password</div>
          <input
            type="password"
            placeholder="Type your password"
            className="w-full  focus:outline-none border-b-2"
          />
        </div>
        <div>
          <div className="text-sm">Repeat Password</div>
          <input
            type="password"
            placeholder="Type your password"
            className="w-full  focus:outline-none border-b-2"
          />
        </div>
        <div>
          <div className="text-sm">Name</div>
          <input
            type="text"
            placeholder="Type your name"
            className="w-full  focus:outline-none border-b-2"
          />
        </div>

        <button
          type="button"
          style={{
            background: `-webkit-linear-gradient(right,#00dbde,#fc00ff,#00dbde,#fc00ff)`,
          }}
          className="w-full h-16  rounded-3xl text-white"
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
