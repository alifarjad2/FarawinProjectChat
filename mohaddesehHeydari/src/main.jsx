import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


import { useState } from "react";
import FormAuth from "./FormAuth.jsx";
import ChatPage from './ChatPage.jsx';
import toast, { Toaster } from 'react-hot-toast';
export default function App() {
  const [namePage, setNamePage] = useState('FormAuth');
  const handleChangePage = (value) => {
    setNamePage(value);
  };
  // localStorage.clear();
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      {namePage === 'FormAuth' && <FormAuth changePage={handleChangePage} />}
      {namePage === 'Chat' && <ChatPage />}
    </>
  );
}