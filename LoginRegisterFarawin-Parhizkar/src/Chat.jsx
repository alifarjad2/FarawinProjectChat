// #region Ipmorts
// import sections : import is for having a file in this file that we have opened and use them here like css styles other components etc.

import farawin from "farawin";
import { useEffect, useState } from "react";
import "./App.css";
import Refresh from "./assets/refresh-svgrepo-com.png";
import Popup from "./popup";
import SearchBar from "./searchbar";
import RecieverChatMassage from "./resieverChatMassage";

// #endregion

// this is the Main function of this component and I exported to the other component
// we have the whole component of this page in this function
// passing props in the function means I can use passed values from other components in this componenet

export default function ChatPage() {
  // #region States
  // state sections : we have many states like useState useRef and Effect to control or saving something or getting nonReact informations from the outside of the React with useEffect
  const [filteredContacts, setFilteredContacts] = useState(null);
  const [buttonToggle, setButtonToggle] = useState(null);
  const [buttonToggle2, setButtonToggle2] = useState(null);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [addPhoneNumber, setAddphoneNumber] = useState("");
  const [deletePhoneNumber, setDeletePhoneNumber] = useState("");
  const [contactName, setContactName] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(null);
  const [isValidName, setIsValidName] = useState(null);
  const [selectedContact, setSelectedContact] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("");
  const [sendText, setSendText] = useState("");
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [editPhoneNumber, setEditPhoneNumber] = useState("");
  const [contactEditName, setContactEditName] = useState("");
 

  // console.log(buttonToggle2);
  // console.log(filteredContacts);
  // console.log(sendText);
  // #endregion

  // #region UseEffect Controller
  

  // #region Use Effect
  // یوز افکت یک استیت برای گرفتن یک مقدار خارج از ری اکت است مانند فچ یا اطلاعات سرور
  // در دپندنسی آن میتوان مقادیری قرار داد تا ری رندر آن را بتوان کنترل کرد

  useEffect(() => {
    let ignore = false;

    // getting contacts from api
if (!ignore) {
    farawin.getContacts((res) => {
      
        setFilteredContacts(
          res.contactList.filter(
            (contact) => contact.ref === localStorage.username
          )
        );
      
    });}
    // for controlling useEffect run or not
    return () => {
      ignore = true;
    };
  }, [buttonToggle]);

  // console.info(selectedNumber);
  // #endregion

  // #region Handle Functions
  // a function for refresh chat control the useEffects when you press the refresh buttons for chats
  const handleRefreshChat = () => {
    setButtonToggle2(Math.random());
    
  };
  // a function for refresh chat control the useEffects when you press the refresh buttons for contacts
  const handleRefresh = () => {
    console.log(filteredContacts);
    setButtonToggle(Math.random());
  };
  // a function for openning pop up section when you press the Add
  const handleAddContact = () => {
    setIsOpenAdd(!isOpenAdd);
  };
  // same as the last one for Delete contact
  const handleDeleteContact = () => {
    setIsOpenDelete(!isOpenDelete);
  };
  // this is a function that control the phone number value which is user fill it
  const handleAddPhoneChange = (event) => {
    var addPhoneNumber = event.target.value;
    const mobileRegex = farawin.mobileRegex;
    addPhoneNumber = farawin.toEnDigit(addPhoneNumber);
    if (addPhoneNumber === "") {
      setAddphoneNumber("");
      setIsValidPhone(null);
    } else if (mobileRegex.test(addPhoneNumber)) {
      setAddphoneNumber(addPhoneNumber);
      setIsValidPhone(true);
    } else {
      setAddphoneNumber(addPhoneNumber);
      setIsValidPhone(false);
    }
  };
  // same as the last one
  const handleDeleteChange = (event) => {
    var deletePhoneNumber = event.target.value;
    const mobileRegex = farawin.mobileRegex;
    deletePhoneNumber = farawin.toEnDigit(deletePhoneNumber);
    if (deletePhoneNumber === "") {
      setDeletePhoneNumber("");
      setIsValidPhone(null);
    } else if (mobileRegex.test(deletePhoneNumber)) {
      setDeletePhoneNumber(deletePhoneNumber);
      setIsValidPhone(true);
    } else {
      setDeletePhoneNumber(deletePhoneNumber);
      setIsValidPhone(false);
    }
  };
  // same as the last one but for the name input
  const handleAddNameChange = (event) => {
    const contactName = event.target.value;
    const regex = /^.{3,}$/;
    if (contactName === "") {
      setContactName("");
      setIsValidName(null);
    } else if (regex.test(contactName)) {
      setContactName(contactName);
      setIsValidName(true);
    } else {
      setContactName(contactName);
      setIsValidName(false);
    }
  };
  // in this function phone number and a name will be send to the server for adding contacts
  const handleAddMembers = async () => {
    const phoneSend = addPhoneNumber;
    const nameSend = contactName;
    const resultAdd = await farawin.testAddContact(phoneSend, nameSend);
    if (resultAdd.code !== 200) {
      alert(resultAdd.message);
    } else {
      alert(resultAdd.message);
    }
  };
  // same as the last one for delete contact
  const handleDeleteMembers = async () => {
    const deletePhoneSend = deletePhoneNumber;
    const resultDelete = await farawin.testDeleteContact(deletePhoneSend);
    if (resultDelete.code !== 200) {
      alert(resultDelete.message);
    } else {
      alert(resultDelete.message);
    }
  };
  // its a function for Edit contact pop up section
  const handleEditContact = () => {
    setIsOpenEdit(!isOpenEdit);
  };
  // this is a function that will edit the selected contact by name and phone number
  const handleEditMember = async () => {
    const resultEdit = await farawin.testEditContact(
      editPhoneNumber,
      contactEditName
    );
    if (resultEdit.code !== 200) {
      alert(resultEdit.message);
    } else {
      alert(resultEdit.message);
    }
  };
  // this is a function that control the name input in the edit member pop up
  const handleEditNameChange = (event) => {
    const contactName = event.target.value;
    const regex = /^.{3,}$/;
    if (contactName === "") {
      setContactEditName("");
      setIsValidName(null);
    } else if (regex.test(contactName)) {
      setContactEditName(contactName);
      setIsValidName(true);
    } else {
      setContactEditName(contactName);
      setIsValidName(false);
    }
  };
  // same as the last one but for phone number
  const handleEditPhoneChange = (event) => {
    var PhoneNumber = event.target.value;
    const mobileRegex = farawin.mobileRegex;
    PhoneNumber = farawin.toEnDigit(PhoneNumber);
    if (PhoneNumber === "") {
      setEditPhoneNumber("");
      setIsValidPhone(null);
    } else if (mobileRegex.test(PhoneNumber)) {
      setEditPhoneNumber(PhoneNumber);
      setIsValidPhone(true);
    } else {
      setEditPhoneNumber(PhoneNumber);
      setIsValidPhone(false);
    }
  };
  //  this is a function for getting value from send chat input and we get the text that user wants to send it
  const handleSendTextsChange = (event) => {
    const text = event.target.value;
    setSendText(text);
  };
  // this is a function that send the text to the contact by the server
  const handleTextSender = async () => {
    const toUser = selectedNumber;
    const textSend = sendText;
    const resultSend = await farawin.testAddChat(toUser, textSend);
    if (resultSend.code !== 200) {
      alert(resultSend.message);
    } else {
      alert(resultSend.message);
    }
  };
  //  this is a function for getting value from send chat input and we get the text that user wants to send it by pressing Enter key
  const handleTextSendByEnter = async (event) => {
    if (event.key == "Enter") {
      const toUser = selectedNumber;
      const textSend = sendText;
      const resultSend = await farawin.testAddChat(toUser, textSend);
      if (resultSend.code !== 200) {
        alert(resultSend.message);
      } else {
        alert(resultSend.message);
      }
      setButtonToggle2(Math.random());
      setSendText("");
    }
  };
  // we have 3 variable that control the buttons in the pop ups by filling the inputs in the right way by the chat laws
  const isSabtDisabled = !isValidPhone || !isValidName;
  const isHazfDisabled = !isValidPhone;
  const isEditDisabled = !isValidPhone || !isValidName;

  // a simple js function for showing or hiding contact menu in the smaller devices
  const handleShowMenu = () => {
    const contactMenu = document.getElementById("Contact-menu");
    const chatContainer = document.getElementById("chat-container");
    const closeContactMenu = document.getElementById("close-contact-menu");

    contactMenu.style.display = "block";
    contactMenu.style.zIndex = "2";
    contactMenu.style.position = "absolute";
    contactMenu.style.top = "0";
    contactMenu.style.right = "0";
    contactMenu.style.bottom = "0";

    chatContainer.style.position = "absolute";
    chatContainer.style.top = "0";
    chatContainer.style.right = "0";
    chatContainer.style.left = "0";
    chatContainer.style.bottom = "0";

    closeContactMenu.style.display = "block";
    closeContactMenu.style.position = "absolute";
    contactMenu.style.top = "0";
    contactMenu.style.right = "0";
  };
  // same as the last one for closing menu
  const handleCloseMenu = () => {
    const contactMenu = document.getElementById("Contact-menu");
    const closeContactMenu = document.getElementById("close-contact-menu");

    contactMenu.style.display = "none";
    closeContactMenu.style.display = "none";
  };
  // #endregion

  // returning section in the main function is for returning elemnts that we want to show to the user by the conditions or other things that we want
  return (
    <div dir="rtl" lang="fa">
      {/* pop up for edit contact */}
      {isOpenEdit && (
        // a component for showing pop ups
        <Popup
          // i send the elements with this content to the pop up component because I have variable pop ups and I need to add them here by my needs
          content={
            <>
              <button
                className="p-2 hover:bg-red-400 hover:text-white text-lg font-bold mt-1"
                onClick={handleEditContact}
              >
                بستن
              </button>
              <div className="flex flex-col items-start px-5 py-5">
                <label className="w-fit" htmlFor="">
                  شماره تلفن :
                </label>
                <input
                  onChange={handleEditPhoneChange}
                  value={editPhoneNumber}
                  type="text"
                  className="outline-none border-b-2 w-full border-slate-300 p-2"
                />
                {isValidPhone === null ? null : isValidPhone ? (
                  //  تگ پی یک تگ پاراگراف و مخصوص نمایش متن است
                  <p className="text-green-500 text-xs">شماره تلفن درست است</p>
                ) : (
                  <p className="text-xs text-red-500">
                    شماره تلفن غلط است باید با 09 آغاز و دارای 11 رقم باشد.
                  </p>
                )}
              </div>
              <div className="flex flex-col items-start px-5 py-5 ">
                <label className="w-fit" htmlFor="">
                  {" "}
                  اسم مخاطب :
                </label>
                <input
                  value={contactEditName}
                  onChange={handleEditNameChange}
                  type="text"
                  className="outline-none border-b-2 w-full border-slate-300 p-2"
                />
                {isValidName === null ? null : isValidName ? (
                  //  تگ پی یک تگ پاراگراف و مخصوص نمایش متن است
                  <p className="text-green-500 text-xs">درست وارد شده است</p>
                ) : (
                  <p className="text-xs text-red-500">
                    اسم باید بیشتر از 3 حرف داشته باشد.
                  </p>
                )}
              </div>
              <button
                disabled={isEditDisabled}
                onClick={handleEditMember}
                className="cursor-pointer p-2 hover:bg-green-400  hover:text-white text-lg font-bold mb-2 mt-3 w-11/12"
              >
                ویرایش مخاطب
              </button>
            </>
          }
        />
      )}

      {/* pop up for delete contact */}
      {isOpenDelete && (
        <Popup
          content={
            <>
              <button
                className="p-2 hover:bg-red-400 hover:text-white text-lg font-bold mt-1"
                onClick={handleDeleteContact}
              >
                بستن
              </button>
              <div className="flex flex-col items-start px-5 py-5">
                <label className="w-fit" htmlFor="">
                  شماره تلفن :
                </label>
                <input
                  onChange={handleDeleteChange}
                  value={deletePhoneNumber}
                  type="text"
                  className="outline-none border-b-2 w-full border-slate-300 p-2"
                />
                {isValidPhone === null ? null : isValidPhone ? (
                  //  تگ پی یک تگ پاراگراف و مخصوص نمایش متن است
                  <p className="text-green-500 text-xs">شماره تلفن درست است</p>
                ) : (
                  <p className="text-xs text-red-500">
                    شماره تلفن غلط است باید با 09 آغاز و دارای 11 رقم باشد.
                  </p>
                )}
              </div>
              <button
                disabled={isHazfDisabled}
                onClick={handleDeleteMembers}
                className="cursor-pointer p-2 hover:bg-green-400  hover:text-white text-lg font-bold mb-2 mt-3 w-11/12"
              >
                حذف مخاطب
              </button>
            </>
          }
        />
      )}

      {/* pop up for adding contact */}
      {isOpenAdd && (
        <Popup
          content={
            <>
              <button
                className="p-2 hover:bg-red-400 hover:text-white text-lg font-bold mt-1"
                onClick={handleAddContact}
              >
                بستن
              </button>
              <div className="flex flex-col items-start px-5 py-5 ">
                <label className="w-fit" htmlFor="">
                  شماره تلفن :
                </label>
                <input
                  onChange={handleAddPhoneChange}
                  value={addPhoneNumber}
                  type="text"
                  className="outline-none border-b-2 w-full border-slate-300 p-2"
                />
                {isValidPhone === null ? null : isValidPhone ? (
                  //  تگ پی یک تگ پاراگراف و مخصوص نمایش متن است
                  <p className="text-green-500 text-xs">شماره تلفن درست است</p>
                ) : (
                  <p className="text-xs text-red-500">
                    شماره تلفن غلط است باید با 09 آغاز و دارای 11 رقم باشد.
                  </p>
                )}
              </div>
              <div className="flex flex-col items-start px-5 py-5 ">
                <label className="w-fit" htmlFor="">
                  {" "}
                  اسم مخاطب :
                </label>
                <input
                  value={contactName}
                  onChange={handleAddNameChange}
                  type="text"
                  className="outline-none border-b-2 w-full border-slate-300 p-2"
                />
                {isValidName === null ? null : isValidName ? (
                  //  تگ پی یک تگ پاراگراف و مخصوص نمایش متن است
                  <p className="text-green-500 text-xs">درست وارد شده است</p>
                ) : (
                  <p className="text-xs text-red-500">
                    اسم باید بیشتر از 3 حرف داشته باشد.
                  </p>
                )}
              </div>
              <button
                disabled={isSabtDisabled}
                onClick={handleAddMembers}
                className="cursor-pointer p-2 hover:bg-green-400  hover:text-white text-lg font-bold mb-2 w-11/12"
              >
                ثبت
              </button>
            </>
          }
        />
      )}

      {/* main container for the whole chat page */}
      <div className="bg-[#34393C]">
        <section
          className="h-screen flex align-middle justify-center w-screen"
          id="Container"
        >
          {/* contact menu container */}
          <div
            id="Contact-menu"
            className="h-screen bg-[#202329] rounded-r-2xl lg:block min-[425px]:hidden min-[375px]:hidden min-[320px]:hidden p-2"
          >
            {/* contact menu header for needed buttons like refresh , add ,etc. */}
            <div className="flex justify-center items-center gap-1 mt-[27px] w-full">
              {/* button for closing menu */}
              <button
                id="close-contact-menu"
                onClick={handleCloseMenu}
                className="hidden hover:bg-blue-400 rounded-lg w-fit relative top-9 right-5"
              >
                <svg
                  className="fill-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="30px"
                  height="30px"
                >
                  {" "}
                  <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
                </svg>
              </button>

              {/* button for refreshing contact lists */}
              <button
                id="refresh-contact"
                onClick={handleRefresh}
                className=" hover:bg-blue-400 w-fit rounded-lg p-1  "
              >
                <img className="w-[22px] h-[22px]" src={Refresh} alt="" />
              </button>

              {/* button for adding contacts  */}
              <button
                onClick={handleAddContact}
                className="hover:bg-blue-400 w-fit rounded-lg p-1 "
              >
                Add
              </button>

              {/* button for deleting contacts */}
              <button
                onClick={handleDeleteContact}
                className="hover:bg-blue-400 w-fit rounded-lg p-1 "
              >
                Del
              </button>

              {/* button for editing contacts  */}
              <button
                className="hover:bg-blue-400 w-fit rounded-lg p-1"
                onClick={handleEditContact}
              >
                Edit
              </button>
            </div>

            {/* search bar section with calling back a component for searching contacts */}
            <div id="search-bar" className="flex pt-4 mb-5 pl-2">
              <SearchBar
                data={filteredContacts}
                set={setSelectedContact}
                number={setSelectedNumber}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="w-10 bg-[#2E333D] fill-slate-500 rounded-l-lg cursor-pointer"
              >
                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
              </svg>
            </div>

            {/* this section is contained the contact lists that we get from server */}
            <div className="overflow-scroll overflow-x-hidden h-[70%]">
              {!filteredContacts ? (
                <p className="text-white font bold">مخاطبی وجود ندارد</p>
              ) : (
                <div>
                  {
                    filteredContacts &&
                    filteredContacts.map((contact) => (
                      <div
                        key={contact.username}
                        id="selected-name"
                        className="cursor-pointer hover:bg-[#2E333D]"
                        onClick={() => {
                          setSelectedContact(contact.name),
                            setSelectedNumber(contact.username);
                        }}
                      >
                        <div className="flex items-center ">
                          <div className="w-12 h-12 bg-violet-500 flex items-center justify-center font-bold rounded-lg ">
                            {" "}
                            {contact.name.slice(0, 2)}{" "}
                          </div>
                          <div className="flex p-3 flex-col items-start ">
                            <h4 className="text-[18px] font-bold text-white">
                              {contact.name}
                            </h4>
                            <p className="text-slate-400">{contact.username}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          {/* chat page main container */}
          <div
            id="chat-container"
            className="bg-[#202329] h-screen lg:w-5/12 flex flex-col items-start lg:rounded-l-2xl md:w-screen min-[425px]:w-screen min-[375px]:w-screen min-[320px]:w-screen max-md:rounded-lg max-[425px]:rounded-lg max-[375px]:rounded-lg max-[320px]:rounded-lg"
          >
            {/* chat header section that has refresh button for chats and a header element for showing contact's name */}
            <div
              id="chat-header"
              className="w-11/12 flex justify-between align-middle p-4 mt-5 mx-auto rounded-lg h-fit"
            >
              <div className="flex gap-3 items-center">
                {/* button for showing contact menu in the smaller devices */}
                <button
                  onClick={handleShowMenu}
                  className=" p-2 hover:bg-blue-400 rounded-2xl lg:hidden"
                >
                  <svg
                    className="fill-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" />
                    <path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" />
                    <path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" />
                  </svg>
                </button>

                {/* refresh button for showing chats and update them by every tap */}
                <button
                  onClick={handleRefreshChat}
                  className=" p-2 hover:bg-blue-400 rounded-2xl"
                >
                  Refresh Chat
                </button>

                {/* header element for showing contact's name */}
                <h1
                  id="chat-header-title"
                  className="font-bold text-lg text-white rounded-full p-2 pr-2"
                >
                  {selectedContact}
                </h1>
              </div>
            </div>

            <div
              id="chat-body"
              className=" mx-auto p-5 h-3/4 w-full overflow-scroll overflow-x-hidden "
            >
              {/* a component for getting and sorting chats coming from the server */}
              <div className="p-2 mr-5 h-full w-full">
                {
                  // passing 3 porps for the reciver chat component
                  <RecieverChatMassage
                    toggle={buttonToggle2}
                    number={selectedNumber}
                    contactName={selectedContact}
                  />
                }
              </div>
            </div>

            {/* chat sender input section */}
            <div id="chat-sender" className="w-full p-3 flex justify-center">
              <input
                onChange={handleSendTextsChange}
                onKeyDown={handleTextSendByEnter}
                value={sendText}
                type="text"
                placeholder="پیغام خود را بنویسید ... "
                className="w-9/12 p-2 text-white outline-none rounded-r-lg border-none bg-[#2E333D]"
              />

              <button
                onClick={() => {
                  handleTextSender();
                  setButtonToggle2(Math.random());
                  setSendText("");
                }}
                className="bg-[#2E333D] text-white hover:bg-blue-400 w-fit rounded-l-lg rounded-r-none p-1"
              >
                ارسال
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
