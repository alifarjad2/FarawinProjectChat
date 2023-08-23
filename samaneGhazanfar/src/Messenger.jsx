
import { ChatBox } from "./Components/ChatBox";
import { SideBar } from "./Components/SideBar";
// import { AddContact } from "./Components/addContact";

export const Messenger = () => {



    return (
        <div className ="bg-[#4f4e4e] flex w-[80vw] h-screen ml-auto mr-auto rounded-lg text-white min-w-fit">

            {/* { show ? <AddContact/> : ""} */}
            <SideBar/>
            
            <ChatBox/>
            
        </div>
        );

};

