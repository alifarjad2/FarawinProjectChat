import {splitName , messageBoxRadiusRight} from "@/components"
//////////////////////////////////////
const SenderChat = ({ message, time, date, children }) => {
  const nameOfLoggedIn = localStorage.name;
  //////////////////////////////////// Return
  return (
    <div className="flex items-end mb-4 mr-2">
      <div className="text-center w-[50px] leading-[50px] bg-[#4eab6c] rounded-2xl">
        {splitName(nameOfLoggedIn)}
      </div>
      <div className="relative mr-3 text-[#eceff3] bg-[#6b8afe] p-3 max-w-[70%] min-w-[20%] rounded-2xl">
        <img
          src={messageBoxRadiusRight}
          className="absolute w-6 bottom-[-4px] right-[-11px]"
          alt="icon"
        />
        <div className="text-sm flex justify-between">
          {nameOfLoggedIn}
          <div className=" flex gap-2">{children}</div>
        </div>
        <p className="text-sm break-words">{message}</p>
        <span className="block text-start mt-2 text-[10px] text-[#eceff3]">
          {date} ساعت {time}
        </span>
      </div>
    </div>
  );
};

export default SenderChat;
