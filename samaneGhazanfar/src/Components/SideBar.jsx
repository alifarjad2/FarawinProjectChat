import { useEffect, useState } from "react"
import farawin from "farawin";
import { Contacts } from "./Contacts";
import { SearchBar } from "./SearchBar";
import { AddContact } from "./addContact";
import {DeleteContact} from "./deleteContact";


export const SideBar = ({contactName})=>{

    const [contactList , setContactList ] = useState ([])
// -------------------------تابع نمایش نام مخاطب در چت باکس--------------------------------------
    const itemHandler = (name)=>{
    return contactName(name);
    }
// ----------------------گرفتن مخاطبین اضافه شده از سرور--------------------------
     const fetchContacts = async()=>{
       const result = await farawin.getContacts()
      // console.table(result.contactList);

      const showContact = result.contactList.filter((r)=>{return r.ref == localStorage.username})

     setContactList(showContact)
      // console.log(contactList);
    }
    useEffect(()=>{
        fetchContacts();
    },[])
// -------------------------نمایش فرم افزودن مخاطب------------------------------
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
      };
//--------------------------نمایش فرم حذف مخاطب----------------------------------
      const [PopupDelete, setPopupDelete] = useState(false);
      const togglePopupDelete = () => {
        setPopupDelete(!PopupDelete);
        };

    return(
        

        <div
        // drawer
        className ="relative bg-[#4f4e4e] flex flex-col min-w-[250px] p-1 m-2 max-sm:hidden "
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
        className=" absolute top-3 left-10 rounded-xl cursor-pointer "
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