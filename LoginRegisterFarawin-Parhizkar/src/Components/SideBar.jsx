import React, { useState } from "react";
import GetContacts from "./GetContacts";
import SearchBar from "./SearchBar";
import AddIcon from "../assets/AddIco.png";
import RefIcon from "../assets/RefIco.png";
import AddPopUp from "./AddContactPopUp";
import CloseIco from "../assets/CloseIco.png";
const SideBar = ({ closeMenu }) => {
  const [refrehContact, setRefrehContact] = useState("");
  const [isAddContactPopupOpen, setAddContactPopupOpen] = useState(false);
  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex items-center w-full">
        <div className="flex flex-1 gap-1">
          <button onClick={()=>{return localStorage.clear() , location.reload()}} className="p-1 border-2 rounded-lg hover:bg-red-500 transition-all duration-300">Exit</button>
          <h1 className="bg-violet-400 p-[5px] rounded-lg">فراوین</h1>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => {
              closeMenu(false);
            }}
            className="w-8 lg:hidden"
          >
            <img src={CloseIco} alt="" />
          </button>

          <button
            onClick={() => {
              setRefrehContact(Math.random());
            }}
            className="w-8 rounded-full hover:animate-spin"
          >
            <img src={RefIcon} alt="" />
          </button>
          <button
            onClick={() => setAddContactPopupOpen(true)}
            className="w-8 rounded-full hover:animate-spin"
          >
            <img src={AddIcon} alt="Add Icon" />
          </button>
        </div>
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="overflow-y-scroll w-full">
        <GetContacts Toggle={refrehContact} />
      </div>
      {isAddContactPopupOpen && (
        <div
          style={{ zIndex: 2 }}
          className={`absolute top-0 bottom-0 right-0 left-0 w-screen  backdrop-blur-lg`}
        >
          <div className="flex justify-center items-center h-full w-full">
            <AddPopUp
              closing={setAddContactPopupOpen}
              Toggle={setRefrehContact}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
