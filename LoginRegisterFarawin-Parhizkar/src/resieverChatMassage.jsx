import farawin from "farawin";
import { useEffect, useState } from "react";
import { useRef } from "react";

export default function RecieverChatMassage(props) {
  const [filteredChats, setFilteredChats] = useState([]);
  const [control, setControl] = useState(false);
  const chatController = useRef(null);

  useEffect(() => {
    let ignore = false;

    farawin.getChats((res) => {
      if (!ignore) {
        setFilteredChats(res.chatList);
      }
    });

    return () => {
      ignore = true;
    };
  }, [props.buttonToggle2]);

  const senderChats = filteredChats.filter((res) => {
    if (res.receiver == localStorage.username) {
      return res.sender == props.number;
    }
  });
  const receiverChats = filteredChats.filter((res) => {
    if (res.receiver == props.number) {
      return res.sender == localStorage.username;
    }
  });

  console.log(senderChats);
  console.log(receiverChats);

  if (chatController?.current) {
    clearInterval(chatController.current);
  }

  chatController.current = setInterval(() => {
    if (receiverChats == "" && senderChats == "") {
      setControl(false);
    } else {
      setControl(true);
    }
  }, 1000);

  return (
    <div>
      <div className=" flex flex-col">
        {!control ? (
          <p className="text-white font-bold">پیغامی وجود ندارد</p>
        ) : (
          <div>
            {receiverChats &&
              receiverChats.map((chat) => {
                // Convert chat.date to a Date object
                const dateObj = new Date(chat.date);

                // Extract the hour from the Date object
                const hour = dateObj.getHours();
                const minute = dateObj.getMinutes();
                return (
                  <div
                    className="w-1/2 h-fit rounded-lg bg-green-500 my-5"
                    key={chat.date}
                  >
                    <p className="w-full text-white p-2">{chat.text}</p>
                    <p>
                      {hour}:{minute}
                    </p>
                  </div>
                );
              })}
            {senderChats &&
              senderChats.map((chat) => {
                // Convert chat.date to a Date object
                const dateObj = new Date(chat.date);

                // Extract the hour from the Date object
                const hour = dateObj.getHours();
                const minute = dateObj.getMinutes();
                return (
                  <div
                    className="w-1/2 h-fit rounded-lg bg-red-500 my-5 "
                    key={chat.date}
                  >
                    <p className="w-full  text-white p-2 ">{chat.text}</p>
                    <p>
                      {hour}:{minute}
                    </p>
                  </div>
                );
              })}
          </div>
        )}
      </div>

    </div>
  );
}
