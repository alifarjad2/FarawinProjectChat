import farawin from "farawin";
import Input from "postcss/lib/input";
import { useState } from "react";
import "./App.css";



export default function ChatPage() {
    const handleShowMenu = () => {
        const contactMenu = document.getElementById("Contact-menu");
        const chatContainer = document.getElementById("chat-container");
        const closeContactMenu = document.getElementById("close-contact-menu");
    
        contactMenu.style.display = 'block';
        contactMenu.style.zIndex = '1';
        contactMenu.style.position = 'absolute';
        contactMenu.style.top = '0';
        contactMenu.style.right = '0';
        contactMenu.style.bottom = '0';
    
        chatContainer.style.position = 'absolute';
        chatContainer.style.top = '0';
        chatContainer.style.right = '0';
        chatContainer.style.left = '0';
        chatContainer.style.bottom = '0';
    
        closeContactMenu.style.display = 'block';
        closeContactMenu.style.position = 'absolute';
        contactMenu.style.top = '0';
        contactMenu.style.right = '0';
    };

    const handleCloseMenu = () => {
      const contactMenu = document.getElementById("Contact-menu");
      const closeContactMenu = document.getElementById("close-contact-menu");

      contactMenu.style.display = 'none';
      closeContactMenu.style.display = 'none';
    };

  return (
    <div dir="rtl" lang="fa">
      <div className="bg-[#34393C]">
        <section
          className="h-screen flex align-middle justify-center w-screen"
          id="Container"
        >
          <div
            id="Contact-menu"
            className="h-screen bg-[#202329] rounded-r-2xl lg:block min-[425px]:hidden min-[375px]:hidden min-[320px]:hidden p-5"
          >
            <button id="close-contact-menu" onClick={handleCloseMenu} className="hidden hover:bg-blue-400 rounded-lg absolute top-3 left-3"><svg className="fill-slate-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg></button>
            <div
              id="search-bar"
              className="flex justify-center align-middle pt-11 mb-5 pl-2"
            >
              <input
                type="search"
                placeholder="جستجو"
                className="p-3 bg-[#2E333D] border-none rounded-r-lg w-9/12 outline-none text-white"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="w-10 bg-[#2E333D] fill-slate-500 rounded-l-lg cursor-pointer"
              >
                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
              </svg>
            </div>
            <div
              id="Contact-list"
              className="overflow-scroll h-3/4 overflow-x-hidden cursor-pointer p-2 w-96"
            >
              <div
                id="contact-info-in-list"
                className="flex align-middle hover:bg-[#34393C] rounded-lg p-3"
              >
                <div
                  className="bg-orange-500 w-16 h-14 rounded-lg text-center pt-4"
                  id="avatar"
                >
                  ح ا
                </div>
                <div id="contact-info-in-list-text" className="ml-2 w-full pr-2">
                  <div className="flex justify-between items-center w-full ">
                    <h3
                      className=" font-bold text-lg text-slate-300"
                      id="contact-name"
                    >
                      حامد
                    </h3>
                    <h4 className="text-slate-400 text-sm mx-3">9:34 a.m</h4>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-slate-300 opacity-50 text-xs">
                      Lorem ipsum dolor sit amet....
                    </p>
                    <div className="bg-[#1ca2ef] rounded-3xl w-5 text-center">
                      1
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="contact-info-in-list"
                className="flex align-middle hover:bg-[#34393C] rounded-lg p-3"
              >
                <div
                  className="bg-red-500 w-16 h-14 rounded-lg text-center pt-4"
                  id="avatar"
                >
                  م ح
                </div>
                <div id="contact-info-in-list-text" className="ml-2 w-full pr-2">
                  <div className="flex justify-between items-center">
                    <h3
                      className="m-0 font-bold text-lg text-slate-300"
                      id="contact-name"
                    >
                      محمد
                    </h3>
                    <h4 className="text-slate-400 text-sm mx-3">9:34 a.m</h4>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-slate-300 opacity-50 text-xs">
                      Lorem ipsum dolor sit amet....
                    </p>
                    <div className="bg-[#1ca2ef] rounded-3xl w-5 text-center">
                      1
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="contact-info-in-list"
                className="flex align-middle hover:bg-[#34393C] rounded-lg p-3"
              >
                <div
                  className="bg-amber-500 w-16 h-14 rounded-lg text-center pt-4"
                  id="avatar"
                >
                  ع ل
                </div>
                <div id="contact-info-in-list-text" className="ml-2 w-full pr-2">
                  <div className="flex justify-between items-center">
                    <h3
                      className="m-0 font-bold text-lg text-slate-300"
                      id="contact-name"
                    >
                      علی
                    </h3>
                    <h4 className="text-slate-400 text-sm mx-3">9:34 a.m</h4>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-slate-300 opacity-50 text-xs">
                      Lorem ipsum dolor sit amet....
                    </p>
                    <div className="bg-[#1ca2ef] rounded-3xl w-5 text-center">
                      1
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="contact-info-in-list"
                className="flex align-middle hover:bg-[#34393C] rounded-lg p-3"
              >
                <div
                  className="bg-lime-500 w-16 h-14 rounded-lg text-center pt-4"
                  id="avatar"
                >
                  ص د
                </div>
                <div id="contact-info-in-list-text" className="ml-2 w-full pr-2">
                  <div className="flex justify-between items-center">
                    <h3
                      className="m-0 font-bold text-lg text-slate-300"
                      id="contact-name"
                    >
                      صدرا
                    </h3>
                    <h4 className="text-slate-400 text-sm mx-3">9:34 a.m</h4>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-slate-300 opacity-50 text-xs">
                      Lorem ipsum dolor sit amet....
                    </p>
                    <div className="bg-[#1ca2ef] rounded-3xl w-5 text-center">
                      1
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="contact-info-in-list"
                className="flex align-middle hover:bg-[#34393C] rounded-lg p-3"
              >
                <div
                  className="bg-emerald-500 w-16 h-14 rounded-lg text-center pt-4"
                  id="avatar"
                >
                  ر ض
                </div>
                <div id="contact-info-in-list-text" className="ml-2 w-full pr-2">
                  <div className="flex justify-between items-center">
                    <h3
                      className="m-0 font-bold text-lg text-slate-300"
                      id="contact-name"
                    >
                      رضا
                    </h3>
                    <h4 className="text-slate-400 text-sm mx-3">9:34 a.m</h4>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-slate-300 opacity-50 text-xs">
                      Lorem ipsum dolor sit amet....
                    </p>
                    <div className="bg-[#1ca2ef] rounded-3xl w-5 text-center">
                      1
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="contact-info-in-list"
                className="flex align-middle hover:bg-[#34393C] rounded-lg p-3"
              >
                <div
                  className="bg-cyan-500 w-16 h-14 rounded-lg text-center pt-5"
                  id="avatar"
                >
                  ح س
                </div>
                <div id="contact-info-in-list-text" className="ml-2 w-full pr-2">
                  <div className="flex justify-between items-center">
                    <h3
                      className="m-0 font-bold text-lg text-slate-300"
                      id="contact-name"
                    >
                      حسین
                    </h3>
                    <h4 className="text-slate-400 text-sm mx-3">9:34 a.m</h4>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-slate-300 opacity-50 text-xs">
                      Lorem ipsum dolor sit amet....
                    </p>
                    <div className="bg-[#1ca2ef] rounded-3xl w-5 text-center">
                      1
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="contact-info-in-list"
                className="flex align-middle hover:bg-[#34393C] rounded-lg p-3"
              >
                <div
                  className="bg-blue-500 w-16 h-14 rounded-lg text-center pt-4"
                  id="avatar"
                >
                  ج ا
                </div>
                <div id="contact-info-in-list-text" className="ml-2 w-full pr-2">
                  <div className="flex justify-between items-center">
                    <h3
                      className="m-0 font-bold text-lg text-slate-300"
                      id="contact-name"
                    >
                      جواد
                    </h3>
                    <h4 className="text-slate-400 text-sm mx-3">9:34 a.m</h4>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-slate-300 opacity-50 text-xs">
                      Lorem ipsum dolor sit amet....
                    </p>
                    <div className="bg-[#1ca2ef] rounded-3xl w-5 text-center">
                      1
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="contact-info-in-list"
                className="flex align-middle hover:bg-[#34393C] rounded-lg p-3"
              >
                <div
                  className="bg-violet-500 w-16 h-14 rounded-lg text-center pt-4"
                  id="avatar"
                >
                  م س
                </div>
                <div id="contact-info-in-list-text" className="ml-2 w-full pr-2">
                  <div className="flex justify-between items-center">
                    <h3
                      className="m-0 font-bold text-lg text-slate-300"
                      id="contact-name"
                    >
                      محسن
                    </h3>
                    <h4 className="text-slate-400 text-sm mx-3">9:34 a.m</h4>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-slate-300 opacity-50 text-xs">
                      Lorem ipsum dolor sit amet....
                    </p>
                    <div className="bg-[#1ca2ef] rounded-3xl w-5 text-center">
                      1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="chat-container"
            className="bg-[#202329] h-screen lg:w-5/12 flex flex-col items-start lg:rounded-l-2xl md:w-screen min-[425px]:w-screen min-[375px]:w-screen min-[320px]:w-screen max-md:rounded-lg max-[425px]:rounded-lg max-[375px]:rounded-lg max-[320px]:rounded-lg"
          >
            <div
              id="chat-header"
              className="w-11/12 flex justify-between align-middle p-4 mt-6 mx-auto rounded-lg h-fit"
            >
              <div className="flex items-center">
                <button onClick={handleShowMenu} className="fill-slate-300 p-2 hover:bg-blue-400 rounded-2xl lg:hidden">
                  <svg
                    className="fill-slate-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" />
                    <path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" />
                    <path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" />
                  </svg>
                </button>
                <h1
                  id="chat-header-title"
                  className="font-bold text-lg text-slate-300 pr-2"
                >
                  حامد
                </h1>
              </div>
            </div>
            <div
              id="chat-body"
              className="flex justify-center flex-col mx-auto p-4 h-3/4 overflow-scroll overflow-x-hidden"
            >
              <div id="chat-avatar" className="flex mt-6 items-end">
                <div
                  id="avatar-2"
                  className="bg-pink-500 w-16 h-14 rounded-lg mr-2 text-center pt-4 cursor-pointer"
                >
                  م ر
                </div>
                <div
                  id="contact-massage"
                  className="bg-[#34393C] text-justify w-2/4 p-5 rounded-l-lg rounded-tr-lg"
                >
                  <p className="text-slate-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eveniet quo illo sequi aliquam dolor assumenda, optio
                    doloribus saepe delectus minima.
                  </p>
                  <div className="flex align-middle items-center justify-end">
                    <p className="text-sm opacity-50 text-slate-300 mx-2">
                      7:28
                    </p>
                    <svg
                      className="fill-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      enableBackground="new -0.709 -32.081 141.732 141.732"
                      height="20px"
                      id="Livello_1"
                      version="1.1"
                      viewBox="-0.709 -32.081 141.732 141.732"
                      width="20px"
                      xml:space="preserve"
                    >
                      <g id="Livello_80">
                        <path d="M89.668,38.786c0-10.773-8.731-19.512-19.51-19.512S50.646,28.01,50.646,38.786c0,10.774,8.732,19.511,19.512,19.511   C80.934,58.297,89.668,49.561,89.668,38.786 M128.352,38.727c-13.315,17.599-34.426,28.972-58.193,28.972   c-23.77,0-44.879-11.373-58.194-28.972C25.279,21.129,46.389,9.756,70.158,9.756C93.927,9.756,115.036,21.129,128.352,38.727    M140.314,38.76C125.666,15.478,99.725,0,70.158,0S14.648,15.478,0,38.76c14.648,23.312,40.591,38.81,70.158,38.81   S125.666,62.072,140.314,38.76" />
                      </g>
                      <g id="Livello_1_1_" />
                    </svg>
                  </div>
                </div>
              </div>
              <div id="chat-avatar" className="flex m-6 items-end justify-end">
                <div
                  id="contact-massage"
                  className="bg-[#1ca2ef98] text-slate-300 text-justify w-2/4 p-5 rounded-r-lg rounded-tl-lg"
                >
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eveniet quo illo sequi aliquam dolor assumenda, optio
                    doloribus saepe delectus minima.
                  </p>
                  <div className="flex align-middle items-center justify-start">
                    <svg
                      dir="rtl"
                      className="fill-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      enableBackground="new -0.709 -32.081 141.732 141.732"
                      height="20px"
                      id="Livello_1"
                      version="1.1"
                      viewBox="-0.709 -32.081 141.732 141.732"
                      width="20px"
                      xml:space="preserve"
                    >
                      <g id="Livello_80">
                        <path d="M89.668,38.786c0-10.773-8.731-19.512-19.51-19.512S50.646,28.01,50.646,38.786c0,10.774,8.732,19.511,19.512,19.511   C80.934,58.297,89.668,49.561,89.668,38.786 M128.352,38.727c-13.315,17.599-34.426,28.972-58.193,28.972   c-23.77,0-44.879-11.373-58.194-28.972C25.279,21.129,46.389,9.756,70.158,9.756C93.927,9.756,115.036,21.129,128.352,38.727    M140.314,38.76C125.666,15.478,99.725,0,70.158,0S14.648,15.478,0,38.76c14.648,23.312,40.591,38.81,70.158,38.81   S125.666,62.072,140.314,38.76" />
                      </g>
                      <g id="Livello_1_1_" />
                    </svg>
                    <p
                      dir="rtl"
                      className="text-sm opacity-50 mx-2 text-slate-300"
                    >
                      7:28
                    </p>
                  </div>
                </div>
                <div
                  id="avatar-2"
                  className="bg-orange-500 w-16 h-14 rounded-lg ml-2 text-center pt-4 cursor-pointer"
                >
                  ح ا
                </div>
              </div>
            </div>
            <div id="chat-sender" className="w-full p-3 flex justify-center">
              <input
                type="text"
                placeholder="پیغام خود را بنویسید ... "
                className="w-11/12 p-2 text-white outline-none rounded-lg border-none bg-[#2E333D]"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
