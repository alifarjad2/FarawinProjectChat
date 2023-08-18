// در دست احداث ...
import farawin from "farawin";
import { useEffect } from "react";
import { ChatContainer } from "./components/ChatContainer";
import { DrawerChat } from "./components/drawer";


export const ChatPage = () => {

  return (
    // این دیو برای تنظیمات کلی پس زمینه استفاده میشه 
      <div className="bg-[#dbdbdb] box-border w-screen " >
        {/* این دیو کانتینر اصلی صفحه چت ما است */}
      <div
    className="flex rounded-xl min-h-screen max-h-screen overflow-hidden bg-[#20232A] ml-5 mr-5 text-white"
  >
    {/* این کامپوننت مربوط به قسمت سمت راست لیست مخاطبین می باشد  */}
    <DrawerChat/>
    
{/*  این کامپوننت مربوط به کانتینر قسمت چت ک شامل هدر و صفحه چت و اینپوت ارسال پیام  */}
    <ChatContainer/>

  </div>
  </div>
  )
};
