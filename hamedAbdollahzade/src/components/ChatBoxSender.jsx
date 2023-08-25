export const ChatBoxSender = (prop) => {
    return (
        <div className="flex flex-row items-end m-1 p-1">
        <div className="shrink-0 rounded-lg mr-2 w-[40px] leading-[40px] text-center bg-slate-500">
          ME
        </div>
        <div className="flex flex-col bg-[#30333C] mb-2 mr-1 rounded-xl p-2 relative">
          <span className="text-xs">Me</span>
          <p className="text-start pt-1 pb-1">{prop.sender.text}</p>
          <span className="text-end text-xs">{prop.sender.date}</span>
        </div>
      </div>
    );
  };
  