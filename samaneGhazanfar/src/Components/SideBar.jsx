import { useEffect, useState } from "react"
import farawin from "farawin";
import { Contacts } from "./Contacts";
import { SearchBar } from "./SearchBar";



export const SideBar = ({contactName})=>{

    const [contactList , setContactList ] = useState ([])
// -------------------------تابع نمایش نام مخاطب در چت باکس--------------------------------------
    const itemHandler = (name)=>{
    return contactName(name);
    }
// ----------------------گرفتن مخاطبین اضافه شده از سرور--------------------------
     const fetchContacts = async()=>{
       const result = await farawin.getContacts()
      //  console.table(result.contactList);

      const showContact = result.contactList.filter((r)=>{return r.ref == localStorage.username})

     setContactList(showContact)
       console.log(showContact);
    }
    useEffect(()=>{
        fetchContacts();
    },[])

    return(
        

        <div
        // drawer
        className ="relative bg-[#4f4e4e] flex flex-col min-w-[250px] p-2  "
        >
        
        <SearchBar propContact = {contactList}  contactName = {itemHandler}/>


        <div 
        // showContactList
        className ="flex flex-col h-full mt-4 overflow-y-auto">

        
        
        <ul
        // contactList
        className="cursor-pointer"
        >
        {contactList.length == 0 && (<h3 className="text-center text-slate-400">مخاطبی وجود ندارد ...</h3>)}
        {contactList.map((res)=>(
        <Contacts key={res.index} res={res}  contactName = {itemHandler}/>
        ))}
        </ul>
        </div>
        </div>

    )
}