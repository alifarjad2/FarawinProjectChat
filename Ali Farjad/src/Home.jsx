/* eslint-disable react/prop-types */
import farawin from "farawin";
import imgDots from "./images/three-dots-vertical.png";
import imgPmLeft from "./images/pm-left.png";
import imgPmRight from "./images/pm-right.png";
import { createContext, useContext, useEffect, useRef, useState } from "react";

let _currentUser = JSON.parse(atob(localStorage.token));
let currentUserName = _currentUser.username;

export const DataContext = createContext({
  currentUserName: currentUserName,
  contactList: [],
  chatList: [],
  selectContact: {},
  setSelectContact: () => {},
  reloadData: () => {},
  contactChatList: () => {},
  contactLoading: false,
  chatLoading: false,
});

function useFarawin(name) {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const isMount = useRef(true);

  const fetchData = async () => {
    if (!isMount.current) return;
    setLoading(true);
    setError(null);

    try {
      const data = await farawin.fetch("Get", name);
      if (!isMount.current) return;
      // throw " sds خطایی روی داد";
      if (data.code == "200") {
        setList(data[name + "List"]);
        localStorage[name + "List"] = JSON.stringify(data[name + "List"]);
      } else {
        setError(data);
        setList(JSON.parse(localStorage[name + "List"]));
      }
    } catch (e) {
      setList(JSON.parse(localStorage[name + "List"]));
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    window.onstorage = () => {
      fetchData();
    };
    () => {
      isMount.current = false;
      window.onstorage = () => {};
    };
  }, []);

  return { list, error, loading, fetchData, setList };
}

export default function Home() {
  //home page
  const {
    list: contactList,
    loading: contactLoading,
    fetchData: fetchContacts,
  } = useFarawin("contact");

  const {
    list: chatList,
    loading: chatLoading,
    fetchData: fetchChats,
    setList: setChatList,
  } = useFarawin("chat");

  const { list: userList } = useFarawin("user");
  const [selectContact, setSelectContact] = useState(null);

  const contactChatList = (username) => {
    return chatList?.filter(
      (chat) =>
        (chat.sender == username && chat.receiver == currentUserName) ||
        (chat.receiver == username && chat.sender == currentUserName)
    );
  };

  const reloadData = async () => {
    //can use promise
    fetchContacts();
    fetchChats();
  };

  const [searchText, setSearchText] = useState("");
  const filteredUserList = userList.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.username.toLowerCase().includes(searchText.toLowerCase())
    );
  });
  //main bg and its container

  useEffect(() => {
    const socket = new WebSocket(
      "wss://farawin.iran.liara.run/api/ws/eyJ1c2VybmFtZSI6IjA5MzkzMDEzMzk3IiwicGFzc3dvcmQiOiIxMjMxMjMxMjMiLCJuYW1lIjoiRmFyYXdpbiIsImRhdGUiOiIyMDIzLTA3LTA1VDE3OjU0OjMwLjcwM1oifQ=="
    );
    socket.addEventListener("message", (e) => {
      const newChat = JSON.parse(e.data);
      setChatList((chatList) => [...chatList, newChat]);
    });

    return () => socket.close();
  }, []);

  return (
    <div className="flex h-full justify-center bg-[#34393C] py-2 text-[#989BA0] p-4">
      <div className="flex bg-[#000000] rounded-3xl h-full min-w-[6rem] max-w-[6rem] w-24 ml-[-34px] overflow-y-auto">
        <div className="pl-[44px] py-4 flex flex-col text-[10px]">
          <div className="bg-[#ccccceaa] text-[#161a1b] cursor-not-allowed p-1 m-1 rounded-md mb-2">
            <h4>{_currentUser.name}</h4>
            <p className="text-[8px]">{_currentUser.username}</p>
          </div>

          {filteredUserList.map((user) => {
            return (
              <div
                key={user.username}
                onClick={() => {
                  _currentUser = user;
                  currentUserName = localStorage.username = user.username;
                  localStorage.token = btoa(JSON.stringify(user));
                  reloadData();
                }}
                className="hover:bg-[#989BA088] cursor-pointer p-1 m-1 rounded-md"
                style={{
                  background:
                    _currentUser.username === user.username && "#989BA088",
                }}
              >
                <h4>{user.name}</h4>
                <p className="text-[8px]">{user.username}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{ maxWidth: "calc(100% - 80px)" }}
        className="container flex bg-[#202329] rounded-3xl p-5 h-full flex-1 gap-10"
      >
        <DataContext.Provider
          value={{
            currentUserName,
            contactList,
            chatList,
            selectContact,
            setSelectContact,
            reloadData,
            contactChatList,
            contactLoading,
            chatLoading,
            searchText,
            setSearchText,
          }}
        >
          <ContactsSection />
          <ChatsSection />
        </DataContext.Provider>
      </div>
    </div>
  );
}

function ContactsSection() {
  const {
    contactList,
    contactChatList,
    selectContact,
    setSelectContact,
    currentUserName,
    contactLoading,
    searchText,
    setSearchText,
    chatList,
  } = useContext(DataContext);

  const myContactList = contactList.filter((c) => c.ref == currentUserName);
  const filteredContactList = myContactList.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
      contact.username.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  filteredContactList.push(
    ...myContactList.filter((contact) => {
      return chatList.find(
        (chat) =>
          (chat.receiver == contact.username ||
            chat.receiver == contact.username) &&
          !filteredContactList.find((c) => contact.username == c.username)
      );
    })
  );

  return (
    <div className="flex-[2] flex flex-col max-w-[25%]">
      {/* قسمت سرچ */}
      <div className="bg-[#2E333D] flex w-auto ml-3 mr-1 mx-3  rounded-2xl p-2 pr-4">
        <svg
          className="w-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#989BA0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="search"
          className="bg-transparent text-[#989BA0] w-full outline-none ml-2 h-9 pr-2"
          placeholder="فیلتر مخاطب"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      {/* فسمت لیست کانتک ها */}
      <div className="listPerson my-4 pr-2  overflow-auto pl-2">
        {!contactLoading &&
          filteredContactList?.map((contact, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setSelectContact(contact);
                }}
                className={`flex w-auto p-3 hover:bg-[#5871a3] rounded-2xl cursor-pointer transition ease-in delay-50 hover:-translate-y-1 profile gap-4 mt-2 ${
                  selectContact?.username == contact.username
                    ? "bg-[#2E333D]"
                    : ""
                }`}
              >
                <div className="text-center min-w-[48px] w-[48px] h-[48px] leading-[50px] rounded-xl bg-sky-500 text-[#2E333D]">
                  {contact.name
                    .split(/\s/)
                    .reduce(
                      (response, word) => (response += word.slice(0, 1)),
                      ""
                    )
                    .substr(0, 3)}
                </div>
                <div className="ml-2 max-w-[66%]">
                  <div className="flex justify-between items-center">
                    <h4 className="text-[#e5e6ea] nameActive whitespace-nowrap">
                      {contact.name}

                      <span className="text-[#e5e6ea88] text-xs mr-2 inline-block">
                        {contact.username}
                      </span>
                    </h4>
                    {/* <span className="text-[#989BA0] text-xs">time</span> */}
                  </div>
                  <div>
                    <p className="inline-block text-xs text-[#989BA0] break-words max-w-[100%] max-h-10 overflow-hidden">
                      {contactChatList(contact.username)?.slice(-1)[0]?.text}
                    </p>
                    {/* <span className="rounded-full leading-[8px] p-2 bg-[#7189f8] text-[#e5e6ea] text-sm hidden inline-block ml-3  numberText">
                    dontread
                  </span> */}
                  </div>
                </div>
              </div>
            );
          })}

        {contactLoading && "درحال بارگذاری مخاطبین..."}
      </div>
    </div>
  );
}

function ChatsSection() {
  const {
    contactList,
    contactChatList,
    selectContact,
    setSelectContact,
    reloadData,
  } = useContext(DataContext);

  const scrollContainer = useRef();

  const selectedUserChatList = contactChatList(selectContact?.username);

  useEffect(() => {
    if (scrollContainer.current) scrollContainer.current.scrollTop = 1000000;
  }, [selectedUserChatList]);

  if (selectContact == null)
    return (
      <div className="px-5 max-h-full flex flex-col flex-[4] ">
        مخاطبی انتخاب نمایید
      </div>
    );

  const sendChat = async (text) => {
    await farawin.testAddChat(selectContact.username, text);
    reloadData();
  };

  let lastDate = "";

  return (
    <div className="px-5 max-h-full flex flex-col flex-[4] max-w-[74%] ">
      {/* بخش هدر چت */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg text-[#e5e6ea] font-bold inline-block ml-2 lg:ml-0 nameSelested">
            {selectContact.name}
          </h3>
        </div>
        <img src={imgDots} className="w-5" alt="three-dots-vertical-icon" />
      </div>
      {/* بخش پیام ها */}

      <div
        className="h-full my-1 px-4 overflow-auto max-h-full "
        ref={scrollContainer}
      >
        {selectedUserChatList.map((chat) => {
          const isSend = chat.receiver != selectContact.username;
          const date = new Date(chat.date);
          const chatDateString = date.toLocaleDateString("fa-ir", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          });
          let showDate = false;
          if ((showDate = lastDate != chatDateString)) {
            lastDate = chatDateString;
          }

          return (
            <>
              {showDate && (
                <div className="text-center mt-12 mb-8">
                  <span className="bg-[#2E333D] px-4 py-2 rounded-full text-sm">
                    {chatDateString}
                  </span>
                </div>
              )}
              <div
                key={chat.id}
                className={`flex items-end mb-4 ${
                  isSend ? "" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`text-center min-w-[50px] w-[50px] leading-[50px] rounded-2xl  ${
                    isSend ? "bg-[#4eab6c] text-[#2E333D]" : "bg-[#2E333D]"
                  }`}
                >
                  {selectContact.name
                    .split(/\s/)
                    .reduce(
                      (response, word) => (response += word.slice(0, 1)),
                      ""
                    )}
                </div>
                <div
                  className={`relative mx-4 text-[#eceff3]  p-3 rounded-2xl min-w-[256px] ${
                    isSend ? "bg-[#6b8afe]" : "bg-[#2E333D]"
                  }`}
                >
                  <img
                    src={isSend ? imgPmRight : imgPmLeft}
                    className={`absolute w-6 ${
                      isSend
                        ? "bottom-[-4px] right-[-11px]"
                        : "absolute w-6 bottom-[-9px] left-[-11px]"
                    }`}
                    alt="icon"
                  />
                  {/* <span className="text-sm "> {sel}</span> */}
                  <p className="text-sm sm:text-base break-words">
                    {chat.text}
                  </p>
                  <span className="block text-start mt-2 text-xs text-[#eceff3] flex">
                    {date.toLocaleTimeString("fa-ir", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            </>
          );
        })}

        {/* <div className="flex items-end mb-4 flex-row-reverse ">
          <div className="text-center w-[50px] leading-[50px] bg-[#a9d2fe] rounded-2xl">
            OC
          </div>
          <div
            className="relative ml-3 text-[#eceff3] bg-[#2E333D] p-3 rounded-2xl"
            id="about"
          >
            <img
              src={imgPmLeft}
              className="absolute w-6 bottom-[-9px] left-[-11px]"
              alt="icon"
            />
            <span className="text-sm text-[#989BA0]">Office Chat</span>
            <p className="text-sm sm:text-base">
              were already starting , hurry up ...
            </p>
            <strong className="block text-end mt-2 text-xs text-[#989BA0]">
              08:57
            </strong>
          </div>
        </div> */}
      </div>

      {/* بخش ارسال پیام */}
      <div className="flex w-auto mx-3 rounded-2xl p-2 hover:bg-[#2E333D] focus-within:bg-[#2E333D]">
        <svg
          className="w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#989BA0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
          />
        </svg>
        <input
          type="text"
          className="bg-transparent text-[#989BA0] outline-none ml-2"
          placeholder="Your message"
          onKeyDown={(e) =>
            e.key == "Enter" &&
            (sendChat(e.target.value), (e.target.value = ""))
          }
        />
      </div>
    </div>
  );
}
