import farawin from "farawin";
import { useEffect, useRef, useState } from "react";
// ******** images
import avatar from "../assets/avatar.png";
import switchButton from "../assets/sort-right.png";
import deleteButton from "../assets/delete.png";
import send from "../assets/send.png";
import closeIcon from "../assets/sort-right.png";
import menuIcon from "../assets/menu.png";
import EditContact from "./EditContactPage";

export default function MessageBox({
  setChatBox,
  setChat,
  name,
  number,
  chats,
  setCon,
}) {
  const [message, setMessage] = useState("");
  const [editPage, setEditPage] = useState(false);

  const handelClick = () => {
    const chat = farawin.testAddChat("toUsername", message, () => {
      return chat;
    });
  };

  // function getMessage(value){
  //  setMessage(value);
  //  farawin.testAddChat("toUsernaem",(res)=>{
  //   console.log(res);
  //  })
  // }
  let ref = useRef();

  return (
    <div className="grow h-full hidden md:flex flex-col p-2">
      {editPage && <EditContact setC={setCon} nam={name} num={number} setActive={setEditPage}/>}
      <div
        id="headerOfChatBox"
        className="w-full h-fit flex bg-[#30323E] rounded-xl"
      >
        <div id="profile" className="grow text-xl flex p-2">
          <div id="switchOfChatToContact">
            <img
              src={switchButton}
              alt=""
              className="w-[20px] my-4 ml-2 hidden"
            />
          </div>
          <img
            src={avatar}
            alt=""
            className="w-[60px] h-[60px] bg-gray-950 rounded-xl"
          />
          <p className="m-4"> {name} </p>
        </div>
        <div
          onClick={() => {
            setEditPage(true);
          }}
          className="w-8 h-8 m-2 hover:cursor-pointer "
        >
          <img src={menuIcon} alt="" className="w-fit h-fit mx-auto my-3 " />
        </div>
        <div
          id="deleteChat"
          onClick={() => {
            setChatBox(false);
          }}
          className="w-8 h-8 m-2 hover:cursor-pointer "
        >
          <img src={closeIcon} alt="" className="w-fit h-fit mx-auto my-3 " />
        </div>
      </div>
      <div className="grow flex justify-center overflow-y-scroll items-center">
        {chats.length > 0 ? (
          <div
            id="chat"
            className="w-full justify-end h-full gap-4 overflow-scroll py-3 flex flex-col text-center pt-16 px-10 "
          >
            {/* ************************ پیام */}
            {chats.map((e) => (
              <div
                key={e.id}
                className={`w-fit h-fit p-1.5 ${
                  e.sender == number && "self-end"
                } bg-amber-600 flex rounded-xl`}
              >
                {e.receiver == number && (
                  <img
                    src={avatar}
                    alt=""
                    className="w-[50px] h-[50px] mt-1 bg-gray-950 rounded-xl"
                  />
                )}
                <div className=" p-2.5 rounded-[20px] relative">
                  <div
                    dir={`${
                      (name[0].charCodeAt() <= 122 &&
                        name[0].charCodeAt() >= 97) ||
                      (name[0].charCodeAt() <= 90 && name[0].charCodeAt() >= 65)
                        ? "ltr"
                        : "rtl"
                    }`}
                    className="text-[18px] text-start mb-[6px]"
                  >
                    {e.sender == number ? name : localStorage.name}
                  </div>
                  <div
                    dir={`${
                      (e.text[0].charCodeAt() <= 122 &&
                        e.text[0].charCodeAt() >= 97) ||
                      (e.text[0].charCodeAt() <= 90 &&
                        e.text[0].charCodeAt() >= 65)
                        ? "ltr"
                        : "rtl"
                    }`}
                    className="text-start grow text-[14px]"
                  >
                    {e.text}
                  </div>
                  <div className="bottom-[7px] text-right pr-[11px] text-[10px]">
                    {}
                  </div>
                </div>
                {e.sender == number && (
                  <img
                    src={avatar}
                    alt=""
                    className="w-[50px] h-[50px] mt-1 bg-gray-950 rounded-xl"
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-2xl"> ! No Message </div>
        )}
      </div>

      <div
        id="sender"
        className="w-full flex h-fit bg-[#30323E] bottom-6 p-1.5 rounded-xl"
      >
        <input
          ref={ref}
          className="h-8 grow focus:outline-none bg-inherit p-2"
          placeholder="پیام .."
          onInput={(event) => setMessage(event.target.value)}
        />
        <img
          src={send}
          alt=""
          className="w-6 my-auto h-6 hover:cursor-pointer "
          onClick={() => {
            farawin.testAddChat(number, message);
            farawin.getChats((res) => {
              setChat(
                res.chatList.filter(
                  (message) =>
                    message.sender == localStorage.username ||
                    message.receiver == localStorage.username
                )
              );
            });
            ref.current.value = "";
          }}
        />
      </div>
    </div>
  );
}
