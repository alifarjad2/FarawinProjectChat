// در دست احداث ...
import { ChatContainer } from "./components/ChatContainer";
import { DrawerChat } from "./components/Drawer";


export const ChatPage = () => {
  

  return (
    // این دیو برای تنظیمات کلی پس زمینه استفاده میشه 
      <div className="bg-[#dbdbdb] fixed top-0 bottom-0 left-0 right-0 box-border  " >
        {/* این دیو کانتینر اصلی صفحه چت ما است */}
      <div
    className="flex  mx-5 h-screen  rounded-xl  overflow-hidden bg-[#20232A]  text-white"
  >
    {/* این کامپوننت مربوط به قسمت سمت راست لیست مخاطبین می باشد  */}
    <DrawerChat/>
    
{/*  این کامپوننت مربوط به کانتینر قسمت چت ک شامل هدر و صفحه چت و اینپوت ارسال پیام  */}
    <ChatContainer />

  </div>
  </div>
  )
};