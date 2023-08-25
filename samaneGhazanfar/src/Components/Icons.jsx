import { useState } from "react"
 import { AddContact } from "./addContact";
 import {DeleteContact} from "./deleteContact";
import { ChatBox } from "./ChatBox";
import { EditChat } from "./editChat";
 export const Icons = ()=>{

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
      };
//--------------------------------------------------------------------------------
    const [popEdit, setPopEdit] = useState(false);
    const togglePopup2 = () => {
        setPopEdit(!popEdit);
      };
//--------------------------نمایش فرم حذف مخاطب----------------------------------
      const [PopupDelete, setPopupDelete] = useState(false);
      const togglePopupDelete = () => {
        setPopupDelete(!PopupDelete);
        };


    return(
        <div
        className="items-center justify-center flex flex-col h-full w-10 ">
        <div className="py-8">
        <img
        className="w-6 h-6 cursor-pointer"
        src="../img/icons8-edit-50.png"
        alt="edit"
        onClick={togglePopup2} />
        {popEdit && <EditChat />}
        </div>

        <div className="py-8">
        <img 
        className=" rounded-xl  cursor-pointer"
        src="../img/icons8-plus-24 (2).png" 
        alt="Add" 
        onClick={togglePopup} />
        {isPopupOpen && <AddContact />}
        </div>
        <div className="py-8 ">
      <img 
      className=" rounded-xl cursor-pointer "
      src="../img/icons8-delete-24.png" 
      alt="delete"
      onClick={togglePopupDelete} />
      {PopupDelete && <DeleteContact/>}
      </div>

      

        </div>
    )
}