export const ChatBoxSender = (prop) => {
  const timeItem = (time) => {
    const timer = new Date(time).toLocaleTimeString("fa-IR", {
     hourCycle: "h24",
     hour: "2-digit",
     minute: "2-digit"
   });
   return timer ;
 };

  return (
    <div className="flex flex-row items-end m-1 p-1">
      <div className="shrink-0 rounded-lg mr-2 w-[40px] leading-[40px] text-center bg-slate-500">
        ME
      </div>
      <div className="flex flex-col bg-[#30333C] mb-2 mr-1 rounded-xl p-2 max-w-[250px] ">
        <span className="text-xs">Me</span>
        <div className="text-start pt-1 pb-1 break-words">{prop.sender.text}</div>
        <span className="text-end text-xs">{timeItem(prop.sender.date)}</span>
      </div>
    </div>
  );
};
