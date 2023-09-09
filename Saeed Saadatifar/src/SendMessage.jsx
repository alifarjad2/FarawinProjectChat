import Profile from "./Profile";

export default function Send({ text, pro, name, date }) {
  return (
<<<<<<< HEAD
    <div className="flex justify-self-start m-[5px]">
=======
    <div className="flex self-start w-3/4 justify-start m-[5px]">
>>>>>>> 0ce7ebd73975271029a0b45a34e4dcc7e5c93c75
      <Profile name={pro} className="shrink-0 self-end ml-[15px] pt-[11px]" />
      <div className="bg-[#6B8AFE] p-2.5 rounded-[20px] relative">
        <div className="text-[18px] mb-[6px]">{name}</div>
        <div className="before:absolute before:border-[#6B8AFE] before:border-[25px] before:right-[-16px] before:bottom-[0px] before:border-r-transparent before:border-l-transparent before:border-t-transparent before:rounded-[40%] grow text-[14px]">
          {text}
        </div>
        <div className="bottom-[7px] text-right pr-[11px] text-[10px]">
          {date}
        </div>
      </div>
    </div>
  );
}
