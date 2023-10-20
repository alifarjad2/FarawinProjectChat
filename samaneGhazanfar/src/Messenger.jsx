
import { useEffect, useState } from "react";
import { ChatBox } from "./Components/ChatBox";
import { SideBar } from "./Components/SideBar";
import farawin from "farawin";
import { Icons } from "./Components/Icons";


export const Messenger = () => {
// استیت کلی چت ها
const [chatAll , setChatAll] = useState("");
// ---------------------------------------------------------------------
const [reload , setRelode] = useState(0)

// استیت فرستنده چت
    const [isSender , setIsSender] = useState("");
// ---------------------------------------------------------------------
// استیت دریافت کننده چت
    const [isReciver , setIsReciver] = useState("");
// ---------------------------------------------------------------------
// استیت مخاطب انتخاب شده که نام ان در هدر چت میاد
    const [isItem , setIsItem ]=useState("");

     const itemHandler = (value)=>{
        setIsItem(value);
    }
    //  console.log(isItem);
  
// ----------------------------گرفتن چت لیست از سرور-----------------------------------------------
    const fetchChat = async() => {
        const result = await farawin.getChats()
        const chat = result.chatList
        setChatAll(chat)

    }
   
    //   console.table(chatAll);
// -----------------------------------------------------------------------------------------------------
const sender = ()=>{
   const sendM = chatAll.filter((e)=>{
    if (e.sender == localStorage.username) {
         return  e.receiver == isItem.username ; }})
          setIsSender(sendM)
};
// ---------------------------------------------------------------------------------------------------------
const reciver = ()=>{
    const reciveM = chatAll.filter((e)=>{
        if (e.sender == isItem.username) {
            return e.receiver == localStorage.username}})
            setIsReciver(reciveM);
}


useEffect(()=>{
    fetchChat();
    isItem ?
    sender() : "" ;
    
    isItem ?
    reciver() : "";
},[isItem,reload]);

const [PopupContact, setPopupContact] = useState(true);
const togglePopUpContact = () =>{
  setPopupContact (!PopupContact);
}


    return (
        <div className ="bg-[#4f4e4e] flex w-[80vw] h-screen ml-auto mr-auto rounded-lg text-white min-w-fit">
           <Icons setPopupContact = {togglePopUpContact} />
           
            {PopupContact &&  <SideBar contactName = {itemHandler} />}
            
            <ChatBox  selectItem = {isItem} sendMessage = {isSender}  reciveMessage={isReciver} setRelode ={setRelode} />
            
        </div>
        );

};

