import ImageAttach from "./Assets/attach-48.png";
import ImageMenu from "./Assets/menu-50.png";
import ImageMore from "./Assets/more-50.png";

import farawin from "farawin";
import { useState } from "react";
import React from "react";

function Chatview() {
  return (
    <div
      id="chatView"
      className="w-2/3 h-full flex flex-col bg-[#202329] max-lg:w-full"
    >
      <div className="pl-5 w-full h-20 flex flex-row justify-between relative">
        <button
          id="openMenu"
          className="lg:w-0 lg:cursor-pointer absolute left-1 top-1 cursor-pointer"
        >
          <img className="w-7 h-9" src={ImageMenu} alt="open Menu" />
        </button>
        <div id="profile" className="text-2xl absolute top-4 left-12">
          {/* {مخاطب مورد نظر } */}
        </div>
        <img
          className="w-7 h-7 mt-4 mr-4 cursor-pointer absolute right-0"
          src={ImageMore}
          alt="more"
        />
      </div>
      <div className="pl-5 w-full h-5/6 overflow-y-auto max-lg:overflow-x-hidden flex flex-col gap-5">
        {/* <div className="mr-3 bg-[#6b8afe] rounded-3xl w-1/3 h-auto m-auto p-3 rounded-br-none max-lg:w-2/3">
            <div>
              hey gus Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Fugit natus quod Lorem, ipsum dolor sit amet consectetur
              adipisicing elit.
            </div>
            <div className="text-right text-xs">19:30</div>
          </div>

          <span className="rounded-full w-32 m-auto text-center text-black bg-white">
            10 July
          </span>
          <div className="mr-3 bg-[#2E333D] rounded-3xl w-1/3 h-auto p-3 rounded-bl-none max-lg:w-2/3">
            <div>
              hey gus Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Fugit natus quod
            </div>
            <div className="text-right text-xs text-[#b9bdc4]">19:42</div>
          </div>
          <div className="mr-3 bg-[#6b8afe] rounded-3xl w-1/3 h-auto m-auto p-3 rounded-br-none max-lg:w-2/3">
            <div>
              hey gus Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Fugit natus quod
            </div>
            <div className="text-right text-xs">20:00</div>
          </div>

          <div className="mr-3 bg-[#2E333D] rounded-3xl w-1/3 h-auto p-3 rounded-bl-none max-lg:w-2/3">
            <div>
              hey gus Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Fugit natus quod Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias quod esse dolor voluptate earum
              soluta. Temporibus molestias assumenda perspiciatis, sequi
              explicabo, ducimus esse soluta, nesciunt non ut ea voluptatibus?
              Officiis?
            </div>
            <div className="text-right text-xs">20:30</div>
          </div>
          <span className="rounded-full w-32 text-center m-auto text-black bg-white">
            Todey
          </span>
          <div className="mr-3 bg-[#6b8afe] rounded-3xl w-1/3 h-auto m-auto p-3 rounded-br-none max-lg:w-2/3">
            <div>
              hey gus Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Fugit natus quod
            </div>
            <div className="text-right text-xs">8m</div>
          </div> */}
      </div>

      <div className="w-full h-14">
        <div className="w-full h-full rounded-3xl flex focus-within:bg-[#2E333D]">
          <img
            className="w-8 h-8 ml-8 m-auto cursor-pointer"
            src={ImageAttach}
            alt="Attach"
          />
          <input
            placeholder="Your message"
            type="text"
            className="bg-inherit w-10/12 h-full mr-16 rounded-2xl focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
export default Chatview;
