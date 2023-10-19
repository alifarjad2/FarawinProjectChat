import { useStore, splitName , messageBoxRadiusLeft } from "@/components";
///////////////////////////////
const ReceiverChat = ({ message, time, date }) => {
  const { contactSelected } = useStore();
  //////////////////////////// Return
  return (
    <div className="flex items-end flex-row-reverse mb-4 mx-2">
      <div className="text-center w-[50px] leading-[50px] bg-[#a9d2fe] rounded-2xl">
        {splitName(contactSelected.name)}
      </div>
      <div
        className="relative ml-3 text-[#eceff3] bg-[#2E333D] p-3 max-w-[70%] min-w-[20%] rounded-2xl"
        id="about">
        <img
          src={messageBoxRadiusLeft}
          className="absolute w-6 bottom-[-9px] left-[-11px]"
          alt="icon"
        />
        <p className="flex justify-between text-sm text-[#989BA0]">
          {contactSelected.name}
        </p>
        <p className="text-sm break-words">{message}</p>
        <span className="block text-end mt-2 text-[11px] text-[#989BA0]">
          {date} ساعت {time}
        </span>
      </div>
    </div>
  );
};

export default ReceiverChat;
