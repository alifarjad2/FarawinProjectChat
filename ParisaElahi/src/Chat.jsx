import farawin from "farawin";
import { useState, useEffect } from "react";
import personLinesFill from "./assets/image/person-lines-fill.svg";
import pmRight from "./assets/image/pm-right.png";
import search from "./assets/image/search.png";
import pm from "./assets/image/pm.png";
import threeDotsVertical from "./assets/image/three-dots-vertical.png";
import clip from "./assets/image/clip.svg";

export const Chat = () => {
  const [phoneNum, setPhoneNum] = useState("");
  const [name, setName] = useState("");

  const AddContact = async () => {
    const EnMobile = farawin.toEnDigit(phoneNum);
    const mobileRegex = farawin.mobileRegex;

    if (mobileRegex.test(EnMobile) && name.length >= 3) {
      const validAdd = await farawin.testAddContact(EnMobile, name);
      alert(validAdd.message);
      location.reload();
    }
  };

  const [contactList, setContactList] = useState(null);
  if (contactList == null)
    farawin.getContacts((result) => {
      setContactList(result.contactList);
    });

  const [contList, setContList] = useState([]);
  const getContact = async () => {
    const result = await farawin.getContacts();
    const List = result.contactList.filter(
      (contacs) => contacs.ref == localStorage.username
    );
    console.log(localStorage.username);
    console.table(List);
    setContList(List);
  };

  useEffect(() => {
    getContact();
  }, []);

  const [open, setOpen] = useState({
    openForm: false,
  });

  const [newMessage, setNewMessage] = useState([]);

  const sendText = async () => {
    const res = await farawin.testAddChat(contactList.username, newMessage);
    alert(res.message);
    res.code == 200 ? setNewMessage("") : "";
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className=" flex items-center justify-center  w-6 h-6 text-gray-400 cursor-pointer "
                    onClick={() => setOpen({ ...open, openForm: true })}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
                  </svg>
                  <div className="bg-[#2E333D] w-[80%] flex items-center justify-center mr-1  rounded-l-2xl lg:rounded-2xl p-2 ">
                    <img src={search} className="w-8 " alt="search-icon" />
                    <input
                      type="search"
                      className="bg-transparent text-[#989BA0] w-full text-end outline-none ml-2"
                      placeholder="جستجو"
                    />
                  </div>

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
                </div>
                <div className="my-4 pr-2 h-[430px] overflow-auto">
                  {contList.map((item) => (
                    <div
                      key={contList.name}
                      className=" flex w-auto p-3 flex-row-reverse hover:bg-[#2E333D] rounded-2xl cursor-pointer"
                    >
                      <div className="text-center w-[70px] leading-[50px] bg-[#a9d2fe] rounded-2xl">
                        {item.name.slice(0, 2)}
                      </div>
                      <div className="ml-2 w-full">
                        <div className="flex flex-row-reverse justify-between items-center">
                          <h4 className="text-[#e5e6ea] px-2"> {item.name} </h4>
                          <span className="text-[#989BA0] text-xs">4 m</span>
                        </div>
                        <div>
                          <p className=" text-right text-xs px-4 pt-2 text-[#989BA0]">
                            ... آخرین پیام{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}{" "}
                  ;
                </div>
              </div>
              <div className="px-3 col-start-1 col-span-2 mt-8 ">
                <div className="flex flex-row-reverse justify-between items-center">
                  <div>
                    <img
                      src={personLinesFill}
                      id="contactList"
                      className="lg:hidden inline-block w-6 align-text-bottom"
                      alt="contact-icon"
                    />
                    <h3 className="text-lg text-[#e5e6ea]  inline-block text-right mr-8 ml-2  lg:ml-0">
                      مخاطب مورد نظر
                    </h3>
                  </div>
                  {/* <img
                    src={threeDotsVertical}
                    id="popUp"
                    className="w-5"
                    alt="three-dots-vertical-icon"
                    
                  /> */}

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
                              افزودن مخاطب
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
                              className="hover:bg-blue-400 border text-sm rounded-lg my-4 mx-6"
                            >
                              افزودن مخاطب
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="h-[430px] my-1 pr-2 overflow-auto">
                  <div className="flex items-end mb-4">
                    <div className="text-center w-[50px] leading-[50px] bg-[#a9d2fe] rounded-2xl">
                      س ا
                    </div>
                    <div
                      className="relative ml-3 text-[#eceff3] bg-[#2E333D] p-3 rounded-2xl"
                      id="about"
                    >
                      <img
                        src={pm}
                        className="absolute w-6 bottom-[-9px] left-[-11px]"
                        alt="icon"
                      />
                      <div className="text-sm text-right text-[#989BA0]">
                        نام مخاطب
                      </div>
                      <p className="text-sm mt-2 sm:text-base">سلام خوبی؟</p>
                      <strong className="block text-end mt-2 text-xs text-[#989BA0]">
                        {new Date().toLocaleTimeString()}
                      </strong>
                    </div>
                  </div>
                  {newMessage && (
                    <div className="flex items-end flex-row-reverse mb-4">
                      <div className="text-center w-[50px] leading-[50px] bg-[#4eab6c] rounded-2xl">
                        ش
                      </div>
                      <div className="relative mr-3 text-[#eceff3] bg-[#6b8afe] p-3 rounded-2xl">
                        <img
                          src={pmRight}
                          className="absolute w-6 bottom-[-4px] right-[-11px]"
                          alt="icon"
                        />
                        <div className="text-sm text-right ">شما </div>
                        <p className="text-sm mt-2 text-right sm:text-base ">
                          {newMessage}
                        </p>
                        <strong className="block text-start mt-2 text-xs text-[#eceff3]">
                          {new Date().toLocaleTimeString()}
                        </strong>
                      </div>
                    </div>
                  )}
                  {/* <div className="flex items-end mb-4">
                    <div className="text-center w-[50px] leading-[50px] bg-[#a9d2fe] rounded-2xl">
                      س ا
                    </div>
                    <div className="relative ml-3 text-[#eceff3] bg-[#2E333D] p-3 rounded-2xl">
                      <img
                        src={pm}
                        className="absolute w-6 bottom-[-9px] left-[-11px]"
                        alt="icon"
                      />
                      <div className="text-sm text-right text-[#989BA0]">
                        سارا احمدی
                      </div>
                      <p className="text-sm text-right mt-2 sm:text-base ">
                        چه خبر از پروژه؟
                      </p>
                      <strong className="block text-end mt-2 text-xs text-[#989BA0]">
                        09:07
                      </strong>
                    </div>
                  </div> */}
                  {/* <div className="flex items-end flex-row-reverse mb-4">
                    <div className="text-center w-[50px] leading-[50px] bg-[#4eab6c] rounded-2xl">
                      پ ا
                    </div>
                    <div className="relative mr-3 text-[#eceff3] bg-[#6b8afe] p-3 rounded-2xl">
                      <img
                        src={pmRight}
                        className="absolute w-6 bottom-[-4px] right-[-11px]"
                        alt="icon"
                      />
                      <div className="text-sm text-right ">پریسا الهی</div>
                      <p className="text-sm mt-2 text-right sm:text-base ">
                        تموم شد
                      </p>
                      <strong className="block text-start mt-2 text-xs text-[#eceff3]">
                        10:00
                      </strong>
                    </div>
                  </div> */}
                  {/* <div className="flex items-end mb-4">
                    <div className="text-center w-[50px] leading-[50px] bg-[#a9d2fe] rounded-2xl">
                      س ا
                    </div>
                    <div className="relative ml-3 text-[#eceff3] bg-[#2E333D] p-3 rounded-2xl">
                      <img
                        src={pm}
                        className="absolute w-6 bottom-[-9px] left-[-11px]"
                        alt="icon"
                      />
                      <div className="text-sm text-right text-[#989BA0]">
                        سارا احمدی
                      </div>
                      <p className="text-sm text-right sm:text-base ">اوکی</p>
                      <strong className="block text-end mt-2 text-xs text-[#989BA0]">
                        10:57
                      </strong>
                    </div>
                  </div> */}
                  <div className="flex items-end flex-row-reverse mb-4"></div>
                  <div className="flex items-end mb-4"></div>
                </div>
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
                    onInput={(e) => setNewMessage(e.target.value)}
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
      <section>
        <div className="relative hidden z-10" id="popUpBox" role="dialog">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
          <div className="fixed inset-0 z-10 ">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div
                className="relative bg-white  overflow-hidden self-center rounded-lg text-left shadow-xl sm:my-8 w-[80%] md:w-[60%] lg:max-w-lg"
                style={{ animation: "fadeIn 1s" }}
              >
                <div className=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3 className="text-base font-semibold leading-6 text-gray-900">
                        Pop Up For Test
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aspernatur reiciendis exercitationem ducimus
                          voluptatibus minus fuga, provident sequi perspiciatis
                          laborum quam amet dignissimos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    id="closePopUp"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
