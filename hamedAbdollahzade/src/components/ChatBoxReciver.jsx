export const ChatBoxReciver = (prop) => {
  return (
    <div className="flex flex-row-reverse items-end m-2 p-2">
      <div className="shrink-0 rounded-lg ml-2 w-[40px] leading-[40px] text-center bg-slate-500">
        {prop.item.name[0] + prop.item.name[1]}
      </div>
      <div className="flex flex-col bg-[#6B8AFE] mb-2 ml-1 rounded-xl p-2 relative">
        <span className="text-xs">{prop.item.name} </span>
        <p className="text-left pt-1 pb-1">{prop.reciver.text}</p>
        <span className="text-start text-xs">{prop.reciver.date}</span>
      </div>
    </div>
  );
};
