import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import { ChatPage } from "./chatPage";

// 1- کاربر بتونه درست لاگین و رجیستر کنه
// ۲- کارکرد صحیح سناریو های گفته شده
export default function FormAuth() {
  
// اینجا ی استیت برای تعیین صفحه لاگین یا ریجستر تعریف کردم و پیش فرض گفتم اول وارد صفحه لاگین بشه
  const [currentForm, setCurrentForm] = useState('login');
// اینجا با پراپ هایی ک برای کامپوننت لاگین و ریجستر تعریف کردم ی تابع نوشتم ک مقدار استیت رو اگه دکمه تغییر زده شد اعمال کنه و  صفحه سوویچ بشه
  const toggleForm = (formName) => {
    setCurrentForm (formName);
  }


  return (
   
<div>
  <ChatPage/>
</div>


    // <div
    //   className="bg-white rounded-lg h-[550px] flex flex-col items-center w-[350px] mx-auto mt-6"
    // >
    //   {/* ایجا هم شرط گذاشتم اگه استیت فرمم مقدار لاگین داشت کامپوننت لاگین نمایش داده بشه اگه ریجستر بود مقدار ریجستر */}
    //   { currentForm === 'login' ? <Login onFormSwitch = {toggleForm} /> : <Register onFormSwitch = {toggleForm}/> } 
    // </div>
  );
}
