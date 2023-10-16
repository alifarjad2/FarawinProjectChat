import farawin from "farawin";
import react, { useState, useEffect } from "react";
import pmLeft from "./assets/images/pm-left.png";
import pmRight from "./assets/images/pm-right.png";
import search from "./assets/images/search.png";
import x from "./assets/images/x.svg";
import personLinesFill from "./assets/images/person-lines-fill.svg";
import send from "./assets/images/send.svg";

export default function ChatPage() {
  //نام کاربر انتخاب شده
  const [userNameSelected, setUserNameSelected] = useState(
    "کاربر خود را انتخاب کنید"
  );
  const handelUserNameSelected = (v) => {
    setUserNameSelected(v);
  };
  //شماره کاربر انتخاب شده
  const [userPhoneSelected, setUserPhoneSelected] = useState("");
  const handelUserPhoneSelected = (v) => {
    setUserPhoneSelected(v);
  };
  // در حالت موبایل لیست کانتک ها باز است
  const [openList, setOpenList] = useState(true);
  const handelOpenList = (v) => {
    setOpenList(v);
  };
  //باز کردن صفحه پاپ اپ افزودن مخاطب
  const [popUpAddContact, setPopUpAddContact] = useState(false);
  const handelPopUpAddContact = (v) => {
    setPopUpAddContact(v);
  };
  //باز کردن صفحه پاپ اپ افزودن مخاطب
  const [popUpEditContact, setPopUpEditContact] = useState(false);
  const handelPopUpEditContact = (v) => {
    setPopUpEditContact(v);
  };
  //باز کردن صفحه پاپ اپ دلیت مخاطب
  const [popUpDeletContact, PopUpDeletContact] = useState(false);
  const handelPopUpDeletContact = (v) => {
    PopUpDeletContact(v);
  };

  //وقتی  پیام جدیدی ارسال می شود یا می فرستیم در قسمت لیست کانتک ها اخرین پیام اپدیت می شود
  const [lodingListLastMassege, setLodingListLastMassege] = useState(true);
  const handelLodingListLastMassege = (t) => {
    setLodingListLastMassege(t);
  };

  //برای ذخیره عرض صفحه جهت ریسپانسیو هست
  const [screenWidth, setScreenWidth] = useState();
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <div className="h-screen bg-[#34393C] flex justify-center items-center">
      <div className=" w-[90%] xl:w-[70%] m-auto">
        <div className="grid grid-cols-3 bg-[#202329] rounded-3xl p-5">
          {/* فقط وقتی اوپن لیست باز نیست یا صفحه در حالت وب است اجرا میشود */}
          {(!openList || screenWidth > 1024) && (
            <SectionMassege
              userPhoneSelected={userPhoneSelected}
              userNameSelected={userNameSelected}
              handelLodingListLastMassege={handelLodingListLastMassege}
              handelOpenList={handelOpenList}
              src={personLinesFill}
              handelPopUpEditContact={handelPopUpEditContact}
              handelPopUpDeletContact={handelPopUpDeletContact}
            />
          )}

          {openList && (
            <SectionContact
              handelPopUpAddContact={handelPopUpAddContact}
              src={x}
              handelOpenList={handelOpenList}
              userPhoneSelected={userPhoneSelected}
              popUpAddContact={popUpAddContact}
              popUpEditContact={popUpEditContact}
              popUpDeletContact={popUpDeletContact}
              handelUserNameSelected={handelUserNameSelected}
              handelUserPhoneSelected={handelUserPhoneSelected}
              screenWidth={screenWidth}
              handelLodingListLastMassege={handelLodingListLastMassege}
              lodingListLastMassege={lodingListLastMassege}
            />
          )}

          {popUpAddContact && (
            <PopUp
              handelPopUp={handelPopUpAddContact}
              src={x}
              nameForm="افزودن مخاطب"
              disabled={false}
              handelUserPhoneSelected={handelUserPhoneSelected}
              handelUserNameSelected={handelUserNameSelected}
            />
          )}

          {/* وقتی یوزری انتخاب کرده باشیم بعد می تونیم ادیت یا حذف کنیمش */}
          {userPhoneSelected !== "" && popUpEditContact && (
            <PopUp
              handelPopUp={handelPopUpEditContact}
              src={x}
              nameForm="تغییر نام مخاطب"
              userPhoneSelected={userPhoneSelected}
              disabled={true}
              handelUserNameSelected={handelUserNameSelected}
            />
          )}
          {userPhoneSelected !== "" && popUpDeletContact && (
            <PopUp
              handelPopUp={handelPopUpDeletContact}
              src={x}
              nameForm="حذف مخاطب"
              handelUserPhoneSelected={handelUserPhoneSelected}
              userPhoneSelected={userPhoneSelected}
              userNameSelected={userNameSelected}
              handelUserNameSelected={handelUserNameSelected}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// ...................................................................................................................................
//کامپوننت بخش پیام ها
function SectionMassege({
  userPhoneSelected,
  userNameSelected,
  handelLodingListLastMassege,
  handelOpenList,
  src,
  handelPopUpEditContact,
  handelPopUpDeletContact,
}) {
  //دخیره پیامی که می خوایم ارسال کنیم
  const [sendMasseg, setSendMasseg] = useState("");
  //مدیریت ارسال پیام
  const handelSend = () => {
    farawin.testAddChat(userPhoneSelected, sendMasseg, (res) => {
      console.log("code testAddChat :" + res.code);
      if (res.code === "200") {
        setSendMasseg("");
        handelLodingListLastMassege(true);
        loadChats();
      }
    });
  };
  const [listMassege, setListMassege] = useState([]);

  const loadChats = () => {
    farawin.getChats((result) => {
      // رسیور باید همان" شماره لاگین شده" در چت باشد
      //همچنین پیام هایی که "شماره لاگین شده" ارسال می کند هم لازم داریم
      const listMasseges = result.chatList.filter(
        (chat) =>
          chat.receiver == localStorage.username ||
          chat.sender == localStorage.username
      );
      setListMassege(listMasseges);
    });
  };
  useEffect(() => {
    loadContact();
    //لودینگ اخرین پیام در قسمت لیست مخاطب ها
  }, []);

  //فعال کردن و غیر فعال کردن کلید راست
  const [clickRight, setClickRight] = useState(false);
  const [xYPosistion, setXyPosistion] = useState({ x: 0, y: 0 });
  const showClickRight = (event) => {
    event.preventDefault();
    //راست کلید قبلی پاک
    setClickRight(false);
    const positionChange = {
      x: event.pageX,
      y: event.pageY,
    };
    setXyPosistion(positionChange);
    setClickRight(true);
  };
  const hideClickRight = (event) => {
    setClickRight(false);
  };

  const [idMassege, setIdMassege] = useState("");
  function handelDeletMassage(id) {
    setIdMassege(id);
    console.log(id.type);
    farawin.testDeleteChat(idMassege, (res) => {
      if (res.code === "200") {
      }
      alert(res.message);
      alert("id : " + idMassege);
    });
  }

  // function handelEditMassage(v) {
  //   const id = +v;
  //   farawin.testEditChat(
  //     , ,
  //     (res) => {
  //       if (res.code === "200") { };
  //       alert(res.message);
  //       alert("id : " + id);
  //     }
  //   );
  // };

  return (
    <div
      className="px-3 col-start-1 col-span-3 lg:col-span-2 "
      onClick={hideClickRight}
    >
      {/* بخش هدر چت */}
      <div className="flex flex-row-reverse justify-between items-center mb-4">
        <div>
          <h3 className="text-lg text-[#e5e6ea] font-bold inline-block mr-3 lg:mr-0 nameSelested">
            {userNameSelected}
          </h3>
          <img
            onClick={() => handelOpenList(true)}
            src={src}
            id="contactList"
            className="lg:hidden inline-block w-6 align-text-bottom"
            alt="contact-icon"
          />
        </div>
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#9ca3a2"
            className="w-6 h-6 mr-2"
            onClick={() => handelPopUpEditContact(true)}
          >
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#9ca3a2"
            className="w-6 h-6"
            onClick={() => handelPopUpDeletContact(true)}
          >
            <path
              fillRule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {/*  بخش پیام ها */}
      <div className="h-[450px] flex flex-col  my-1 pr-2 overflow-auto">
        {/* بخش پیام ها */}
        {userPhoneSelected === "" ? (
          <div className="grid">
            <p className="bg-[#2E333D] text-[#989BA0] rounded-2xl p-1 w-2/4 text-center my-[30%] justify-self-center">
              کاربری جهت نمایش پیام انتخاب کنید
            </p>
          </div>
        ) : listMassege.filter(
            (e) =>
              e.sender === userPhoneSelected || e.receiver === userPhoneSelected
          ).length === 0 ? (
          <div className="text-lg text-[#e5e6ea] text-center">
            هیج پیامی بین شما وجود ندارد
          </div>
        ) : (
          listMassege.map((chat, index) => {
            return (
              <>
                {chat.sender === userPhoneSelected &&
                chat.receiver === localStorage.username ? (
                  <div className="flex items-end mb-4" key={index}>
                    <div className="text-center w-[50px] leading-[50px] bg-[#a9d2fe] rounded-2xl">
                      {userNameSelected.slice(0, 2)}
                    </div>
                    <div
                      className="relative ml-3 text-[#eceff3] bg-[#2E333D] p-3 rounded-2xl"
                      id="about"
                      onContextMenu={showClickRight}
                      onClick={hideClickRight}
                    >
                      {clickRight && (
                        <div
                          style={{ top: xYPosistion.y, left: xYPosistion.x }}
                          className="rightClick"
                        >
                          <div
                            className="menuElement"
                            onClick={() => {
                              handelDeletMassage(chat.id);
                            }}
                          >
                            Delet
                          </div>
                          <div className="menuElement">Edit</div>
                        </div>
                      )}
                      <img
                        src={pmLeft}
                        className="absolute w-6 bottom-[-9px] left-[-11px]"
                        alt="icon"
                      />
                      <p className="text-sm text-[#989BA0]">
                        {userNameSelected}
                      </p>
                      <p className="text-sm sm:text-base text-end">
                        {chat.text}
                      </p>
                      <strong className="block mt-2 text-xs text-[#989BA0]">
                        {new Date(chat.date).toLocaleString("fa").slice(0, 16)}
                      </strong>
                    </div>
                  </div>
                ) : chat.sender === localStorage.username &&
                  chat.receiver === userPhoneSelected ? (
                  <div
                    className="flex items-end flex-row-reverse mb-4"
                    key={index}
                  >
                    <div className="text-center w-[50px] leading-[50px] bg-[#4eab6c] rounded-2xl">
                      MH
                    </div>
                    <div
                      className="relative mr-3 text-[#eceff3] bg-[#6b8afe] p-3 rounded-2xl"
                      onContextMenu={showClickRight}
                      onClick={hideClickRight}
                    >
                      {clickRight && (
                        <div
                          style={{ top: xYPosistion.y, left: xYPosistion.x }}
                          className="rightClick z-1"
                        >
                          <div
                            className="menuElement"
                            onClick={() => handelDeletMassage(chat.id)}
                          >
                            Delet
                          </div>
                          <div className="menuElement">Edit</div>
                        </div>
                      )}
                      <img
                        src={pmRight}
                        className="absolute w-6 bottom-[-4px] right-[-11px]"
                        alt="icon"
                      />
                      <p className="text-sm text-end">Mohaddeseh</p>
                      <p className="text-sm sm:text-base text-end">
                        {chat.text}
                      </p>
                      <strong className="block text-end mt-2 text-xs text-[#eceff3]">
                        {new Date(chat.date).toLocaleString("fa").slice(0, 16)}
                      </strong>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </>
            );
          })
        )}
      </div>
      {/* بخش ارسال پیام */}
      <div className="flex flex-row-reverse w-auto lg:mx-2 rounded-2xl p-2 hover:bg-[#2E333D] focus-within:bg-[#2E333D]">
        <input
          dir="auto"
          type="text"
          className="bg-transparent text-[#989BA0] outline-none lg:mx-2 flex-1 text-right"
          placeholder="پیام خود را وارد کنید"
          value={sendMasseg}
          onChange={(e) => setSendMasseg(e.target.value)}
        />
        <img src={send} className="w-6" alt="clip-icon" onClick={handelSend} />
      </div>
    </div>
  );
}

// ...................................................................................................................................
//کامپوننت بخش لیست کانتک ها
function SectionContact({
  handelPopUpAddContact,
  src,
  handelOpenList,
  popUpAddContact,
  popUpEditContact,
  popUpDeletContact,
  handelUserNameSelected,
  handelUserPhoneSelected,
  handelLodingListLastMassege,
  lodingListLastMassege,
  screenWidth,
  userPhoneSelected,
}) {
  //هر یک دقیقه زمان حال را اپدیت می کند
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // لیست شو گپی لیست اصلی هست برای انکه براثر تغییرات لازم نباشد هر بار لیست اصلی را از پایگاه در یافت کنیم در این لیست لیست اصلی را وارد می کنیم
  const [listShow, setListShow] = useState([]);
  // "ایجاد لیست کانتک ها بر اساس "شماره لاگین شده
  const [list, setList] = useState([]);
  useEffect(() => {
    farawin.getContacts((result) => {
      const lists = result.contactList.filter(
        (contacts) => contacts.ref === localStorage.username
      );
      setList(lists);
      setListShow(lists);
    });
  }, [!popUpAddContact, !popUpEditContact, !popUpDeletContact]);

  // لیست پیام ها برای پیداکردن اخرین پیام هر مخاطب
  const [listLastMassege, setListLastMassege] = useState([]);
  useEffect(() => {
    farawin.getChats((result) => {
      const list = result.chatList.filter(
        (chat) =>
          chat.receiver == localStorage.username ||
          chat.sender == localStorage.username
      );
      setListLastMassege(list);
      handelLodingListLastMassege(false);
    });
  }, [lodingListLastMassege]);
  //پیداکردن اخرین پیام با اسم فرد ارسالی
  const showLastMassage = (userPhone, userName) => {
    if (userPhone !== localStorage.username) {
      const listArry = listLastMassege.filter(
        (chat) => chat.receiver == userPhone || chat.sender == userPhone
      );
      if (listArry.length > 0) {
        const lastArry = listArry[listArry.length - 1];
        if (lastArry.sender === userPhone) {
          return `...` + `${userName} :` + ` ${lastArry.text.slice(0, 15)}`;
        } else {
          return `...` + `شما :` + ` ${lastArry.text.slice(0, 15)}`;
        }
      }
    } else {
      return `...چت با خودتون...`;
    }
  };

  //اگر انپوت سرچ خالی باشد لیست اصلی نمایش در غیر این صورت لیست سرچ نمایش داد می شود
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    if (searchInput !== "") {
      setListShow(
        list.filter((item) => {
          if (item.name.toLowerCase().includes(searchInput.toLowerCase())) {
            return item;
          }
        })
      );
    } else {
      setListShow(list);
    }
  }, [searchInput]);

  return (
    <div className="col-start-1 col-span-3 lg:col-start-3 lg:col-span-1 ">
      {/* قسمت سرچ */}
      <div className="flex">
        <div className="bg-[#2E333D] inline-flex lg:flex w-auto flex-1 ml-3 mr-1 lg:mx-3 rounded-l-2xl lg:rounded-2xl p-2  items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#9ca3a2"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#9ca3a2"
            className="w-8 h-8 text-[#9ca3a2]"
            onClick={() => handelPopUpAddContact(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <img src={search} className="w-8" alt="search-icon" />
          <input
            type="search"
            className="bg-transparent text-[#989BA0] w-full outline-none ml-2"
            placeholder="Search"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
        </div>
        <div
          onClick={() => handelOpenList(false)}
          className="relative inline-block bg-[#2E333D] w-[50px]  rounded-r-2xl lg:hidden"
        >
          <img
            src={src}
            className="w-8 absolute top-[9px] left-[7px]"
            alt="close-icon"
          />
        </div>
      </div>
      {/* قسمت لیست کانتک ها */}
      <div className="listPerson my-4 pr-2 h-[450px] overflow-auto">
        {listShow.length === 0 ? (
          <div className="grid">
            <div className="bg-[#2E333D] text-[#989BA0] rounded-2xl p-1 w-2/4 text-center my-[30%] justify-self-center">
              شما هنوز هیج مخاطبی اضافه نکردید
            </div>
          </div>
        ) : (
          listShow.map((user, indext) => {
            const color = `#${Math.floor(Math.random() * 16777215).toString(
              16
            )}`;
            return (
              <div
                key={indext}
                // درحالت موبایل بعد انتخاب یوزر نباید لیست بسته شود
                onClick={() => {
                  handelUserNameSelected(user.name);
                  handelUserPhoneSelected(user);
                  if (screenWidth < 1024) handelOpenList(false);
                }}
                className={`flex flex-row-reverse w-auto p-3 rounded-2xl cursor-pointer transition ease-in delay-50 
                     ${
                       userPhoneSelected === user.username
                         ? "bg-[#2E333D] m-1.5"
                         : "hover:bg-[#2E333D] hover:-translate-y-1"
                     } `}
              >
                <div
                  className="text-center w-[70px] leading-[50px] rounded-2xl"
                  style={{ backgroundColor: color }}
                >
                  {user.name.slice(0, 2)}
                </div>
                <div className="mr-2 w-full">
                  <div className="flex flex-row-reverse justify-between items-center">
                    <h4 className="text-[#e5e6ea] nameActive">{user.name}</h4>
                    <span className="text-[#989BA0] text-xs">
                      {formatDate(currentDate, user.date)}
                    </span>
                  </div>
                  <p className="text-xs text-right text-[#989BA0] pt-1">
                    {showLastMassage(user.username, user.name)}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

// ...................................................................................................................................
//محاسبه اخرین زمان انلاین بودن
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

// ...................................................................................................................................
//کامپوننت پاپ اپ
function PopUp({
  handelPopUp,
  src,
  nameForm,
  userPhoneSelected,
  disabled,
  handelUserNameSelected,
  userNameSelected,
  handelUserPhoneSelected,
}) {
  //افزودن کاربر جدید به لیست مخاطب ها
  const [addNewContact, setAddNewContact] = useState({
    phone: "",
    name: "",
  });
  const handelClick = () => {
    if (nameForm === "افزودن مخاطب") {
      farawin.testAddContact(
        addNewContact.phone,
        addNewContact.name,
        (resultAdd) => {
          if (resultAdd.code === "200") {
            handelUserNameSelected(addNewContact.name);
            handelUserPhoneSelected(addNewContact.phone);
            handelPopUp(false);
          }

          alert(resultAdd.message);
        }
      );
    }
    if (nameForm === "تغییر نام مخاطب") {
      farawin.testEditContact(
        userPhoneSelected,
        addNewContact.name,
        (resultAdd) => {
          if (resultAdd.code === "200") {
            handelUserNameSelected(addNewContact.name);
            handelPopUp(false);
          }
          alert(resultAdd.message);
        }
      );
    }
    if (nameForm === "حذف مخاطب") {
      farawin.testDeleteContact(userPhoneSelected, (resultAdd) => {
        if (resultAdd.code === "200") {
          handelUserNameSelected("کاربر خود را انتخاب کنید");
          handelUserPhoneSelected("");
          handelPopUp(false);
        }
        alert(resultAdd.message);
      });
    }
  };

  return (
    <div className="fixed inset-0 z-2 flex items-center justify-center backdrop-blur">
      <form className="flex flex-col items-center  bg-slate-700 text-white h-[350px] w-[300px] m-auto rounded-2xl">
        <img
          src={src}
          className="w-8 self-end m-2"
          alt="close-icon"
          onClick={() => handelPopUp(false)}
        />
        <h1 className="text-xl  mb-3">فرم {nameForm}</h1>

        {nameForm === "حذف مخاطب" ? (
          <p className="text-center mt-4 text-[#989BA0]">
            آیا از حذف
            <strong className="text-[#dfdfdf] block">{userNameSelected}</strong>
            با شماره{" "}
            <strong className="text-[#dfdfdf] block">
              {userPhoneSelected}
            </strong>
            مططمئن هستید
          </p>
        ) : (
          <>
            <label htmlFor="tel" className="mt-4">
              شماره تماس
            </label>
            <input
              type="tel"
              id="tel"
              className="text-center rounded-full w-[200px] bg-transparent text-[#989BA0] outline-none border p-1 m-1"
              placeholder={userPhoneSelected}
              disabled={disabled}
              onChange={(e) => {
                const phone = e.target.value;
                setAddNewContact({ ...addNewContact, phone: phone });
              }}
              value={addNewContact.phone}
            />

            <label htmlFor="text" className="mt-4">
              نام
            </label>
            <input
              type="text"
              id="text"
              className="text-center rounded-full w-[200px] bg-transparent text-[#989BA0] outline-none border p-1 m-1"
              onChange={(e) => {
                const name = e.target.value;
                setAddNewContact({ ...addNewContact, name: name });
              }}
              value={addNewContact.name}
            />
          </>
        )}
        <button
          type="button"
          className="hover:bg-[#989BA0] border rounded-full p-1 px-3 mt-4"
          onClick={handelClick}
        >
          {nameForm}
        </button>
      </form>
    </div>
  );
}
