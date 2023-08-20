import farawin from "farawin";
import { useState } from "react";

export const AddContact = () => {
  const [inputTel, setInputTel] = useState("");
  const [inputName, setInputName] = useState("");
  
  
  const SendInformation = async () => {
    const EnMobile = farawin.toEnDigit(inputTel);
    const mobileRegex = farawin.mobileRegex;

    if (mobileRegex.test(EnMobile) && inputName.length >= 3 ) {
      const valid =await farawin.testAddContact(EnMobile,inputName) ;
      alert(valid.message);
      location.reload();
  }
  }
  return (


    <form className="flex flex-col bg-slate-700 text-white h-[200px] w-full overflow-hidden my-4 p-4">
      <h1>AddContact</h1>

      <label htmlFor="">شماره</label>
      <input type="tel" onChange={(e)=>{setInputTel(e.target.value)}} value={inputTel} className="text-center text-black"  />

      <label htmlFor="">نام </label>
      <input type="text" onChange={(e)=>{setInputName(e.target.value)}} value={inputName} className="text-center text-black" />

      <button type="button" onClick={SendInformation} className="border my-4">
        ADD
      </button>
    </form>
  );
};
