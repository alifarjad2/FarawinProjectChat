import { useState } from "react";
import { useStore } from "./Zustand/useStore";

export default function SearchBar() {
  const [search, setSearch] = useState([]);
  const sharedContact = useStore((state) => state.sharedContact);
  const setSearchedContact = useStore((state) => state.setSearchedContact);

  const handleSearchChange = (event) => {
    event.preventDefault;
    setSearch(event.target.value);
  };

  let foundedContact = [];
  if (Array.isArray(sharedContact) && search.length > 0) {
    foundedContact = sharedContact.filter(
      (contact) => contact.name.match(search) || contact.username.match(search)
    );
  }
  setSearchedContact(foundedContact);
  // console.log(foundedContact);
  return (
    <div>
      <div>
        <input
          onChange={handleSearchChange}
          type="search"
          placeholder="جستجو"
          className=" p-1 rounded-lg border-none outline-none w-full bg-[#2E333D]"
        />
      </div>
    </div>
  );
}
