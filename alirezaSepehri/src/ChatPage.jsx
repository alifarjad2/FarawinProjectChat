import { useState } from "react";
import ContactList from "./ContactList";
import MessageContent from "./MessageContent";
import Modal from "./Modal";


export default function ChatPage({ user }) {
  const [modal, setModal] = useState('hidden')
  return (
    <div className="flex w-8/12 h-[85vh] bg-[#20232a] text-white rounded-2xl pt-2 pb-1 mx-3">
      <ContactList user={user} />
      <MessageContent user={user} setModal={setModal} />
      <Modal user={user} modal={modal} setModal={setModal} />
    </div>
  );
}
