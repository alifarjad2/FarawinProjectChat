import { useRef } from "react";

export default function Profile({ title, id, name }) {
  return (
    <div
      id={id}
      title={title}
      className={`rounded-[14px] w-[50px] h-[50px] text-center pt-[11px] text-[16px] text-black bg-[#A9D2FE]`}
    >
      {name}
    </div>
  );
}
