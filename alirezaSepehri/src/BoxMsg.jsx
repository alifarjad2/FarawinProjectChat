import { breakName } from "./myCode";

export default function BoxMsg({ sender, receiver }) {
  if (receiver)
    return (
      <div className="flex mb-3">
        <div
          className={
            "w-[42px] h-[40px] rounded-xl text-yellow-300 text-[16px] text-center pt-[7px] font-semibold ml-2 shadow-sm float-right bg-pink-600 "
          }
        >
          {breakName(receiver.name)}
        </div>
        <div className="space-y-1 w-7/12">
          <p className="bg-[#30323e] rounded-2xl rounded-tr-none py-2 px-3 text-xs leading-6 mb-1">
            سلام خوبی؟ چه خبر پروژه را کجا رسوندی؟
            <span dir="ltr" className="block text-xs text-left text-slate-500">
              7:10 am
            </span>
          </p>
          <p className="bg-[#30323e] rounded-2xl py-2 px-3 text-xs leading-6 mb-1">
            سلام خوبی؟ چه خبر پروژه را کجا رسوندی؟
            <span dir="ltr" className="block text-xs text-left text-slate-500">
              7:13 am
            </span>
          </p>
        </div>
      </div>
    );
  if (sender)
    return (
      <div className="flex flex-row-reverse mb-3">
        <div className="w-[42px] h-[40px] rounded-xl text-yellow-300 text-lg text-center pt-[7px] font-semibold mx-1 shadow-sm bg-orange-500 float-right">
          Oc
        </div>
        <div className="space-y-1 w-7/12 mb-2">
          <p className="bg-[#6b8afe] rounded-2xl rounded-tl-none py-2 px-3 text-xs leading-6 mb-1">
            سلام خوبی؟ چه خبر پروژه را کجا رسوندی؟
            <span dir="ltr" className="block text-xs text-left text-slate-500">
              7:10 am
            </span>
          </p>
          <p className="bg-[#6b8afe] rounded-2xl py-2 px-3 text-xs leading-6 mb-1">
            سلام خوبی؟ چه خبر پروژه را کجا رسوندی؟
            <span dir="ltr" className="block text-xs text-left text-slate-500">
              7:13 am
            </span>
          </p>
        </div>
      </div>
    );
}
