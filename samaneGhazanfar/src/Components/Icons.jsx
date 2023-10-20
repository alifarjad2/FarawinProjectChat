import { useState } from "react";
import { AddContact } from "./addContact";
import { DeleteContact } from "./deleteContact";
import { EditChat } from "./editChat";
import edit from "../../img/icons8-edit-50.png";
import Add from "../../img/icons8-plus-24 (2).png";
import deleteC from "../../img/icons8-delete-24.png";
import contact from "../../img/icons8-contacts-50.png";

export const Icons = ({setPopupContact}) => {
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
// -------------------------------------------------------------------------------------




  return (
    <div className="items-center hover:border rounded-xl justify-center flex flex-col h-full w-10 ">
      <div className="py-8">
        <img
          className="w-6 h-6 cursor-pointer"
          src={edit}
          alt="edit"
          onClick={togglePopup2}
        />
        {popEdit && <EditChat />}
      </div>

      <div className="py-8">
        <img
          className=" rounded-xl  cursor-pointer"
          src={Add}
          alt="Add"
          onClick={togglePopup}
        />
        {isPopupOpen && <AddContact />}
      </div>
      <div className="py-8 ">
        <img
          className=" rounded-xl cursor-pointer "
          src={deleteC}
          alt="delete"
          onClick={togglePopupDelete}
        />
        {PopupDelete && <DeleteContact />}
      </div>

      <div className="py-8 ">
        <img 
        onClick={setPopupContact}
        className="h-8 cursor-pointer" src={contact} alt="contact" />
      </div>
    </div>
  );
};
