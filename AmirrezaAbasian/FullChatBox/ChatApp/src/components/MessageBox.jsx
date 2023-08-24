import farawin from "farawin"
import { useState, useEffect } from "react"



const MessageBox = ({ className, messageReceiver, setMessageReceiver }) => {
    const [messages, setMessages] = useState([])
    const [sentTime, setSentTime] = useState('')




    useEffect(() => {
        const getChats = async () => {
            const rawData = await farawin.getChats(res => res.chatList)
            const allChats = rawData.chatList
            // console.log(allChats);
            const personalChats = await allChats.filter(row => row.receiver === messageReceiver)
            setMessages(personalChats)
            setSentTime(personalChats.date)
            // console.log(personalChats);
            // Was making the date for messages here !
        }
        getChats()
    }, [])





    return (
        messages.map((row) => {
            return (
                <div key={row.date.toString()} className={`${className} text-white overflow-auto`}>
                    <div className="flex flex-row ">
                        <div
                            className="mr-4 bg-[#2E333D] my-2 max-w-[80%] justify-items-stretch rounded-xl rounded-br-none rounded-tr-3xl rounded-bl-3xl p-2">
                            <span className="opacity-50">من</span>
                            <p>{row.text}</p>
                            <span className="text-[11px] opacity-50">7:51pm</span>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default MessageBox