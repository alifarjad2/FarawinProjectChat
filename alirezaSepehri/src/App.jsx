import farawin from "farawin";
import { useState } from "react";
import LoginPage from "./LoginPage";
import ChatPage from "./ChatPage";

export default function App() {
  // استیت نگهدارنده صفحه جاری (لاگین صفحه جاری پیشفرض است)
  const [page, setPage] = useState("login");
  // استیت نگهدارنده کاربر لاگین کرده
  const [user, setUser] = useState("");

  return (
    <div
      className="select-none flex justify-center items-center py-10 min-h-full h-max"
      style={{
        background: `url(
          https://colorlib.com/etc/lf/Login_v4/images/bg-01.jpg
        ) no-repeat`,
      }}
    >
      {page === "login" ? (
        <LoginPage setPage={setPage} setUser={setUser} />
      ) : (
        <ChatPage user={user} />
      )}
    </div>
  );
}
