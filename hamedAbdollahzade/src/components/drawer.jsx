import { useState, useEffect } from "react";
import { ContactItem } from "./ContactItem";
import farawin from "farawin";
import { AddContact } from "./AddContact";
import { RemoveContact } from "./RemoveContact";
import { Search } from "./search";
import imageDrawerMenu from "../../img/drawer-menu.png";
import imageAddContact from "../../img/addContact.png"
import imageDeleteContact from "../../img/delete.png"
import imageRefresh from "../../img/refresh.png"


export const DrawerChat = (prop) => {
  // -------------------------------------------------------------------------------
  const [members, setMembers] = useState([]);
  const [searchMember, setSearchMember] = useState("");
console.log(members);
  const [reloadComponent,setReloadComponent] = useState(true);
  const [showAddContact, setShowAddContact] = useState(false);
  const [showRemoveContact, setshowRemoveContact] = useState(false);
  const [showDrawer, setShowDrawer] = useState(true);
// ---------------------------------------------------------------------------------
const selectedHandler = (itemSelected) => {
  return prop.selectedItem(itemSelected)
}

  // -----------------------------------------------------------------------
  const searchHandler = (value) => {
    const searched = members.filter((item) => {
      return item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        ? item.name
        : "";
    });
    {
      searched.length != 0 && value.length != 0
        ? setSearchMember(searched)
        : alert ("موردی یافت نشد !")
    }
  };
  // -------------------------------------------------------------------

  const getMembers = async () => {
    const res = await farawin.getContacts();
    // console.table(res.contactList);
    const filterContact = res.contactList.filter((r) => {
      return r.ref == localStorage.userMobile;
    });

    setMembers(filterContact);
  };
  // --------------------------------------------------------------------------------
  useEffect(() => {
    getMembers();
  }, [reloadComponent]);
  // ------------------------------------------------------------------------------------

  return (
    <div
      className={
        showDrawer
          ? "relative transition-all duration-700 overflow-x-hidden flex flex-col m-1 rounded-lg w-[300px] shrink-0 text-center px-4  border-l-2 border-blue-900 "
          : " transition-all duration-700 w-0 overflow-x-hidden hover:cursor-pointer mx-5"
      }
    >

<div className="flex justify-start items-center  h-9 mt-1 ">
          <img
          src={imageAddContact}
            className={
              showAddContact
                ? " bg-slate-300 rounded-full h-8 px-3  mx-1 cursor-pointer"
                : " bg-slate-500 rounded-full h-8 px-3  mx-1 cursor-pointer"
            }
            onClick={() => {
              setShowAddContact(!showAddContact);
            }}
          />

<img
          src={imageRefresh}
            className={" bg-slate-300 rounded-full h-8 px-3 mx-1 text-xs cursor-pointer"}
            onClick={() => {setReloadComponent(!reloadComponent)}}
          />

          <img
          src={imageDeleteContact}
            className={
              showRemoveContact
                ? " bg-slate-300 rounded-full h-8 px-3  text-xs mx-1 cursor-pointer"
                : " bg-slate-500 rounded-full h-8 px-3  text-xs mx-1 cursor-pointer"
            }
            onClick={() => {
              setshowRemoveContact(!showRemoveContact);
            }}
          />
          <img
            src={imageDrawerMenu}
            onClick={() => {
              setShowDrawer(!showDrawer);
            }}
            alt="menu"
            className={
              showDrawer
                ? "w-10 mr-10 hover:cursor-pointer "
                : "w-10 mt-2  hover:cursor-pointer fixed right-6 rotate-90  "
            }
          />
        </div>



      {/* این دیو مخصوص قسمت سرچ و دکمه های دراور می باشد */}
      <div className="flex justify-between items-center">
        <Search searchHandler={searchHandler} />
      </div>
      
      
    

      {/* این دیو برای نمایش موارد جستجو شده می باشد */}
      <div
        className={
          searchMember
            ? "  bg-zinc-800 overflow-y-auto absolute left-2 right-4 top-24 bottom-1 z-10 rounded-sm p-2   "
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
              <ContactItem key={contact.index} contact={contact} selectedItem={selectedHandler} />
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
            <ContactItem key={contact.index} contact={contact} selectedItem={selectedHandler} />
          ))}
    </div>
  );
};
