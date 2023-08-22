import { useState, useEffect } from "react";
import { ContactItem } from "./ContactItem";
import farawin from "farawin";
import { AddContact } from "./AddContact";
import { RemoveContact } from "./RemoveContact";
import { Search } from "./search";
import imageDrawerMenu from "../../img/drawer-menu.png";

export const DrawerChat = () => {
  const [members, setMembers] = useState([]);
  const [searchMember, setSearchMember] = useState("");

  const [showAddContact, setShowAddContact] = useState(false);
  const [showRemoveContact, setshowRemoveContact] = useState(false);
  const [showDrawer, setShowDrawer] = useState(true);

  const searchHandler = (value) => {
    const searched = members.filter((item) => {
      return item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        ? item.name
        : "";
    });
    {
      searched.length != 0 && value.length != 0
        ? setSearchMember(searched)
        : location.reload();
    }
  };

  const getMembers = async () => {
    const res = await farawin.getContacts();
    console.table(res.contactList);
    const filterContact = res.contactList.filter((r) => {
      return r.ref == localStorage.userMobile;
    });

    setMembers(filterContact);
  };

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <div
      className={
        showDrawer
          ? "relative transition-all duration-700 overflow-x-hidden flex flex-col m-1 rounded-lg w-[500px] text-center px-4 max-sm:hidden"
          : " transition-all duration-700 w-0 overflow-x-hidden hover:cursor-pointer mx-5"
      }
    >
     
      {/* این دیو مخصوص قسمت سرچ و دکمه های دراور می باشد */}
      <div className="flex justify-between items-center">
        <Search searchHandler={searchHandler} />

        <div className="flex justify-center  items-center  h-12 ">
          <button
            className={
              showAddContact
                ? " bg-slate-300 rounded-full h-8 px-3  mx-2 "
                : " bg-slate-500 rounded-full h-8 px-3  mx-2 "
            }
            onClick={() => {
              setShowAddContact(!showAddContact);
            }}
          >
            +
          </button>
          <button
            className={
              showRemoveContact
                ? " bg-slate-300 rounded-full h-8 px-3  text-xs"
                : " bg-slate-500 rounded-full h-8 px-3  text-xs"
            }
            onClick={() => {
              setshowRemoveContact(!showRemoveContact);
            }}
          >
            -
          </button>

          <img
            src={imageDrawerMenu}
            onClick={() => {
              setShowDrawer(!showDrawer);
            }}
            alt="menu"
            className={
              showDrawer
                ? "w-7 mx-1 hover:cursor-pointer "
                : "w-7 mx-1 hover:cursor-pointer fixed right-6 rotate-90 "
            }
          />
        </div>
      </div>

{/* این دیو برای نمایش موارد جستجو شده می باشد */}
      <div
        className={
          searchMember
            ? "  bg-zinc-800 overflow-y-auto absolute left-2 right-2 top-16 bottom-0 z-10 rounded-sm p-2  "
            : "hidden"
        }
      >
        <button
          type="button"
          onClick={() => {
            setSearchMember("");
          }}
          className="bg-blue-900 rounded-full my-2 text-xs h-6 w-full "
        >
          X بستن پنجره
        </button>
        {searchMember
          ? searchMember.map((contact) => (
              <ContactItem key={contact.index} name={contact.name} />
            ))
          : ""}
      </div>

      {/* این دیو برای مدیریت افزودن مخاطب است */}
      <div>{showAddContact ? <AddContact /> : ""}</div>

      {/* این دیو برای مدیریت حذف مخاطب است */}
      <div>{showRemoveContact ? <RemoveContact /> : ""}</div>

{/* این جا همه مخاطبین ما نمایش داده میشود */}
      {members.length == 0
        ? " مخاطبی وجود ندارد"
        : members.map((contact) => (
            <ContactItem key={contact.index} name={contact.name} />
          ))}
    </div>
  );
};
