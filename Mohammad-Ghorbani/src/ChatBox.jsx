import React, { useEffect, useState, useRef } from "react";
import farawin from "farawin";
import ImageAttach from "./Assets/attach-48.png";
import ImageMenu from "./Assets/menu-50.png";
import ImageRef from "./Assets/refresh-48.png";
import ImageSendMessage from "./Assets/send-48.png";
import ImageExit from "./Assets/exit-48.png";
import ImageEditContact from "./Assets/edit-50.png";
import EditContact from "./EditContact";
import ImageDelete from "./Assets/delete-50.png";
import ImageEditMessageWhite from "./Assets/edit-message-50-w.png";

function ChatBox({
  selectedContact,
  sender,
  receiver,
  handleContactButtonClick,
  setSelectedContact,
}) {
  const [sendMessage, setSendMessage] = useState([]);
  const [closeEditContact, setCloseEditContact] = useState(true);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    selectedContact ? (document.title = selectedContact.name) : null;
  }, [selectedContact]);

  const handleSendMessage = (e) => {
    setSendMessage(e.target.value);
  };

  const senderMessages = async () => {
    const res = await farawin.testAddChat(
      selectedContact.username,
      sendMessage
    );
    return res;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      senderMessages();
      setSendMessage("");
      handleContactButtonClick();
      setSelectedChat(null);
    }
  };

  const handleSendButton = () => {
    senderMessages();
    setSendMessage("");
    handleContactButtonClick();
    setSelectedChat(null);
  };

  const messages = [
    ...(Array.isArray(sender) ? sender : []),
    ...(Array.isArray(receiver) ? receiver : []),
  ];

  messages.sort((a, b) => new Date(a.date) - new Date(b.date));

  const formatDate = (dateString) => {
    const time = {
      hourCycle: "h24",
      hour: "2-digit",
      minute: "2-digit",
    };
    const date = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };

    const newDate = [
      new Date(dateString).toLocaleTimeString("fa-IR", time),
      new Date(dateString).toLocaleDateString("fa-IR", date),
    ];
    return newDate;
  };

  const today = new Date().toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const chatContainerRef = useRef();
  useEffect(() => {
    if (chatContainerRef.current)
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight -
        chatContainerRef.current.clientHeight;
  });

  // console.log(selectedChat);

  const deleteChat = async () => {
    const result = confirm("آیا می خواهید پیام را حذف کنید ؟");
    if (result) {
      const response = await fetch("https://farawin.iran.liara.run/api/chat", {
        headers: {
          authorization: localStorage.token,
          "content-type": "application/json",
        },
        body: JSON.stringify({ id: selectedChat.id }),
        method: "DELETE",
      });
      response.status === 200
        ? alert("با موفقیت حذف گردید !") & handleContactButtonClick()
        : null;
    }
  };

  //console.log(selectedChat);

  // const editChat = async () => {
  //   const chatEdited = prompt("پیام خود را ویرایش کنید", selectedChat?.text);
  //   if (chatEdited === selectedChat.text || chatEdited === null) return null;
  //   if (chatEdited.length == 0) return alert("پیام نمیتواند خالی باشد !");
  //   else {
  //     await farawin.testEditChat(selectedContact?.id, chatEdited, (res) =>
  //       console.log(res)
  //     );
  //   }
  // };

  const editChat = async () => {
    const edit = prompt("پیام خود را ویرایش کنید", selectedChat?.text);
    if (edit) {
      const response = await fetch("https://farawin.iran.liara.run/api/chat", {
        headers: {
          accept: "application/json",
          authorization: localStorage.token,
          "content-type": "application/json",
        },
        body: JSON.stringify({ id: selectedChat?.id, textHtml: edit }),
        method: "PUT",
        mode: "cors",
      });
      response.status === 200
        ? alert("با موفقیت ویرایش شد!") & handleContactButtonClick()
        : null;
    } else return null;
  };

  return (
    <>
      {!selectedContact ? (
        <div className="w-2/3 h-full flex flex-col bg-[#202329] justify-center text-2xl font-bold text-center  max-lg:w-full">
          لطفا یک مخاطب انتخاب کنید
          <img
            title="خروج از اکانت "
            className="w-7 h-7 cursor-pointer absolute left-4 top-5 max-lg:left-9"
            src={ImageExit}
            alt="more"
            onClick={() => {
              localStorage.removeItem("token");
              location.reload();
            }}
          />
        </div>
      ) : (
        <div
          id="chatBox"
          className="w-2/3 h-full flex flex-col bg-[#202329] max-lg:w-full"
        >
          {/* component Edit contact */}
          <EditContact
            closeEditContact={closeEditContact}
            setCloseEditContact={setCloseEditContact}
          />
          <div className="pl-5 w-full h-20 flex flex-row justify-between relative ">
            <button
              title="مخاطبین"
              type="button"
              onClick={() => setSelectedContact(null)}
              id="openMenu"
              className="max-lg:w-7  lg:w-0 lg:cursor-pointer absolute left-0 top-5 cursor-pointer "
            >
              <img className="w-8" src={ImageMenu} alt="open Menu" />
            </button>
            <button
              title="بروزرسانی"
              onClick={handleContactButtonClick}
              className="max-lg:w-7 w-9 left-12 top-5 absolute max-lg:left-16 "
            >
              <img src={ImageRef} />
            </button>
            <div className="text-2xl absolute top-5 right-7 max-lg:top-2 max-lg:right-4 max-sm:w-[9.9rem] max-sm:top-0 max-[340px]:w-[5rem] max-[340px]:text-base max-sm:right-2 max-sm:text-lg">
              {selectedContact && selectedContact.name}
            </div>
            <div className="text-xs text-slate-500 absolute top-[3.4rem] right-[1.73rem] max-lg:top-10 max-lg:right-4 max-sm:top-14 max-sm:right-2">
              {selectedContact && selectedContact.username}
            </div>
            <img
              title="خروج از اکانت "
              className="w-7 max-lg:w-6 max-lg:h-6 h-7 cursor-pointer absolute left-1 top-6 max-lg:left-9"
              src={ImageExit}
              alt="more"
              onClick={() => {
                localStorage.removeItem("token");
                location.reload();
              }}
            />
            <button
              onClick={() => {
                setCloseEditContact(false);
              }}
              className=" absolute w-9 max-lg:w-7 left-24 top-5"
            >
              <img
                src={ImageEditContact}
                title="ویرایش مخاطب"
                alt="ImageEditContact"
              />
            </button>
          </div>
          <div
            id="pv"
            ref={chatContainerRef}
            className="px-1 w-full h-5/6 overflow-y-auto  flex flex-col gap-y-2 scroll-smooth "
          >
            {messages.map((message, index) => (
              <div key={index}>
                {index === 0 ||
                formatDate(messages[index - 1].date)[1] !==
                  formatDate(message.date)[1] ? (
                  <div className="bg-white text-black w-32 my-5 m-auto text-center rounded-full ">
                    {formatDate(message.date)[1] === today
                      ? "امروز"
                      : formatDate(message.date)[1]}
                  </div>
                ) : null}
                <div className="flex">
                  <div
                    key={index}
                    className={`mr-1 ${
                      message.sender !== localStorage.myUsername
                        ? " bg-[#2E333D] rounded-3xl rounded-bl-none text-right w-fit max-w-xl min-w-[8rem] max-lg:max-w-md  max-md:max-w-sm break-words "
                        : " bg-[#6b8afe] rounded-3xl rounded-br-none text-right w-fit max-w-xl min-w-[8rem] max-lg:max-w-md  max-md:max-w-sm m-auto break-words "
                    } p-3 `}
                  >
                    <p className="text-lg overflow-auto font-sans ">
                      {message.text}
                    </p>

                    <div className="text-sm relative">
                      <p
                        className={
                          message.sender !== localStorage.myUsername
                            ? "text-left pt-3  "
                            : "text-right pt-3"
                        }
                      >
                        {formatDate(message.date)[0]}
                      </p>
                      {message.sender === localStorage.myUsername && (
                        <button
                          onClick={() => {
                            setSelectedChat(message);
                            deleteChat();
                          }}
                          className="w-5 absolute -left-1 -bottom-1"
                        >
                          <img src={ImageDelete} alt="delete" />
                        </button>
                      )}
                      {message.sender === localStorage.myUsername &&
                      <button
                        onClick={() => {
                          setSelectedChat(message);
                          editChat();
                        }}
                        className={`w-5 absolute left-5 -bottom-1`}
                      >
                        <img src={ImageEditMessageWhite} alt="editMessage" />
                      </button>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-14 lg:pr-5">
            <div className="w-full h-full rounded-2xl flex my-1 focus-within:bg-[#2E333D]">
              <img
                className="w-10 m-auto cursor-pointer"
                src={ImageAttach}
                alt="Attach"
                onClick={() => {
                  alert("این امکان هنوز پیاده سازی نشده است");
                }}
              />
              <input
                onChange={handleSendMessage}
                onKeyDown={handleKeyPress}
                placeholder="پیام خود را بنویسید"
                type="text"
                className="bg-inherit w-full px-5 h-full m-auto rounded-2xl focus:outline-none text-right text-lg"
              />
              <button
                type="button"
                onClick={handleSendButton}
                className={`lg:hidden ${sendMessage.length === 0 && "w-0"} `}
              >
                <img src={ImageSendMessage} className="w-12" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBox;
