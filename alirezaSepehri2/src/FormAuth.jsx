import { useState } from "react";
import farawin from "./farawin";

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
      <MainBox />

    </div>
  );
}

/* ******
**********
**********
******* */
// کامپوننت برای تولید باکس لاگین/رجیستر
function MainBox() {

  // آرایه شامل الگوها
  const formRegex = {
    username: /.{3,}/,
    mobile: farawin.mobileRegex,
    password: /.{8,}/
  }

  // استیت برای تبدیل پنل لاگین و رجیستر
  const [isLoginPage, setIsLoginPage] = useState(true);
  const handleSwitchPage = () => {
    setIsLoginPage(!isLoginPage);
  };

  // استیت برای دریافت مقدار اینپوت ها
  const [form, setForm] = useState({
    mobile: "",
    password: "",
    confirmPassword: "",
    username: "",
    isValid: null
  })

  return <div className="w-72 h-max bg-white rounded-md pt-11 px-6">
    <header>
      <h1 className="text-center font-bold pb-2 text-lg text-stone">
        {isLoginPage ? "Login" : "Regsiter"}
      </h1>
    </header>

    {/* بررسی پنل مورد درخواست کاربر : لاگین/رجیستر */}
    {isLoginPage ? 
    <LoginForm form={form} setForm={setForm} formRegex={formRegex}/> : 
    <RegisterForm form={form} setForm={setForm} formRegex={formRegex} />}

    <button className="w-full mb-16 text-center text-xs text-slate"
        onClick={handleSwitchPage}>
        {isLoginPage ? "SIGN UP" : "SIGN IN"}
    </button>
  </div>
}

/* ******
**********
**********
******* */
// کامپوننت برای تولید فرم لاگین
function LoginForm({form, setForm, formRegex}) {

  const handleMobile = (event) => {
    setForm({...form, mobile: event.target.value})
    let mobile = event.target.value
    mobile = farawin.toEnDigit(mobile);
    if(mobile == "") {
      setForm({...form, isValid: null})
    } 
    if(formRegex.mobile.test(mobile)) {
      setForm({...form, isValid: true})
    } else {
      setForm({...form, isValid: false})
    }
  }

  const handlePassword = (event) => {
    setForm({...form, password: event.target.value})
    let password = event.target.value;
    if (password == "") {
      setForm({...form, isValid: null})
    } 
    if (formRegex.password.test(password)) {
      setForm({...form, isValid: true})
    } else {
      setForm({...form, isValid: false})
    }
  }

  return (
    <form>
      <div className="mt-2">
        <label className="text-xs ml-2 text-slate" htmlFor="mobile">mobile</label>
        <input className="w-full px-2 pb-2 text-sm outline-none text-zinc border-b border-[#243c5a]"
          id="mobile"
          type="text" 
          placeholder="Type your mobile"
          onInput={handleMobile} />
      </div>

      <div className="mt-2">
        <label className="text-xs ml-2 text-slate" htmlFor="password">password</label>
        <input className="w-full px-2 pb-2 text-sm outline-none text-zinc border-b border-[#243c5a]"
          id="password"
          type="password" 
          placeholder="Type your password" 
          onInput={handlePassword} />
      </div>

      <ForgotPass />

      <ActionBtn type={"login"} form={form} />
    </form>
  )
}

/* ******
**********
**********
******* */
// کامپوننت برای تولید فرم رجیستر
function RegisterForm({form, setForm, formRegex}) {

  const handleName = (event) => {
    setForm({...form, username: event.target.value})
    let username = event.target.value
    if(username == "") {
      setForm({...form, isValid: null})
    } 
    if(formRegex.username.test(username)) {
      setForm({...form, isValid: true})
    } else {
      setForm({...form, isValid: false})
    }
  }

  const handleMobile = (event) => {
    setForm({...form, mobile: event.target.value})
    let mobile = event.target.value
    mobile = farawin.toEnDigit(mobile);
    if(mobile == "") {
      setForm({...form, isValid: null})
    } 
    if(formRegex.mobile.test(mobile)) {
      setForm({...form, isValid: true})
    } else {
      setForm({...form, isValid: false})
    }
  }

  const handlePassword = (event) => {
    setForm({...form, password: event.target.value})
    let password = event.target.value;
    if (password == "") {
      setForm({...form, isValid: null})
    } 
    if (formRegex.password.test(password)) {
      setForm({...form, isValid: true})
    } else {
      setForm({...form, isValid: false})
    }
  }

  const handleConfirm = (event) => {
    let confirm = event.target.value;
    if (confirm == "") {
      setForm({...form, isValid: null})
    } 
    if (confirm === password) {
      setForm({...form, isValid: true})
      console.log('yes')
    } else {
      setForm({...form, isValid: false})
      console.log('no')
    }
  }

  return (
    <form>
      <div className="mt-2">
        <label className="text-xs ml-2 text-slate" htmlFor="username">username</label>
        <input className="w-full px-2 pb-2 text-sm outline-none text-zinc border-b border-[#243c5a]"
          id="username"
          type="text"
          placeholder="Type username"
          onInput={handleName} />
      </div>

      <div className="mt-2">
        <label className="text-xs ml-2 text-slate" htmlFor="mobile">mobile</label>
        <input className="w-full px-2 pb-2 text-sm outline-none text-zinc border-b border-[#243c5a]"
          id="mobile"
          type="text" 
          placeholder="Type your mobile"
          onInput={handleMobile} />
      </div>

      <div className="mt-2">
        <label className="text-xs ml-2 text-slate" htmlFor="password">password</label>
        <input className="w-full px-2 pb-2 text-sm outline-none text-zinc border-b border-[#243c5a]"
          id="password"
          type="password" 
          placeholder="Type your password"
          onInput={handlePassword} />
      </div>

      <div className="mt-2">
        <label className="text-xs ml-2 text-slate" htmlFor="confirmPassword">
          confirm-password</label>
        <input className="w-full px-2 pb-2 text-sm outline-none text-zinc border-b border-b-slate-300"
          id="confirmPassword"
          type="password" 
          placeholder="Type confirm-password"
          onInput={handleConfirm} />
      </div>

      <ActionBtn type={"register"} form={form} />

    </form>
  )
}

/* ******
**********
**********
******* */
// کامپوننت برای تولید دکمه فراموشی رمز 
function ForgotPass() {
  return  <div className="text-right">
    <span className="text-xs cursor-pointer text-slate" 
        onClick={() => {alert('این امکان هنوز پیاده سازی نشده است')}}
    >
      Forgot password?
    </span>
  </div>
}

/* ******
**********
**********
******* */
// کامپوننت برای تولید دکمه لاگین کردن
function ActionBtn({type, form}){
  return <button className="w-full rounded-full text-white py-1 my-7"
      type="button" 
      id="LoginBtn"
         onClick={() => {
          if(form.isValid) {
            farawin.testLogin(form.mobile, form.password);
          } else if(form.isValid == false) {
            alert("ورودی نا معتبر است")
          } else {
            alert('لطفا تمام موارد را پر نمایید')
          }
         }} >
     {type}
  </button>
}
