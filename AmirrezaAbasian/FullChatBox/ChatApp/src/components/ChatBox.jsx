import { useEffect, useState } from 'react'
import farawin from 'farawin'
import ChatSection from './ChatSection.jsx'
import ContactsList from './ContactsList.jsx'

const ChatBox = () => {
  // #region State hooks
  const [isContactList, setIsContactList] = useState(false)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)
  const [messageReceiver, setMessageReceiver] = useState('')
  const [chatName, setChatName] = useState('')
  // #endregion

  // #region Resizing & responsive hook
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    window.addEventListener('resize', handleResize)

    // Cleaner function shines ! 
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  // #endregion

  // console.log(messageReceiver);

  if (isDesktop) {
    return (
      <div className='flex h-full'>
        {/* Contact list ↓↓ */}
        <div className='bg-[#202329] rounded-r-xl md:w-1/2 xl:w-2/5'>
          <ContactsList chatName={chatName} setChatName={setChatName} messageReceiver={messageReceiver} setMessageReceiver={setMessageReceiver} isContactList={isContactList} setIsContactList={setIsContactList} />
        </div>
        {/* ChatBox ↓↓↓ */}
        <div className='bg-[#202329] rounded-l-xl md:w-1/2 xl:w-3/5'>
          <ChatSection chatName={chatName} setChatName={setChatName} messageReceiver={messageReceiver} setMessageReceiver={setMessageReceiver} isContactList={isContactList} setIsContactList={setIsContactList} />
        </div>
      </div>
    )
  }


  if (!isContactList && !isDesktop && window.innerWidth < 768) {
    return (
      <ChatSection chatName={chatName} setChatName={setChatName} messageReceiver={messageReceiver} setMessageReceiver={setMessageReceiver} isContactList={isContactList} setIsContactList={setIsContactList} />
    )
  }

  if (isContactList && !isDesktop && window.innerWidth < 768) {
    return (
      <ContactsList chatName={chatName} setChatName={setChatName} messageReceiver={messageReceiver} setMessageReceiver={setMessageReceiver} isContactList={isContactList} setIsContactList={setIsContactList} />
    )
  }
}

export default ChatBox