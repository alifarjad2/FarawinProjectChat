import { useEffect, useState } from 'react'
import farawin from 'farawin'
import MenuBarIcon from '../assets/MenuBarIcon.jsx'
import SendIcon from '../assets/SendIcon.jsx'
import MessageBox from './MessageBox.jsx'
import AttachFileIcon from '../assets/AttachFileIcon.jsx'
import SearchIcon from '../assets/SearchIcon.jsx'
import ContactBox from './ContactBox.jsx'
import AddContactIcon from '../assets/AddContactIcon.jsx'

const ChatBox = ({ name, phoneNumber }) => {
  // #region State hooks
  const [isContactList, setIsContactList] = useState(false)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)
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


  if (isDesktop) {
    return (
      <div className='flex h-full'>
        {/* Contact list ↓↓ */}
        <div className='bg-[#202329] rounded-r-xl md:w-1/2 xl:w-2/5'>
          <div className="flex flex-col h-full">
            <div className='h-[10%] mb-2 w-full'>
              <div id="search-box" className="">
                <div className="bg-[#2E333D] transition duration-500 focus-within:bg-[#353b46] mx-5 my-4 rounded-xl h-14 flex items-center focus-within:ring-2 shadow-inner focus-within:ring-sky-900">
                  <button className='mr-6'>
                    <SearchIcon className={'text-2xl hover:opacity-60'} />
                  </button>
                  <input type="text" placeholder="Search" className="text-white font-medium text-lg font-mono w-full h-[30px] placeholder:italic outline-none placeholder:opacity-70 rounded-md bg-transparent mx-2" />
                </div>
              </div>
            </div>
            <div className='h-[80%] w-full overflow-y-auto'>
              <ContactBox className={'mt-6 text-white'} />
              <ContactBox className={'mt-6 text-white'} />
              <ContactBox className={'mt-6 text-white'} />
              <ContactBox className={'mt-6 text-white'} />
              <ContactBox className={'mt-6 text-white'} />
              <ContactBox className={'mt-6 text-white'} />
              <ContactBox className={'mt-6 text-white'} />
            </div>
            <div title='افزودن مخاطب' className='h-[10%] w-full flex justify-center pt-6'>
              <AddContactIcon className={'text-4xl hover:opacity-60 transition cursor-pointer'} />
            </div>
          </div>
        </div>
        {/* ChatBox ↓↓↓ */}
        <div className='bg-[#202329] rounded-l-xl md:w-1/2 xl:w-3/5'>
          <div className="flex flex-col items-center h-full">
            <div className="h-[10%] w-full items-center flex justify-between px-4 pt-2 ">
              <button onClick={() => setIsContactList(true)}>
                <MenuBarIcon className={'text-4xl md:invisible cursor-pointer hover:opacity-80'} />
              </button>
              <span className='text-white font-black text-xl'>{name}</span>
            </div>
            <div className="h-[80%] overflow-scroll overflow-x-hidden">
              <MessageBox />
            </div>
            <div className="h-[10%] w-full px-4 ">
              <div className="transition py-4 focus-within:ring-2 h-14 gap-x-2 flex justify-start items-center bg-[#202329] px-1 rounded-lg">
                <button type='submit'>
                  <SendIcon className={'basis-1/12 cursor-pointer flex justify-center hover:opacity-60 transition'} />
                </button>
                <input type="text" placeholder="        پیام شما . . ."
                  className="transition  pl-2 outline-none bg-[#202329] text-slate-200 placeholder:italic rounded-md basis-10/12" />
                <AttachFileIcon className={'basis-1/12 cursor-pointer flex justify-center hover:opacity-60 transition'} />
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }


  if (!isContactList && !isDesktop && window.innerWidth < 768) {
    return (
      <div className="flex flex-col items-center h-full">
        <div className="h-[10%] w-full items-center flex justify-between px-4 pt-2 ">
          <button onClick={() => setIsContactList(true)}>
            <MenuBarIcon className={'text-4xl md:invisible cursor-pointer hover:opacity-80'} />
          </button>
          <span className='text-white font-black text-xl'>{name}</span>
        </div>
        <div className="h-[80%] overflow-scroll overflow-x-hidden">
          <MessageBox />
        </div>
        <div className="h-[10%] w-full px-4 ">
          <div className="transition py-4 focus-within:ring-2 h-14 gap-x-2 flex justify-start items-center bg-[#202329] px-1 rounded-lg">
            <button type='submit'>
              <SendIcon className={'basis-1/12 cursor-pointer flex justify-center hover:opacity-60 transition'} />
            </button>
            <input type="text" placeholder="        پیام شما . . ."
              className="transition  pl-2 outline-none bg-[#202329] text-slate-200 placeholder:italic rounded-md basis-10/12" />
            <AttachFileIcon className={'basis-1/12 cursor-pointer flex justify-center hover:opacity-60 transition'} />
          </div>
        </div>
      </div>
    )
  }

  if (isContactList && !isDesktop && window.innerWidth < 768) {
    return (
      <div className="flex flex-col h-full">
        <div className='h-[10%] mb-2 w-full'>
          <div id="search-box" className="">
            <div className="bg-[#2E333D] transition duration-500 focus-within:bg-[#353b46] mx-5 my-4 rounded-xl h-14 flex items-center focus-within:ring-2 shadow-inner focus-within:ring-sky-900">
              <button className='mr-6'>
                <SearchIcon className={'text-2xl hover:opacity-60'} />
              </button>
              <input type="text" placeholder="Search" className="text-white font-medium text-lg font-mono w-full h-[30px] placeholder:italic outline-none placeholder:opacity-70 rounded-md bg-transparent mx-2" />
            </div>
          </div>
        </div>
        <div className='h-[80%] w-full overflow-y-auto'>
          <ContactBox className={'mt-6 text-white'} />
          <ContactBox className={'mt-6 text-white'} />
          <ContactBox className={'mt-6 text-white'} />
          <ContactBox className={'mt-6 text-white'} />
          <ContactBox className={'mt-6 text-white'} />
          <ContactBox className={'mt-6 text-white'} />
          <ContactBox className={'mt-6 text-white'} />
        </div>
        <div title='افزودن مخاطب' className='h-[10%] w-full flex justify-center pt-6'>
          <AddContactIcon className={'text-4xl hover:opacity-60 transition cursor-pointer'} />
        </div>
      </div>
    )
  }
}

export default ChatBox