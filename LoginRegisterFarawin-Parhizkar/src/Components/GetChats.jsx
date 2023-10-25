import React from "react";
import { useStore } from "./Zustand/useStore";
import { useState, useEffect, useRef } from "react";

const GetChats = () => {
  const [chat, setChat] = useState([]);
  const sharedNumber = useStore((state) => state.sharedNumber);
  const sharedName = useStore((state) => state.sharedName);
  const refreshChat = useStore((state) => state.refreshChat);
  const lastMessageRef = useRef(null);
  const scrollChat = useStore((state) => state.scrollChat);
  const [loading, setLoading] = useState(true);
  const setsharedLastMessage = useStore((state) => state.setsharedLastMessage);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollChat]);
  useEffect(() => {
    let ignore = false;
    async function getChats() {
      const chatData = await fetch("https://farawin.iran.liara.run/api/chat", {
        headers: {
          accept: "application/json",
          authorization: localStorage.token,
        },
        body: null,
        method: "GET",
      });
      let data = await chatData.json();
      return data;
    }
    getChats().then((chat) => {
      setChat(chat.chatList);
      setLoading(false);
    });
    
    return () => {
      ignore = true;
    };
  }, [refreshChat]);
  setsharedLastMessage(chat);
  const userChat = chat.filter((res) => {
    if (res.receiver == localStorage.username) {
      return res.sender == sharedNumber;
    }
  });
  const contactChat = chat.filter((res) => {
    if (res.receiver == sharedNumber) {
      return res.sender == localStorage.username;
    }
  });
  let sortedChats = [...userChat, ...contactChat];
  sortedChats.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  // Adding chats with the same date of sent to an array with the reduser and show them in a groupe chats with each other and use this array to show chats in the chat section
  const groupedChats = sortedChats.reduce((groups, chat) => {
    const dateObj = new Date(chat.date);
    const monthDayYear = dateObj.toLocaleDateString("fa-IR", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    if (!groups[monthDayYear]) {
      groups[monthDayYear] = [];
    }
    groups[monthDayYear].push(chat);
    return groups;
  }, {});

  return (
    <div>
      <div className=" flex flex-col">
        {loading ? (
          <p className="text-white font-bold">بارگذاری ...</p>
        ) : sortedChats.length === 0 ? (
          <p className="text-white font-bold">پیغامی وجود ندارد</p>
        ) : (
          Object.entries(groupedChats).map(([monthDayYear, chats]) => (
            <div key={monthDayYear}>
              <h2 className="text-violet-400 text-lg shadow-lg w-1/2 m-auto shadow-violet-400 text-center rounded-lg ">
                {monthDayYear}
              </h2>
              {chats.map((chat, index) => {
                // Convert chat.date to a Date object
                const dateObj = new Date(chat.date).toLocaleTimeString(
                  "fa-IR",
                  {
                    hourCycle: "h24",
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                );

                // control is massage is for localstorage usernam or not
                const isSender = chat.sender === localStorage.username;

                return (
                  // in this returning elements i check the chats by the sender and styling it to show the texts in the left or right of the screen .
                  <div
                    ref={index === chats.length - 1 ? lastMessageRef : null}
                    className={`w-full p-2  h-fit rounded-lg flex items-end gap-1 ${
                      isSender ? "direction2" : "direction"
                    } my-5`}
                    key={chat.date}
                  >
                    {/* avatar for every chats */}
                    <div
                      className={`w-10 h-10 bg-violet-500 flex items-center justify-center font-bold ${
                        isSender
                          ? "rounded-r-lg rounded-tl-lg"
                          : "rounded-l-lg rounded-tr-lg"
                      }`}
                    >
                      {isSender ? (
                        <p>User</p>
                      ) : (
                        <p> {sharedName.slice(0, 2)} </p>
                      )}
                    </div>
                    <div
                      className={` w-1/3 p-1 ${
                        isSender
                          ? "bg-blue-400 rounded-l-lg rounded-tr-lg"
                          : "bg-[#2E333D] rounded-r-lg rounded-tl-lg"
                      }`}
                    >
                      <p className=" text-white p-2 break-words">{chat.text}</p>
                      <div
                        className={`text-white flex ${
                          isSender
                            ? "direction "
                            : "direction2 flex-row-reverse justify-end"
                        }`}
                      >
                        {/* <p>{hour > 9 ? <p>{hour}</p> : <p>0{hour}</p>}</p>
                        <p>:</p>
                        <p>{minute > 9 ? <p>{minute}</p> : <p>0{minute}</p>}</p> */}
                        <p>{dateObj}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GetChats;
