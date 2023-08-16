import { useState } from "react"

export const SideBar = ()=>{

    // const [contactList , setContactList ] = useState

    

    return(
        <div>

        <div
        id="showContactList"
        className ="bg-[#4f4e4e] flex flex-col w-[300px] p-1 m-2 max-md::hidden"
        >
        <div className ="relative flex flex-row w-10/12 h-10 ml-4 mr-1 border-[#757474] rounded-xl bg-[#757474]">
        <input
        type="search"
        placeholder="جستجوی مخاطبین"
        className ="fle
        x flex-row w-full mr-10 border-[#757474] rounded-xl bg-[#757474]"
        />
        </div>
        <div id="drawer" className ="flex flex-col h-full mt-4 overflow-hidden overflow-y-auto">
        <ul id="contactList">
        <li
        className ="relative bg-slate-400 h-16 flex flex-row w-[95%] mb-3 rounded-xl "
        >
        <div className ="w-11 h-12 bg-blue-200 rounded-[20%] text-center font-bold caret-white leading-[48px] m-2">
        ا ک
        </div>
        <div className ="flex flex-col m-1 relative">
        <span>احمد کریمی</span>
        <span className ="text-gray-300 mt-2 text-xs">
        سلام 
        </span>
        </div>
        {/* inja baraye namayesh tedad payam hast */}
        {/* <span className ="bg-blue-500 rounded-full w-4 h-4 absolute left-3 top-1 text-xs m-1 text-center">
        5
        </span> */}

        </li>
        
        </ul>
        </div>
        </div>

        </div>

    )
}