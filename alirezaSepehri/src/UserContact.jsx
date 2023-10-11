import { breakName } from "./myCode";

export default function UserContact({ contact }) {
  const bgColor = "bg-[#" + Math.round(Math.random() * 1000000) + "]";
  return (
    <div className="hover:bg-[#30323e] mb-2 text-[#ababb3] placeholder-slate-400 focus:ring-2 focus:ring-slate-500 focus:outline-none appearance-none w-11/12 mx-auto text-sm leading-6 rounded-2xl py-2 px-3 shadow-sm cursor-pointer overflow-hidden">
      <div
        className={
          "w-[42px] h-[40px] rounded-xl text-yellow-300 text-[16px] text-center pt-[7px] font-semibold ml-2 shadow-sm float-right bg-pink-600 " +
          bgColor
        }
      >
        {breakName(contact.name)}
      </div>
      <div className="float-right w-2/3">
        <div className="flex justify-between">
          <span className="text-sm text-slate-200">{contact.name}</span>
          <span className="text-xs text-slate-500">4m</span>
        </div>
        <p className="text-[10px] w-11/12 h-5 overflow-ellipsis font-medium text-slate-500">
          سلام خوبی چه خبر؟ پروژه را به کجا رسوندی؟ سلام خوبی چه خبر ؟ پروژه را
          به کجا رسوندی؟
        </p>
      </div>
    </div>
  );
}
