import { useState } from "react";
import farawin from "farawin";
export const ChatBox = ({ selectItem, sendMessage ,reciveMessage }) => {

  const [inputMessage , setInputMessage] = useState("");

  const MessageHandler = async() =>{
    await farawin.testAddChat(selectItem.username , inputMessage )
}




  return (
    <div
    // وجود داشتن چت یا نبودن ان چک میشود
      className={
        selectItem.name
          ? "flex flex-col  grow  bg-[#4f4e4e] w-full rounded-lg "
          : "hidden" 
      }
    >
      <div
        //  header chat
        className="flex flex-row m-2  bg-[#4f4e4e] rounded-lg h-10 relative"
      >
        <div
          className="w-[50px] h-[50px] self-center bg-blue-200 rounded-[20%] text-center font-bold caret
        -white leading-[48px] m-3"
        >
          ^^
        </div>
        <span className="m-3 text-lg">
          {selectItem.name}
        </span>
        <img
          className="w-6 h-6 absolute top-3 left-1 cursor-pointer"
          src="../img/menu-vertical.png"
          alt="menu"
        />
        <img 
        className="absolute top-3 left-8 cursor-pointer"
        src="../img/icons8-refresh-30.png"
        alt="refresh"
         />
      </div>

      {/* chat */}

        <div
          id="Messages1Contact"
          className="flex flex-col  rounded w-full h-[530px] py-4 overflow-y-auto "
        >
          {/* date */}
          {/* <div className="self-center bg-red-300 px-[40px] rounded-[15px]"></div> */}

          {/* sender */}
          {sendMessage ?
           sendMessage.map((itemSender) => (
            <div className="flex w-3/4 items-end ">
              <div
                className="w-[50px] h-[50px] shrink-0 bg-blue-200 rounded-[20%] text-center font-bold caret
               -white leading-[48px] m-3"
              >
                من
              </div>

              <div className="bg-[#30323E] self-end p-2.5 m-1 rounded-[20px] relative">
                <div className="text-[18px]">سمانه غضنفر</div>
                <div className="bg-[#30323E]"
                >
                  {itemSender.text}
                </div>
                <div className="bottom-[7px] text-right text-[10px] ">
                  {itemSender.date}
                </div>
              </div>
            </div>
          )) : ""}

          {/* resiver */}
            {reciveMessage ?
            reciveMessage.map((item2)=>(
                          <div className="flex items-end self-end w-3/4 justify-end m-[5px]">
                            <div className="bg-[#6B8AFE] m-2 p-2.5 rounded-[20px] relative">
                              <div className="text-[18px] font-mono">
                              {selectItem.name}
                              </div>
                              <div
                                className="bg-[#6B8AFE]"
                              >
                                {item2.text}
                              </div>
                              <div className="bottom-[7px] text-right text-[10px]">
                                {item2.date}
                              </div>
                            </div>
                            <div
                              className=" w-[50px] h-[50px] shrink-0 bg-blue-200 rounded-[20%] text-center font-bold caret
                              -white leading-[48px] m-2"
                            >
                              ^^
                            </div>
                          </div>
           )) :
              ""
            }



          
        </div>
      {/* footer chat */}
      <div className="bg-[#4f4e4e] flex relative flex-row m-1 rounded-lg h-12">
        <img
          className="absolute top-3 left-1 h-6 cursor-pointer"
          src="../img/icons8-send-25.png"
          alt="send"
          onClick={()=>MessageHandler()}
        />

        <input
          onChange={(e)=>(setInputMessage(e.target.value))}
          value={inputMessage}
          className=" flex flex-row ml-8 w-full border-[#4f4e4e] rounded-xl bg-[#4f4e4e]"
          type="text"
          placeholder="پیام ..."
        />
      </div>
    </div>
  );
};
