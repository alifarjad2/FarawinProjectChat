import imageSearch from "../../img/search.png"


export const Search = () => {
  return (
    <div className=" flex rounded-lg h-10 bg-[rgba(28,62,156,0.1)] m-3 relative  ">
      <label htmlFor="inputeSearch">
        <img src={imageSearch} alt="search" className="absolute left-2 top-2 hover:p-1 cursor-pointer w-6" />
      </label>
      <input
        id="inputeSearch"
        type="search"
        placeholder="جستجو ..."
        className="outline-none hover:cursor-pointer h-full w-full bg-inherit px-10 py-2 rounded-lg "
      />
    </div>
  );
};
