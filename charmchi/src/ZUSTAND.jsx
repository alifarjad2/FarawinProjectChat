import { create } from "zustand";
import farawin from "farawin";

const Store = create((set) => ({
  informationChatter: null,
  setInformationChatter: (param) => set(() => ({ informationChatter: param })),
  contacts: [],
  setContacts: () =>
    farawin.getContacts((res) => {
      if (res.code == "200") {
        set(() => ({
          contacts: res.contactList.filter(
            (contact) => contact.ref == localStorage.username
          ),
        }));
      }
    }),
  allChats: [],
  setAllChats: () =>
    farawin.getChats((res) => {
      if (res.code == "200") {
        set(() => ({
          allChats: res.chatList
            .filter(
              (chat) =>
                chat.sender != chat.receiver &&
                (chat.sender == localStorage.username ||
                  chat.receiver == localStorage.username)
            )
            .sort((a, b) => a.date - b.date),
        }));
      }
    }),
}));

export function last(allChats, contacts) {
  let payam = new Map();
  for (let i = 0; i < contacts.length; i++) {
    let arr = allChats.filter(
      (chat) =>
        chat.receiver == contacts[i].username ||
        chat.sender == contacts[i].username
    );
    arr.length > 0
      ? payam.set(contacts[i].username, arr[arr.length - 1])
      : payam.set(contacts[i].username, null);
    // for (let j = allChats.length - 1; j >= 0; j--) {
    //   if (
    //     contacts[i].username == allChats[j].sender ||
    //     contacts[i].username == allChats[j].receiver
    //   ) {
    //     payam.set(contacts[i].username, allChats[j].text);
    //     break;
    //   }
    // }
  }
  return payam;
}

export default Store;
