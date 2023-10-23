export const ChatBoxReciver = (prop) => {
  const timeItem = (time) => {
     const timer = new Date(time).toLocaleTimeString("fa-IR", {
      hourCycle: "h24",
      hour: "2-digit",
      minute: "2-digit",
    });
    return timer ;
  };

  return (
    <div className="flex flex-row-reverse items-end m-2 p-2">
      <div className="shrink-0 rounded-full  w-[30px] leading-[30px] text-center bg-[#303952]">
        {prop.item.name[0] + prop.item.name[1]}
      </div>
      <div className="flex flex-col bg-[#303952] mb-2 ml-1 rounded-xl p-2 max-w-[60vh]">
        <span className="text-[10px]">{prop.item.name} </span>
        <p className="text-left p-2 pb-1 break-words">{prop.reciver.text}</p>
        <span className="text-start mt-2 text-[10px]">
          {timeItem(prop.reciver.date)}
        </span>
      </div>
    </div>
  );
};
