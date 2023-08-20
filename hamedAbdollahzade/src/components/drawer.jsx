import { useState, useEffect } from "react";
import { ContactItem } from "./ContactItem";
import farawin from "farawin";
import { AddContact } from "./AddContact";
import { RemoveContact } from "./RemoveContact";
import { Search } from "./search";

export const DrawerChat = () => {
  const [members, setMembers] = useState([]);
  const [showAddContact, setShowAddContact] = useState(false);
  const [showRemoveContact, setshowRemoveContact] = useState(false);

  const getMembers = async () => {
    const res = await farawin.getContacts();
    const filterContact = res.contactList.filter((r) => {
      return r.ref == localStorage.userMobile;
    });

    setMembers(filterContact);
  };

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <div className="overflow-auto flex flex-col   m-1 rounded-lg w-1/3 text-center p-2 max-sm:hidden">
      <Search />

      {/* این باتن مخصوص اد کردن مخاطب است  */}
      <div className="flex justify-center items-center  h-10 px-3 my-2  ">
        <button
          className={
            showAddContact
              ? " bg-slate-300 rounded-xl h-full px-3 m-1 text-xs"
              : " bg-slate-500 h-full rounded-xl px-3 m-2 text-xs"
          }
          onClick={() => {
            setShowAddContact(!showAddContact);
          }}
        >
          {" "}
          افزودن مخاطب{" "}
        </button>
        <button
          className={
            showRemoveContact
              ? " bg-slate-300 rounded-xl h-full px-3 m-1 text-xs"
              : " bg-slate-500 h-full rounded-xl px-3 m-2 text-xs"
          }
          onClick={() => {
            setshowRemoveContact(!showRemoveContact);
          }}
        >
          {" "}
          حذف مخاطب{" "}
        </button>
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
