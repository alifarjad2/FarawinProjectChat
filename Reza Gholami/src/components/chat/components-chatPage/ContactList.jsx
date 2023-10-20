import useSWR from "swr";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaUserPlus,
  FaTimes,
  SearchContact,
  useStore,
  Contact,
  spinner
} from "@/components";
///////////////////////////////////////// fetcher swr
const fetchWithToken = (url) =>
  fetch(url, {
    headers: {
      authorization: localStorage.token,
    },
  }).then((res) => res.json());
////////////////////////////////////////
const ContactList = ({ showDrawer }) => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const { setContactSelected, chatData } = useStore();
  const { data, error, isLoading } = useSWR(
    "https://farawin.iran.liara.run/api/contact",
    fetchWithToken
  );
  //////////////////////////////// for get contact me
  const userList = data?.contactList?.filter(
    (contact) => contact.ref === localStorage.username
  );
  const searchContact = (e) => {
    setSearchInputValue(e.target.value);
  };
  let searchedContact = userList?.filter(
    (item) =>
      item.name.includes(searchInputValue) ||
      item.username.includes(searchInputValue)
  );
  //////////////////////////////// set contact selected
  const selectedContact = (contact) => {
    setContactSelected(contact);
  };
  ///////////////////////////////for get message every contact for last message to show contact
  const contactChatList = (username) => {
    return chatData?.chatList.filter(
      (chat) =>
        (chat.sender == username && chat.receiver == localStorage.username) ||
        (chat.receiver == username && chat.sender == localStorage.username)
    );
  };
  /////////////////////////////// Return
  return (
    <>
      <div className="flex gap-1" >
        <SearchContact onInput={searchContact} value={searchInputValue} />
        <Link
          to={"/chat/addContact"}
          className="flex justify-center items-center bg-[#2E333D] w-14 rounded-2xl">
          <FaUserPlus className="w-6 h-6 text-[#989BA0]" />
        </Link>
        <div
          className="flex justify-center items-center bg-[#2E333D] w-14 cursor-pointer rounded-2xl lg:hidden"
          onClick={showDrawer}>
          <FaTimes className="w-6 h-6 text-[#989BA0]" />
        </div>
      </div>
      <div className="mt-2 h-[67vh] overflow-auto">
        {/*use index foe key because username Repetitious in list  */}
        {isLoading ? (
          <div className="w-full h-full flex justify-center items-center">
            <div className="text-[#e5e7eb] font-bold text-sm inline-block">
              در حال دریافت مخاطبین ...
              <img
                src={spinner}
                className="w-24 h-18 mx-auto "
              />
            </div>
          </div>
        ) : error ? (
          <div className="w-full h-full flex justify-center items-center">
            <div className="text-[#e5e7eb] font-bold  bg-red-900 p-2 rounded-md text-sm inline-block">
              خطا در دریافت اطلاعات ...
            </div>
          </div>
        ) : (
          searchedContact?.map((contact) => (
            <Contact
              contact={contact}
              key={contact.username}
              click={selectedContact}
              lastPm={contactChatList(contact.username)?.slice(-1)[0]?.text}
            />
          ))
        )}
        {searchedContact?.length > 0 ? (
          ""
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="text-[#e5e7eb] font-bol
            
            d text-sm inline-block">
              موردی یافت نشد !
            </div>
          </div>
        )}
        {userList?.length > 0 ? (
          ""
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <div className="text-[#e5e7eb] font-bold text-sm inline-block">
              مخاطبی برای نمایش وجود ندارد
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactList;
