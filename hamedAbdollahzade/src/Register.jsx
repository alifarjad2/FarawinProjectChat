// برای استفاده از هوک استیت اونو از ری اکت ایمپورت کردم
import { useState } from "react";
// برای استفاده از توابع و متد های موجود در فراوین ایمپورت کردم
import farawin from "farawin";

// اینجا برای تمام مقادیری ک از کاربر میگیریم استیت تعریف کردم
const Register = ({ onFormSwitch }) => {
  const [userName, setUserName] = useState("");
  const [password1, setPassword1] = useState("");
  const [passwoord2, setPassword2] = useState("");
  const [flName, setflName] = useState("");

  // اینجا هم ی ولیدیت کوچیک کردم ک فقط درست مقدار دهی بشه و دکمه ارسال فعال بشه بقیه الرت هارو سپردم به پیام هایی ک از سمت سرور میاد
  let validate = false;
  if (password1 === passwoord2 && flName.length > 2 && userName) {
    validate = true;
  }

  const ErsalForm = async () => {
    await farawin.testRegister(userName, password1, flName, (res) => {
      alert(res.message);
    });
  };

  return (
    <form className="h-full w-full flex flex-col px-5">
      <h1 className="flex justify-center text-4xl m-8 font-bold"> Register </h1>

      <label className="text-xs mt-6" htmlFor="username">
        Username :
      </label>
      <input
        type="tel"
        onChange={(event) => setUserName(event.target.value)}
        value={userName}
        placeholder="Type your mobile number"
        id="username"
        className="border-b-2 outline-none"
      />

      <label className="text-xs mt-6" htmlFor="password1">
        Password :
      </label>
      <input
        type="password"
        onChange={(event) => setPassword1(event.target.value)}
        value={password1}
        placeholder="Type your password"
        id="password1"
        className="border-b-2 outline-none"
      />

      <label className="text-xs mt-6" htmlFor="password2">
        Retry Password :
      </label>
      <input
        type="password"
        onChange={(event) => setPassword2(event.target.value)}
        value={passwoord2}
        placeholder="Retry password"
        id="password2"
        className="border-b-2 outline-none"
      />

      <label className="text-xs mt-6" htmlFor="flName">
        name :
      </label>
      <input
        type="text"
        onChange={(event) => setflName(event.target.value)}
        value={flName}
        placeholder="First name Last name"
        id="flName"
        className="border-b-2 outline-none"
      />

      <button
        disabled={validate ? false : true}
        type="button"
        className="border mx-2 h-8 w-4/5 btn rounded-full  mt-8 self-center "
        onClick={ErsalForm}
      >
        register
      </button>

      <button
        type="button"
        onClick={() => onFormSwitch("login")}
        className="underline text-xs mt-8"
      >
        Or Sign In Using <br /> <b>SIGN In</b>{" "}
      </button>
    </form>
  );
};

export default Register;
