import { useState } from "react";
import farawin from "farawin";

export default function RegisterForm({ch2}) {
    const [phone , setPhone] = useState('');
    const [pass , setPass] = useState('');
    const [rePass , setRePass] = useState('');
    let valid = false ;
    if (pass === rePass && phone.length === 11 )
    {
      valid = true ;
    }

    const handellerPhone = (value1) =>{
      setPhone(value1)
      }
    const handellerPass = (value2) => {
        setPass(value2)
      }
    const handellerRePass = (value3) => {
        setRePass(value3)
      }

      const submitForm = async()=>{

        const mobile = farawin.toEnDigit(phone);
        const mobileRegex = farawin.mobileRegex;
        
        if (mobileRegex.test(mobile)) {
        const res = await farawin.testRegister(mobile,pass, "NEW ACCOUNT");
        alert(res.message);
        if(res.code == 200){
          location.reload();
        }
      }
      }

    return (
  
  <div
  className="h-full p-10"
  >
  <form className="bg-white w-[280px] h-[500px] rounded-xl flex flex-col p-6">
    <h1 className="font-bold text-center text-2xl m-5">Sign Up</h1>
    <label htmlFor="phone" className="m-1 text-sm">
      Username
    </label>
    <input
      type="tel"
      id="phone"
      value={phone}
      onChange={(e)=>{return handellerPhone(e.target.value)}}
      placeholder="Type your UserName"
      className="outline-none text-md border-b-[1.5px] p-1"
    />

      { phone.length != 0 && phone.length != 11 && <span className="text-xs text-rose-400" >شماره موبایل را درست وارد کنید</span> }
  
    <label htmlFor="phone" className="m-1 mt-4 text-sm">
      Password
    </label>
    <input
      type="password"
      id="pass"
      value={pass}
      onChange={(e)=>{return handellerPass(e.target.value)}}
      placeholder="Type your PassWord"
      className="outline-none text-md border-b-[1.5px] p-1"
    />

      { pass.length != 0 && pass.length < 8  && <span className="text-xs text-rose-400" >
       طول رمزعبور کوتاه است
      </span> }

    <label htmlFor="phone" className="m-1 mt-4 text-sm">
      Re-Password
    </label>
    <input
      type="password"
      id="rePass"
      value={rePass}
      onChange={(e)=>{return handellerRePass(e.target.value)}}
      placeholder="Re-enter your password"
      className="outline-none text-md border-b-[1.5px] p-1"
    />
    { rePass.length != 0 && pass != rePass  && <span className="text-xs text-rose-400" >
             تکرار رمزعبور با رمز عبور مطابقت ندارد
    </span> }
  
    <button
    disabled = {valid ? false : true}
    type="button"
    onClick={submitForm}
      className="rounded-2xl h-8 m-4 text-sm text-white"
      style={{
        background: `-webkit-linear-gradient(right,#FDA7DF,#D980FA,#686de0,#9980FA,#7ed6df)`,
      }}
    >
      SIGN UP
    </button>
  
    <span className="text-[10px] text-center m-2">Or Login Using</span>
  
    <button
    onClick={()=> ch2('login') }
    className="text-md">LOGIN</button>
  </form>
  </div>
    );
  }
