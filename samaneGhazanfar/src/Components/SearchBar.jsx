import { useState } from "react";

export const SearchBar = ({propContact})=>{
    const [searchInput,setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handellSearch =()=>{
        let resultSearch =  propContact.filter((contact)=>
    (contact.name.toLowerCase().includes(searchInput.toLowerCase())));
      console.log(resultSearch);
      setSearchResults(resultSearch)
    }



    

    return (
        <div>
        <div className ="relative flex flex-row w-[150px] h-10 ml-4 mr-1 border-[#757474] rounded-xl bg-[#757474]">
        <img 
        onClick={handellSearch}
        className="rounded-xl h-9 cursor-pointer"
        src="../img/icons8-search-30.png" 
        alt="search" />
        <input
        type="search"
        placeholder="جستجو ..."
        className ="fle
        x flex-row w-[120px] border-[#757474] rounded-xl bg-[#757474]"
        value={searchInput}
        onChange={(s)=>{setSearchInput(s.target.value)}}
        />
        </div>


        <div>

        { searchInput.length > 3 &&
          <ul className="flex flex-col w-[200px] h-auto min-h-[30px] text-center m-3 bg-[#757474] cursor-pointer rounded-xl">
          {searchResults.map((result) => (
          <li key={result.id}>
            {result.name}
          </li>
          ))}
          </ul>
        }

        </div>


        </div>
    )
}