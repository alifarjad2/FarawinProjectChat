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
    <div className="flex flex-row  ">
      
      <div className="flex flex-col bg-[#191923] mb-2  rounded-xl p-2 max-w-[60vw] ">
        <span className="text-xs">Me</span>
        <div className="text-start pt-1 pb-1 break-words">{prop.sender.text}</div>
        <span className="text-end text-xs">{timeItem(prop.sender.date)}</span>
      </div>
    </div>
  );
};
