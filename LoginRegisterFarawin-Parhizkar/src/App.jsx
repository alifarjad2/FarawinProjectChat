import { useState, useEffect } from "react";
import SideBar from "./Components/SideBar";
import ChatBox from "./Components/ChatBox";
import "./App.css";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-full p-5 max-lg:p-0 bg-slate-900">
      <div className="rounded-2xl flex gap-1 bg-[#34393C] text-white w-10/12 max-lg:w-full h-full">
        {isSidebarOpen && (
          <div
            style={{ zIndex: 1 }}
            className={`rounded-r-2xl p-2 w-1/4 max-lg:bg-[#34393C] max-lg:border-2 max-lg:w-7/12 max-lg:absolute max-lg:bottom-0 max-lg:top-0 max-lg:right-0`}
          >
            <SideBar closeMenu={setSidebarOpen} />
          </div>
        )}
        <div className="p-2 w-9/12 max-lg:w-full max-lg:h-full max-lg:absolute max-lg:top-0 max-lg:bottom-0 max-lg:left-0 max-lg:right-0">
          <ChatBox openMenu={setSidebarOpen} />
        </div>
      </div>
    </div>
  );
}

export default App;
