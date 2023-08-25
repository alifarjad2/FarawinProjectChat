import { useState } from "react";

export const SearchBar = ({propContact})=>{
    const [searchInput,setSearchInput] = useState("");


    let resultSearch =  searchInput.length === 0 ? {propContact} : propContact.filter((contact)=>
    (contact.name.toLowerCase().includes(searchInput.toLowerCase())
    ));
     console.log(resultSearch);


    return (
        <div>
        <div className ="relative flex flex-row w-[150px] h-10 ml-4 mr-1 border-[#757474] rounded-xl bg-[#757474]">
        <img 
        className="rounded-xl h-9 cursor-pointer"
        src="../img/icons8-search-30.png" 
        alt="search" />
        <input
        value={searchInput}
        type="search"
        placeholder="جستجو ..."
        className ="fle
        x flex-row w-[120px] border-[#757474] rounded-xl bg-[#757474]"
        onChange={(s)=>{setSearchInput(s.target.value)}}
        />
        </div>


        </div>
    )
}