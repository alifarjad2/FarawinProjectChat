import Profile from "./Profile";

export default function Recevie({text , pro , name , date}) {
  return (
<<<<<<< HEAD
    <div className="flex m-[5px] justify-self-end">
=======
    <div className="flex w-3/4 m-[5px] self-end justify-end">
>>>>>>> 0ce7ebd73975271029a0b45a34e4dcc7e5c93c75
      <div className="bg-[#30323E] self-end p-2.5 rounded-[20px] relative">
        <div className="text-[18px] mb-[6px]">{name}</div>
        <div dir={`${(text[0].charCodeAt() <= 122 && text[0].charCodeAt() >= 97) || (text[0].charCodeAt() <= 90 && text[0].charCodeAt() >= 65) ? 'ltr' : 'rtl'}`} className="before:absolute before:border-[#30323E] before:border-[25px] before:left-[-16px] before:bottom-[0px] before:border-r-transparent before:border-l-transparent before:border-t-transparent before:rounded-[40%] grow text-[14px]">
          {text}
        </div>
        <div className="bottom-[7px] text-right text-[10px] pr-[11px]">
          {date}
        </div>
      </div>
      <Profile name={pro} className="shrink-0 self-end mr-[15px] pt-[11px]"/>
    </div>
  );
}
