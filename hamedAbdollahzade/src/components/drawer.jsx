import { ContactItem } from "./ContactItem"


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

  
  <ContactItem/>

  </div>
    )

}