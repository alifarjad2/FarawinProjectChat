

export const Contacts=({ res , contactName }) => {
 

    return(
        <li
        key={res.index}
        onClick={()=>{return contactName(res)}}
        className ="relative hover:bg-slate-600 cursor-pointer h-16 flex flex-row w-[95%] mb-3 rounded-xl "
        >
        {/* نمایش حرف اول  */}
         <div className ={ Math.round(Math.random()*1) +1 == 1 ? "w-11 h-12 bg-purple-400 rounded-[20%] text-center font-bold caret-white leading-[48px] m-2" : "w-11 h-12 bg-red-300 rounded-[20%] text-center font-bold caret-white leading-[48px] m-2"}
        >
            ^^
        </div> 
        

        <div className ="flex flex-col m-1 relative">
        <span>
        {res.name}
        </span>
        <span className ="text-gray-300 mt-2 text-xs">
         {/*matne payam  */}
        </span>
        </div>


        {/* inja baraye namayesh tedad payam hast */}
        {/* <span className ="bg-blue-500 rounded-full w-4 h-4 absolute left-3 top-1 text-xs m-1 text-center">
        5
        </span> */}

        </li>

    )
}