import farawin from "farawin";
import { useState } from "react";
import {contact , msg} from "./contactsData"

// 1- کاربر بتونه درست لاگین و رجیستر کنه
// 2- کارکرد صحیح سناریو های گفته شده
export default function ChatPage() {

  return (
    <div
      className="h-full flex justify-center items-center"
      style={{
        background: `url(
          https://colorlib.com/etc/lf/Login_v4/images/bg-01.jpg
        )`,
      }}
    >
      {/* TODO Insert Form Here*/}
      <MainChatBox />

    </div>
  );
}

function MainChatBox() {
    const ArrayList = []
    const contactList = contact.contactList
    const chatList = msg.chatList

    contactList.forEach(contact => {
        ArrayList.push(contact)
    })

    chatList.forEach(chat => {
        ArrayList.push(chat)
    })

    return <div dir="rtl" 
                className="flex w-8/12 h-[90%] bg-[#20232a] text-white rounded-2xl pt-5 pb-1 mx-3 select-none">
        
        <ContactList />
        <MessageContent />

    </div>
}

function ContactList() {

    return <div className="hidden lg:flex w-1/3 h-full flex-col">
        <header className="mb-2 h-12">
          <form className="group relative w-10/12 mx-auto">
            <svg width="20" height="20" fill="currentColor" className="absolute right-2.5 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
            </svg>
            <input className="bg-[#30323e] text-[#ababb3] placeholder-slate-400 block focus:ring-2 focus:ring-slate-500 focus:outline-none appearance-none w-full text-sm leading-6 rounded-2xl py-2 pr-10 shadow-sm" 
                   type="text" 
                   aria-label="Filter projects" 
                   placeholder="جستجو ..." />
          </form>
        </header>

        <div className="overflow-y-auto flex-1 mb-12">
            <UserContact />
            <UserContact />
            <UserContact />
            <UserContact />

            {/* {
                ArrayList.forEach(contact => {
                    <UserContact name={contact.name} date={contact.date}/>  
                })
           } */}
        </div>
        
</div>
}

function UserContact({name, date}) {

    return <div className="hover:bg-[#30323e] mb-2 text-[#ababb3] placeholder-slate-400 focus:ring-2 focus:ring-slate-500 focus:outline-none appearance-none w-11/12 mx-auto text-sm leading-6 rounded-2xl py-2 px-3 shadow-sm cursor-pointer overflow-hidden">
        <div className="w-[42px] h-[40px] rounded-xl text-yellow-300 text-lg text-center pt-[7px] font-semibold ml-2 shadow-sm bg-orange-500 float-right">
            Oc
        </div>
        <div className="float-right w-2/3">
            <div className="flex justify-between">
                <span className="text-sm text-slate-200">
                    Ofice center
                </span>
                <span className="text-xs text-slate-500">
                    4m
                </span>
            </div>
            <p className="text-[10px] w-11/12 h-5 overflow-ellipsis font-medium text-slate-500">
                سلام خوبی چه خبر؟ پروژه را به کجا رسوندی؟ سلام خوبی چه خبر ؟ پروژه را به کجا رسوندی؟
            </p>
        </div>
    </div>
}

function MessageContent() {

    return <div className="flex-1 px-3">
        <div className="flex flex-col h-full">
            <div className="flex justify-between">
                <h4 className="top-5 pr-2 w-full text-stone-300">علیرضا سپهری</h4>
                <img className="lg:hidden h-5 cursor-pointer relative z-10"
                    src="menu-vertical32.png"
                    alt="menu_icon" />
            </div>

            <div className="mt-6 flex-1 overflow-y-scroll">
                <div className="flex mb-3">
                    <div className="w-[42px] h-[40px] rounded-xl text-yellow-300 text-lg text-center pt-[7px] font-semibold mx-1 shadow-sm bg-orange-500 float-right">
                        Oc
                    </div>
                    <div className="space-y-1 w-7/12">
                        <p className="bg-[#30323e] rounded-2xl rounded-tr-none py-2 px-3 text-xs leading-6 mb-1">
                            سلام خوبی؟ چه خبر
                            پروژه را کجا رسوندی؟
                            <span dir="ltr" className="block text-xs text-left text-slate-500">7:10 am</span>
                        </p>
                        <p className="bg-[#30323e] rounded-2xl py-2 px-3 text-xs leading-6 mb-1">
                            سلام خوبی؟ چه خبر
                            پروژه را کجا رسوندی؟
                            <span dir="ltr" className="block text-xs text-left text-slate-500">7:13 am</span>
                        </p>
                    </div>
                </div> 

                <div className="flex flex-row-reverse mb-3">
                    <div className="w-[42px] h-[40px] rounded-xl text-yellow-300 text-lg text-center pt-[7px] font-semibold mx-1 shadow-sm bg-orange-500 float-right">
                        Oc
                    </div>
                    <div className="space-y-1 w-7/12 mb-2">
                        <p className="bg-[#6b8afe] rounded-2xl rounded-tl-none py-2 px-3 text-xs leading-6 mb-1">
                            سلام خوبی؟ چه خبر
                            پروژه را کجا رسوندی؟
                            <span dir="ltr" className="block text-xs text-left text-slate-500">7:10 am</span>
                        </p>
                        <p className="bg-[#6b8afe] rounded-2xl py-2 px-3 text-xs leading-6 mb-1">
                            سلام خوبی؟ چه خبر
                            پروژه را کجا رسوندی؟
                            <span dir="ltr" className="block text-xs text-left text-slate-500">7:13 am</span>
                        </p>
                    </div>
                </div>

                 <div className="flex mb-3">
                    <div className="w-[42px] h-[40px] rounded-xl text-yellow-300 text-lg text-center pt-[7px] font-semibold mx-1 shadow-sm bg-orange-500 float-right">
                        Oc
                    </div>
                    <div className="space-y-1 w-7/12">
                        <p className="bg-[#30323e] rounded-2xl rounded-tr-none py-2 px-3 text-xs leading-6 mb-1">
                            سلام خوبی؟ چه خبر
                            پروژه را کجا رسوندی؟
                            <span dir="ltr" className="block text-xs text-left text-slate-500">7:10 am</span>
                        </p>
                        <p className="bg-[#30323e] rounded-2xl py-2 px-3 text-xs leading-6 mb-1">
                            سلام خوبی؟ چه خبر
                            پروژه را کجا رسوندی؟
                            <span dir="ltr" className="block text-xs text-left text-slate-500">7:13 am</span>
                        </p>
                    </div>
                </div> 

                <div className="flex flex-row-reverse mb-3">
                    <div className="w-[42px] h-[40px] rounded-xl text-yellow-300 text-lg text-center pt-[7px] font-semibold mx-1 shadow-sm bg-orange-500 float-right">
                        Oc
                    </div>
                    <div className="space-y-1 w-7/12 mb-2">
                        <p className="bg-[#6b8afe] rounded-2xl rounded-tl-none py-2 px-3 text-xs leading-6 mb-1">
                            سلام خوبی؟ چه خبر
                            پروژه را کجا رسوندی؟
                            <span dir="ltr" className="block text-xs text-left text-slate-500">7:10 am</span>
                        </p>
                        <p className="bg-[#6b8afe] rounded-2xl py-2 px-3 text-xs leading-6 mb-1">
                            سلام خوبی؟ چه خبر
                            پروژه را کجا رسوندی؟
                            <span dir="ltr" className="block text-xs text-left text-slate-500">7:13 am</span>
                        </p>
                    </div>
                </div> 

                 <div className="flex mb-3">
                    <div className="w-[42px] h-[40px] rounded-xl text-yellow-300 text-lg text-center pt-[7px] font-semibold mx-1 shadow-sm bg-orange-500 float-right">
                        Oc
                    </div>
                    <div className="space-y-1 w-7/12">
                        <p className="bg-[#30323e] rounded-2xl rounded-tr-none py-2 px-3 text-xs leading-6 mb-1">
                            سلام خوبی؟ چه خبر
                            پروژه را کجا رسوندی؟
                            <span dir="ltr" className="block text-xs text-left text-slate-500">7:10 am</span>
                        </p>
                        <p className="bg-[#30323e] rounded-2xl py-2 px-3 text-xs leading-6 mb-1">
                            سلام خوبی؟ چه خبر
                            پروژه را کجا رسوندی؟
                            <span dir="ltr" className="block text-xs text-left text-slate-500">7:13 am</span>
                        </p>
                    </div>
                </div> 

                <div className="flex flex-row-reverse mb-3">
                    <div className="w-[42px] h-[40px] rounded-xl text-yellow-300 text-lg text-center pt-[7px] font-semibold mx-1 shadow-sm bg-orange-500 float-right">
                        Oc
                    </div>
                    <div className="space-y-1 w-7/12 mb-2">
                        <p className="bg-[#6b8afe] rounded-2xl rounded-tl-none py-2 px-3 text-xs leading-6 mb-1">
                            سلام خوبی؟ چه خبر
                            پروژه را کجا رسوندی؟
                            <span dir="ltr" className="block text-xs text-left text-slate-500">7:10 am</span>
                        </p>
                        <p className="bg-[#6b8afe] rounded-2xl py-2 px-3 text-xs leading-6 mb-1">
                            سلام خوبی؟ چه خبر
                            پروژه را کجا رسوندی؟
                            <span dir="ltr" className="block text-xs text-left text-slate-500">7:13 am</span>
                        </p>
                    </div>
                </div>   
            </div>

            <div className="text-xs text-slate-400 mt-1">
                <form className="group relative w-11/12 mx-auto mb-1">
                    <img className="absolute w-4 right-4 top-[14px] text-slate-400 pointer-events-none group-focus-within:text-blue-500" 
                         src="attach.png" alt=""/>
                    <input className="bg-transparent hover:bg-[#30323e] focus:bg-[#30323e] text-[#ababb3] placeholder-slate-400 block focus:outline-none appearance-none w-full text-sm leading-6 rounded-2xl py-2 pr-10 shadow-sm" 
                           type="text" 
                           aria-label="Filter projects" 
                           placeholder="پیغام شما ..." />
                </form>
            </div>
        </div>
    </div>
}