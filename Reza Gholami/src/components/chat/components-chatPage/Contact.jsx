import { splitName } from "@/components";
/////////////////////////////////////
const Contact = ({ contact, click, lastPm }) => {
  const bgAvatar = {
    backgroundColor: "#" + (Math.round(Math.random() * 1000000)),
  };
  //////////////////////////////////// Return
  return (
    <div
      className="flex w-auto p-3 ml-1 rounded-2xl hover:bg-[#2E333D] cursor-pointer transition-all"
      onClick={() => click(contact)}>
      <div
        className="text-center w-[55px] leading-[55px] rounded-2xl text-white shrink-0"
        style={bgAvatar}>
        {splitName(contact.name)}
      </div>
      <div className="mr-2 w-full">
        <div className="flex justify-between items-center">
          <h4 className="text-[#e5e6ea]">{contact.name}</h4>
          <span className="text-[#989BA0] text-xs">4 دقیقه قبل</span>
        </div>
        <div className="flex">
          <p className="inline-block text-xs text-[#989BA0] w-40 whitespace-nowrap overflow-hidden  text-ellipsis">
            {lastPm}
          </p>
          <span className="rounded-full leading-[9px] py-1 px-[5px] bg-[#7189f8] text-[#e5e6ea] text-xs inline-block mr-3">
            5
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
