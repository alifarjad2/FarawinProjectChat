import Login from "./Login";
import Register from "./Register";
import { useState } from "react";

// 1- کاربر بتونه درست لاگین و رجیستر کنه
// ۲- کارکرد صحیح سناریو های گفته شده
export default function FormAuth() {
  

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm (formName);
  }


  return (
    
    <div
      className="bg-white rounded-lg h-[550px] flex flex-col items-center w-[350px] mx-auto mt-6"
    >
      { currentForm === 'login' ? <Login onFormSwitch = {toggleForm} /> : <Register onFormSwitch = {toggleForm}/> } 
    </div>
  );
}
