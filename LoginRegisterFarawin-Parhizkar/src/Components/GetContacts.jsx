import { useEffect, useState } from "react";
import { useStore } from "./Zustand/useStore";

export default function GetContacts({ Toggle }) {
  const [filteredContacts, setFilteredContacts] = useState([]);
  const setSharedContact = useStore((state) => state.setSharedContact);
  const searchedContact = useStore((state) => state.searchedContact);
  const setSharedName = useStore((state) => state.setSharedName);
  const [selectedName, setSelectedName] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("");
  const setSharedNumber = useStore((state) => state.setSharedNumber);
  const setScrollChat = useStore((state) => state.setScrollChat);
  const sharedLastMessage = useStore((state) => state.sharedLastMessage);

  useEffect(() => {
    let ignore = false;
    async function fetchContactData() {
      const response = await fetch(
        "https://farawin.iran.liara.run/api/contact",
        {
          headers: {
            authorization: localStorage.token,
          },
          body: null,
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    }

    fetchContactData()
      .then((data) => {
        const filtered = data.contactList.filter(
          (contact) => contact.ref === localStorage.username
        );
        setFilteredContacts(filtered);
        setSharedContact(filtered);
      })
      .catch((error) => console.log("There was an error!", error));

    // console.log(sharedLastMessage);
    return () => {
      ignore = true;
    };
  }, [Toggle]);

  const contactChatList = (username) => {
    return sharedLastMessage.filter(
      (chat) =>
        (chat.sender == username && chat.receiver == localStorage.username) ||
        (chat.receiver == username && chat.sender == localStorage.username)
    );
  };
  setSharedName(selectedName);
  setSharedNumber(selectedNumber);

  return (
    <div className="p-1">
      {!filteredContacts.length ? (
        <p className="m-auto">لیست مخاطبین خالی است</p>
      ) : (
        <div>
          {searchedContact != "" ? (
            <div>
              {searchedContact.map((contact, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedName(contact.name),
                      setSelectedNumber(contact.username);
                    setScrollChat((c) => c + 1);
                  }}
                  className="cursor-pointer flex gap-2 p-2 items-center transition-all duration-300 hover:bg-[#2E333D] rounded-lg w-full"
                >
                  <div className="w-[40px] h-[40px] bg-violet-500 text-center rounded-xl p-1 text-sm">
                    {contact.name.split("").slice(0, 2).join(" ")}
                  </div>
                  <div className="flex flex-col">
                    <p>{contact.name}</p>
                    <p className="text-xs text-violet-400">
                      {contact.username}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            filteredContacts &&
            filteredContacts.map((contact, index) => {
              let now = new Date();
              let lastChatTime = new Date(
                contactChatList(contact.username)?.slice(-1)[0]?.date
              );
              let lastChatTimeShow = new Date(lastChatTime).toLocaleTimeString(
                "fa-ir",
                { day: "numeric", month: "short" }
              );
              let diffInMilliseconds = now - lastChatTime;
              let diffInMinutes = Math.floor(diffInMilliseconds / 1000 / 60);
              let show =
                50 > diffInMinutes > 0
                  ? `${diffInMinutes} min`
                  : diffInMinutes > 50
                  ? `${lastChatTimeShow}`
                  : contactChatList(contact.username)?.slice(-1)[0]?.text != ""
                  ? null
                  : "Just now";
              return (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedName(contact.name),
                      setSelectedNumber(contact.username);
                    setScrollChat((c) => c + 1);
                  }}
                  className="cursor-pointer flex justify-between gap-1 p-2 items-center transition-all duration-300 hover:bg-[#2E333D] rounded-lg w-full"
                >
                  <div className="flex gap-[3px] ">
                    <div className="w-10 h-10 bg-violet-500 text-center rounded-xl py-1 text-sm">
                      {contact.name.split("").slice(0, 2).join(" ")}
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-sm">{contact.name}</p>
                      <p className="text-xs text-violet-400">
                        {contactChatList(contact.username)?.slice(-1)[0]?.text
                          ? contactChatList(contact.username)?.slice(-1)[0]
                              ?.text.length > 10
                            ? contactChatList(contact.username)
                                ?.slice(-1)[0]
                                ?.text.substring(0, 10) + "..."
                            : contactChatList(contact.username)?.slice(-1)[0]
                                ?.text
                          : "پیامی نیست ... "}
                      </p>
                    </div>
                  </div>

                  <div className="w-1/4">
                    {contactChatList(contact.username)?.slice(-1)[0]?.text !=
                    "" ? (
                      <p className="text-xs">{show}</p>
                    ) : (
                      <p>empty</p>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
