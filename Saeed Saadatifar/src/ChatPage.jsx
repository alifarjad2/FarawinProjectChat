import SideBar from "./SideBar";
import Profile from "./Profile";
import ChatBox from "./ChatBox";
import { useEffect, useRef, useState } from "react";
import farawin from "farawin";

export default function ChatPage() {
  const [selectedContact, setSelectedontact] = useState(null);
  const [contactList, setContactList] = useState(null);
  const [isLoadedContact, setIsLoadedContact] = useState(false);
  const [chatList, setChatList] = useState(null);
<<<<<<< HEAD
  const [lastMessages, setLastMessages] = useState(null);
=======
  const [lastMessages , setLastMessages] = useState(null)
>>>>>>> 0ce7ebd73975271029a0b45a34e4dcc7e5c93c75

  useEffect(() => {
    farawin.getUsers((res) => {
      localStorage.name = res.userList.filter(
        (user) => user.username == localStorage.username
      )[0].name;
    });
  }, []);

  useEffect(() => {
    farawin.getChats((res) => {
      setChatList(
        res.chatList.filter(
          (message) =>
            message.sender == localStorage.username ||
            message.receiver == localStorage.username
        )
      );
    });
  }, []);

  useEffect(() => {
    farawin.getContacts((e) => {
      setContactList(
        e.contactList.filter((e) => e.ref == localStorage.username)
      );
      setIsLoadedContact(true);
    });
  }, []);
<<<<<<< HEAD

  
=======
  
  // #region LastMessage
  let LastMessage = () => {
    let lastMessages = [];
    let chats = chatList.sort((a, b) => new Date(a.date) - new Date(b.date));
    let lastRecevier = chatList[chatList.length - 1].receiver;
    let lastSender = chatList[chatList.length - 1].sender;

    for (let i = chatList.length - 1; i >= 0; i--) {
      if (
        (chatList[i].receiver == lastRecevier &&
          chatList[i].sender == lastSender &&
          i != chatList.length - 1) ||
        chatList[i].sender == chatList[i].receiver ||
        (chatList[i].receiver == lastSender &&
          chatList[i].sender == lastRecevier)
      )
        continue;
      lastRecevier = chatList[i].receiver;
      lastSender = chatList[i].sender;
      lastMessages.push({
        key: `${lastSender}` + `${lastRecevier}`,
        value: chatList[i].text,
      });
    }
    return lastMessages;
  };
  useEffect(()=>{
    chatList && setLastMessages(LastMessage());
  },[chatList]);
  // #endregion

>>>>>>> 0ce7ebd73975271029a0b45a34e4dcc7e5c93c75
  // #region ProfileContent
  const createImageProfile = () => {
    let imageWordProfile = "";
    let nameSplitBySpace = localStorage.name.split(" ");
    let countSpace = Math.floor(nameSplitBySpace.length / 2);
    let i = 0;
    do {
      if (countSpace == 0 || i >= countSpace) {
        imageWordProfile += nameSplitBySpace[i][0];
        i++;
        continue;
      }
      imageWordProfile += nameSplitBySpace[i][0];
      i++;
    } while (i < countSpace + 1);
    let str = imageWordProfile.slice(1);
    imageWordProfile = imageWordProfile.charAt(0).toUpperCase();
    imageWordProfile += str;
    localStorage.prof = imageWordProfile;
  };
  localStorage.name && createImageProfile();
  // #endregion

  return (
    <div className="flex items-center justify-center" dir="rtl">
      <div className="flex items-center justify-center h-screen max-w-[962px] w-screen">
        <div className="w-screen h-screen p-[35px] bg-[#21242B] text-[#FAFBFD] flex">
<<<<<<< HEAD
          {chatList && <SideBar
            chats = {chatList && chatList}
=======
          <SideBar
            lastM={lastMessages && lastMessages}
>>>>>>> 0ce7ebd73975271029a0b45a34e4dcc7e5c93c75
            sC={setSelectedontact}
            load={isLoadedContact}
            contacts={contactList && contactList}
            setC={setContactList}
<<<<<<< HEAD
          />}
=======
          />
>>>>>>> 0ce7ebd73975271029a0b45a34e4dcc7e5c93c75
          {selectedContact && (
            <ChatBox
              setChats={setChatList}
              setSelect={setSelectedontact}
              prof={selectedContact && selectedContact[2]}
              header={selectedContact && selectedContact[1]}
              num={selectedContact && selectedContact[0]}
              setC={setContactList}
              chats={
                chatList &&
                chatList
                  .filter(
                    (message) =>
                      message.receiver == selectedContact[0] ||
                      message.sender == selectedContact[0]
                  )
                  .sort((a, b) => new Date(a.date) - new Date(b.date))
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}
