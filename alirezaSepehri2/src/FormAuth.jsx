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
      <BoxLogin />

    </div>
  );
}

// کامپوننت برای تولید باکس لاگین
function BoxLogin() {
  return <div className="w-72 h-4/5 bg-white rounded-md pt-11 px-6">
    <header>
      <h1 className="text-center font-bold pb-2 text-lg text-stone">Login</h1>
    </header>

    <InputBox label={'username'} type={'text'} placeholder={'Type your username'} 
       reaction={getUsername} />
    <InputBox label={'password'} type={'password'}  placeholder={'Type your password'}
       reaction={getPassword}/>
    
    <div className="text-right">
        <ForgotPass />
    </div>

    <LoginBtn />

    <button
        className="mx-2 w-full text-center text-xs text-slate"
        onClick={() => {
          farawin.testRegister("09393013397", "12345678", "Ali Farjad");
        }}
      >
        SIGN UP
    </button>

  </div>
}

// کامپوننت برای تولید کادرهای دریافت نام کاربری و پسورد
function InputBox({label, type, placeholder, reaction}) {
  return (
    <div className="mt-2">
      <label className="text-xs ml-2 text-slate" 
        htmlFor={label}>{label}</label>
      <input className="w-full p-2 text-sm outline-none text-zinc border-b"
        id={label}
        type={type} 
        placeholder={placeholder}
        onInput={reaction}
      />
    </div>
  )
}

// بررسی وضعیت نام کاربری ورودی
function getUsername() {
  const telFormat = /^09([0-9]{9})$/

  console.log('check')
}

// بررسی وضعیت رمز ورود
function getPassword() {

  console.log('check') 
}

// کامپوننت برای تولید دکمه فراموشی رمز 
function ForgotPass() {
  return <span className="text-xs cursor-pointer text-slate" 
            onClick={() => {alert('این امکان هنوز پیاده سازی نشده است')}}>
          Forgot password?
        </span>
}

// کامپوننت برای تولید دکمه لاگین کردن
function LoginBtn(){
  return <button className="w-full rounded-full text-white py-1 my-7"
          id="LoginBtn"
          onClick={() => {
            farawin.testLogin("09393013397", "12345678");
          }}
         >
            login
  </button>
}
