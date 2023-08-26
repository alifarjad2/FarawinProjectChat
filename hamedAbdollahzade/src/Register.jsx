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

  const ErsalForm = async () => {
    await farawin.testRegister(userName, password1, flName, (res) => {
      alert(res.message);
    });
  };

  return (
    <form className="h-full w-full flex flex-col px-5">
      <h1 className="flex justify-center text-4xl m-8 font-bold"> Register </h1>

      <label className="text-xs mt-2" htmlFor="username">
        Username :
      </label>
      <input
        type="tel"
        onChange={(event) => setUserName(event.target.value)}
        value={userName}
        placeholder="0 9 3 3 3 5 3 6 5 4 6"
        id="username"
        className="border-b-2 outline-none"
      />
      <div
        className={
          userName.length == 0 || userName.length == 11
            ? "hidden"
            : "text-red-700 text-[10px] text-right mt-2"
        }
      >
        طول موبایل باید 11 رقم باشد
      </div>

      <label className="text-xs mt-2" htmlFor="password1">
        Password :
      </label>
      <input
        type="password"
        onChange={(event) => setPassword1(event.target.value)}
        value={password1}
        placeholder="* * * * * * * * "
        id="password1"
        className="border-b-2 outline-none"
      />
      <div
        className={
          password1.length == 0 || password1.length >= 8
            ? "hidden"
            : "text-red-700 text-[10px] text-right mt-2"
        }
      >
        رمز عبور حداقل 8 رقم باشد
      </div>

      <label className="text-xs mt-2" htmlFor="password2">
        Retry Password :
      </label>
      <input
        type="password"
        onChange={(event) => setPassword2(event.target.value)}
        value={passwoord2}
        placeholder="* * * * * * * *"
        id="password2"
        className="border-b-2 outline-none"
      />
      <div
        className={
          password1 === passwoord2
            ? "hidden"
            : "text-red-700 text-[10px] text-right mt-2"
        }
      >
        تکرار پسورد اشتباه است
      </div>

      <label className="text-xs mt-2" htmlFor="flName">
        name :
      </label>
      <input
        type="text"
        onChange={(event) => setflName(event.target.value)}
        value={flName}
        placeholder="hamed Abdollahzade"
        id="flName"
        className="border-b-2 outline-none"
      />
      <div
        className={
          flName.length == 0 || flName.length > 2
            ? "hidden"
            : "text-red-700 text-[10px] text-right mt-2"
        }
      >
        اسم حداقل سه حرف باشد
      </div>

      <button
        //! اینجا روی خود دکمه ولیدیت ریز کردم گفتم اگه همه چی مرتب بود بعد فعال بشه
        disabled={
          password1 === passwoord2 && flName.length > 2 && userName.length == 11
            ? false
            : true
        }
        type="button"
        className={
          password1 === passwoord2 && flName.length > 2 && userName.length == 11
            ? "border mx-2 h-8 w-4/5 btn rounded-full  mt-8 self-center "
            : "border mx-2 h-8 w-4/5 btn rounded-full opacity-[0.7] mt-8 self-center "
        }
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
