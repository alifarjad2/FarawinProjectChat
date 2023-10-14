import SideBar from "./SideBar";
import ChatBox from "./ChatBox";
import { useEffect, useRef, useState } from "react";
import farawin from "farawin";

export default function ChatPage() {
  const [sizeLow, setSizeLow] = useState(false);
  const [hideSideBar, setHideSideBar] = useState(false);
  const [selectedContact, setSelectedontact] = useState(null);
  const [contactList, setContactList] = useState(null);
  const [isLoadedContact, setIsLoadedContact] = useState(false);
  const [chatList, setChatList] = useState(null);
  const [lastMessages, setLastMessages] = useState(null);
  const [isSearchBox, setIsSearchBox] = useState(false);
  useEffect(() => {
    farawin.getUsers((res) => {
      if (res.code == "200")
        localStorage.name = res.userList.filter(
          (user) => user.username == localStorage.username
        )[0].name;
    });
  }, []);

  useEffect(() => {
    farawin.getChats().then((res) => {
      setChatList(
        res.chatList
          .filter(
            (message) =>
              message.sender != message.receiver &&
              (message.sender == localStorage.username ||
                message.receiver == localStorage.username)
          )
          .sort((a, b) => new Date(a.date) - new Date(b.date))
      );
    });
    let a = setInterval(() => {
      farawin.getChats().then((res) => {
        setChatList(
          res.chatList
            .filter(
              (message) =>
                message.sender != message.receiver &&
                (message.sender == localStorage.username ||
                  message.receiver == localStorage.username)
            )
            .sort((a, b) => new Date(a.date) - new Date(b.date))
        );
      });
    }, 5000);
    return () => {
      clearInterval(a);
    };
  }, []);

  useEffect(() => {
    farawin.getContacts().then((res) => {
      setContactList(
        res.contactList.filter((e) => e.ref == localStorage.username)
      );
      setIsLoadedContact(true);
    });
    let a = setInterval(() => {
      farawin.getContacts().then((res) => {
        setContactList(
          res.contactList.filter((e) => e.ref == localStorage.username)
        );
        setIsLoadedContact(true);
      });
    }, 10000);
    if (window.innerWidth <= 640) setSizeLow(true);
    else setSizeLow(false);
    return () => {
      clearInterval(a);
    };
  }, []);

  // #region LastMessage

  let LastMessage = () => {
    let lastChats = new Map();
    if (chatList && contactList) {
      for (let i = contactList.length - 1; i >= 0; i--) {
        for (let j = chatList.length - 1; j >= 0; j--) {
          if (
            chatList[j].sender == contactList[i].username ||
            chatList[j].receiver == contactList[i].username
          ) {
            lastChats.set(contactList[i], chatList[j]);
            break;
          }
        }
      }
    }
    return lastChats;
  };
  useEffect(() => {
    setLastMessages(LastMessage());
  }, [chatList, contactList]);
  // #endregion
  // #region ProfileContent
  const createImageProfile = (contact = {}) => {
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
  useEffect(() => {
    if (selectedContact && selectedContact[3]) {
      let element = document.getElementById(`${selectedContact[3]}`);
      let element2 = document.getElementById(`messageBox`);
      if (element2 && element) {
        element.classList.toggle("bg-slate-600");
        setTimeout(() => {
          element.classList.toggle("bg-slate-600");
        }, 800);
        element.scrollIntoView({ inline: "center" });
      }
    } else if (selectedContact) {
      let element = document.getElementById("messageBox");
      element.scroll({
        top: element.scrollHeight - element.clientHeight,
        behavior: "instant",
      });
    }
  }, [selectedContact]);
  window.onresize = (e) => {
    if (e.target.innerWidth <= 640) setSizeLow(true);
    else setSizeLow(false);
    if (e.target.innerWidth <= 640 && selectedContact) setHideSideBar(true);
    else setHideSideBar(false);
  };
  return (
    <div
      className="flex items-center justify-center"
      dir="rtl"
      onClick={(event) => {
        if (!event.target.id.match("Search")) setIsSearchBox(false);
      }}
    >
      <div className="flex items-center justify-center max-w-[962px] w-screen">
        <div className="w-screen h-screen p-[35px] bg-[#21242B] bg-opacity-75 text-[#FAFBFD] flex gap-8">
          {(!hideSideBar || !selectedContact) && chatList && contactList && (
            <SideBar
              sizeLow={sizeLow}
              setHideSideBar={setHideSideBar}
              lastM={
                lastMessages && (lastMessages.size > 0 ? lastMessages : null)
              }
              sC={setSelectedontact}
              load={isLoadedContact}
              contacts={contactList && contactList}
              setC={setContactList}
              isSearchBox={isSearchBox}
              setIsSearchBox={setIsSearchBox}
              createImageProfile={createImageProfile}
              selectedContact={selectedContact}
              chatList={chatList}
            />
          )}
          {selectedContact && chatList && contactList && (
            <ChatBox
              setHideSideBar={setHideSideBar}
              setChats={setChatList}
              setSelect={setSelectedontact}
              selectedContact={selectedContact}
              prof={selectedContact && selectedContact[2]}
              header={selectedContact && selectedContact[1]}
              num={selectedContact && selectedContact[0]}
              setC={setContactList}
              chats={
                chatList &&
                chatList.filter(
                  (message) =>
                    message.receiver == selectedContact[0] ||
                    message.sender == selectedContact[0]
                )
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}
