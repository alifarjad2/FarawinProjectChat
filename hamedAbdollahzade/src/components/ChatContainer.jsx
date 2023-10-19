import farawin from "farawin";
import { useRef, useState } from "react";
import imageSend from "../../img/send.png";
import imageRefresh from "../../img/refresh.png";
import { ChatBoxReciver } from "./ChatBoxReciver";
import { ChatBoxSender } from "./ChatBoxSender";
import menuVertical from "../../img/menu-vertical.png"

export const ChatContainer = (prop) => {
  const enterSend = (e) => {
    if (e.key === "Enter") {
      ersalPayam();
      refreshHandler();
      setinputSendMessege("");
    }
  };

  const refreshHandler = () => {
    prop.force((c) => c + 1);
  };

  //! ------------------------------------------------------------------------------------
  const [inputSendMessege, setinputSendMessege] = useState("");
  const ref = useRef();
  if (ref.current) {
    ref.current.scrollTop = ref.current.scrollHeight ;
  }
  const sortChat = [...prop.sender, ...prop.reciver].sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
  // console.log(sortChat);

  const ersalPayam = async () => {
    const res = await farawin.testAddChat(prop.item.username, inputSendMessege);
    res.code == 200 ? setinputSendMessege("") : "";
  };
  //! --------------------------------------------------------------------------------------
  return (
    <>
      <div
        className={
          prop.item
            ? "flex flex-col w-full m-1 rounded-xl text-start max-sm:w-full   "
            : "hidden"
        }
      >
        {/* --------------------------------------------- قسمت هدر صفحه چت -------------------------------------------------- */}
        <div className="flex items-center  h-12 text-base p-2 relative">
          <div className="text-xl">{prop.item.name}</div>
          <img
            onClick={() => alert(" اینم قراره کار کنه ؟ |: ")}
            className="h-8 absolute left-2 top-0 cursor-pointer "
            src={menuVertical}
            alt="menu-vertical"
          />
          <img
            onClick={() => refreshHandler()}
            className="h-8 mx-6  bg-blue-400 rounded-full hover:bg-white  cursor-pointer"
            src={imageRefresh}
            alt="Refresh"
          />
        </div>
        {/* ------------------------------------------------ قسمت نمایش چت ----------------------------------------------------- */}
        <div ref={ref}  className="grow overflow-y-auto p-2 scroll-smooth  ">
          {sortChat.length != 0
            ? sortChat.map((sortedItem , i) =>
                sortedItem.sender != localStorage.userMobile ? (
                  <ChatBoxReciver key={i} item={prop.item} reciver={sortedItem} />
                ) : (
                  <ChatBoxSender key={i} sender={sortedItem} />
                )
              )
            : ""}
          {/* ---------------- این قسمت برای اینکه اگه پیامی وجود نداشت ------------------------------ */}
          <div
            className={
              sortChat.length == 0
                ? "flex text-3xl text-yellow-400 justify-center items-center w-full h-full"
                : "hidden"
            }
          >
            هنوز پیامی ندارید :(
          </div>
        </div>
        {/* ----------------------------------------------------------- این قسمت هم برای اینپوت ارسال پیام ------------------------------------------------------------- */}
        <div className=" flex flex-row justify-center items-center">
        <div className="flex-1 mx-3">
          <input
            type="text"
            value={inputSendMessege}
            onChange={(e) => {
              setinputSendMessege(e.target.value);
            }}
            onKeyDown={enterSend}
            placeholder="پیام شما ..."
            className="bg-[rgba(100,211,255,0.4)]  text-lg w-full h-10 pl-10 pr-2 rounded-lg outline-none"
          />
          </div>
         <div>
         <img
         className="w-8 mx-1 cursor-pointer"
            src={imageSend}
            alt="attachment"
            onClick={() => {
              ersalPayam();
            }}
          />
         </div>
          
         
        </div>
      </div>

      <div
        className={
          !prop.item
            ? "flex flex-col justify-center items-center w-full  text-start max-sm:w-full"
            : "hidden"
        }
      >
        *** برای چت یک مخاطب را انتخاب کنید ***
      </div>
    </>
  );
};
