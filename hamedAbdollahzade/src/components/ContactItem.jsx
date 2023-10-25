export const ContactItem = (prop) => {
  return (
    <div
      key={prop.contact.index}
      onClick={() => {
        return prop.selectedItem(prop);
      }}
      className="cursor-pointer "
    >
      <div
        className={
          "hover:bg-[rgba(28,62,156,0.2)]  hover:pr-8  transition-all duration-200  flex flex-row h-12 w-full overflow-hidden rounded-lg my-1 relative"
        }
      >
        <div
          className={
            "bg-[#1e90ff] flex flex-col justify-center items-center w-10 h-10 text-sm mx-1 p-1 rounded-full "
          }
        >
          {prop.contact.name[0]}
          {prop.contact.name[1]}
        </div>
        <div className="flex flex-col">
          <p>{prop.contact.name}</p>
          <p className="text-[12px]  text-start">{prop.contact.username}</p>
          {/* <p className="text-xs  text-start mt-1  text-white">{prop.contact.username}</p> */}
        </div>
        <div className="bg-slate-700 rounded-full w-4 h-4 text-[12px] absolute left-2 bottom-2 ">
          8
        </div>
      </div>
    </div>
  );
};
