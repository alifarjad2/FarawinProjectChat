import farawin from "farawin";
import { useState } from "react";


export const Register = (props) => { 

    const [phone, setPhone] = useState ('');
    const [pass, setPass] = useState ('');
    const [repassword, setRepassword] = useState ('');
    const [isValidPhone, setisValidPhone] = useState("");

    const handelPhone = (e) => {
      let phoneNumber = farawin.toEnDigit(e.target.value);
      console.log("phoneNumber :" + phoneNumber);
      setPhone(phoneNumber);
      if (farawin.mobileRegex.test(phoneNumber)) {
        setisValidPhone(true);
      } else {
        setisValidPhone(false);
      }
    };
 
    const handleSubmit = (e) => {
      e.preventdefault ()
    }
  
    const validForm = async () => {
     {
        const phoneData = phone;
        const passData = pass;
        const repassData = repassword;
        const res = await farawin.testRegister(phoneData, passData, repassData);
        console.log(phone , pass)
        alert(res.message);
      }
    }

      return (
        <form onSubmit={handleSubmit}>
        <div
          className=" min-h-full w-screen h-[100vh] flex justify-center items-center" 
          style={{
            background: `url(
              https://colorlib.com/etc/lf/Login_v4/images/bg-01.jpg
            )`,
            backgroundSize :`cover`,
            backgroundPosition: `center`,
          }}
        >
          {/* TODO Insert Form Here*/}
    
          {/* استایل کلی باکس  */}
          <form className="bg-white w-[400px] h-[700px] rounded-xl flex flex-col p-10">
            <h1 className="font-bold text-center text-[2.5rem] h-4 m-2 mb-8">Register</h1>
    
            {/* یوزرنیم */}
            <label htmlFor="phoneNum" 
            className=" m-1 mt-4 text-sm "> 
            Username </label>
    
          <div className="mt-2" style={{ position:"relative"}} >
            <input 
            type="text" 
            value= {phone} onChange={handelPhone} 
            placeholder="Type your username"   
            className= " w-full cursor-pointer text-md border-b-[1.7px] pl-6 focus:outline-0 required"
            />
            <svg xmlns="http://www.w3.org/2000/svg" 
            style={{ position:"absolute"}} fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className=" text-gray-400 w-4 h-4 top-1 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            {  phone.length != 0 && phone.length != 11  && <p className="text-[12px] m-0 text-red-400">wrong Phone Number  </p> }
          </div >
          
          {/* پسوورد */}
            <label htmlFor="pass" className="m-1 mt-6 text-sm minLenght=8 "> Password </label>
    
          <div className="mt-2 block" style={{ position:"relative" }} >
            <input 
            type="password" 
            name ="pass"
            value={pass} onChange={(e) => setPass(e.target.value) }
            placeholder="Type your password" 
            className=" w-full cursor-pointer text-md border-b-[1.7px] pl-6 mb-2 focus:outline-0"/>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ position:"absolute"}} fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className=" text-gray-400 w-4 h-4 top-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            { pass.length !=0 && pass.length <8 && <p className="text-[12px] m-0 text-red-400" > Password not too long, Enter atleast 8 characters </p> } 
          </div>
{/* پسوورد مجدد */}
          <label htmlFor="pass" className="m-1 mt-6 text-sm minLenght=8 "> Retry Password </label>
    
          <div className="mt-2 block" style={{ position:"relative" }} >
            <input 
            type="password" 
            name ="repassword"
            value={repassword} onChange={(e) => setRepassword(e.target.value)}
            placeholder="Type your password" 
            className=" w-full cursor-pointer text-md border-b-[1.7px] pl-6 mb-2 focus:outline-0"/>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ position:"absolute"}} fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className=" text-gray-400 w-4 h-4 top-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            { repassword.length != 0 && pass != repassword  && <p className="text-[12px] m-0 text-red-400" >
             this is not match
            </p> }
          </div>
    
          <button 
            className="text-sm text-end text-gray-500" 
            onClick={() => { alert("این امکان هنوز پیاده سازی نشده است")}}>
            Forgot password?
          </button>
    
          <button 
            className="rounded-full h-10 p-2 m-8 text-ml text-white" onClick={validForm} 
            type="submit" style={{ background: `-webkit-linear-gradient(right,#FDA7DF,#D980FA,#686de0,#9980FA,#7ed6df)`,}}> 
            REGISTER 
          </button>
    
            <span className="text-sm text-gray-500 text-center m-2">Or Sign In Using</span>
    
            {/* آیکون های لاگین */}
            <div className="flex gap-2 justify-center items-center">
              {/* فیس بوک */}
            <div className="flex items-center justify-center w-12 h-12   text-blue-800 bg-white rounded-full" >
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current cursor-pointer justify-center" viewBox="0 0 3333 3333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"><path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm186 1117h311V744h-311c-240 0-435 195-435 435v186h-249v373h249v994h373v-994h311l62-373h-373v-186c0-34 28-62 62-62z"/></svg>
              </div>
              {/* توییتر */}
              <div className="flex items-center justify-center w-12 h-12 text-white bg-blue-400 rounded-full" >
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current p-2 cursor-pointer justify-center" width="40"  height="40" fill="current" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640"><path d="M640.012 121.513c-23.528 10.524-48.875 17.516-75.343 20.634 27.118-16.24 47.858-41.977 57.756-72.615-25.347 14.988-53.516 25.985-83.363 31.866-24-25.5-58.087-41.35-95.848-41.35-72.508 0-131.21 58.736-131.21 131.198 0 10.228 1.134 20.232 3.355 29.882-109.1-5.528-205.821-57.757-270.57-137.222a131.423 131.423 0 0 0-17.764 66c0 45.497 23.102 85.738 58.347 109.207-21.508-.638-41.74-6.638-59.505-16.359v1.642c0 63.627 45.225 116.718 105.32 128.718-11.008 2.988-22.63 4.642-34.606 4.642-8.48 0-16.654-.874-24.78-2.35 16.783 52.11 65.233 90.095 122.612 91.205-44.989 35.245-101.493 56.233-163.09 56.233-10.63 0-20.988-.65-31.334-1.89 58.229 37.359 127.206 58.997 201.31 58.997 241.42 0 373.552-200.069 373.552-373.54 0-5.764-.13-11.35-.366-16.996 25.642-18.343 47.87-41.493 65.469-67.844l.059-.059z"/></svg>
              </div>
              {/* جی میل */}
              <div className="flex items-center justify-center w-12 h-12 text-white bg-red-700 rounded-full" >
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current cursor-pointer p-[12px] justify-center" width="78" height="78" fill="current" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640"><path d="M326.331 274.255v109.761h181.49c-7.37 47.115-54.886 138.002-181.49 138.002-109.242 0-198.369-90.485-198.369-202.006 0-111.509 89.127-201.995 198.369-201.995 62.127 0 103.761 26.516 127.525 49.359l86.883-83.635C484.99 31.512 412.741-.012 326.378-.012 149.494-.012 6.366 143.116 6.366 320c0 176.884 143.128 320.012 320.012 320.012 184.644 0 307.256-129.876 307.256-312.653 0-21-2.244-36.993-5.008-52.997l-302.248-.13-.047.024z"/></svg>
              </div>
            </div>
    
            <div className="text-sm text-gray-500 text-center my-12 mb-2">Or Sign In Using</div>
            <button className="text-md mt-2" onClick={() => props.switchForm("Login")}>SIGN IN</button>
          </form>
        </div>
        </form>
      );
    
    }