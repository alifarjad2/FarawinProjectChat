import React, { useState, useEffect } from "react";
import { useStore } from "./Zustand/useStore";
import SendIcon from "../assets/SendIco.png";
export default function ChatSender() {
  const sharedNumber = useStore((state) => state.sharedNumber);
  const [sendText, setSendText] = useState("");
  const [refSendText, setRefSendText] = useState("");
  const setRefreshChat = useStore((state) => state.setRefreshChat);
  const setScrollChat = useStore((state) => state.setScrollChat);
  useEffect(() => {
    async function chatSender() {
      const body = JSON.stringify({
        contactUsername: sharedNumber,
        textHtml: sendText,
      });

      const response = await fetch("https://farawin.iran.liara.run/api/chat", {
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.token,
        },
        body: body,
        method: "POST",
      });
    }

    if (refSendText) {
      chatSender();
      setSendText("");
      setRefreshChat(refSendText);
      setScrollChat((c) => c + 1);
    }
  }, [refSendText]);
  const handleSendText = (event) => {
    setSendText(event.target.value);
  };
  const handleSendByEnter = (event) => {
    if (event.key == "Enter") {
      setRefSendText(Math.random());
    }
  };
  const handleSend = () => {
    setRefSendText(Math.random());
  };
  // console.log(sendText);
  return (
    <div className="flex">
      <input
        onKeyDown={handleSendByEnter}
        onChange={handleSendText}
        value={sendText}
        className="w-full p-1 rounded-r-lg border-none outline-none bg-[#2E333D]"
        type="text"
        placeholder="پیغام خود را بنویسید ... "
      />
      <button
        onClick={handleSend}
        className="rounded-r-none w-8 bg-[#2E333D] rounded-l-lg hover:bg-violet-400 transition-all duration-500"
      >
        <img src={SendIcon} alt="" style={{ transform: "rotate(180deg)" }} />
      </button>
    </div>
  );
}
