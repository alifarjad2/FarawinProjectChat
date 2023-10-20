import farawin from "farawin";
import Contact from "./Contact";
import AddContact from "./AddContact";
import SearchBox from "./SearchBox";
import { useEffect, useRef, useState } from "react";
import searchIcon from "./assets/Screenshot 2023-07-17 121255.png";

export default function SideBar({
  sC,
  contacts,
  load,
  setC,
  isSearchBox,
  setIsSearchBox,
  selectedContact,
  chatList,
  lastM,
  setHideSideBar,
  size,
  contactss,
}) {
  const [isAddContactPage, setIsAddContactPage] = useState(false);
  const [searchInp, setSearchInp] = useState("");
  const loading = useRef();
  const contactsContainer = useRef();
  return (
    <>
      {isAddContactPage && (
        <AddContact setActive={setIsAddContactPage} setC={setC} />
      )}

      <div className={`flex flex-col shrink-0 ${size == "sm" ? "w-full" : ""}`}>
        {
          //#region HeaderSideBar
        }
        <div className="relative">
          <div>
            <div
              className={`flex ${
                isSearchBox ? "rounded-t-[15px]" : "rounded-[15px]"
              } bg-[#30323E] ${
                isSearchBox ? "bg-opacity-100" : "bg-opacity-75"
              } p-[15px] box-border gap-2`}
            >
              {
                //#region RefreshList
              }
              <svg
                onClick={() => {
                  contactsContainer.current.className = "hidden";
                  loading.current.style = "display:block";
                  farawin.getContacts((e) => {
                    setC(
                      e.contactList.filter(
                        (e) => e.ref == localStorage.username
                      )
                    );
                    loading.current.style = "display:hidden";
                    contactsContainer.current.className =
                      "grow flex flex-col overflow-scroll pt-[11px] mt-4";
                  });
                }}
                className="h-full shrink-0 w-5 text-[#9CA0A6] self-center cursor-pointer hover:text-[#FAFBFD]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
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
                className="shrink-0 w-5 h-full text-[#9CA0A6] self-center cursor-pointer hover:text-[#FAFBFD]"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 20 20"
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
              <div
                onClick={() => setIsSearchBox(true)}
                id="SearchInpBox"
                className=" grow flex gap-2"
              >
                <div
                  id="SearchIconBox"
                  className="hover:cursor-pointer w-[25px] self-center"
                >
                  <img id="SearchIcon" src={searchIcon} alt="searchIcon" />
                </div>
                <input
                  id="SearchInp"
                  type="text"
                  placeholder="جستجو"
                  className="bg-[#30323E] min-w-44 w-full grow bg-opacity-10 text-[18px] shrink h-full border-none focus:outline-none"
                  onInput={(event) =>
                    setSearchInp(event.target.value.toUpperCase())
                  }
                />
              </div>
              {
                //#endregion
              }
              <svg
                onClick={() => {
                  localStorage.clear();
                  location.reload();
                }}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-full shrink-0 w-5 text-[#9CA0A6] self-center cursor-pointer hover:text-[#FAFBFD]"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </div>
          </div>
          <div id="SearchedBox" onClick={() => setIsSearchBox(true)}>
            {isSearchBox && (
              <SearchBox
                setHideSideBar={setHideSideBar}
                contactss={contactss}
                id="SearchedBox"
                contacts={contacts}
                searchInp={searchInp}
                set={sC}
                chatList={chatList}
                selectedContact={selectedContact}
              />
            )}
          </div>
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
              setHideSideBar={setHideSideBar}
              last={
                lastM ? (lastM.has(contact) ? lastM.get(contact) : null) : null
              }
              key={contact.username}
              contact={contact}
              set={sC}
              selectedContact={selectedContact}
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
