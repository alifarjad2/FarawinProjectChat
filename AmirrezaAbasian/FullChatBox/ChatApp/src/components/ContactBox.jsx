// import farawin from "farawin"
import { useState, useEffect } from "react"

const ContactBox = ({ lastMessage, setLastMessage, chatName, setChatName, className, messageReceiver, setMessageReceiver, name, phoneNumber, isContactList, setIsContactList }) => {


    const handleClick = () => {
        // console.log(phoneNumber);
        setMessageReceiver(phoneNumber)
        setIsContactList(false)
        setChatName(name)
    }
    const _lastMessage = lastMessage?.text

    return (
        <div onClick={handleClick} className={className}>
            <div className="bg-[#202329] mb-3 rounded-xl mx-3 h-20 flex flex-row justify-between transition duration-300 ease-in cursor-pointer group hover:bg-[#2E333D]">
                <div className="basis-3/12 bg-transparent rounded-lg text-center flex">
                    <div className="bg-green-200 group-hover:opacity-50 flex m-2 items-center justify-center rounded-[19px] w-7/12 h-7/12 min-w-[64px] min-h-[40px]">
                        <span className="text-stone-900 text-2xl font-extrabold font-serif text-center">{name.charAt(0)}</span>
                    </div>
                </div>
                <div className="basis-8/12 overflow-x-hidden bg-transparent rounded-lg pl-1 flex flex-col justify-around">
                    <div className="pt-2 truncate">
                        {name}
                    </div>
                    <div className="pb-2 truncate">
                        {lastMessage?.receiver === messageReceiver ? _lastMessage : 'هنوز پیامی ندادید'}
                    </div>
                </div>
                <div className="mr-5 group-hover:text-[#509ef1] group-hover:transition basis-1/12 bg-transparent rounded-lg text-center text-clip font-serif text-sm">
                    <span>{new Date(lastMessage?.date).getHours() + ':' + new Date(lastMessage?.date).getMinutes().toString().padStart(2, '0') + '     ' + new Date(lastMessage?.date).getDate() + '/' + new Date(lastMessage?.date).getMonth().toString().padStart(2, '0')}</span>
                </div>
            </div>
        </div>
    )
}

export default ContactBox