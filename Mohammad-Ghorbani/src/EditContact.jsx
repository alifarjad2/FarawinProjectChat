import farawin from "farawin";
import { useState } from "react";
import ImageClose from "./Assets/close-48.png";

export default function EditContact({ setCloseEditContact, closeEditContact }) {
  const [numberPhone, setNumberPhone] = useState("");
  const [name, setName] = useState("");

  const handleNumberPhone = (event) => {
    setNumberPhone(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const editContact = async () => {
    const EnMobile = farawin.toEnDigit(numberPhone);
    const mobileRegex = farawin.mobileRegex;

    if (mobileRegex.test(EnMobile) && name.length >= 3) {
      const valid = await farawin.testEditContact(EnMobile, name);
      alert(valid.message);
    } else {
      alert("اشتباه وارد کردید !");
    }
  };
  return (
    <div
      className={`absolute flex justify-center items-center top-0 bottom-0 right-0 left-0 backdrop-blur-sm z-10  ${
        closeEditContact ? "hidden" : null
      }`}
    >
      <form className="relative flex items-center flex-col px-5 py-4 gap-y-4 w-96 rounded-2xl bg-[#2E333D] z-20">
        <div
          onClick={() => {
            setCloseEditContact(true);
          }}
          className="absolute w-10 left-2 top-2 rounded-full p-1 hover:bg-red-500"
        >
          <img src={ImageClose} alt="Close" />
        </div>
        <p className="text-3xl py-5 max-lg:hidden "> ویرایش مخاطب</p>
        <label htmlFor="numberPhone">شماره موبایل</label>
        <input
          onChange={handleNumberPhone}
          type="text"
          id="numberPhone"
          className="h-10 rounded-xl focus:outline-none text-black p-3"
        />
        <label htmlFor="name">نام</label>
        <input
          onChange={handleName}
          type="text"
          id="name"
          className="h-10 rounded-xl focus:outline-none text-black p-3"
        />
        <button
          onClick={editContact}
          type="button"
          className="m-auto my-3 bg-[#202329] hover:bg-green-500 w-64 h-12 rounded-2xl"
        >
          ویرایش مخاطب
        </button>
      </form>
    </div>
  );
}
