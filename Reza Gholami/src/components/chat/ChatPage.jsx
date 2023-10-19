import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import farawin from "farawin";
import {
  FaUserMinus,
  FaUserEdit,
  FaSyncAlt,
  FaLocationArrow,
  FaEllipsisV,
  ContactList,
  useStore,
  ChatBox,
} from "@/components";
////////////////////////////////////
const ChatPage = () => {
  const { contactSelected, showDrawer, setShowDrawer } = useStore();
  const [inputSendMessage, setInputSendMessage] = useState("");
  const handleInputSendMessage = (e) => {
    setInputSendMessage(e.target.value);
  };
  ////////////////////////////////// Function AddChat
  const sendChat = async (e) => {
    if (!contactSelected) return alert("مخاطب خود را انتخاب نکرده اید !");
    const response = await farawin.testAddChat(
      contactSelected.username,
      inputSendMessage
    );
    const success = response.code == "200";
    if (success) {
      setInputSendMessage("");
      console.log("result from api -> ", response);
    } else console.error("error from api -> ", response);
    alert(response.message);
  };
  /////////////////////////////////// Function Reload
  const showAlertReload = () => {
    alert("در حال حاضر به روز است !");
  };
  /////////////////////////////////// Function Show and Hidden Menu
  const showDrawerMenu = () => {
    setShowDrawer(!showDrawer);
  };
  ////////////////////////////////// Return
  return (
    <>
      <Outlet />
      <section className="h-full w-full">
        <div className="lg:container flex h-full justify-center mx-auto py-8">
          <div className="w-[90%] md:w-[80%] lg:w-[90%] xl:w-[85%] 2xl:w-[90%] overflow-hidden self-center animate-backInDown h-[90%] 2xl:h-[85%]">
            <div className="grid grid-cols-3 bg-[#202329] rounded-3xl p-5 relative overflow-hidden border-[#d3d4d6] border-x-8 h-full">
              {/* Drawer */}
              <div
                id="contactBox"
                className={
                  showDrawer
                    ? "col-start-1 col-span-1 right-[-20px] top-0 bottom-0 p-5 lg:hidden animate-fadeInRight z-[2] bg-black block absolute "
                    : "hidden "
                }>
                <ContactList showDrawer={showDrawerMenu} />
              </div>
              {/* break point lg to up */}
              <div className="col-start-1 col-span-1 hidden lg:block">
                <ContactList />
              </div>
              <div className="flex h-full w-full gap-1 absolute flex-col top-0 left-0 bottom-0 py-5 lg:px-3 col-start-1 col-span-3 lg:col-start-2 lg:col-span-2">
                <div className="flex justify-between items-center mt-1">
                  <h3 className="text-md text-[#e5e6ea] font-bold inline-block text-sm w-full lg:h-5 lg:text-base">
                    {contactSelected ? (
                      contactSelected.name
                    ) : (
                      <span className="inline-block animate-typing overflow-hidden whitespace-nowrap mt-3 lg:mt-0">
                        مخاطب خود را انتخاب کنید !
                      </span>
                    )}
                  </h3>
                  <div className="flex gap-2 items-center">
                    <Link to={"/chat/deleteContact"}>
                      <FaUserMinus className="w-6 h-6 text-[#989BA0]" />
                    </Link>
                    <FaSyncAlt
                      className="w-5 h-6 text-[#989BA0] cursor-pointer"
                      onClick={showAlertReload}
                    />
                    <Link to={"/chat/editContact"}>
                      <FaUserEdit className="w-6 h-6 text-[#989BA0]" />
                    </Link>
                    <FaEllipsisV
                      className="lg:hidden w-5 h-5 text-[#989BA0] cursor-pointer"
                      onClick={showDrawerMenu}
                    />
                  </div>
                </div>
                <ChatBox />
                <div className="flex w-auto transition-all rounded-2xl px-4 py-2 hover:bg-[#2E333D] focus-within:bg-[#2E333D]">
                  <input
                    type="text"
                    value={inputSendMessage}
                    onInput={handleInputSendMessage}
                    disabled={!contactSelected}
                    className="bg-transparent text-[#989BA0] placeholder:text-base outline-none ml-2 w-full"
                    placeholder="پیام ..."
                  />
                  <FaLocationArrow
                    className="rotate-[-135deg] w-6 h-6 text-[#989BA0] cursor-pointer"
                    onClick={sendChat}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatPage;
