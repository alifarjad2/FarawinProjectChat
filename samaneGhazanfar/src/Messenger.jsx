import { ChatBox } from "./Components.jsx/ChatBox";
import { SideBar } from "./Components.jsx/SideBar";

export const Messenger = () => {

    return (
        <div className ="bg-[#4f4e4e] flex w-[80vw] h-screen ml-auto mr-auto rounded-lg text-white min-w-fit">

            <SideBar/>

            <ChatBox/>
            
        </div>
        );

};

