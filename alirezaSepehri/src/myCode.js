import farawin from "farawin";

// آرایه شامل الگوها
const formRegex = {
  username: /.{3,}/,
  mobile: farawin.mobileRegex,
  password: /.{8,}/,
};

async function listContact() {
  const result = await farawin.getContacts();
  return result.contactList;
}

async function listMsg() {
  const result = await farawin.getChats();
  return result.chatList;
}

listMsg();

export function breakName(name) {
  const array = name.split(" ");
  const onePart = array[0].slice(0, 1);
  if (array.length === 1) {
    return onePart;
  }
  return onePart + " " + array[array.length - 1].slice(0, 1);
}

const Contacts = await listContact();
const Chats = await listMsg();

export { formRegex, Contacts, Chats };
