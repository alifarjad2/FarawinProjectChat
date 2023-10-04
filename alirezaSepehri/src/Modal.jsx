import farawin from 'farawin'
import InputDiv from "./InputDiv";
import ButtonForm from "./ButtonForm";
import { useState } from "react";

export default function Modal({ user, modal, setModal }) {
  const [contact, setContact] = useState({
    username: "",
    name: "",
  });

  const handleAddUser = async () => {
    // const result = await farawin.setContact(contact.username, contact.name);
    const result = await farawin.testAddContact(contact.username, contact.name)
    // if (result.code == 200) {
    //   setPage("chatPage");
    //   setUser(result.user);
    // }
    alert(result.message);
  };

  return (
    <div
      className={
        modal +
        " fixed justify-center pt-28 top-0 left-0 right-0 h-full bg-[#00000088] backdrop-blur-sm z-20 shadow-slate-200 shadow-md"
      }
    >
      <div className="relative w-72 h-80 bg-white rounded-lg p-4 text-stone-800">
        <button
          className="absolute top-3 left-3 w-5"
          onClick={() => {
            setModal("hidden");
          }}
        >
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </button>
        <header className="text-xl font-semibold">افزودن مخاطب</header>
        <div className="my-10">
          <InputDiv
            type="number"
            id="mobile"
            label="شماره موبایل"
            onInput={(e) => setContact({ ...contact, username: e.target.value })}
          />
          <InputDiv
            type="text"
            id="name"
            label="نام مخاطب"
            onInput={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>
        <ButtonForm text="افزودن" onClick={handleAddUser} />
      </div>
    </div>
  );
}
