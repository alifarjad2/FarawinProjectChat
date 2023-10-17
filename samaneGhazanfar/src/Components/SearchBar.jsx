import { useState } from "react";
import search from "../../img/icons8-search-30.png"

export const SearchBar = ({propContact , contactName})=>{
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
        <div className ="relative flex flex-row w-[200px] h-10 ml-4 mr-1 border-[#757474] rounded-xl bg-[#757474] ">
        <img 
        className="rounded-xl h-9 cursor-pointer"
        src={search} 
        alt="search" />
        <input
        type="search"
        placeholder="جستجو ..."
        className ="fle
        x flex-row w-[120px] outline-none rounded-xl bg-[#757474]"
        value={searchInput}
        onChange={(s)=>{setSearchInput(s.target.value)}}
        onKeyUp={handellSearch}
        />
        </div>


        <div>

        {searchInput.length != 0  &&
          <ul 
          className="flex flex-col fixed z-[1] overflow-y-auto w-[200px] min-h-[30px] text-center mt-3 bg-[#757474] cursor-pointer rounded-xl"
          >
         
          {searchResults.map((item)=>(

            <li
            onClick={()=>(contactName(item))}
            className ="relative hover:bg-slate-600 cursor-pointer h-16 flex flex-row w-[95%] mb-3 rounded-xl "
            >
            {/* نمایش حرف اول  */}
             <div className ={ Math.round(Math.random()*1) +1 == 1 ? "w-11 h-12 bg-purple-400 rounded-[20%] text-center font-bold caret-white leading-[48px] m-2" : "w-11 h-12 bg-red-300 rounded-[20%] text-center font-bold caret-white leading-[48px] m-2"}
            >
                ^^
            </div> 
            
    
            <div className ="flex flex-col m-1 relative">
            <span>
              {item.name}
            </span>
            </div>
    
            </li>
    
          ))
         
         }
          

          </ul>
        }

        </div>


        </div>
    )
}