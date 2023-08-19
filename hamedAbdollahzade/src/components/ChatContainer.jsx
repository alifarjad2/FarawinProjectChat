export const ChatContainer = () => {
  return (
    <div className="flex flex-col w-2/3 m-1 text-start max-sm:w-full">
      <div className="flex items-center  h-8 text-base p-2 relative">
        <img
          className = "w-6 mx-4 hover:cursor-pointer"
          src="../img/drawer-menu.png"
          alt="drawerMeno"
        />
        <div>مخاطب مورد نظر</div>
        <img
          className="w-4 absolute left-2 top-2 cursor-pointer"
          src="../img/menu-vertical.png"
          alt="menu-vertical"
        />
      </div>

      <div className=" h-full overflow-y-auto p-2 ">
        <div className="flex flex-row items-end m-1 p-1">
          <div className="shrink-0 rounded-lg mr-2 w-[40px] leading-[40px] text-center bg-slate-500">
            ح ع
          </div>
          <div className="flex flex-col bg-[#30333C] mb-2 mr-1 rounded-xl p-2 relative">
            <span className="text-xs">حامد عبداله زاده</span>
            <p className="text-start pt-1 pb-1">سلام خوبی ؟ چ خبر ؟</p>
            <span className="text-end text-xs">20:30</span>
          </div>
        </div>

        <div className="flex flex-row-reverse items-end m-2 p-2">
          <div className="shrink-0 rounded-lg ml-2 w-[40px] leading-[40px] text-center bg-slate-500">
            م م
          </div>
          <div className="flex flex-col bg-[#6B8AFE] mb-2 ml-1 rounded-xl p-2 relative">
            <span className="text-xs">مخاطب مورد نظر</span>
            <p className="text-left pt-1 pb-1">مرسی خوبم تو چ خبر ؟</p>
            <span className="text-start text-xs">20:30</span>
          </div>
        </div>
      </div>

      <div className="  h-12 m-2 flex flex-row relative">
        <img
          src="../img/attachment.png"
          alt="attachment"
          className="p-1 w-10 absolute left-0 top-1"
        />
        <input
          type="text"
          placeholder="پیام شما ..."
          className="bg-[rgba(17,27,54,0.4)]  text-lg w-full pl-10 pr-2"
        />
      </div>
    </div>
  );
};
