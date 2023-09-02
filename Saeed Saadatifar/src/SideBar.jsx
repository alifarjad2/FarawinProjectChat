import farawin from "farawin";
import Contact from "./Contact";
import AddContact from "./AddContact";
import { useEffect, useRef, useState } from "react";
import searchIcon from "./assets/Screenshot 2023-07-17 121255.png";

<<<<<<< HEAD
export default function SideBar({ sC, contacts, load, setC, chats }) {
  const [isAddContactPage, setIsAddContactPage] = useState(false);
  const loading = useRef();
  const contactsContainer = useRef();
  let lastM = (c) => {
    let messages = chats
      .filter(
        (message) =>
          message.receiver == c.username || message.sender == c.username
      )
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    if (messages.length > 0) {
      let clasc = { ...messages[messages.length - 1] };
      return clasc;
    }
    return { text: "پیامی وجود ندارد!", date: false };
  };
=======
export default function SideBar({ sC, contacts, load, setC, lastM }) {
  const [isAddContactPage, setIsAddContactPage] = useState(false);
  const loading = useRef();
  const contactsContainer = useRef();
  
>>>>>>> 0ce7ebd73975271029a0b45a34e4dcc7e5c93c75

  return (
    <>
      {isAddContactPage && (
        <AddContact setActive={setIsAddContactPage} setC={setC} />
      )}
      <div className="flex flex-col">
        {
          //#region HeaderSideBar
        }
        <div className="flex rounded-[15px] bg-[#30323E] w-fit p-[15px] box-border">
          {
            //#region RefreshList
          }
          <svg
            onClick={() => {
              contactsContainer.current.className = "hidden";
              loading.current.style = "display:block";
              farawin.getContacts((e) => {
                setC(
                  e.contactList.filter((e) => e.ref == localStorage.username)
                );
                loading.current.style = "display:hidden";
                contactsContainer.current.className =
                  "grow flex flex-col overflow-scroll pt-[11px] mt-4";
              });
            }}
            className="w-6 h-full text-[#9CA0A6] ml-3 self-center cursor-pointer hover:text-[#FAFBFD]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"
            />
          </svg>
          {
            //#endregion
          }
          {
            //#region AddContact
          }
          <svg
            onClick={() => {
              setIsAddContactPage(true);
            }}
            className="w-6 h-6 text-[#9CA0A6] ml-3 self-center cursor-pointer hover:text-[#FAFBFD]"
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
          {
            //#endregion
          }
          {
            //#region SearchBox
          }
          <div className="hover:cursor-pointer w-[25px] self-center">
            <img src={searchIcon} alt="searchIcon" />
          </div>
          <div className="mr-[10px]">
            <input
              type="text"
              placeholder="جستجو"
              className="bg-[#30323E] text-[18px] grow h-full border-none focus:outline-none w-[190px]"
            />
          </div>
          {
            //#endregion
          }
        </div>
        {
          //#endregion
        }
        {
          //#region ContactsContainer & Loading
        }
        <div
          ref={contactsContainer}
          className={
            load
              ? "grow flex flex-col overflow-scroll pt-[11px] mt-4"
              : "hidden"
          }
        >
          {contacts?.map((contact) => (
            <Contact
<<<<<<< HEAD
              lastM={lastM(contact)}
=======
              last={() => {
                if(e.key.search(contact.username)){
                  return e.value;
                }
                return "No Message";
              }}
>>>>>>> 0ce7ebd73975271029a0b45a34e4dcc7e5c93c75
              key={contact.username}
              contact={contact}
              set={sC}
            />
          ))}
        </div>
        <div
          role="status"
          className={`m-auto ${load && "hidden"}`}
          ref={loading}
        >
          <svg
            aria-hidden="true"
            className="inline w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#9CA0A6]"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
        {
          //#endregion
        }
      </div>
    </>
  );
}
