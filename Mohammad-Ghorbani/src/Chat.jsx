import ImageSearch from "./Assets/search-48.png";
import ImageAttach from "./Assets/attach-48.png";
import ImageClose from "./Assets/close-48.png";
import ImageMenu from "./Assets/menu-50.png";
import ImageMore from "./Assets/more-50.png";
import farawin from "farawin";

export default function Chat() {
  const contactList = () => {
    return farawin.getContacts;
  };
  console.log(contactList());
  return (
    <div className="box-border bg-[#34393C] w-screen h-screen pl-10 pt-5 pr-10 pb-14 text-white font-mono cursor-default">
      <div
        id="container"
        className="w-full h-full m-auto mt-5 p-2 rounded-3xl flex flex-row bg-[#202329] max-lg:relative"
      >
        <div
          id="sidebar"
          className="flex flex-col w-1/3 h-full max-lg:hidden max-lg:absolute max-lg:left-0 max-lg:top-0 max-lg:w-full max-lg:h-full max-lg:bg-[#202329] max-lg:z-10 max-lg:rounded-3xl max-lg:overflow-hidden"
        >
          <div className="h-20 flex flex-row rounded-3xl m-7 bg-[#2E333D]">
            <img
              className="w-12 h-12 m-auto cursor-pointer"
              src={ImageSearch}
              alt="Search"
            />
            <input
              id="searchContact"
              type="search"
              placeholder="Search"
              className="w-5/6 h-5/6 pl-1 mr-2 rounded- bg-inherit m-auto focus:outline-none"
            />
            <button
              id="closeMenu"
              className="lg:hidden p-3 h-full w-60 rounded-3xl flex justify-evenly items-center bg-inherit max-lg:hover:bg-red-600 overflow-hidden"
            >
              Colse Sidebar
              <img
                className="lg:hidden w-12 h-12"
                src={ImageClose}
                alt="close sidebar"
              />
            </button>
          </div>
          <div
            id="contactList"
            className="container custom-scrollbar w-11/12 h-full rounded-2xl m-auto overflow-y-auto overflow-x-hidden"
          ></div>
        </div>
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
            <div
              id="profile"
              className="text-2xl absolute top-1.5 left-12"
            ></div>
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
      </div>
    </div>
  );
}
