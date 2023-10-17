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
      <div className="shrink-0 rounded-lg ml-2 w-[40px] leading-[40px] text-center bg-slate-500">
        {prop.item.name[0] + prop.item.name[1]}
      </div>
      <div className="flex flex-col bg-[#6B8AFE] mb-2 ml-1 rounded-xl p-2 max-w-[250px]">
        <span className="text-xs">{prop.item.name} </span>
        <p className="text-left pt-1 pb-1 break-words">{prop.reciver.text}</p>
        <span className="text-start text-xs">
          {timeItem(prop.reciver.date)}
        </span>
      </div>
    </div>
  );
};
