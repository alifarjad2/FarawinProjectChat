import React, { useEffect, useState, useRef } from "react";
import farawin from "farawin";
import ImageAttach from "./Assets/attach-48.png";
import ImageMenu from "./Assets/menu-50.png";
// import ImageMore from "./Assets/more-50.png";
import ImageRef from "./Assets/refresh-48.png";
import ImageSendMessage from "./Assets/send-48.png";
import ImageExit from "./Assets/exit-48.png";

function ChatBox({
  selectedContact,
  sender,
  receiver,
  handleContactButtonClick,
  openMenu,
}) {
  const [sendMessage, setSendMessage] = useState([]);

  useEffect(() => {
    selectedContact ? (document.title = selectedContact.name) : null;
  }, [selectedContact]);

  const handleSendMessage = (e) => {
    setSendMessage(e.target.value);
  };

  const senderMessages = async () => {
    const res = await farawin.testAddChat(
      selectedContact.username,
      sendMessage
    );
    return res;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      senderMessages();
      setSendMessage("");
      handleContactButtonClick();
    }
  };

  const handleSendButton = () => {
    senderMessages();
    setSendMessage("");
    handleContactButtonClick();
  };

  const messages = [
    ...(Array.isArray(sender) ? sender : []),
    ...(Array.isArray(receiver) ? receiver : []),
  ];

  messages.sort((a, b) => new Date(a.date) - new Date(b.date));

  const formatDate = (dateString) => {
    const time = {
      hourCycle: "h24",
      hour: "2-digit",
      minute: "2-digit",
    };
    const date = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };

    const newDate = [
      new Date(dateString).toLocaleTimeString("fa-IR", time),
      new Date(dateString).toLocaleDateString("fa-IR", date),
    ];
    return newDate;
  };

  const today = new Date().toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const chatContainerRef = useRef();
  useEffect(() => {
    if (chatContainerRef.current)
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight -
        chatContainerRef.current.clientHeight;
  });

  return (
    <div
      id="chatBox"
      className="w-2/3 h-full flex flex-col bg-[#202329] max-lg:w-full"
    >
      <div className="pl-5 w-full h-20 flex flex-row justify-between relative">
        <button
          type="button"
          onClick={openMenu}
          id="openMenu"
          className="lg:w-0 lg:cursor-pointer absolute left-0 top-5 cursor-pointer"
        >
          <img className="w-8 " src={ImageMenu} alt="open Menu" />
        </button>
        <button
          onClick={handleContactButtonClick}
          className=" w-9 left-10 top-5 absolute max-lg:left-16"
        >
          <img src={ImageRef} />
        </button>
        <div className="text-2xl absolute top-5 right-7">
          {selectedContact && selectedContact.name}
        </div>
        <div className="text-xs text-slate-500 absolute top-[3.3rem] right-[1.73rem]">
          {selectedContact && selectedContact.username}
        </div>
        <img
          title="خروج از اکانت "
          className="w-7 h-7 cursor-pointer absolute left-1 top-6 max-lg:left-9"
          src={ImageExit}
          alt="more"
          onClick={() => {
            localStorage.removeItem("token");
            location.reload();
          }}
        />
      </div>
      <div
        id="pv"
        ref={chatContainerRef}
        className="px-1 w-full h-5/6 overflow-y-auto  flex flex-col gap-y-2 scroll-smooth "
      >
        {messages.map((message, index) => (
          <>
            {index === 0 ||
            formatDate(messages[index - 1].date)[1] !==
              formatDate(message.date)[1] ? (
              <div className="bg-white text-black w-32 my-5 m-auto text-center rounded-full ">
                {formatDate(message.date)[1] === today
                  ? "امروز"
                  : formatDate(message.date)[1]}
              </div>
            ) : null}
            <div className="flex">
              {/* <div
                className={`" bg-white w-11 h-11 rounded-2xl text-center text-xl text-black mr-[0.4rem]  py-2 " ${
                  message.sender !== localStorage.myUsername ? null : " hidden "
                }`}
              >
                {" "}
                {selectedContact && selectedContact.name[0]}{" "}
              </div> */}
              <div
                key={index}
                className={`mr-1 ${
                  message.sender !== localStorage.myUsername
                    ? " bg-[#2E333D] rounded-3xl rounded-bl-none text-right w-fit max-w-2xl min-w-[8rem] break-words "
                    : " bg-[#6b8afe] rounded-3xl rounded-br-none text-right w-fit max-w-2xl min-w-[8rem] m-auto break-words "
                } p-3 `}
              >
                <p className="text-lg overflow-auto font-sans ">
                  {message.text}
                </p>
                <div className="text-sm ">
                  <p
                    className={
                      message.sender !== localStorage.myUsername
                        ? "text-left pt-3  "
                        : "text-right pt-3"
                    }
                  >
                    {formatDate(message.date)[0]}
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="w-full h-14 lg:pr-5">
        <div className="w-full h-full rounded-2xl flex my-1 focus-within:bg-[#2E333D]">
          <img
            className="w-10 m-auto cursor-pointer"
            src={ImageAttach}
            alt="Attach"
            onClick={() => {
              alert("این امکان هنوز پیاده سازی نشده است");
            }}
          />
          <input
            onChange={handleSendMessage}
            onKeyDown={handleKeyPress}
            placeholder="پیام خود را بنویسید"
            type="text"
            className="bg-inherit w-full px-5 h-full m-auto rounded-2xl focus:outline-none text-right text-lg"
          />
          <button
            type="button"
            onClick={handleSendButton}
            className={`lg:hidden ${sendMessage.length === 0 && "w-0"} `}
          >
            <img src={ImageSendMessage} className="w-14" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
