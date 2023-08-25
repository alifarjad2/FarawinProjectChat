import farawin from "farawin";
import { useState } from "react";
import imageSend from "../../img/send.png";
import imageRefresh from "../../img/refresh.png";
import { ChatBoxReciver } from "./ChatBoxReciver";
import { ChatBoxSender } from "./ChatBoxSender";

export const ChatContainer = (prop) => {
  //! ------------------------------------------------------------------------------------
  const [inputSendMessege, setinputSendMessege] = useState("");

  const ersalPayam = async () => {
    const res = await farawin.testAddChat(prop.item.username, inputSendMessege);
    alert(res.message);
    res.code == 200 ? setinputSendMessege("") : "";
  };
  //! --------------------------------------------------------------------------------------
  return (
    <>
      <div
        className={
          prop.item
            ? "flex flex-col w-full m-1 rounded-xl text-start max-sm:w-full "
            : "hidden"
        }
      >
        {/* --------------------------------------------- قسمت هدر صفحه چت -------------------------------------------------- */}
        <div className="flex items-center  h-12 text-base p-2 relative">
          <div className="text-xl">{prop.item.name}</div>
          <img
            onClick={() => alert(" اینم قراره کار کنه ؟ |: ")}
            className="h-8 absolute left-2 top-0 cursor-pointer "
            src="../img/menu-vertical.png"
            alt="menu-vertical"
          />
          <img
            onClick={() => {
              return prop.refresh();
            }}
            className="h-8 mx-6  bg-blue-400 rounded-full hover:bg-white  cursor-pointer"
            src={imageRefresh}
            alt="Refresh"
          />
        </div>
        {/* ------------------------------------------------ قسمت نمایش چت ----------------------------------------------------- */}
        <div className=" h-full overflow-y-auto p-2 ">
          {prop.reciver
            ? prop.reciver.map((reciver) => (
                <ChatBoxReciver item={prop.item} reciver={reciver} />
              ))
            : ""}
          {/* ---------------- این قسمت برای اینکه اگه پیامی وجود نداشت ------------------------------ */}
          <div
            className={
              prop.sender.length == 0 && prop.reciver.length == 0
                ? "flex text-3xl text-yellow-400 justify-center items-center w-full h-full"
                : "hidden"
            }
          >
            هنوز پیامی ندارید :(
          </div>
          {/* ----------------------------------------------------------------------------------------- */}
          {prop.sender
            ? prop.sender.map((sender) => (
                <>
                  <ChatBoxSender sender={sender} />
                </>
              ))
            : ""}
        </div>
        {/* ----------------------------------------------------------- این قسمت هم برای اینپوت ارسال پیام ------------------------------------------------------------- */}
        <div className="  h-12 m-2 flex flex-row relative">
          <img
            src={imageSend}
            alt="attachment"
            className="p-1 w-10 absolute left-0 top-1 cursor-pointer"
            onClick={() => {
              ersalPayam();
            }}
          />
          <input
            type="text"
            value={inputSendMessege}
            onChange={(e) => {
              setinputSendMessege(e.target.value);
            }}
            placeholder="پیام شما ..."
            className="bg-[rgba(17,27,54,0.4)]  text-lg w-full pl-10 pr-2 outline-none"
          />
        </div>
      </div>
      {/* --------------------------- اینجا هم گفتم اگه مخاطبی انتخاب نکرده بود بیاد کلا مخفی کنه صفحه چت رو --------------------------------------------- */}
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
