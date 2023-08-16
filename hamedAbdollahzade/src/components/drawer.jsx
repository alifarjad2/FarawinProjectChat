export const DrawerChat = () => {


    return (
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
     <div className="bg-red-400 w-10 h-10 mx-1 pt-1 rounded-full ">
        م م
     </div>
      <div className="flex flex-col max-sm:hidden">
        <p>مخاطب مورد نظر</p>
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
    )

}