import Profile from "./Profile";
import moreIcon from "./assets/Screenshot 2023-07-17 141104.png";
import pinIcon from "./assets/Screenshot 2023-07-17 191127.png";
import EditContact from "./EditContactPage";
import { useEffect, useRef, useState } from "react";
import farawin from "farawin";
import Recevie from "./RecevieMessage";
import Send from "./SendMessage";
import ChatDate from "./ChatDate";

export default function ChatBox({ prof, header, num, chats, setSelect, setC  , setChats }) {
  const [isEditContactPage, setIsEditContactPage] = useState(false);
  const [message, setMessage] = useState("");
  let ref = useRef();

  let showMessage = (message, key) => {
    if (message.sender == num) {
      return (
        <Recevie
          key={key}
          text={message.text}
          pro={prof}
          name={header}
          date={`${
            new Date(message.date).getHours() < 10
              ? `0${new Date(message.date).getHours()}`
              : new Date(message.date).getHours()
          }:${
            new Date(message.date).getMinutes() < 10
              ? `0${new Date(message.date).getMinutes()}`
              : new Date(message.date).getMinutes()
          }`}
        />
      );
    } else if (message.receiver == num) {
      return (
        <Send
          key={key}
          text={message.text}
          pro={localStorage.prof}
          name={localStorage.name}
          date={`${
            new Date(message.date).getHours() < 10
              ? `0${new Date(message.date).getHours()}`
              : new Date(message.date).getHours()
          }:${
            new Date(message.date).getMinutes() < 10
              ? `0${new Date(message.date).getMinutes()}`
              : new Date(message.date).getMinutes()
          }`}
        />
      );
    }
    return;
  };

  return (
    <div className="flex flex-col grow mr-[35px]  h-full">
      {isEditContactPage && (
        <EditContact
          nam={header}
          num={num}
          setActive={setIsEditContactPage}
          setC={setC}
        />
      )}
      <div className="h-[70px] w-full rounded-[20px] flex">
        <div
          id="headerContact"
          className="flex grow p-[5px] hover:cursor-default rounded-[14px]"
        >
          <Profile name={prof} />
          <div
            id="nameHeaderContact"
            className="align-middle text-[18px] mr-[8px] pt-[11px]"
          >
            {header}
          </div>
        </div>
        {
          //#region editIcon
        }
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 text-[#9CA0A6] hover:text-[#FAFBFD] cursor-pointer"
          onClick={() => {
            setIsEditContactPage(true);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
        {
          //#endregion
        }
        {
          //#region closeIcon
        }
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 mr-2 text-[#9CA0A6] hover:text-[#FAFBFD] cursor-pointer"
          onClick={() => {
            setSelect(null);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
        {
          //#endregion
        }
      </div>
      {
        //#region MiddleChat
      }
      <div id="messageBox" className="grow w-full pr-[10px] h-full flex">
        {chats.length != 0 ? (
          <div
            id="Messages1Contact"
            className="flex flex-col justify-end w-full h-full"
          >
            {<ChatDate chats={chats} />}
            {chats.map((key, message) => showMessage(key, message))}
          </div>
        ) : (
          <div className="m-auto">No Message</div>
        )}
      </div>
      {
        //#endregion
      }
      <div className="w-full h-[60px] flex">
        <div className="mt-[20px] ml-[10px] w-[18px] h-fit rounded-[15px] hover:cursor-pointer hover:bg-[#2F313D]">
          <img src={pinIcon} alt="" />
        </div>
        <input
          ref={ref}
          type="text"
          placeholder="پیامتان را بنویسید"
          className="text-[16px] grow h-[52px] mr-[5px] bg-[#21242B] border-none focus:outline-none text-[#FAFBFD]"
          onInput={(e) => {
            setMessage(e.target.value);
          }}
        />
        <svg
          id="sendMessageIcon"
          width="30"
          height="30"
          viewBox="0 0 48 48"
          fill="none"
          xmrns="http://www.w3.org/2000/svg"
          className={`${
            !message && "hidden"
          } rotate-[-90deg] self-center hover:cursor-pointer hover:fill-[#2F313D]`}
          onClick={() => {
            farawin.testAddChat(num, message,(mess)=>{
              if(mess.code == 200){
                farawin.getChats((res) => {
                  setChats(
                    res.chatList.filter(
                      (message) =>
                        message.sender == localStorage.username ||
                        message.receiver == localStorage.username
                    )
                  );
                })
              }
            });
            ref.current.value = "";
          }}
        >
          <path d="M48 0H0V48H48V0Z" fill="none" fillOpacity="0" />
          <path
            d="M42 6L4 20.1383L24 24.0083L29.0052 44L42 6Z"
            stroke="#FAFBFD"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <path
            d="M24.0083 24.0083L29.6651 18.3515"
            stroke="#FAFBFD"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
