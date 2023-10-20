import { FaSearch } from "@/components"
/////////////////////////////////////////
const SearchContact = ({ onInput, value }) => {
///////////////////////////////////////// Return
  return (
    <div className="bg-[#2E333D] inline-flex lg:flex w-full  rounded-2xl  py-2 px-3 ">
      <input
        type="search"
        onInput={onInput}
        value={value}
        className="bg-transparent text-[#ECEFF3] w-full outline-none ml-2"
        placeholder="جستجو"
      />
      <FaSearch className="w-6 h-6 text-[#989BA0]" />
    </div>
  );
};
export default SearchContact;
