import farawin from "farawin";
import { useState } from "react";
import { useEffect } from "react";
import AddContact from "./AddContact";
// ************* images
import searchIcon from "../assets/search.png";
import avatar from "../assets/avatar.png";
import refresh from "../assets/refresh.png";

export default function Contacts({
  setSelectedCon,
  setC,
  setChatBox,
  contacts,
}) {
  const [isAddPage, setIsAddPage] = useState(false);

  return (
    <div id="sidebar" className=" h-full flex flex-col p-3 ml-2 ">
      {isAddPage && <AddContact setC={setC} setActive={setIsAddPage} />}
      <div id="headerOfSearchBox" className="flex">
        <div id="searchBox" className="grow h-[50px] flex rounded-xl p-1">
          <img
            src={searchIcon}
            alt=""
            className="w-[36px] h-[36px] ml-2 hover:cursor-pointer"
          />
          <input
            type="search"
            className="grow h-10 bg-inherit focus:outline-none rounded-xl"
            placeholder="search"
          />
        </div>
        <svg
          onClick={() => {
            setIsAddPage(true);
          }}
          className="w-6 h-6 text-[#9CA0A6] self-center cursor-pointer hover:text-[#FAFBFD]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
          />
        </svg>
        <div
          id="refreshContacts"
          className=" p-2 hover:cursor-pointer"
          onClick={() => {
            farawin.getContacts((e) => {
              setC(e.contactList);
            });
          }}
        >
          <img src={refresh} alt="" className="" />
        </div>
      </div>
      <div
        id="contacts"
        className="w-full h-full mt-2 overflow-y-auto grid auto-rows-max "
      >
        {contacts
          ?.filter((item) => item.ref == "09037461349")
          .map((item) => (
            <div
              key={item.username}
              id={item.name}
              title={item.username}
              className="w-full h-[80px] rounded-xl hover:bg-[#30323E] p-2 grid grid-cols-[60px,1fr] grid-rows-2 gap-x-2"
              onClick={(e) => {
                setSelectedCon([item.username, item.name]);
                setChatBox(true);
              }}
            >
              <img
                src={avatar}
                alt=""
                className="w-[60px] h-[60px] bg-yellow-600 "
              />
              <p className=""> {item.name} </p>
              <p className="whitespace-nowrap col-start-2 "> آخرین پیام .. </p>
            </div>
          ))}
      </div>
    </div>
  );
}
