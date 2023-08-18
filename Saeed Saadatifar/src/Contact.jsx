import Profile from "./Profile";

export default function Contact() {
  return (
    <div className="relative">
      <div className="flex gap-2 p-[8px] hover:cursor-pointer hover:bg-[#2F313D] rounded-[20px]">
        <Profile/>
        <div className="grow ml-[5px]">
          <div className="hidden"></div>
          <div className="align-middle text-[18px]">علیرضا پرهیزکار</div>
          <div className="text-[#888890] text-[14px]">آخرین&#160;پیام</div>
          <div className="absolute top-[10px] left-[10px] hidden">1 ساعت</div>
          <div className="bg-[#7186FF] absolute hidden rounded-[50%] px-[5px] text-[12px] top-[39px] right-[10px]">
            1k
          </div>
        </div>
      </div>
    </div>
  );
}
