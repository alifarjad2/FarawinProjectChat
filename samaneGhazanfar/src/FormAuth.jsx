import farawin from "farawin";

// 1- کاربر بتونه درست لاگین و رجیستر کنه
// ۲- کارکرد صحیح سناریو های گفته شده
export default function FormAuth() {
  return (
    <div
      className="h-full flex justify-center items-center"
      style={{
        background: `url(
          https://colorlib.com/etc/lf/Login_v4/images/bg-01.jpg
        )`,
      }}
    >
      {/* TODO Insert Form Here*/}
      <form className="bg-white w-[280px] h-[500px] rounded-xl flex flex-col p-6">
        <h1 className="font-bold text-center text-2xl m-5">Login</h1>
        <label htmlFor="phone" className="m-1 text-sm">
          Username
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="Type your UserName"
          className="outline-none text-md border-b-[1.5px] p-1"
        />

        <label htmlFor="phone" className="m-1 mt-4 text-sm">
          Password
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="Type your PassWord"
          className="outline-none text-md border-b-[1.5px] p-1"
        />

        <button className="text-sm text-end mt-2">Forgot password?</button>

        <button
          className="rounded-2xl h-8 m-4 text-sm text-white"
          style={{
            background: `-webkit-linear-gradient(right,#FDA7DF,#D980FA,#686de0,#9980FA,#7ed6df)`,
          }}
        >
          LOGIN
        </button>

        <span className="text-[10px] text-center m-2">Or Sign Up Using</span>

        <button className="text-md">SIGN UP</button>
      </form>
    </div>
  );
}

{
  /* <button
        className="mx-2 w-10"
        onClick={() => {
          farawin.testLogin("09393013397", "12345678");
        }}
      >
        test login
      </button>

      <button
        className="mx-2 w-10"
        onClick={() => {
          farawin.testRegister("09393013397", "12345678", "Ali Farjad");
        }}
      >
        test register
      </button> */
}
