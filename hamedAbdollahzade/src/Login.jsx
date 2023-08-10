// اینجا کتابخونه فراوین و هوک استیت رو از کتابخونه ری اکت ایمپورت کردم ک بتونم ازش استفاده کنم
import farawin from "farawin";
import { useState } from "react";

const Login = ({ onFormSwitch }) => {
  // اینجا دو تا هوک استفاده کردم از ری اکت برای نگه داری مقادیر در استیت
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
// اینجا هم مقدار داخل استیت مربوطه رو اپدیت کردم
  const updateStatepass = (e) => {
    setPassword(e);
  };

  const updateStateUser = (e) => {
    setUserName(e);
  };
 
  const validateLogin = async () => {
    // برای بررسی صحیح بودن موبایل از regex موجود کتابخانه فراوین استفاده شود. farawin.mobileRegex (این نکته رعایت شود که اعداد فارسی به انگلیسی تبدیل شوند می توان از تابع farawin.toEnDigit برای این منظور استفاده نمود)
    const EnMobile = farawin.toEnDigit(userName);
    const mobileRegex = farawin.mobileRegex;

    if (mobileRegex.test(EnMobile)) {
      await farawin.testLogin(EnMobile, password, (res) => alert(res.message));
    }
  };

  return (
    <form className="h-full w-full flex flex-col px-5 ">
      <h1 className="flex justify-center text-4xl m-8 font-bold"> Login </h1>

      <label className="text-xs mt-6" htmlFor="username">
        Username
      </label>
      <input
        onChange={(e) => updateStateUser(e.target.value)}
        type="tel"
        value={userName}
        placeholder="0 9 3 3 3 5 3 6 5 4 6"
        id="username"
        className="border-b-2 outline-none"
      />
      <div className={userName.length == 0 || userName.length == 11 ? "hidden" : "text-red-700 text-[10px] text-right mt-2"}>
        موبایل را درست وارد کنید
      </div>

      <label className="text-xs mt-6" htmlFor="password">
        Password
      </label>
      <input
        onChange={(e) => updateStatepass(e.target.value)}
        type="password"
        value={password}
        placeholder="* * * * * * * * "
        id="password"
        className="border-b-2 outline-none"
      />
      <div className={password.length == 0 || password.length >= 8 ? "hidden" : "text-red-700 text-[10px] text-right mt-2"}>
        پسورد حداقل باید 8 رقم باشد 
      </div>

      <button
        type="button"
        onClick={() => {
          alert("این امکان هنوز پیاده سازی نشده است");
        }}
        className="ml-auto mt-4"
      >
        Forgot passwoord ?
      </button>

      <button
        disabled={userName.length == 11 && password.length >=8 ? false : true}
        className= {userName.length == 11 && password.length >= 8 ? "text-white text-sm border mx-2 h-8 w-4/5 btn rounded-full  mt-9 self-center" :"text-white text-sm border mx-2 h-8 w-4/5 btn rounded-full opacity-[0.7] mt-9 self-center "}
        type="button"
        onClick={validateLogin}
      >
        LOGIN
      </button>

      <button
        className="underline mt-14 text-xs"
        onClick={() => onFormSwitch("Register")}
        type="button"
      >
        Or Sign Up Using <br /> <b>SIGN UP</b>{" "}
      </button>
    </form>
  );
};

export default Login;
