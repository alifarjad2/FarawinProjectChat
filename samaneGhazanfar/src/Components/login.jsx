  import farawin from "farawin";
  import { useState } from "react";

  export default function LoginForm({ ch1 }) {
    const [phone, SetPhone] = useState("");
    const [pass, SetPass] = useState("");
    let valid = false;
    if (pass && phone.length === 11) {
      valid = true;
    }

    const handellerPhone = (value) => {
      SetPhone(value);
    };
    const handellerPass = (val) => {
      SetPass(val);
    };

    const submitForm = async () => {
      const mobile = farawin.toEnDigit(phone);
      const mobileRegex = farawin.mobileRegex;

      if (mobileRegex.test(mobile)) {
        const result = await farawin.testLogin(mobile, pass);
        alert(result.message);

        if (result.code == 200) {
          localStorage.username = phone
          location.reload();
        }
      }
    };

    return (
      <div id="container" className="h-full p-10">
        <div className="bg-white w-[280px] h-[500px] rounded-xl flex flex-col p-6">
          <h1 className="font-bold text-center text-2xl m-5">Login</h1>
          <label htmlFor="phone" className="m-1 text-sm">
            Username
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => {
              return handellerPhone(e.target.value);
            }}
            placeholder="Type your UserName"
            className="outline-none text-md border-b-[1.5px] p-1"
          />

          {phone.length != 0 && phone.length != 11 && (
            <span className="text-xs text-rose-400">
              شماره موبایل را درست وارد کنید
            </span>
          )}

          <label htmlFor="pass" className="m-1 mt-4 text-sm">
            Password
          </label>
          <input
            type="password"
            id="pass"
            value={pass}
            onChange={(e) => {
              return handellerPass(e.target.value);
            }}
            placeholder="Type your PassWord"
            className="outline-none text-md border-b-[1.5px] p-1"
          />

          {pass.length != 0 && pass.length < 8 && (
            <span className="text-xs text-rose-400">طول رمزعبور کوتاه است</span>
          )}

          <button
            onClick={() => {
              alert("این امکان هنوز پیاده سازی نشده است ");
            }}
            className="text-sm text-end mt-2"
          >
            Forgot password?
          </button>

          <button
            type="button"
            disabled={valid ? false : true}
            onClick={submitForm}
            className="rounded-2xl h-8 m-4 text-sm text-white"
            style={{
              background: `-webkit-linear-gradient(right,#FDA7DF,#D980FA,#686de0,#9980FA,#7ed6df)`,
            }}
          >
            LOGIN
          </button>

          <span className="text-[10px] text-center m-2">Or Sign Up Using</span>

          <button
            type="button"
            onClick={() => {
              ch1("register");
            }}
            className="text-md"
          >
            SIGN UP
          </button>
        </div>
      </div>
    );
  }
