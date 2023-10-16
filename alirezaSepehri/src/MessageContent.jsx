import IconAttach from "./assets/attach.png";
import IconMenuHmbg from "./assets/menu-vertical32.png";
import IconAddUser from "./assets/addUser.svg"
import BoxMsg from "./BoxMsg";
import { Chats } from "./myCode"

export default function MessageContent({ user, setModal }) {
  const contacts = Chats.filter(row => {
    // console.log(row.receiver)
    row.receiver === user.username
  });
  console.table(Chats)
  // console.table(contacts)
  // console.log(user)
  const handleAddUser = (user) => {
    setModal('flex')
  }
  return (
    <div className="flex-1 px-3">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center">
          <h4 className="top-5 pr-2 w-full text-stone-300">{user.name}</h4>
          <div className="flex items-center">
            <img
              className="cursor-pointer w-10"
              src={IconAddUser}
              alt="add_icon"
              onClick={handleAddUser}
            />
            <img
              className="lg:hidden ml-3 h-5 cursor-pointer relative z-10"
              src={IconMenuHmbg}
              alt="menu_icon"
            />
          </div>
        </div>

        <div className="mt-6 flex-1 overflow-y-scroll">
          {
            Chats.map((row, index)=> (
   
                <BoxMsg key={row.username} sender={row} receiver={user} />
 
            ))
          }

          <div className="flex mb-3">
            <div className="w-[42px] h-[40px] rounded-xl text-yellow-300 text-lg text-center pt-[7px] font-semibold mx-1 shadow-sm bg-orange-500 float-right">
              Oc
            </div>
            <div className="space-y-1 w-7/12">
              <p className="bg-[#30323e] rounded-2xl rounded-tr-none py-2 px-3 text-xs leading-6 mb-1">
                سلام خوبی؟ چه خبر پروژه را کجا رسوندی؟
                <span
                  dir="ltr"
                  className="block text-xs text-left text-slate-500"
                >
                  7:10 am
                </span>
              </p>
              <p className="bg-[#30323e] rounded-2xl py-2 px-3 text-xs leading-6 mb-1">
                سلام خوبی؟ چه خبر پروژه را کجا رسوندی؟
                <span
                  dir="ltr"
                  className="block text-xs text-left text-slate-500"
                >
                  7:13 am
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse mb-3">
            <div className="w-[42px] h-[40px] rounded-xl text-yellow-300 text-lg text-center pt-[7px] font-semibold mx-1 shadow-sm bg-orange-500 float-right">
              Oc
            </div>
            <div className="space-y-1 w-7/12 mb-2">
              <p className="bg-[#6b8afe] rounded-2xl rounded-tl-none py-2 px-3 text-xs leading-6 mb-1">
                سلام خوبی؟ چه خبر پروژه را کجا رسوندی؟
                <span
                  dir="ltr"
                  className="block text-xs text-left text-slate-500"
                >
                  7:10 am
                </span>
              </p>
              <p className="bg-[#6b8afe] rounded-2xl py-2 px-3 text-xs leading-6 mb-1">
                سلام خوبی؟ چه خبر پروژه را کجا رسوندی؟
                <span
                  dir="ltr"
                  className="block text-xs text-left text-slate-500"
                >
                  7:13 am
                </span>
              </p>
            </div>
          </div>

          <div className="flex mb-3">
            <div className="w-[42px] h-[40px] rounded-xl text-yellow-300 text-lg text-center pt-[7px] font-semibold mx-1 shadow-sm bg-orange-500 float-right">
              Oc
            </div>
            <div className="space-y-1 w-7/12">
              <p className="bg-[#30323e] rounded-2xl rounded-tr-none py-2 px-3 text-xs leading-6 mb-1">
                سلام خوبی؟ چه خبر پروژه را کجا رسوندی؟
                <span
                  dir="ltr"
                  className="block text-xs text-left text-slate-500"
                >
                  7:10 am
                </span>
              </p>
              <p className="bg-[#30323e] rounded-2xl py-2 px-3 text-xs leading-6 mb-1">
                سلام خوبی؟ چه خبر پروژه را کجا رسوندی؟
                <span
                  dir="ltr"
                  className="block text-xs text-left text-slate-500"
                >
                  7:13 am
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse mb-3">
            <div className="w-[42px] h-[40px] rounded-xl text-yellow-300 text-lg text-center pt-[7px] font-semibold mx-1 shadow-sm bg-orange-500 float-right">
              Oc
            </div>
            <div className="space-y-1 w-7/12 mb-2">
              <p className="bg-[#6b8afe] rounded-2xl rounded-tl-none py-2 px-3 text-xs leading-6 mb-1">
                سلام خوبی؟ چه خبر پروژه را کجا رسوندی؟
                <span
                  dir="ltr"
                  className="block text-xs text-left text-slate-500"
                >
                  7:10 am
                </span>
              </p>
              <p className="bg-[#6b8afe] rounded-2xl py-2 px-3 text-xs leading-6 mb-1">
                سلام خوبی؟ چه خبر پروژه را کجا رسوندی؟
                <span
                  dir="ltr"
                  className="block text-xs text-left text-slate-500"
                >
                  7:13 am
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-xs text-slate-400 mt-1">
          <form className="group relative w-11/12 mx-auto mb-1">
            <img
              className="absolute w-4 right-4 top-[14px] text-slate-400 pointer-events-none group-focus-within:text-blue-500"
              src={IconAttach}
              alt=""
            />
            <input
              className="bg-transparent hover:bg-[#30323e] focus:bg-[#30323e] text-[#ababb3] placeholder-slate-400 block focus:outline-none appearance-none w-full text-sm leading-6 rounded-2xl py-2 pr-10 shadow-sm"
              type="text"
              aria-label="Filter projects"
              placeholder="پیغام شما ..."
            />
          </form>
        </div>
      </div>
    </div>
  );
}
