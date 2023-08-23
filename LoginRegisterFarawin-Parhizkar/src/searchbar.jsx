import { useState } from "react";

export default function SearchBar(props) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  let filteredData = [];
  if (searchInput.length > 0) {
    filteredData = props.data.filter(
      (contact) =>
        contact.username.match(searchInput) || contact.name.match(searchInput)
    );
  }

  return (
    <div>
      <input
        className="p-3 bg-[#2E333D] border-none rounded-r-lg outline-none text-white"
        type="search"
        placeholder="جسنجو"
        onChange={handleChange}
        value={searchInput}
      />
      <div>
        {filteredData.map((contact) => (
          <div
            onClick={() => props.set(contact.name)}
            className="absolute backdrop-blur-lg cursor-pointer  hover:bg-violet-800 hover:bg-opacity-30 text-white flex flex-col items-start p-3 w-[245px] rounded-lg "
            key={contact.username}
          >
            <p>{contact.name}</p>
            <p>{contact.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
