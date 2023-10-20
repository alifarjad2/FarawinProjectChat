// در دست احداث ...
import { useEffect, useState } from "react";
import { ChatContainer } from "./components/ChatContainer";
import { DrawerChat } from "./components/Drawer";
import farawin from "farawin";

export const ChatPage = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [getAllChat, setGetAllChat] = useState("");
  const [sender, setSender] = useState("");
  const [reciver, setReciver] = useState("");
  const [f,force] = useState(0);

  const creatAllChats = async () => {
    const chatAll = await farawin.getChats();
    setGetAllChat(chatAll.chatList);
    // console.log(getAllChat);
    // console.log(selectedItem);
  };

  const creatSender = () => {
    //  debugger
    const res = getAllChat.filter((item) => {
      if (item.sender === localStorage.userMobile) {
        return item.receiver == selectedItem.username;
      }
    });
    setSender(res);
  };

  const creatReciver = () => {
    const res = getAllChat.filter((item) => {
      if (item.sender === selectedItem.username) {
        return item.receiver == localStorage.userMobile;
      }
    });
    setReciver(res);
  };

  const callCreatFunctions = () => {
    creatSender();
    creatReciver();
  };

  // console.log("sender table : ");
  // console.table(sender);
  // console.log("reciver table : ");
  // console.table(reciver);

  useEffect(() => {
    creatAllChats();
    {
      selectedItem ? callCreatFunctions() : "";
    }
  }, [selectedItem,f]);

  const selectedHandler = (item) => {
    setSelectedItem(item.contact);
  };

  return (
    // این دیو برای تنظیمات کلی پس زمینه استفاده میشه
    <div className="bg-[#dbdbdb] fixed top-0 bottom-0 left-0 right-0 box-border ">
      {/* این دیو کانتینر اصلی صفحه چت ما است */}
      <div className="flex mx-5 h-screen  rounded-xl  overflow-hidden bg-[#20232A]  text-white">
        {/* این کامپوننت مربوط به قسمت سمت راست لیست مخاطبین می باشد  */}
        <DrawerChat selectedItem={selectedHandler} />

        {/*  این کامپوننت مربوط به کانتینر قسمت چت ک شامل هدر و صفحه چت و اینپوت ارسال پیام  */}
        <ChatContainer item={selectedItem} sender={sender} reciver={reciver} force={force}  />
      </div>
    </div>
  );
};
