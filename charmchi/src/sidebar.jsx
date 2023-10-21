// import { space } from "postcss/lib/list";
import Contacts from "./contacts";
import AddContact from "./addContact";
import { useState } from "react";
import Store from "./ZUSTAND";
import DeleteContact from "./deleteContact";

function Sidebar() {
  const { setContacts } = Store();
  const [inputValue, setInputValue] = useState(null);
  const [addContact, setAddContact] = useState(false);
  const [deleteContact, setDeleteContact] = useState(false);

  return (
    <>
      {addContact ? <AddContact setAddContact={setAddContact} /> : null}
      {deleteContact ? (
        <DeleteContact setDeleteContact={setDeleteContact} />
      ) : null}
      <div className="w-full sm:w-2/3 md:w-1/3 p-1 flex flex-col">
        <div
          id="header"
          className=" h-12 bg-slate-400 flex m-1 p-1.5 rounded-xl"
          dir="rtl"
        >
          <svg
            id="refresh"
            className="m-1 hover:cursor-pointer"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="white"
            onClick={setContacts}
          >
            <path
              d="M 7.1601562 3 L 8.7617188 5 L 18 5 C 18.551 5 19 5.448 19 6 L 19 15 L 16 15 L 20 20 L 24 15
              L 21 15 L 21 6 C 21 4.346 19.654 3 18 3 L 7.1601562 3 z M 4 4 L 0 9 L 3 9 L 3 18 C 3 19.654 4.346 21 
              6 21 L 16.839844 21 L 15.238281 19 L 6 19 C 5.449 19 5 18.552 5 18 L 5 9 L 8 9 L 4 4 z"
            ></path>
          </svg>
          <svg
            onClick={() => setAddContact(true)}
            id="add"
            className="hover:cursor-pointer"
            fill="white"
            viewBox="0 0 20 20"
          >
            <path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path>
          </svg>
          <svg
            onClick={() => setDeleteContact(true)}
            id="delete"
            className="hover:cursor-pointer"
            fill="white"
            viewBox="0 0 30 30"
          >
            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
          </svg>
          <input
            type="text"
            className="w-full p-1 focus:outline-none text-white mr-1 bg-inherit"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <svg
            id="Search"
            className="my-1 mr-1.5 hover:cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
            fill="white"
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </svg>
        </div>
        <Contacts valueInputSearchContacts={inputValue} />
      </div>
    </>
  );
}

export default Sidebar;
