import farawin from "farawin";
import { useState } from "react";

export const EditContact = (prop) => {
  const [inputTel, setInputTel] = useState("");
  const [inputName, setInputName] = useState("");
  
  
  const SendInformation = async () => {
    const EnMobile = farawin.toEnDigit(inputTel);
    const mobileRegex = farawin.mobileRegex;

    if (mobileRegex.test(EnMobile) && inputName.length >= 3 ) {
      const valid =await farawin.testEditContact(EnMobile,inputName) ;
      alert(valid.message);
  }
  else {alert("اشتباه وارد کردید !")}
  }
  return (

<form className="flex flex-col justify-around bg-slate-700 text-white h-[300px] w-[300px] overflow-hidden my-4 p-4 rounded-2xl">
      
      <div onClick={()=>{return prop.close("showEditContact")}}  className="bg-black rounded-full text-center self-end cursor-pointer w-6 ">X</div>
      
      <h1 className="underline text-lime-300  mb-1">فرم ویرایش مخاطب</h1>

      <label >شماره تماس :</label>
      <input type="tel" onChange={(e)=>{setInputTel(e.target.value)}} value={inputTel} className="text-center text-black rounded-full "  />

      <label htmlFor="">نام : </label>
      <input type="text" onChange={(e)=>{setInputName(e.target.value)}} value={inputName} className="text-center text-black rounded-full" />

      <button type="button" onClick={SendInformation} className="hover:bg-green-600 border rounded-full my-4">
        Edit
      </button>
    </form>
    


  );
};
