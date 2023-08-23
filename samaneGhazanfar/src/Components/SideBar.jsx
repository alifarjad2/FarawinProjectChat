import { useEffect, useState } from "react"
import farawin from "farawin";
import { Contacts } from "./Contacts";
import { SearchBar } from "./SearchBar";
import { AddContact } from "./addContact";
import {DeleteContact} from "./deleteContact";


export const SideBar = ()=>{

      const [contactList , setContactList ] = useState ([])

     const fetchContacts = async()=>{
       const result = await farawin.getContacts()
      console.table(result.contactList);

      const showContact = result.contactList.filter((r)=>{return r.ref == localStorage.username})

     setContactList(showContact)
      console.log(contactList);
    }
    useEffect(()=>{
        fetchContacts();
    },[])
   
    // add contact pop up
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
      };

      // delete contact pop up
      const [PopupDelete, setPopupDelete] = useState(false);
      const togglePopupDelete = () => {
        setPopupDelete(!PopupDelete);
        };

    return(
        

        <div
        // drawer
        className ="relative bg-[#4f4e4e] flex flex-col w-[400px] p-1 m-2 max-sm:hidden "
        >

        <div className="w-12" >
          <div>
          <img 
        className="absolute top-3 left-0 rounded-xl  cursor-pointer"
        src="../img/icons8-plus-24 (2).png" 
        alt="Add" 
        onClick={togglePopup} />
        {isPopupOpen && <AddContact />}
          </div>
          <div>
          <img 
        className=" absolute top-3 left-8 rounded-xl cursor-pointer "
        src="../img/icons8-delete-24.png" 
        alt="delete"
        onClick={togglePopupDelete} />
        {PopupDelete && <DeleteContact/>}
          </div>

        </div>

        <SearchBar propContact = {contactList} />




        <div 
        // showContactList
        className ="flex flex-col h-full mt-4 overflow-hidden">

        
        
        <ul
        // contactList
        >
        {contactList.length == 0 && (<h3 className="text-center text-slate-400">مخاطبی وجود ندارد ...</h3>)}
        {contactList.map((res)=>(
        <Contacts key={res.index} res={res}/>
        ))}
        </ul>
        </div>
        </div>

    )
}