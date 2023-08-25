// import Farawin from "farawin";
// import LoginPage from "./loginPage";
// import RegisterPage from "./registerPage";
// import { useState } from "react";
import Chatscreen from "./chatScreen";

// 1- کاربر بتونه درست لاگین و رجیستر کنه
// ۲- کارکرد صحیح سناریو های گفته شده
export default function FormAuth() {
  // const [isDivVisible, setDivVisible] = useState(false);
  return (
    <Chatscreen/>
  //   <div
  //     className="h-full box-border py-8"
  //     style={{
  //       background: `url(
  //         https://colorlib.com/etc/lf/Login_v4/images/bg-01.jpg
  //       )`,
  //       backgroundSize: "100% 100%",
  //     }}
  //   >
  //     {/* TODO Insert Form Here*/}
  //     <div className="w-[350px] h-[600px] rounded-md m-auto px-10 pt-8 bg-white text-center">
  //       {isDivVisible ? <RegisterPage /> : <LoginPage />}
  //       <p className="text-gray-600 mt-10">
  //         {isDivVisible ? "DO YOU HAVE AN ACCOUNT READY?" : "Or Sign Up Using"}
  //       </p>

  //       <p
  //         className="mt-2 cursor-pointer"
  //         onClick={() => setDivVisible(!isDivVisible)}
  //       >
  //         {isDivVisible ? "SIGN UP" : "SIGN IN"}
  //       </p>
  //     </div>
  //     if(localStorage.token){
  //       <Chatscreen/>
  //     } 
  //     {/* { <button
  //       className="mx-2 w-10"
  //       onClick={() => {
  //         farawin.testLogin("09393013397", "12345678");
  //       }}
  //     >
  //       test login
  //     </button>

  //     <button
  //       className="mx-2 w-10"
  //       onClick={() => {
  //         farawin.testRegister("09393013397", "12345678", "Ali Farjad");
  //       }}
  //     >
  //       test register
  //     </button> } */}
      
  //   </div>
  );
}
