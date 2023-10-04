import { useEffect, useState } from "react";
import FormAuth from "./FormAuth.jsx";
import ChatPage from "./ChatPage.jsx";
import toast, { Toaster } from "react-hot-toast";
import farawin from "farawin";

function useStorage(key) {
  //key = "userMobile"
  const [item, setItem] = useState(localStorage[key]);

  useEffect(() => {
    const onStorageChange = (event) => {
      //   if (event.key == key) {
      setItem(localStorage[key]);
      //   }
    };
    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  }, []);

  return item;
}

export default function App() {
  const userMobile = useStorage("username");

  const namePage =
    userMobile && userMobile.match(farawin.mobileRegex) ? "Chat" : "FormAuth";

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {namePage === "FormAuth" && <FormAuth />}
      {namePage === "Chat" && <ChatPage />}
    </>
  );
}
