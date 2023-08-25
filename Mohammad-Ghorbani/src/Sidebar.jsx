import AddContact from "./AddContact";
import Chatview from "./Chatview";
import farawin from "farawin";
import { useState, useEffect } from "react";

import ImageSearch from "./Assets/search-48.png";
import ImageClose from "./Assets/close-48.png";
import ImageAddContact from "./Assets/add-contact-48.png";

function Sidebar() {
  const [contact, setContact] = useState([]);
  const [filterSearch, setFilterSearch] = useState("");
  const [showAddContact, setShowAddContact] = useState(false);
  const [selectedContact, setSelectedContact] = useState("");

  const getContact = async () => {
    const res = await farawin.getContacts();
    // برای تست
    // console.table(res.contactList);

    setContact(
      res.contactList.filter((contact) => {
        return contact.ref === localStorage.myUsername;
      })
    );
  };

  useEffect(() => {
    getContact();
  }, []);

  const handleSearch = (e) => {
    setFilterSearch(e.target.value);
  };
  const resultFilterSearch = contact.filter((contact) => {
    return contact.name.toLowerCase().includes(filterSearch.toLowerCase());
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
          className="flex flex-col w-1/3 h-full max-lg:hidden max-lg:absolute max-lg:left-0 max-lg:top-0 max-lg:w-full max-lg:h-full max-lg:bg-[#202329] max-lg:z-10 max-lg:rounded-3xl max-lg:overflow-hidden text-right"
        >
          <div className="h-20 flex flex-row rounded-3xl m-7 bg-[#2E333D]">
            <img
              className="w-12 h-12 m-auto cursor-pointer"
              src={ImageSearch}
              alt="Search"
            />
            <input
              onChange={handleSearch}
              id="searchContact"
              type="search"
              placeholder="Search"
              className="w-5/6 h-5/6 pl-1 mr-2 rounded- bg-inherit m-auto focus:outline-none text-right"
            />
            <button
              id="closeMenu"
              className="lg:hidden p-3 h-full w-60 rounded-3xl flex justify-evenly items-center bg-inherit max-lg:hover:bg-red-600 overflow-hidden"
            >
              Colse Sidebar
              <img
                className="lg:hidden w-12 h-12"
                src={ImageClose}
                alt="close sidebar"
              />
            </button>
            <div
              onClick={handleAddContact}
              className=" p-2 h-full m-auto rounded-3xl hover:bg-white "
            >
              <img src={ImageAddContact} className="w-14  cursor-pointer " />
            </div>
          </div>

          <div className="custom-scrollbar w-11/12 h-full rounded-2xl m-auto overflow-y-auto overflow-x-hidden">
            {!resultFilterSearch.length === 0 ? (
              <>
                {" "}
                {contact.map((contact, index) => (
                  <div
                    key={index}
                    onClick={() => handleContactClick(contact.name)}
                    className="flex flex-row hover:bg-[#2E333D] rounded-3xl h-24 w-full m-auto cursor-pointer relative min-w-0 hover:text-black"
                  >
                    <div className="bg-white w-16 h-16 rounded-2xl text-center m-auto ml-4 mr-3 p-4 text-xl text-black">
                      {contact.name[0]}
                    </div>
                    <div className="pt-5 text-xl cursor-default">
                      {contact.name}
                    </div>
                  </div>
                ))}{" "}
              </>
            ) : (
              <>
                {resultFilterSearch.map((contact, index) => (
                  <div
                    key={index}
                    onClick={() => handleContactClick(contact.name)}
                    className="flex flex-row hover:bg-[#2E333D] rounded-3xl h-24 w-full m-auto cursor-pointer relative min-w-0 hover:text-black"
                  >
                    <div className="bg-white w-16 h-16 rounded-2xl text-center m-auto ml-4 mr-3 p-4 text-xl text-black">
                      {contact.name[0]}
                    </div>
                    <div className="pt-5 text-xl cursor-default">
                      {contact.name}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
