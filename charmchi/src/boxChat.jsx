import { useEffect, useRef, useState } from "react";
import farawin from "farawin";
import EditContact from "./editContact";
import Store from "./ZUSTAND";

function BoxChat() {
  const { informationChatter, setInformationChatter, setAllChats, allChats } =
    Store();
  const scrollRef = useRef();
  useEffect(() => {
    setAllChats();
    if (scrollRef.current) scrollRef.current.scrollTop = 1000000000;
  }, [allChats]);
  const [showEditContact, setShowEditContact] = useState(false);
  const [senderInputValue, setSenderInputValue] = useState(null);
  const sender = useRef();
  return (
    <>
      <div className="grow  p-2 flex flex-col gap-2">
        <header className="h-[75px] bg-gray-600 rounded-2xl flex ">
          <svg
            id="back"
            className="my-7 mx-2 hover:cursor-pointer"
            fill="white"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            onClick={() => setInformationChatter(false)}
          >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>
          <svg viewBox="0 0 32 32" height="80" width="70" fill="white">
            <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
            <path d="M16,17a5,5,0,1,1,5-5A5,5,0,0,1,16,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,16,9Z" />
            <path d="M25.55,24a1,1,0,0,1-.74-.32A11.35,11.35,0,0,0,16.46,20h-.92a11.27,11.27,0,0,0-7.85,3.16,1,1,0,0,1-1.38-1.44A13.24,13.24,0,0,1,15.54,18h.92a13.39,13.39,0,0,1,9.82,4.32A1,1,0,0,1,25.55,24Z" />
          </svg>
          <p className="w-fit h-fit p-2 ml-1 mt-4 text-white text-lg ">
            {" "}
            {informationChatter.name}{" "}
          </p>
          <svg
            id="edit"
            className="absolute right-5 my-4 hover:cursor-pointer"
            height="40"
            fill="white"
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setShowEditContact(true);
            }}
          >
            <path
              d="m19 20.25c0-.402-.356-.75-.75-.75-2.561 0-11.939 0-14.5 0-.394 0-.75.348-.75.75s.356.75.75.75h14.5c.394 0 .75-.348.75-.75zm-7.403-3.398 9.124-9.125c.171-.171.279-.423.279-.684 0-.229-.083-.466-.28-.662l-3.115-3.104c-.185-.185-.429-.277-.672-.277s-.486.092-.672.277l-9.143 9.103c-.569 1.763-1.555 4.823-1.626 5.081-.02.075-.029.15-.029.224 0 .461.349.848.765.848.511 0 .991-.189 5.369-1.681zm-3.27-3.342 2.137 2.137-3.168 1.046zm.955-1.166 7.651-7.616 2.335 2.327-7.637 7.638z"
              fillRule="nonzero"
            />
          </svg>
          <svg
            id="refresh"
            className="mt-6 absolute right-[70px] hover:cursor-pointer"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="white"
            onClick={setAllChats}
          >
            <path
              d="M 7.1601562 3 L 8.7617188 5 L 18 5 C 18.551 5 19 5.448 19 6 L 19 15 L 16 15 L 20 20 L 24 15
              L 21 15 L 21 6 C 21 4.346 19.654 3 18 3 L 7.1601562 3 z M 4 4 L 0 9 L 3 9 L 3 18 C 3 19.654 4.346 21 
              6 21 L 16.839844 21 L 15.238281 19 L 6 19 C 5.449 19 5 18.552 5 18 L 5 9 L 8 9 L 4 4 z"
            ></path>
          </svg>
        </header>
        <div
          ref={scrollRef}
          onScroll={(e) => console.log(e.target.clientHeight)}
          className="grow rounded-2xl flex w-full flex-col gap-2 overflow-y-auto p-2"
        >
          {allChats?.filter(
            (chat) =>
              chat.sender == informationChatter.username ||
              chat.receiver == informationChatter.username
          ).length > 0 ? (
            allChats
              .filter(
                (chat) =>
                  chat.sender == informationChatter.username ||
                  chat.receiver == informationChatter.username
              )
              .map((chat) => (
                <div
                  key={chat.id}
                  className={`bg-gray-500 bg-opacity-40 w-72 sm:w-80 h-fit py-2 pl-2 pr-8 rounded-xl ${
                    chat.sender == localStorage.username ? "self-end" : ""
                  } 
          `}
                >
                  {" "}
                  <p className="text-lg font-medium break-words">
                    {" "}
                    {chat.text}{" "}
                  </p>
                  <div className="text-[13px]" dir="rtl">
                    {new Date(chat.date).toLocaleString("fa-IR")}
                  </div>
                </div>
              ))
          ) : (
            <div className="m-auto">No Massage!</div>
          )}
        </div>
        <div className="bg-gray-500 bg- h-16 py-3 px-2 rounded- flex  ">
          <svg
            className="cursor-pointer "
            width="35"
            fill="white"
            viewBox="0 0 24 20"
            onClick={() => {
              if (senderInputValue)
                farawin.testAddChat(
                  informationChatter.username,
                  senderInputValue,
                  (res) => {
                    if (res.code == 200) {
                      farawin.getChats((res) => {
                        setAllChats(
                          res.chatList.filter(
                            (chat) =>
                              chat.receiver == localStorage.username ||
                              chat.sender == localStorage.username
                          )
                        );
                      });
                      setSenderInputValue("");
                    }
                  }
                );
            }}
          >
            <path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z" />
          </svg>
          <input
            ref={sender}
            className="grow bg-inherit focus:outline-none text-right p-2 text-white "
            type="text"
            value={senderInputValue}
            placeholder="Message"
            onChange={(e) => setSenderInputValue(e.target.value)}
          />
        </div>
      </div>
      {showEditContact ? (
        <EditContact setShowEditContact={setShowEditContact} />
      ) : (
        ""
      )}
    </>
  );
}
export default BoxChat;
