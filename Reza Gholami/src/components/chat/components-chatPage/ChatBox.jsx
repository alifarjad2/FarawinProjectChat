import useSWR from "swr";
import { useEffect, useState, useRef } from "react";
import {
  FaTrash,
  FaEdit,
  useStore,
  SenderChat,
  ReceiverChat,
} from "@/components";
////////////////////////////// fetcher swr
const fetchWithToken = (url) =>
  fetch(url, {
    headers: {
      authorization: localStorage.token,
    },
  }).then((res) => res.json());
//////////////////////////////
const ChatBox = () => {
  const { contactSelected, setChatData, chatData } = useStore();
  const [chatSender, setChatSender] = useState("");
  const [chatReceiver, setChatReceiver] = useState("");
  const chatListContainer = useRef(null);
  const { data } = useSWR(
    "https://farawin.iran.liara.run/api/chat/",
    fetchWithToken,
    { refreshInterval: 1000 }
  );
  ///////////////////////////// useEffect for lifeCycle updating
  useEffect(() => {
    setChatData(data);
  }, [data]);
  /////////////////////////// useEffect for scroll with any change message Box
  useEffect(() => {
    chatListContainer.current
      ? (chatListContainer.current.scrollTop =
          chatListContainer.current.scrollHeight)
      : "";
  });

  ////////////////////////// Function For set state chat receiver and sender (chat me)
  const getMyChat = () => {
    const chatRec = chatData?.chatList.filter(
      (item) =>
        item.receiver === localStorage.username &&
        contactSelected.username === item.sender
    );
    setChatReceiver(chatRec);
    const chatSend = chatData?.chatList.filter(
      (item) =>
        item.sender === localStorage.username &&
        contactSelected.username === item.receiver
    );
    setChatSender(chatSend);
  };
  ////////////////////////// useEffect for lifeCycle updating
  useEffect(() => {
    contactSelected ? getMyChat() : "";
  }, [contactSelected, chatData]);
  ////////////////////////// sort messages for show in box message
  const chatListSort = [...chatReceiver, ...chatSender].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  ////////////////////////////error by farawin.testDeleteChat
  const handleDeleteChat = async (chatDetails) => {
    const result = confirm("آیا می خواهید پیام را حذف کنید ؟");
    if (result) {
      try {
        const response = await fetch(
          "https://farawin.iran.liara.run/api/chat",
          {
            headers: {
              authorization: localStorage.token,
              "content-type": "application/json",
            },
            body: JSON.stringify({ id: chatDetails.id }),
            method: "DELETE",
          }
        );
        const success = response.status == "200";
        if (success) {
          alert("با موفقیت حذف گردید !");
        } else {
          alert("پیام حذف نشد !");
        }
      } catch (error) {
        console.log(error);
      }
    } else return;
  };
  ///////////////////////////////error by farawin.testEditChat  //set proxy for error cors
  const handleEditChat = async (chatDetails) => {
    const chatEdited = prompt("پیام خود را ویرایش کنید", chatDetails.text);
    if (chatEdited === chatDetails.text || chatEdited === null) return;
    if (chatEdited.length == 0) return alert("پیام نمیتواند خالی باشد !");
    else {
      try {
        const response = await fetch(
          "https://farawin.iran.liara.run/api/chat",
          {
            headers: {
              accept: "application/json",
              authorization: localStorage.token,
              "content-type": "application/json",
            },
            body: JSON.stringify({ id: chatDetails.id, textHtml: chatEdited }),
            method: "PUT",
            mode: "cors",
          }
        );
        const success = response.status == "200";
        if (success) {
          alert("با موفقیت ویرایش شد!");
        } else {
          alert("پیام ویرایش نشد!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  ////////////////////////////// Return
  return (
    <div
      ref={chatListContainer}
      className="flex-grow my-1 pr-2 overflow-y-auto items-end overflow-x-hidden">
      {chatListSort.length == 0 && contactSelected ? (
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="text-[#e5e7eb] font-bol
            
            d text-sm inline-block">
            پیامی وجود ندارد !
          </div>
        </div>
      ) : (
        chatListSort.map((chatDetails, index) => {
          const date = new Date(chatDetails.date);
          const chatDateString = date.toLocaleDateString("fa-ir", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          });
          const time = date.toLocaleTimeString("fa-ir", {
            hour: "2-digit",
            minute: "2-digit",
          });
          return (
            // not use chatDetails.id for key because id is repetitious in list
            chatDetails.receiver == localStorage.username ? (
              <ReceiverChat
                key={index}
                message={chatDetails.text}
                time={time}
                date={chatDateString}
              />
            ) : (
              <SenderChat
                key={index}
                message={chatDetails.text}
                time={time}
                date={chatDateString}>
                <FaEdit
                  onClick={() => handleEditChat(chatDetails)}
                  className="w-3 h-3 cursor-pointer"
                />
                <FaTrash
                  onClick={() => handleDeleteChat(chatDetails)}
                  className="w-3 h-3 cursor-pointer"
                />
              </SenderChat>
            )
          );
        })
      )}
    </div>
  );
};

export default ChatBox;
