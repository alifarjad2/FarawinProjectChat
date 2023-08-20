import { useState, useEffect } from "react";
import { ContactItem } from "./ContactItem";
import farawin from "farawin";
import { AddContact } from "./AddContact";
import { RemoveContact } from "./RemoveContact";
import { Search } from "./search";
import imageDrawerMenu from "../../img/drawer-menu.png"


export const DrawerChat = () => {
  const [members, setMembers] = useState([]);
  const [showAddContact, setShowAddContact] = useState(false);
  const [showRemoveContact, setshowRemoveContact] = useState(false);
  const [showDrawer,setShowDrawer] = useState(true);

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
    <div className={showDrawer ? "overflow-hidden flex flex-col   m-1 rounded-lg w-[500px] text-center p-2 max-sm:hidden":" w-0 overflow-x-hidden hover:cursor-pointer mx-5" }>
      
      
      <div className="flex justify-between items-center">
        <Search />

        <div className="flex justify-center  items-center  h-8 ">
          <button
            className={
              showAddContact
                ? " bg-slate-300 rounded-full h-full px-3  mx-2 "
                : " bg-slate-500 h-full rounded-full px-3  mx-2 "
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
                ? " bg-slate-300 rounded-full h-full px-3  text-xs"
                : " bg-slate-500 h-full rounded-full px-3  text-xs"
            }
            onClick={() => {
              setshowRemoveContact(!showRemoveContact);
            }}
          >
            -
          </button>
          
          <img src={imageDrawerMenu} onClick={()=>{setShowDrawer(!showDrawer)}} alt="menu" className={showDrawer ? "w-7 mx-1 hover:cursor-pointer " :"w-7 mx-1 hover:cursor-pointer fixed right-6 rotate-90 "}/>
        
        </div>
      </div>

      {/* این دیو برای مدیریت افزودن مخاطب است */}
      <div>{showAddContact ? <AddContact /> : ""}</div>

      {/* این دیو برای مدیریت حذف مخاطب است */}
      <div>{showRemoveContact ? <RemoveContact /> : ""}</div>

      {members.length == 0
        ? "هنوز مخاطبی وجود ندارد"
        : members.map((contact) => (
            <ContactItem key={contact.index} name={contact.name} />
          ))}
    </div>
  );
};
