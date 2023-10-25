import { useState, useEffect } from "react";
import ChatBox from "./ChatBox";
import Sidebar from "./Sidebar";
import farawin from "farawin";

export default function Home() {
  const [contact, setContact] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [allChats, setAllChats] = useState([]);
  const [sender, setSender] = useState([]);
  const [receiver, setReceiver] = useState([]);

  useEffect(() => {
    getContact();
    getChats();
  }, []);

  useEffect(() => {
    filterChats();
  }, [selectedContact, allChats]);

  const getContact = async () => {
    const res = await farawin.getContacts();
    const filteredContacts = res.contactList.filter(
      (contact) => contact.ref === localStorage.myUsername
    );
    setContact(filteredContacts);
  };

  const getChats = async () => {
    const res = await farawin.getChats();
    setAllChats(res.chatList);
  };

  const filterChats = () => {
    if (selectedContact) {
      const filteredSender = allChats.filter(
        (chat) =>
          chat.sender === localStorage.myUsername &&
          chat.receiver === selectedContact.username
      );
      const filteredReceiver = allChats.filter(
        (chat) =>
          chat.sender === selectedContact.username &&
          chat.receiver === localStorage.myUsername
      );

      setSender(filteredSender);
      setReceiver(filteredReceiver);
    } else {
      setSender([]);
      setReceiver([]);
    }
  };

  return (
    <div className="box-border bg-[#34393C] w-screen h-screen pl-10 pt-5 pr-10 pb-14 text-white text-right cursor-default font-sans">
      <div className="w-full h-full m-auto mt-5 p-2 rounded-3xl flex flex-row bg-[#202329] max-lg:relative relative">
        <ChatBox
          selectedContact={selectedContact}
          sender={sender}
          receiver={receiver}
          handleContactButtonClick={getChats}
          setSelectedContact={setSelectedContact}
        />
        <Sidebar
          contact={contact}
          setSelectedContact={setSelectedContact}
          handleContactButtonClick={getContact}
          allChats={allChats}
          selectedContact={selectedContact}
        />
      </div>
    </div>
  );
}
