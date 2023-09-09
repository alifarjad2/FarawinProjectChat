import farawin from "farawin";
import { useState } from "react";

export const RemoveContact = () => {
  const [inputTel, setInputTel] = useState("");

  const SendInformation = async () => {
    const EnMobile = farawin.toEnDigit(inputTel);
    const mobileRegex = farawin.mobileRegex;

    if (mobileRegex.test(EnMobile)) {
      const valid = await farawin.testDeleteContact(EnMobile);
      alert(valid.message);
    }
  };

  return (
    <form className="flex flex-col justify-center bg-slate-700 rounded-2xl text-white h-[150px] w-full overflow-hidden my-1 p-6">
      <h1 className="underline text-red-600 text-lg m-1">حذف مخاطب</h1>

      <label>شماره تماس :</label>
      <input
        type="tel"
        value={inputTel}
        onChange={(e) => setInputTel(e.target.value)}
        className="rounded-full text-center text-black"
      />

      <button
        type="button"
        onClick={SendInformation}
        className="border my-4 rounded-full hover:bg-red-700"
      >
        REMOVE
      </button>
    </form>
  );
};
