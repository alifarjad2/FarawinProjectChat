import MenuBarIcon from '../assets/MenuBarIcon.jsx'
import SendIcon from '../assets/SendIcon.jsx'
import MessageBox from './MessageBox.jsx'
import AttachFileIcon from '../assets/AttachFileIcon.jsx'
import farawin from 'farawin'

const ChatBox = ({ name }) => {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="h-[10%] w-full items-center flex justify-between px-4 pt-2 ">
        <span className='text-white font-black text-xl'>{name}</span>
        {/* <div className='grow' /> */}
        <MenuBarIcon className={'text-4xl sm:invisible cursor-pointer hover:opacity-80'} />
      </div>
      <div className="h-[80%] overflow-scroll overflow-x-hidden">
        <MessageBox />
      </div>
      <div className="h-[10%] w-full px-4 ">
        <div className="transition py-4 focus-within:ring-2 h-14 flex justify-start items-center bg-[#202329] px-1 rounded-lg">
          <AttachFileIcon className={'basis-1/12 cursor-pointer flex justify-center hover:opacity-60 transition'} />
          <input type="text" placeholder=" Your message"
            className="transition  pl-2 outline-none bg-[#202329] text-slate-200 placeholder:italic rounded-md basis-10/12" />
          <button type='submit'>
            <SendIcon className={'basis-1/12 cursor-pointer flex justify-center hover:opacity-60 transition'} />
          </button>

        </div>
      </div>
    </div>
  )
}

export default ChatBox