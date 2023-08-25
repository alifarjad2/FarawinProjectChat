import { useState, useEffect } from 'react'
import MenuBarIcon from '../assets/MenuBarIcon'
import SendIcon from '../assets/SendIcon'
import MessageBox from './MessageBox'
import AttachFileIcon from '../assets/AttachFileIcon'
import farawin from 'farawin'


const ChatSection = ({ chatName, setChatName, isContactList, setIsContactList, messageReceiver, setMessageReceiver }) => {
    const [userMessage, setUserMessage] = useState('')



    const handleSubmit = (e) => {
        e.preventDefault()
        farawin.testAddChat(messageReceiver, userMessage, res => console.log(res))
        setUserMessage('')
    }

    return (
        <div className="flex flex-col items-center h-full">
            <div className="h-[10%] w-full items-center flex justify-between px-4 pt-2 ">
                <button onClick={() => setIsContactList(true)}>
                    <MenuBarIcon className={'text-4xl md:invisible cursor-pointer hover:opacity-80'} />
                </button>
                <span className='text-white md:ml-10 font-black text-xl'>{chatName || 'مخاطب'}</span>
            </div>
            <div className="h-[80%] w-full overflow-scroll overflow-x-hidden">
                <MessageBox messageReceiver={messageReceiver} setMessageReceiver={setMessageReceiver} />
            </div>
            <div className="h-[10%] w-full px-4 ">
                <form onSubmit={handleSubmit} className="transition py-4 focus-within:ring-2 h-14 gap-x-2 flex flex-row-reverse justify-start items-center bg-[#202329] px-1 rounded-lg">
                    <AttachFileIcon className={'text-xl md:text-3xl basis-1/12 cursor-pointer flex justify-center hover:opacity-60 transition'} />
                    <input value={userMessage} onChange={(e) => setUserMessage(e.target.value)} type="text" placeholder="        پیام شما . . ."
                        className="transition  pl-2 outline-none bg-[#202329] text-slate-200 placeholder:italic rounded-md basis-10/12" />
                    <button type='submit' className={`${userMessage < 1 && 'invisible'}`}>
                        <SendIcon className={'basis-1/12 md:text-3xl cursor-pointer flex justify-center text-xl hover:opacity-60 transition'} />
                    </button>
                </form>
            </div>
        </div>
    )
}
export default ChatSection