import farawin from "farawin";
import { useEffect, useState } from "react";
import { useRef } from "react";
import "./App.css";

// main component function that get an export of it
export default function RecieverChatMassage(props) {
  // 2 states for filtering chats and control it for being empty or not
  // and a useref for saving control state and pass it to the interval for make a control state to check if we have any chat for the specific contact or not
  const [filteredChats, setFilteredChats] = useState([]);
  const [control, setControl] = useState(false);
  const chatController = useRef(null);
  // useEffect is for getting chats from the server and a prop that I get it from chat to control the re render of this state
  useEffect(() => {
    let ignore = false;

    farawin.getChats((res) => {
      if (!ignore) {
        setFilteredChats(res.chatList);
      }
    });

    return () => {
      ignore = true;
    };
  }, [props.toggle]);
  // filtering chats by senders and reciever of that text
  const senderChats = filteredChats.filter((res) => {
    if (res.receiver == localStorage.username) {
      return res.sender == props.number;
    }
  });
  const receiverChats = filteredChats.filter((res) => {
    if (res.receiver == props.number) {
      return res.sender == localStorage.username;
    }
  });

  console.log(senderChats);
  console.log(receiverChats);
  // a condition for interval to stop it by checking the useref value with the last saved value
  if (chatController?.current) {
    clearInterval(chatController.current);
  }
  // making an interval for chats to check if its empty or not by every 1 sec
  chatController.current = setInterval(() => {
    if (receiverChats == "" && senderChats == "") {
      setControl(false);
    } else {
      setControl(true);
    }
  }, 1000);
  // sort whole texts from me and contact in a single array by date of texts
  const sortedChats = [...senderChats, ...receiverChats].sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
  // A function for getting dat obj and extracting months and days and full years
  function getMonthDayYearFromDate(date) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${
      monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  }
  // Adding chats with the same date of sent to an array with the reduser and show them in a groupe chats with each other and use this array to show chats in the chat section 
  const groupedChats = sortedChats.reduce((groups, chat) => {
    const dateObj = new Date(chat.date);
    const monthDayYear = getMonthDayYearFromDate(dateObj);
    if (!groups[monthDayYear]) {
      groups[monthDayYear] = [];
    }
    groups[monthDayYear].push(chat);
    return groups;
  }, {});

  return (
    <div>
      <div className=" flex flex-col">
        {props.toggle && !control ? (
          <p className="text-white font-bold">پیغامی وجود ندارد</p>
        ) : (
          Object.entries(groupedChats).map(([monthDayYear, chats]) => (
            <div key={monthDayYear}>
              <h2 className="text-violet-400 text-lg shadow-lg w-1/3 m-auto shadow-violet-400 text-center rounded-lg ">
                {monthDayYear}
              </h2>
              {chats.map((chat) => {
                // Convert chat.date to a Date object
                const dateObj = new Date(chat.date);

                // Extract the hour from the Date object
                const hour = dateObj.getHours();
                const minute = dateObj.getMinutes();
                // control is massage is for localstorage usernam or not
                const isSender = chat.sender === localStorage.username;

                return (
                  // in this returning elements i check the chats by the sender and styling it to show the texts in the left or right of the screen .
                  <div
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
                        <p> {props.contactName.slice(0, 2)} </p>
                      )}
                    </div>
                    <div
                      className={`w-1/3 p-1 ${
                        isSender
                          ? "bg-blue-400 rounded-l-lg rounded-tr-lg"
                          : "bg-[#2E333D] rounded-r-lg rounded-tl-lg"
                      }`}
                    >
                      <p className=" text-white p-2 ">{chat.text}</p>
                      <div
                        className={`text-white flex ${
                          isSender ? "direction" : "direction2"
                        }`}
                      >
                        <p>{hour > 9 ? <p>{hour}</p> : <p>0{hour}</p>}</p>
                        <p>:</p>
                        <p>{minute > 9 ? <p>{minute}</p> : <p>0{minute}</p>}</p>
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
}
