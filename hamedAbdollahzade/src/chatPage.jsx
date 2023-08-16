// در دست احداث ...

export const ChatPage = () => {
  
  return (
      <div className="bg-[#dbdbdb] box-border w-screen " >
      <div
    className="flex rounded-xl min-h-screen max-h-screen overflow-hidden bg-[#20232A] ml-5 mr-5 text-white"
  >
    {/* این دیو مربوط به قسمت سمت راست کانتینر لیست مخاطبین می باشد  */}
    <div className="overflow-auto  m-1 rounded-lg w-1/3 text-center p-2">
      <div className="flex rounded-lg h-7 bg-[rgba(28,62,156,0.1)] m-3 relative max-sm:hidden">
        <label htmlFor="inputeSearch">
          <img
            src="../img/search.png"
            className="hover:cursor-pointer p-1 absolute left-0 top-0 w-7"
            alt="search"
          />
        </label>
        <input
          id="inputeSearch"
          type="search"
          placeholder="جستجو ..."
          className="hover:cursor-pointer h-full w-full bg-inherit pl-6 pb-1 rounded-lg"
        />
      </div>

      <div className="cursor-pointer">

        <div
          className="hover:bg-[rgba(28,62,156,0.2)] flex flex-row h-12 w-full overflow-hidden rounded-lg mt-1 relative"
        >
          <img
            src="../img/avatar (1).png"
            className="bg-green-500 rounded-full m-1"
            alt="avatar"
          />
          <div className="flex flex-col max-sm:hidden">
            <p>حامد عبداله زاده</p>
            <p className="text-xs text-start">متن اخرین پیام ... </p>
          </div>
          <div
            className="rounded-full w-4 h-4 text-xs absolute left-2 bottom-2 bg-blue-500"
          >
            9
          </div>
        </div>

      </div>
    </div>
{/*  این دیو مربوط به کانتینر قسمت چت ک شامل هدر و صفحه چت و اینپوت ارسال پیام  */}
    <div className="flex flex-col w-2/3 m-1 text-start ">
      <div className=" h-8 text-base p-2 relative">حامد عبداله زاده
        <img className="w-4 absolute left-2 top-2 cursor-pointer" src="../img/menu-vertical.png" alt="menu-vertical"/>
      </div>
      {/* این دیو مخصوص کانتینر صفحه چت */}
      <div className=" flex flex-col justify-center items-center h-4/5 overflow-y-auto flex-1 p-2">پیامی وجود ندارد</div>

      {/* این دیو مخصوص اینپوت ارسال پیام */}
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
  </div>
  </div>
  )
};
