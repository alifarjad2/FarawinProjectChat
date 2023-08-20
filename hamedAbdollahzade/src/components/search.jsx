export const Search = () => {
  return (
    <div className="flex rounded-lg h-8 bg-[rgba(28,62,156,0.1)] m-3 relative  ">
      <label htmlFor="inputeSearch">
        <img
          src="../img/search.png"
          className="hover:cursor-pointer p-1 absolute left-1 top-0 w-7"
          alt="search"
        />
      </label>
      <input
        id="inputeSearch"
        type="search"
        placeholder="جستجو ..."
        className="hover:cursor-pointer h-full w-full bg-inherit px-10 py-2 rounded-lg"
      />
    </div>
  );
};
