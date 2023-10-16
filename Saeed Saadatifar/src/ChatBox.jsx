import Profile from "./Profile";
import moreIcon from "./assets/Screenshot 2023-07-17 141104.png";
import pinIcon from "./assets/Screenshot 2023-07-17 191127.png";
import EditContact from "./EditContactPage";
import { useEffect, useRef, useState } from "react";
import farawin from "farawin";
import Recevie from "./RecevieMessage";
import Send from "./SendMessage";
import ChatDate from "./ChatDate";
// {<ChatDate chats={ch} />}
export default function ChatBox({
  prof,
  header,
  num,
  chats,
  setSelect,
  setC,
  setChats,
  setHideSideBar,
  selectedContact,
  size,
}) {
  const [isEditContactPage, setIsEditContactPage] = useState(false);
  const [message, setMessage] = useState("");
  let lastChat;
  let ref = useRef();
  let messageBox = useRef();
  let showMessage = (message, key, messageId, last) => {
    if (message.sender == num) {
      return (
        <>
          {(new Date(last.date).getDate() != new Date(message.date).getDate() ||
            key == 0) && <ChatDate chat={message} />}
          <Recevie
            size={size}
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
            id={messageId}
          />
        </>
      );
    } else if (message.receiver == num) {
      return (
        <>
          {(new Date(last.date).getDate() != new Date(message.date).getDate() ||
            key == 0) && <ChatDate chat={message} />}
          <Send
            size={size}
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
            id={messageId}
          />
        </>
      );
    }
    return;
  };

  return (
    // eslint-disable-next-line react/no-unknown-property
    <div className="flex flex-col grow h-full">
      {isEditContactPage && (
        <EditContact
          nam={header}
          num={num}
          setActive={setIsEditContactPage}
          setC={setC}
          selectedContact={selectedContact}
          setSelect={setSelect}
        />
      )}
      <div className="h-[70px] w-full rounded-[20px] flex">
        <div
          id="headerContact"
          className="flex grow bg-[#21242B] p-[5px] hover:cursor-default rounded-[14px]"
        >
          <Profile name={prof} />
          <div
            id="nameHeaderContact"
            className="align-middle grow text-[18px] mr-[8px]"
          >
            <div className="flex flex-col">
              <p>{header}</p>
              <p className="text-[11px]">{num}</p>
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
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 mr-2 text-[#9CA0A6] hover:text-[#FAFBFD] cursor-pointer"
            onClick={() => {
              setSelect(null);
              setHideSideBar(false);
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
      </div>
      {
        //#region MiddleChat
      }
      <div
        ref={messageBox}
        id="messageBox"
        className="grow w-full m-1.5 pr-[10px] h-full flex flex-col overflow-x-hidden"
      >
        {chats.length != 0 ? (
          <div
            id="Messages1Contact"
            className="flex flex-col gap-2 w-full m-1.5 pr-[10px] grow h-full"
          >
            {chats.map((message, key) => {
              if (!lastChat) lastChat = message;
              let a = showMessage(message, key, message.id, lastChat);
              lastChat = message;
              return a;
            })}
          </div>
        ) : (
          <div className="m-auto">پیامی وجود ندارد!</div>
        )}
      </div>
      {
        //#endregion
      }
      <div className="w-full flex bg-[#21242B] py-1 px-3 rounded-md">
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
          onKeyDown={(e) => {
            if (e.code == "Enter") {
              farawin.testAddChat(num, message, (mess) => {
                if (mess.code == 200) {
                  ref.current.value = "";
                  farawin.getChats((res) => {
                    setChats(
                      res.chatList.filter(
                        (message) =>
                          message.sender == localStorage.username ||
                          message.receiver == localStorage.username
                      )
                    );
                  });
                }
              });
            }
          }}
        />
        <svg
          id="sendMessageIcon"
          width="30"
          height="30"
          viewBox="0 0 48 48"
          fill="none"
          className={`${
            !message && "hidden"
          } rotate-[-90deg] self-center hover:cursor-pointer hover:fill-[#2F313D]`}
          onClick={() => {
            farawin.testAddChat(num, message, (mess) => {
              if (mess.code == 200) {
                farawin.getChats((res) => {
                  setChats(
                    res.chatList.filter(
                      (message) =>
                        message.sender == localStorage.username ||
                        message.receiver == localStorage.username
                    )
                  );
                });
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
