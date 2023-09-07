import farawin from "farawin";
import { useState,useEffect, useContext } from "react";
import moment from "moment/moment";
import {PhoneContext , UserContext} from "../pages/Home";

const Message = () => {

   const [sendchat , setSendchat] = useState([]);
   const [reschat , setReschat] = useState([]);
   const [totalmessage , setTotalmessage] = useState([]);

   const [userphone , setUserphone] = useContext(PhoneContext);
   const [user , setUser] = useContext(UserContext);
   

   useEffect(() => {
   const fetchData = async () => {
     const response = await farawin.getChats();
     const filteredContacts = response.chatList.filter(
       (chat) => chat.sender === localStorage.getItem('phone') && chat.receiver === userphone)
       setSendchat(filteredContacts);
       
   };
   fetchData();
 }, [sendchat]);



 useEffect(() => {
   const fetchData2 = async () => {
     const response = await farawin.getChats();
     const filteredContacts = response.chatList.filter(
      (chat) => chat.receiver === localStorage.getItem('phone') && chat.sender === userphone)
       setReschat(filteredContacts);
      
   };

   fetchData2();
 }, [reschat]);

//  useEffect(() => {
//    const fetchData = async () => {
//      const response = await farawin.getChats();
//      const filteredContacts = response.chatList
//      setTotalmessage(filteredContacts)
//    };

//    fetchData();
//  }, []);

//  console.table(totalmessage)

    return(
            <>
        <div id="myDiv" className=" my-1 pl-2 overflow-auto" style= {{height: "500px"}} > 



       {sendchat.map((e) => (
                        <div key={e.id} className="flex items-end mb-4">
                           <div className="text-center w-[50px] leading-[50px] bg-[#4eab6c] rounded-2xl">ش</div>
                           <div className="relative mr-3 text-[#eceff3] bg-[#6b8afe] p-3 rounded-2xl" id="about">
                              <img src="../../public/img/pm-right.png" className="absolute w-6 bottom-[-4px] right-[-11px]" alt="icon"/>
                              <span className="text-sm text-[#eceff3] text-end block">شما</span>
                              <p className="text-sm sm:text-base "> {e.text}</p>
                               <strong className="block text-end mt-2 text-xs text-[#eceff3]">{moment(e.date).format('dddd HH:mm')}</strong> 
                           </div>
                        </div>

      ))}


                       
      {reschat.map((e) => (
                        <div key={e.id} className="flex items-end ml-2 flex-row-reverse mb-4">
                           <div className="text-center w-[50px] leading-[50px] bg-[#a9d2fe] rounded-2xl">   
                            {user.charAt(0)}{" "}
                            {(user.charAt(0))!== user.charAt(user.length-1) ? user.charAt(user.length-1): null}</div>
                           <div className="relative ml-3 text-[#eceff3] bg-[#2E333D] p-3 rounded-2xl">
                              <img src="../../public/img/pm.png" className="absolute w-6 bottom-[-9px] left-[-11px]" alt="icon"/>
                              <span className="text-sm text-start block"> {user}</span>
                              <p className="text-sm sm:text-base"> {e.text} </p>
                              <strong className="block text-start mt-2 text-xs text-[#eceff3]">{moment(e.date).format('dddd HH:mm')}</strong>
                           </div>
                        </div>
      ))}
                        

                </div>
            </>
    )
}

export default Message;