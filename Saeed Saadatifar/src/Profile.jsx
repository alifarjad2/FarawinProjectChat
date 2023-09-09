import { useRef } from "react";

export default function Profile({ itemRef ,title, id, name , className }) {
  return (
    <div id={id} title={title} itemRef={itemRef} className={`${className && className} rounded-[14px] w-[50px] h-[50px] text-center pt-[11px] text-[16px] text-black bg-[#A9D2FE]`}>
      {name}
    </div>
  );
}
