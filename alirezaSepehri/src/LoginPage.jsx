import { useState } from "react";
import RegisterPage from "./RegisterPage";
import Login from "./Login";

export default function LoginPage({ setPage, setUser }) {
  // استیت برای انتقال بین پنل لاگین و رجیستر
  const [isLoginPage, setLoginPage] = useState(true);
  const handleSwitchPage = () => {
    setLoginPage(!isLoginPage);
  };

  // استیت برای دریافت مقدار اینپوت ها
  const [form, setForm] = useState({
    mobile: "",
    password: "",
    username: "",
    isMobileValid: null,
    isPassValid: null,
    isConfirm: null,
    isNameValid: null,
  });

  return (
    <div className="w-80 bg-white rounded-lg border-[1px] m-auto py-8 shadow-2xl shadow-slate-600">
      <header className="text-2xl text-center font-semibold hover:animate-pulse text-stone-700">
        {isLoginPage ? "ورود" : "ثبت نام"}
      </header>
      <div className="w-72 p-2 m-auto my-10">
        {isLoginPage ? (
          // کامپوننت لاگین(ورود)
          <Login
            form={form}
            setForm={setForm}
            setPage={setPage}
            setUser={setUser}
          />
        ) : (
          // کامپیوننت رجیستر(ثبت نام)
          <RegisterPage form={form} setForm={setForm} />
        )}

        {/* button for switch to Login/Register */}
        <button
          className="block m-auto text-[10px] text-teal-500"
          onClick={handleSwitchPage}
        >
          {isLoginPage ? "برو به ثبت نام" : "ثبت نام کرده ام"}
        </button>
      </div>
    </div>
  );
}
