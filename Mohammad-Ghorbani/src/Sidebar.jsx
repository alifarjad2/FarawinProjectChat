import { useState } from "react";

import AddContact from "./AddContact";
import ImageSearch from "./Assets/search-48.png";
import ImageAddContact from "./Assets/add-contact-48.png";
import ImageRef from "./Assets/refresh-48.png";

function Sidebar({
  contact,
  setSelectedContact,
  handleContactButtonClick,
  allChats,
  selectedContact,
}) {
  const [filterSearch, setFilterSearch] = useState("");
  const [showAddContact, setShowAddContact] = useState(false);

  const handleSearch = (e) => {
    setFilterSearch(e.target.value);
  };

  const handleAddContact = () => {
    setShowAddContact(true);
  };

  const handleCloseAddContact = () => {
    setShowAddContact(false);
  };

  const handleContactClick = (name) => {
    setSelectedContact(name);
  };

  const filteredContacts = contact.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filterSearch.toLowerCase()) ||
      contact.username.includes(filterSearch)
  );
  const time = (dateString) => {
    return new Date(dateString).toLocaleTimeString("fa-IR", {
      hourCycle: "h24",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {showAddContact ? (
        <AddContact onClose={handleCloseAddContact} />
      ) : (
        <div
          id="sidebar"
          className={`flex flex-col w-1/3 h-full 
          ${selectedContact ? "max-lg:hidden" : ""} 
          max-lg:absolute max-lg:left-0 max-lg:top-0 max-lg:w-full max-lg:h-full max-lg:bg-[#202329] max-lg:z-10 max-lg:rounded-3xl max-lg:overflow-hidden text-right`}
        >
          <div className="h-16 flex flex-row rounded-3xl my-3 mx-4 bg-[#2E333D] ">
            <img
              className="w-10 m-auto cursor-pointer"
              src={ImageSearch}
              alt="Search"
            />
            <input
              onChange={handleSearch}
              id="searchContact"
              type="search"
              placeholder="جستجو"
              className="w-5/6 h-5/6 rounded- bg-inherit m-auto focus:outline-none text-right text-xl"
            />
            <div
              onClick={handleAddContact}
              className="p-3 h-full flex items-center rounded-3xl hover:bg-white "
            >
              <img src={ImageAddContact} className="w-12 cursor-pointer" />
            </div>
            <div
              onClick={handleContactButtonClick}
              className="p-3 h-full flex items-center rounded-3xl hover:bg-white "
            >
              <img className="w-12 cursor-pointer" src={ImageRef} />
            </div>
          </div>
          {!contact ? (
            <div className="text-white text-2xl m-auto font-bold">
              مخاطبی وجود ندارد
            </div>
          ) : (
            <div className="custom-scrollbar w-11/12 h-full rounded-2xl m-auto overflow-y-auto overflow-x-hidden">
              {filteredContacts.length === 0 ? (
                <div className="text-white text-2xl text-center font-bold">
                  مخاطب وجود ندارد
                </div>
              ) : (
                filteredContacts.map((contact, index) => {
                  const lastMessage = allChats.reduce((lastMessage, chat) => {
                    if (
                      (chat.sender === localStorage.myUsername &&
                        chat.receiver === contact.username) ||
                      (chat.receiver === localStorage.myUsername &&
                        chat.sender === contact.username)
                    ) {
                      return chat;
                    } else {
                      return lastMessage;
                    }
                  }, null);

                  return (
                    <div
                      key={index}
                      onClick={() => handleContactClick(contact)}
                      className="flex flex-row hover:bg-[#2E333D] rounded-3xl h-24 w-full m-auto cursor-pointer relative hover:text-black "
                    >
                      <div className="bg-white w-16 h-16 rounded-2xl text-center py-4 text-xl text-black absolute right-3 top-4">
                        {contact.name[0]}
                      </div>
                      <div className="absolute right-24 top-5 text-xl">
                        {contact.name}
                      </div>
                      {lastMessage && (
                        <>
                          <div className="absolute top-[3.7rem] text-xs right-24 h-5 w-44 text-slate-400 overflow-hidden ">
                            {lastMessage.text}
                          </div>
                          <div className="absolute top-7 left-2 text-xs text-slate-400 ">
                            {time(lastMessage.date)}
                          </div>
                        </>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Sidebar;
