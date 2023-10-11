import { useState } from "react";
import UserContact from "./UserContact";
import { Contacts } from "./myCode";

export default function ContactList({ user }) {
  const [filterText, setFilterText] = useState("");
  const newContacts = Contacts.filter((row) => row.ref === user.username);

  return (
    <div className="hidden lg:flex flex-col w-1/3 h-full">
      <header className="mb-2 mt-2 h-12">
        <form className="group relative w-10/12 mx-auto">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute right-2.5 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
          </svg>
          <input
            className="bg-[#30323e] text-[#ababb3] placeholder-slate-400 block focus:ring-2 focus:ring-slate-500 focus:outline-none appearance-none w-full text-sm leading-6 rounded-2xl py-2 pr-10 shadow-sm"
            type="text"
            aria-label="Filter projects"
            placeholder="جستجو ..."
            onInput={(e) => setFilterText(e.target.value)}
          />
        </form>
      </header>

      <div className="overflow-y-auto flex-1 mb-12">
        {newContacts
          .filter((row) => row.username.includes(filterText))
          .map((row, index) => {
            return <UserContact key={index} contact={row} />;
          })}
      </div>
    </div>
  );
}
