import React from "react";
import Header from "./Header";
import GetChats from "./GetChats";
import ChatSender from "./ChatSender";
const ChatBox = ({ openMenu }) => {
  return (
    <div className="flex flex-col h-full gap-5">
      <div>
        <Header openMenu={openMenu} />
      </div>
      <div className=" overflow-y-scroll flex-1 ">
        <GetChats />
      </div>
      <div>
        <ChatSender />
      </div>
    </div>
  );
};

export default ChatBox;
