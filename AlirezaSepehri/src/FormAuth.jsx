import farawin from "./farawin";
import { useState } from "react";

// 1- کاربر بتونه درست لاگین و رجیستر کنه
// 2- کارکرد صحیح سناریو های گفته شده
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

  // استیت برای تبدیل بین پنل لاگین و رجیستر
  const [isLoginPage, setPage] = useState(true);
  const handleSwitchPage = () => {
    setPage(!isLoginPage);
  };

  // استیت برای دریافت مقدار اینپوت ها
  const [form, setForm] = useState({
    mobile: "",
    password: "",
    username: "",
    isMobileValid: null,
    isPassValid: null,
    isNameValid: null,
    isConfirm: null
  })

  return <div className="select-none w-72 h-max bg-white rounded-md pt-11 sm:px-6 px-3 mx-3">
    <header>
      <h1 className="hover:animate-pulse text-center font-bold pb-2 text-2xl text-stone-700">
        {isLoginPage ? "Login" : "Regsiter"}
      </h1>
    </header>

    {/* بررسی پنل مورد درخواست کاربر : لاگین/رجیستر */}
    {isLoginPage ? 
    <LoginForm form={form} setForm={setForm} formRegex={formRegex}/> : 
    <RegisterForm form={form} setForm={setForm} formRegex={formRegex} />}

    <button className="w-full mb-16 text-center text-xs text-slate hover:text-bermuda"
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
    let mobile = event.target.value
    mobile = farawin.toEnDigit(mobile);
    if(formRegex.mobile.test(mobile)) {
      setForm({...form, mobile: event.target.value,
        isMobileValid: true})
    } else {
      setForm({...form, mobile: event.target.value,
        isMobileValid: false})
    }
  }

  const handlePassword = (event) => {
    let password = event.target.value;
    if (formRegex.password.test(password)) {
      setForm({...form, password: event.target.value,
        isPassValid: true})
    } else {
      setForm({...form, password: event.target.value,
        isPassValid: false})
    }
  }

  return (
    <form>
      <div className="mt-2 relative">
        <label className="text-xs ml-2 text-slate after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="mobile">mobile</label>
        <input className="w-full px-2 pb-2 text-sm outline-none text-zinc border-b border-stone-300 placeholder-stone-300"
          id="mobile"
          type="text" 
          placeholder="Type your mobile"
          onInput={handleMobile} />
          <Guide text={form.isMobileValid == false ? "!" : ""} 
              title={'دقیقا مطابق با فرمت شماره موبایل باشد'} />
      </div>
    
      <div className="mt-2 relative">
        <label className="text-xs ml-2 text-slate after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="password">password</label>
        <input className="w-full px-2 pb-2 text-sm outline-none text-zinc border-b border-stone-300  placeholder-stone-300"
          id="password"
          type="password" 
          placeholder="Type your password" 
          onInput={handlePassword} />
          <Guide text={form.isPassValid == false ? "!" : ""}
            title={'حداقل 8 کاراکتر باید باشد!'} />
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
    let username = event.target.value
    if(formRegex.username.test(username)) {
      setForm({...form, username: event.target.value,
        isNameValid: true})
    } else {
      setForm({...form, username: event.target.value,
        isNameValid: false})
    }
  }

  const handleMobile = (event) => {
    let mobile = event.target.value
    mobile = farawin.toEnDigit(mobile);
    if(formRegex.mobile.test(mobile)) {
      setForm({...form, mobile: event.target.value,
        isMobileValid: true})
    } else {
      setForm({...form, mobile: event.target.value,
        isMobileValid: false})
    }
  }

  const handlePassword = (event) => {
    let password = event.target.value;
    if (formRegex.password.test(password)) {
      setForm({...form, password: event.target.value,
        isPassValid: true})
    } else {
      setForm({...form, password: event.target.value,
        isPassValid: false})
    }
  }

  const handleConfirm = (event) => {
    let confirm = event.target.value; 
    if (confirm === form.password) {
      setForm({...form, isConfirm: true})
    } else {
      setForm({...form, isConfirm: false})
    }
  }

  return (
    <form>
      <div className="mt-2 relative">
        <label className="text-xs ml-2 text-slate" htmlFor="username">username</label>
        <input className="w-full px-2 pb-2 text-sm outline-none text-zinc border-b border-stone-300 placeholder-stone-300"
          id="username"
          type="text"
          placeholder="Type username"
          onInput={handleName} />
          <Guide text={form.isNameValid == false ? "!" : ""}
            title={'دقیقا مطابق با فرمت شماره موبایل باشد'} />
      </div>

      <div className="mt-2 relative">
        <label className="text-xs ml-2 text-slate" htmlFor="mobile">mobile</label>
        <input className="w-full px-2 pb-2 text-sm outline-none text-zinc border-b border-stone-300 placeholder-stone-300"
          id="mobile"
          type="text" 
          placeholder="Type your mobile"
          onInput={handleMobile} />
          <Guide text={form.isMobileValid == false ? "!" : ""} 
            title={'حداقل 8 کاراکتر باید باشد!'}/>
      </div>

      <div className="mt-2 relative">
        <label className="text-xs ml-2 text-slate" htmlFor="password">password</label>
        <input className="w-full px-2 pb-2 text-sm outline-none text-zinc border-b border-stone-300 placeholder-stone-300"
          id="password"
          type="password" 
          placeholder="Type your password"
          onInput={handlePassword} />
          <Guide text={form.isPassValid == false ? "!" : ""}
            title={'حداقل 8 کاراکتر باید باشد!'} />
      </div>

      <div className="mt-2 relative">
        <label className="text-xs ml-2 text-slate" htmlFor="confirmPassword">
          confirm-password</label>
        <input className="w-full px-2 pb-2 text-sm outline-none text-zinc border-b border-stone-300 placeholder-stone-300"
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
// کامپوننت برای تولید راهنما دریافت داده 
function Guide({text, title}) {
  return  <span className="absolute right-0 bottom-2 px-1 text-[#ef4444] text-xs cursor-pointer text-red-400 font-bold" 
      title={title}
    >
      {text}
    </span>
}

/* ******
**********
**********
******* */
// کامپوننت برای تولید دکمه فراموشی رمز 
function ForgotPass() {
  return  <div className="text-right">
    <span className="text-xs cursor-pointer text-slate hover:text-bermuda" 
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

  const handleLogin = async () => {
    if(type == 'login') {
      const result = await farawin.testLogin(form.mobile, form.password);
      alert(result.message);
    } else {
      const resault = await farawin.testRegister(
        form.mobile,
        form.password,
        form.username
      );
      alert(resault.message);
    }
  };

  return <button className="w-full rounded-full text-white py-1 my-7"
      type="button" 
      id="LoginBtn"
      onClick={handleLogin} >
     {type}
  </button>
}
