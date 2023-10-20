import { useRef, useState } from "react";
import farawin from "farawin";
import Sender from "./Sender";
import Reciver from "./Reciver";
import send from "../../img/icons8-send-25.png";
import refreshChat from "../../img/icons8-refresh-30.png";


export const ChatBox = ({
  selectItem,
  sendMessage,
  reciveMessage,
  setRelode,
}) => {
  const refresh = () => {
    setRelode((c) => c + 1);
  };

  const ref = useRef();
  if (ref.current) {
    ref.current.scrollTop = 10000000000000000000;
  }

  const sorted = [...sendMessage, ...reciveMessage].sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
  // console.log(sorted);

  // استیت برای نوشتن پیام و ارسال آن
  const [inputMessage, setInputMessage] = useState("");

  const MessageHandler = async () => {
    await farawin.testAddChat(selectItem.username, inputMessage);
    setInputMessage("");
  };

  return (
    <div
      // وجود داشتن چت یا نبودن چت انتخابی چک میشود
      className={
        selectItem.name
          ? "flex flex-col grow bg-[#4f4e4e] w-full h-screen rounded-lg max-sm:hidden "
          : "hidden"
      }
    >
      <div
        //  header chat
        className="flex flex-row  bg-[#4f4e4e] rounded-lg relative"
      >
        <div
          className="w-[50px] h-[50px] self-center bg-blue-200 rounded-[20%] text-center font-bold caret
        -white leading-[48px] m-3"
        >
          ^^
        </div>
        <span className="m-3 text-lg">{selectItem.name}</span>

        <img
          onClick={refresh}
          className="absolute top-3 left-4 cursor-pointer"
          src={refreshChat}
          alt="refresh"
        />

      </div>

      {/* chat */}

      <div
        ref={ref}
        id="Messages1Contact"
        className="flex flex-col  rounded w-full h-[580px] py-4 overflow-y-auto "
      >
        {/* date
        <div className="self-center bg-red-100 px-[40px] rounded-[15px]">
          <p>{currentDate.toLocaleDateString()}</p>
          <p>{currentDate.toLocaleTimeString()}</p>
        </div> */}

        {/* sender */}
        {sorted.length != 0
          ? sorted.map((item) =>
              item.sender != localStorage.username ? (
                <Reciver item={item} selectItem={selectItem} />
              ) : (
                <Sender item={item} />
              )
            )
          : ""}
      </div>
      {/* footer chat */}
      <div className="bg-[#4f4e4e] flex flex-row justify-center items-center rounded-lg m-1 h-14 ">
        <div className="flex-1">
          <input
            onChange={(e) => setInputMessage(e.target.value)}
            value={inputMessage}
            className=" w-full outline-none text-lg rounded-xl bg-[#4f4e4e] my-2 p-2"
            type="text"
            placeholder="پیام ..."
          />
        </div>

        <div>
          <img
            className=" h-7 pl-1 cursor-pointer"
            src={send}
            alt="send"
            onClick={() => MessageHandler()}
          />
        </div>
      </div>
    </div>
  );
};
