import React, { useState } from "react";
import farawin from "farawin";
import ImageAttach from "./Assets/attach-48.png";
import ImageMenu from "./Assets/menu-50.png";
import ImageMore from "./Assets/more-50.png";
import ImageRef from "./Assets/refresh-48.png";

function ChatBox({
  selectedContact,
  sender,
  receiver,
  handleContactButtonClick,
}) {
  const [sendMessage, setSendMessage] = useState("");

  const handleSendMessage = (e) => {
    setSendMessage(e.target.value);
  };

  const senderMessages = async () => {
    const res = await farawin.testAddChat(
      selectedContact.username,
      sendMessage
    );
    // برای تست
    //alert(res.code);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      senderMessages();
      handleContactButtonClick();
      setSendMessage("");
    }
  };

  const messages = [
    ...(Array.isArray(sender) ? sender : []),
    ...(Array.isArray(receiver) ? receiver : []),
  ];

  messages.sort((a, b) => new Date(a.date) - new Date(b.date));

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const newDate = date.toLocaleTimeString();
    return newDate.substring(0, newDate.length - 6);
  };

  return (
    <div
      id="chatBox"
      className="w-2/3 h-full flex flex-col bg-[#202329] max-lg:w-full"
    >
      <div className="pl-5 w-full h-20 flex flex-row justify-between relative">
        <button
          id="openMenu"
          className="lg:w-0 lg:cursor-pointer absolute left-1 top-1 cursor-pointer"
        >
          <img className="w-7 h-9" src={ImageMenu} alt="open Menu" />
        </button>
        <button
          onClick={handleContactButtonClick}
          className=" w-9 right-12 top-3 absolute"
        >
          <img src={ImageRef} />
        </button>
        <div className="text-2xl absolute top-4 left-10">
          {selectedContact && selectedContact.name}
        </div>
        <div className="text-xs text-slate-500 absolute top-12 left-10">
          {selectedContact && selectedContact.username}
        </div>
        <img
          className="w-7 h-7 mt-4 mr-4 cursor-pointer absolute right-0"
          src={ImageMore}
          alt="more"
          onClick={() => {
            alert("این امکان هنوز پیاده سازی نشده است");
          }}
        />
      </div>
      <div className="px-1 w-full h-5/6 overflow-y-auto max-lg:overflow-x-hidden flex flex-col gap-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mr-3 ${
              message.sender !== localStorage.myUsername
                ? "bg-[#2E333D] rounded-3xl rounded-bl-none text-right"
                : "bg-[#6b8afe] rounded-3xl rounded-br-none text-right m-auto"
            } w-2/6 p-3 max-lg:w-2/3`}
          >
            <div className="text-lg">{message.text}</div>
            <div className="text-xs">
              <p
                className={
                  message.sender !== localStorage.myUsername
                    ? "text-left pt-3"
                    : "text-right pt-3"
                }
              >
                {formatDate(message.date)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-14">
        <div className="w-full h-full rounded-2xl flex my-1">
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
            className="bg-inherit w-full px-5 h-full m-auto rounded-2xl focus:outline-none text-right focus-within:bg-[#2E333D]"
          />
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
