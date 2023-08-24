import { useState, useEffect } from "react"
import ChatBox from "./components/ChatBox"
const Chat = () => {
    return (
        <div className="bg-[#34393C] min-h-screen pt-6">
            <div className="bg-[#202329] h-[95vh] rounded-xl md:mx-auto mx-2 md:w-[69%]">
                <ChatBox />
            </div>
        </div>
    )
}

export default Chat