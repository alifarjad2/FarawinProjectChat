import AddContact from "./AddContact";
import { useState } from "react";

import ImageSearch from "./Assets/search-48.png";
import ImageClose from "./Assets/close-48.png";
import ImageAddContact from "./Assets/add-contact-48.png";
import ImageRef from "./Assets/refresh-48.png";

function Sidebar({
  contact,
  setSelectedContact,
  handleContactButtonClick,
  openMenu,
  closeMenu,
}) {
  const [filterSearch, setFilterSearch] = useState("");
  const [showAddContact, setShowAddContact] = useState(false);

  const handleSearch = (e) => {
    setFilterSearch(e.target.value);
  };

  //console.log(contact);
  const resultFilterSearch = contact.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(filterSearch.toLowerCase()) ||
      contact.username.includes(filterSearch)
    );
  });

  const handleAddContact = () => {
    setShowAddContact(true);
  };

  const handleCloseAddContact = () => {
    setShowAddContact(false);
  };

  const handleContactClick = (name) => {
    setSelectedContact(name);
  };

  return (
    <>
      {showAddContact ? (
        <AddContact onClose={handleCloseAddContact} />
      ) : (
        <div
          id="sidebar"
          className={`flex flex-col w-1/3 h-full 
          ${!openMenu ? "max-lg:hidden" : ""} 
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
            <button
              onClick={closeMenu}
              id="closeMenu"
              className="lg:hidden p-3 h-full  rounded-3xl flex  items-center bg-inherit max-lg:hover:bg-red-600 overflow-hidden"
            >
              <img className="lg:hidden w-12 " src={ImageClose} />
            </button>
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
            <div className="text-white text-2xl m-auto font bold">
              مخاطبی وجود ندارد
            </div>
          ) : (
            <div className="custom-scrollbar w-11/12 h-full rounded-2xl m-auto overflow-y-auto overflow-x-hidden">
              {resultFilterSearch.length === 0
                ? contact.map((contact, index) => (
                    <div
                      key={index}
                      onClick={() => handleContactClick(contact)}
                      className="flex flex-row hover:bg-[#2E333D] rounded-3xl h-24 w-full m-auto cursor-pointer relative hover:text-black"
                    >
                      <div className="bg-white  w-16 h-16 rounded-2xl text-center py-4 text-xl  text-black  absolute right-3 top-4">
                        {contact.name[0]}
                      </div>
                      <div className="absolute right-24 top-5 text-xl">
                        {contact.name}
                      </div>
                    </div>
                  ))
                : resultFilterSearch.map((contact, index) => (
                    <div
                      key={index}
                      onClick={() => handleContactClick(contact)}
                      className="flex flex-row hover:bg-[#2E333D] rounded-3xl h-24 w-full m-auto cursor-pointer relative hover:text-black"
                    >
                      <div className="bg-white  w-16 h-16 rounded-2xl text-center py-4 text-xl  text-black  absolute right-3 top-4">
                        {contact.name[0]}
                      </div>
                      <div className="absolute right-24 top-5 text-xl">
                        {contact.name}
                      </div>
                    </div>
                  ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Sidebar;
