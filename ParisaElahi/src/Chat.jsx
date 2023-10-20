import farawin from "farawin";
import { useState, useEffect } from "react";
import personLinesFill from "./assets/image/person-lines-fill.svg";
import pmRight from "./assets/image/pm-right.png";
import search from "./assets/image/search.png";
import pm from "./assets/image/pm.png";
import clip from "./assets/image/clip.svg";

export const Chat = () => {
  farawin.getContacts((result) => {
    const contList = result.contactList.filter(
      (contacs) => (contacs.ref = "09000000000")
    );
    console.table(contList);
  });

  //   const [name,setName] = useState("");
  //   const [username,userName] = useState("");

  // last date
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function formatDate(currentDate, userDate) {
    userDate = new Date(userDate);
    const day1 = String(userDate.getDate()).padStart(2, "0");
    const month1 = String(userDate.getMonth() + 1).padStart(2, "0");
    const year1 = userDate.getFullYear();
    const hours1 = String(userDate.getHours()).padStart(2, "0");
    const minutes1 = String(userDate.getMinutes()).padStart(2, "0");

    const day2 = String(currentDate.getDate()).padStart(2, "0");
    const month2 = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year2 = currentDate.getFullYear();
    const hours2 = String(currentDate.getHours()).padStart(2, "0");
    const minutes2 = String(currentDate.getMinutes()).padStart(2, "0");

    const day = day2 - day1;
    const month = month2 - month1;
    const year = year2 - year1;
    const hours = hours2 - hours1;
    const minutes = minutes2 - minutes1;

    return year > 0
      ? `${year} year ago`
      : month > 0
      ? `${month} month ago`
      : day > 0
      ? `${day} day ago`
      : hours > 0
      ? `${hours} hour ago`
      : minutes > 0
      ? `${minutes} min ago`
      : `online`;
  }

  // last message
  const [lodinglastMassege, setLodinglastMassege] = useState(true);
  const handelLodinglastMassege = (t) => {
    setLodinglastMassege(t);
  };

  const [lastMassege, setlastMassege] = useState([]);
  useEffect(() => {
    farawin.getChats((result) => {
      const list = result.chatList.filter(
        (chat) =>
          chat.receiver == localStorage.username ||
          chat.sender == localStorage.username
      );
      setlastMassege(list);
      handelLodinglastMassege(false);
    });
  }, [lodinglastMassege]);

  const showLastMassage = (userPhone, userName) => {
    if (userPhone !== localStorage.username) {
      const listArry = lastMassege.filter(
        (chat) => chat.receiver == userPhone || chat.sender == userPhone
      );
      if (listArry.length > 0) {
        const lastArry = listArry[listArry.length - 1];
        if (lastArry.sender === userPhone) {
          return ` ${lastArry.text.slice(0, 15)}` + ` : ` + `${userName}`;
        } else {
          return ` ${lastArry.text.slice(0, 15)} ` + ` :شما `;
        }
      }
    }
  };

  // search
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    let resultSearch = contList.filter((contact) =>
      contact.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log(resultSearch);
    setSearchResults(resultSearch);
  };

  return (
    <div>
      <title>Tailwind-Theme</title>
      <link rel="stylesheet" href="./tailwind.css" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n         ::-webkit-scrollbar {width: 2px;}\n         ::-webkit-scrollbar-track {background: #2E333D;}\n         ::-webkit-scrollbar-thumb {background: rgb(223, 223, 223);}\n         @keyframes fadeInLeft {\n         from {opacity: 0;transform: translate3d(-100%, 0, 0);}\n         to {opacity: 1;transform: translate3d(0, 0, 0);}\n         }\n         @keyframes fadeIn {\n         from {opacity: 0;}\n         to {opacity: 1;}\n         }\n         .navigation-bar{\n            width: 320px;\n            position: absolute;\n            display: block;\n            z-index: 1000;\n            background: black;\n            border-radius: 24px;\n            padding: 20px;\n            margin-top: -20px;\n            margin-left: -20px;\n            animation: fadeInLeft 1s;\n         }\n      ",
        }}
      />
      <section className="h-full bg-[#34393C]">
        <div className="lg:container  flex h-full justify-center mx-auto h-screen">
          <div className=" md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] 3xl:w-[70%] overflow-hidden self-center">
            <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-2  grid-flow-dense bg-[#202329] rounded-3xl p-5 overflow-hidden ">
              <div
                id="contactBox"
                className="col-start-3 col-span-1  hidden lg:block"
              >
                <div className=" flex items-center gap-4 mt-8 ">
                  {/* section add contact form */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className=" flex items-center justify-center  w-6 h-6 text-gray-400 cursor-pointer"
                    onClick={() => setOpen({ ...open, openForm: true })}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>

                  {/* section serach  */}
                  <div
                    id="closeIcon"
                    className="relative inline-block bg-[#2E333D] w-[50px]  rounded-r-2xl lg:hidden"
                  >
                    <img
                      src="./images/x.svg"
                      className="w-8 absolute top-[9px] left-[7px]"
                      alt="close-icon"
                    />
                  </div>
                  <div className="bg-[#2E333D] w-[80%] flex items-center justify-center mr-1  rounded-l-2xl lg:rounded-2xl p-2 ">
                    <img src={search} className="w-8 " alt="search-icon" />
                    <input
                      type="search"
                      className="bg-transparent text-[#989BA0] w-full text-end outline-none ml-2"
                      placeholder="جستجو"
                      value={searchInput}
                      onChange={(s) => {
                        setSearchInput(s.target.value);
                      }}
                      onKeyUp={handleSearch}
                    />
                  </div>
                </div>
                <div>
                  {searchInput.length > 2 && (
                    <ul className=" w-[200px] h-auto min-h-[30px] text-center m-4 ml-14 bg-[#989BA0] cursor-pointer rounded-xl">
                      {searchResults.map((result) => (
                        <li
                          key={result.id}
                          onClick={() => {
                            handleSelectedContact();
                          }}
                        >
                          {result.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {/* section contact list  */}
                <div className="my-4 pr-2 h-[430px] overflow-auto ">
                  {contList.map((item) => (
                    <div
                      onClick={() => {
                        handleSelectedContact(item.name),
                          handleSelectedPhone(item.username);
                      }}
                      key={contList.name}
                      className=" flex w-auto p-3 pl-0 flex-row-reverse hover:bg-[#2E333D] rounded-2xl cursor-pointer"
                    >
                      <div className="text-center w-[70px] leading-[50px] bg-[#a9d2fe] rounded-2xl">
                        {item.name.slice(0, 2)}
                      </div>
                      <div className="ml-2 w-full">
                        <div className="flex flex-row-reverse justify-between items-center">
                          <h4 className="text-[#e5e6ea] px-2 ">
                            {" "}
                            {item.name}{" "}
                          </h4>
                          <span className="text-[#989BA0] text-xs">
                            {formatDate(currentDate, item.date)}
                          </span>
                        </div>
                        <div>
                          <p className=" text-right text-xs px-4 pt-2 text-[#989BA0]">
                            {showLastMassage(item.username, item.name)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}{" "}
                  ;
                </div>
              </div>
              {/* section header chat */}
              <div className="px-3 col-start-1 col-span-2 mt-8">
                <div className="flex flex-row-reverse justify-between items-center mt-3 mb-8">
                  <div>
                    <img
                      src={personLinesFill}
                      id="contactList"
                      className="lg:hidden inline-block w-6 align-text-bottom"
                      alt="contact-icon"
                    />
                    <h3 className="text-lg text-[#e5e6ea] inline-block text-right mr-8 ml-2  lg:ml-0">
                      {selectedContact}
                    </h3>
                  </div>

                  {/* add contact form */}
                  {open.openForm && (
                    <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-700 bg-opacity-40 backdrop-blur ">
                      <div className="flex w-60 h-[58] max-w-xs overflow-hidden sm:max-w-md  sm:flex-col rounded-2xl ">
                        <div className="flex items-center justify-center w-20 h-full text-white bg-blue-200  sm:w-full">
                          <form className=" flex flex-col justify-around bg-[#2E333D] text-white h-[320px] w-[200] overflow-hidden my-4 p-4 rounded-2xl">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 cursor-pointer "
                                onClick={() =>
                                  setOpen({ ...open, openForm: false })
                                }
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </div>
                            <h1 className=" text-center mb-2 ">
                              {" "}
                              تنظیمات مخاطبین
                            </h1>

                            <label
                              htmlFor="name"
                              className=" text-sm text-right mr-2 mt-4"
                            >
                              {" "}
                              : نام و نام خانوادگی{" "}
                            </label>
                            <input
                              id="name"
                              type="text"
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                              value={name}
                              className="text-right bg-blue-200 text-black rounded-lg"
                            />

                            <label
                              htmlFor="phone"
                              className="text-end text-sm mr-2 mt-2 "
                            >
                              {" "}
                              : شماره تماس{" "}
                            </label>
                            <input
                              id="phone"
                              type="tel"
                              onChange={(e) => {
                                setPhoneNum(e.target.value);
                              }}
                              value={phoneNum}
                              className=" text-black bg-blue-200 rounded-lg "
                            />

                            <button
                              type="button"
                              onClick={AddContact}
                              className="hover:bg-blue-400 border text-sm rounded-lg mt-4 mx-6"
                            >
                              افزودن مخاطب
                            </button>
                            <button
                              type="button"
                              onClick={deleteContact}
                              className="hover:bg-blue-400 border text-sm rounded-lg mx-6"
                            >
                              حذف مخاطب
                            </button>
                            <button
                              type="button"
                              onClick={editContact}
                              className="hover:bg-blue-400 border text-sm rounded-lg mx-6"
                            >
                              ویرایش مخاطب
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* section chatbox */}
                <div className="h-[430px] my-1 pr-2 overflow-x-hidden overflow-y-auto">
                  {selectedPhone === "" ? (
                    <div className="grid">
                      <p className="bg-[#2E333D] text-[#989BA0] rounded-2xl p-1 w-2/4 text-center my-[25%] justify-self-center">
                        مخاطبی جهت نمایش پیام انتخاب کنید
                      </p>
                    </div>
                  ) : listMassege.filter(
                      (e) =>
                        e.sender === selectedPhone ||
                        e.receiver === selectedPhone
                    ).length === 0 ? (
                    <div className=" text-base bg-[#2E333D] text-[#989BA0] justify-center rounded-2xl mx-40  w-2/4 text-center my-[25%] ">
                      {" "}
                      پیامی وجود ندارد
                    </div>
                  ) : (
                    listMassege.map((chat, index) => {
                      return (
                        <>
                          {chat.sender === selectedPhone &&
                          chat.receiver === localStorage.username ? (
                            <div className="flex items-end mb-4" key={index}>
                              <div className="text-center w-[50px] leading-[50px] bg-[#a9d2fe] rounded-2xl">
                                {selectedContact.slice(0, 2)}
                              </div>
                              <div className="relative ml-3 text-[#eceff3] bg-[#2E333D] p-3 rounded-2xl">
                                <img
                                  src={pm}
                                  className="absolute w-6 bottom-[-9px] left-[-11px]"
                                  alt="icon"
                                />
                                <p className="text-sm text-[#989BA0]">
                                  {selectedContact}
                                </p>
                                <p className="text-sm mt-2 sm:text-base text-end">
                                  {chat.text}
                                </p>
                                <span className="block mt-2 text-[10px] text-[#989BA0]">
                                  {new Date(chat.date)
                                    .toLocaleString("fa")
                                    .slice(0, 14)}
                                </span>
                              </div>
                            </div>
                          ) : chat.sender === localStorage.username &&
                            chat.receiver === selectedPhone ? (
                            <div
                              className="flex items-end flex-row-reverse mb-4"
                              key={index}
                            >
                              <div className="text-center w-[50px] leading-[50px] bg-[#96cdaa] rounded-2xl">
                                شما
                              </div>
                              <div className="relative mr-3 text-[#eceff3] bg-[#6b8afe] p-3 rounded-2xl">
                                <img
                                  src={pmRight}
                                  className="absolute w-6 bottom-[-4px] right-[-11px]"
                                  alt="icon"
                                />
                                <p className="text-sm text-end">
                                  {localStorage.username}
                                </p>
                                <p className="text-sm mt-2 sm:text-base text-end">
                                  {chat.text}
                                </p>
                                <span className="block text-end mt-2  text-[10px] text-[#eceff3]">
                                  {new Date(chat.date)
                                    .toLocaleString("fa")
                                    .slice(0, 16)}
                                </span>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })
                  )}
                  <div className="flex items-end flex-row-reverse mb-4"></div>
                  <div className="flex items-end mb-4"></div>
                </div>
                {/* send chat button */}
                <div className="flex flex-row-reverse w-auto mx-4 rounded-2xl p-2 hover:bg-[#2E333D] focus-within:bg-[#2E333D]">
                  <img src={clip} className="w-6" alt="clip-icon" />
                  <input
                    value={newMessage}
                    onChange={(e) => {
                      setNewMessage(e.target.value);
                    }}
                    type="text"
                    className="bg-transparent w-full dir-auto text-right text-[#989BA0] outline-none px-2 "
                    placeholder="... پیام شما"
                  />
                  <svg
                    onClick={() => {
                      sendText();
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-400 cursor-pointer rotate-180 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
