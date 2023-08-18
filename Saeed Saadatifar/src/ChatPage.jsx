import { useState } from "react";
import searchIcon from "./assets/Screenshot 2023-07-17 121255.png";
import moreIcon from "./assets/Screenshot 2023-07-17 141104.png";
import pinIcon from "./assets/Screenshot 2023-07-17 191127.png";
import Contact from "./Contact";
import Profile from "./Profile";
import farawin from "farawin";

export default function ChatPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center h-screen max-w-[962px] w-screen">
        <div className="w-screen h-screen p-[35px] bg-[#21242B] text-[#FAFBFD] flex">
          <div id="sideBar" className="flex flex-col">
            <div className="flex rounded-[15px] bg-[#30323E] w-fit p-[15px] box-border">
              <div className="hover:cursor-pointer w-[25px]">
                <img src={searchIcon} alt="searchIcon" />
              </div>
              <div className="mr-[10px]">
                <input
                  type="text"
                  placeholder="جستجو"
                  className="bg-[#30323E] text-[18px] grow h-full border-none focus:outline-none w-[190px]"
                />
              </div>
            </div>
            <div className="grow flex flex-col pt-[15px]">
              <Contact />
              <Contact />
            </div>
          </div>
          <div className="flex flex-col grow mr-[35px]  h-full">
            <div className="h-[70px] w-full rounded-[20px] flex">
              <div
                id="headerContact"
                className="flex grow p-[5px] hover:cursor-default rounded-[14px]"
              >
                <Profile />
                <div
                  id="nameHeaderContact"
                  className="align-middle text-[18px] mr-[8px] pt-[11px]"
                >
                  سعید سعادتی فر
                </div>
              </div>
              <div
                id="sideBarIcon"
                className="mt-[11px] px-[10px] py-[5px] w-[27px] text-2xl h-fit rounded-[15px] hover:cursor-pointer hover:bg-[#2F313D]"
              >
                <img src={moreIcon} alt="" />
              </div>
            </div>
            <div id="messageBox" className="grow w-full pr-[10px] h-full">
              <div
                id="Messages1Contact"
                className="flex flex-col justify-end w-full h-full"
              >
                <div className="self-center bg-[#2F313D] px-[40px] rounded-[15px]">
                  امروز
                </div>
                <div className="flex w-3/4 m-[5px] self-end justify-end">
                  <div className="bg-[#30323E] self-end p-2.5 rounded-[20px] relative">
                    <div className="text-[18px] mb-[6px]">علی فرجاد</div>
                    <div className="before:absolute before:border-[#30323E] before:border-[25px] before:left-[-16px] before:bottom-[0px] before:border-r-transparent before:border-l-transparent before:border-t-transparent before:rounded-[40%] grow text-[14px]">
                      سلام ممنون تو خوبی؟
                    </div>
                    <div className="bottom-[7px] text-right text-[10px] pr-[11px]">
                      20:42
                    </div>
                  </div>
                  <div className="bg-[#A9D2FE] shrink-0 self-end hover:cursor-default mr-[15px] rounded-[14px] w-[50px] h-[50px] text-center pt-[11px] text-[16px] text-black">
                    عف
                  </div>
                </div>
                <div className="flex self-start w-3/4 justify-start m-[5px]">
                  <div className="bg-[#A9D2FE] hover:cursor-default self-end ml-[15px] rounded-[14px] w-[50px] h-[50px] text-center shrink-0 pt-[11px] text-[16px] text-black">
                    سس
                  </div>
                  <div className="bg-[#6B8AFE] p-2.5 rounded-[20px] relative">
                    <div className="text-[18px] mb-[6px]">سعید سعادتی فر</div>
                    <div className="before:absolute before:border-[#6B8AFE] before:border-[25px] before:right-[-16px] before:bottom-[0px] before:border-r-transparent before:border-l-transparent before:border-t-transparent before:rounded-[40%] grow text-[14px]">
                      سلام حالت خوبه؟
                    </div>
                    <div className="bottom-[7px] text-right pr-[11px] text-[10px]">
                      20:41
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[60px] flex">
              <div className="mt-[20px] ml-[10px] w-[18px] h-fit rounded-[15px] hover:cursor-pointer hover:bg-[#2F313D]">
                <img src={pinIcon} alt="" />
              </div>
              <input
                type="text"
                placeholder="پیامتان را بنویسید"
                className="text-[16px] grow h-[52px] mr-[5px] bg-[#21242B] border-none focus:outline-none text-[#FAFBFD]"
              />
              <svg
                id="sendMessageIcon"
                width="30"
                height="30"
                viewBox="0 0 48 48"
                fill="none"
                xmrns="http://www.w3.org/2000/svg"
                className="hidden rotate-[45deg] self-center hover:cursor-pointer hover:fill-[#2F313D]"
              >
                <path d="M48 0H0V48H48V0Z" fill="none" fillOpacity="0" />
                <path
                  d="M42 6L4 20.1383L24 24.0083L29.0052 44L42 6Z"
                  stroke="#FAFBFD"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.0083 24.0083L29.6651 18.3515"
                  stroke="#FAFBFD"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
