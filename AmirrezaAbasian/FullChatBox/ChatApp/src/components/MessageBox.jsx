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
            setMessages(personalChats.reverse())
            const rawDate = personalChats.reverse()
            const lastSent = new Date(rawDate[0]?.date)
            setSentTime(`${lastSent.getHours()}` + ':' + `${lastSent.getMinutes().toString().padStart(2, '0')}`)
            // console.log(sentTime);
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
                            <span className="text-[11px] opacity-50">{
                                new Date(row.date).getHours() + ':' + new Date(row.date).getMinutes().toString().padStart(2, '0') + '     ' + new Date(row.date).getDate() + '/' + new Date(row.date).getMonth().toString().padStart(2, '0')
                            }</span>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default MessageBox