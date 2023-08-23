export const ContactItem = ({ key, name }) => {
  return (
    <div key={key} className="cursor-pointer">
      <div className="hover:bg-[rgba(28,62,156,0.2)] flex flex-row h-12 w-full overflow-hidden rounded-lg mt-1 relative">
        <div className={Math.random() * 1 > 0.5  ? "bg-red-400 flex flex-col justify-center items-center w-10 h-10 text-sm mx-1 pt-1 rounded-full " : "bg-amber-400 flex flex-col justify-center items-center w-10 h-10 text-sm mx-1 pt-1 rounded-full " }>{name[0]}{name[1]}</div>
        <div className="flex flex-col ">
          <p>{name}</p>
          <p className="text-xs text-start">متن اخرین پیام ... </p>
        </div>
        <div className="rounded-full w-4 h-4 text-xs absolute left-2 bottom-2 bg-blue-500">
          9
        </div>
      </div>
    </div>
  );
};
