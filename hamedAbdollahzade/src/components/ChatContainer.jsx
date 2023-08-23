import farawin from "farawin";
import imageSend from "../../img/send.png";
import { useState } from "react";

export const ChatContainer = (prop) => {
  const [inputSendMessege, setinputSendMessege] = useState("");

  const ersalPayam = () => {
    farawin.testAddChat(prop.item.username, inputSendMessege);
  };

  return (
    <>
      <div
        className={
          prop.item
            ? "flex flex-col w-full m-1 text-start max-sm:w-full "
            : "hidden"
        }
      >
        <div className="flex items-center  h-8 text-base p-2 relative">
          <div>{prop.item.name}</div>
          <img
            className="w-4 absolute left-2 top-2 cursor-pointer"
            src="../img/menu-vertical.png"
            alt="menu-vertical"
          />
        </div>

        <div className=" h-full overflow-y-auto p-2 ">
          {prop.sender
            ? prop.sender.map((sender) => (
                <>
                  <div className="flex flex-row items-end m-1 p-1">
                    <div className="shrink-0 rounded-lg mr-2 w-[40px] leading-[40px] text-center bg-slate-500">
                      ME
                    </div>
                    <div className="flex flex-col bg-[#30333C] mb-2 mr-1 rounded-xl p-2 relative">
                      <span className="text-xs">Me</span>
                      <p className="text-start pt-1 pb-1">{sender.text}</p>
                      <span className="text-end text-xs">{sender.date}</span>
                    </div>
                  </div>
                </>
              ))
            : ""}

          {prop.reciver
            ? prop.reciver.map((reciver) => (
                <>
                  <div className="flex flex-row-reverse items-end m-2 p-2">
                    <div className="shrink-0 rounded-lg ml-2 w-[40px] leading-[40px] text-center bg-slate-500">
                      {prop.item.name[0] + prop.item.name[1]}
                    </div>
                    <div className="flex flex-col bg-[#6B8AFE] mb-2 ml-1 rounded-xl p-2 relative">
                      <span className="text-xs">{prop.item.name} </span>
                      <p className="text-left pt-1 pb-1">{reciver.text}</p>
                      <span className="text-start text-xs">{reciver.date}</span>
                    </div>
                  </div>
                </>
              ))
            : ""}
        </div>

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
