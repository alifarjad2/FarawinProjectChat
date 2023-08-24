import Sidebar from "./SideBar";
import Chatview from "./Chatview";

export default function Chat() {
  return (
    <div className="box-border bg-[#34393C] w-screen h-screen pl-10 pt-5 pr-10 pb-14 text-white font-mono text-right cursor-default">
      <div
        id="container"
        className="w-full h-full m-auto mt-5 p-2 rounded-3xl flex flex-row bg-[#202329] max-lg:relative"
      >
        <Sidebar />
        <Chatview />
      </div>
    </div>
  );
}
