import farawin from "farawin";
import { useState } from "react";
import exite from "../../img/icons8-exit-50.png"



export const DeleteContact = () => {
  const [number, setNumber] = useState("");

  const deleteContact = async () => {
    const mobile = farawin.toEnDigit(number);
    const mobileRegex = farawin.mobileRegex;

    if (mobileRegex.test(mobile)) {
      const result = await farawin.testDeleteContact(number);
      alert(result.message);

      if (result.code == 200) {
        location.reload();
      }
    }
  };


  return (
    <div
      id="container"
      className=" fixed inset-0 w-screen h-screen z-10 bg-opacity-40 bg-gray-200 flex items-center justify-center "
    >
      <form className="relative bg-[#4f4e4e] text-center flex flex-col rounded-xl p-8 ">
        <img
          src={exite}
          onClick={() => {
            location.reload();
          }}
          className="cursor-pointer w-6 rounded-full left-2 top-2 absolute"
        />
        <h1 className="text-2xl mb-4 ">حذف مخاطب</h1>
        <label htmlFor="phoneNumber">شماره مخاطب</label>
        
        <input
          value={number}
          onChange={(Event) => {
            setNumber(Event.target.value);
          }}
          type="tel"
          id="phoneNumber"
          placeholder="09150000000"
          className="text-center h-8 text-white mx-8 w-[200px] rounded-lg bg-slate-300 my-3 mb-4"
        />
      

        <button
          type="button"
          onClick={deleteContact}
          className="bg-slate-400 hover:bg-slate-500 text-white py-2 px-4 mt-6 rounded-md"
        >
          حذف
        </button>
      </form>
    </div>
  );
};
