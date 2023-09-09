import MessageBox from "./messageBox";
import Contacts from "./Contacts";
import { useEffect, useState } from "react";
import farawin from "farawin";

export default function Chatscreen() {
  const [selectCon, setSelectCon] = useState(null);
  const [chatBox, setChatBox] = useState(false);
  const [chatList, setChatList] = useState(null);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    farawin.getContacts((response) => {
      setContact(response.contactList);
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
    farawin.getUsers((res) => {
      localStorage.name = res.userList.filter(
        (user) => user.username == localStorage.username
      )[0].name;
    });
  }, []);

  return (
    <div className="w-full h-full py-4 px-2" dir="rtl">
      <div
        id="main"
        className="w-full h-full bg-[#21242B] flex rounded-2xl  text-white "
      >
        {<Contacts contacts={contact} setSelectedCon={setSelectCon} setChatBox={setChatBox} setC={setContact}/>}
        {chatBox && (
          <MessageBox
            setCon = {setContact}
            setChat={setChatList}
            setChatBox={setChatBox}
            name={selectCon[1]}
            number={selectCon[0]}
            chats={
              chatList &&
              chatList
                .filter(
                  (message) =>
                    message.receiver == selectCon[0] ||
                    message.sender == selectCon[0]
                )
                .sort((a, b) => new Date(a.date) - new Date(b.date))
            }
          />
        )}
      </div>
    </div>
  );
}
