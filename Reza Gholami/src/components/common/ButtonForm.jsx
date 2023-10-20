import { useEffect, useRef } from "react";
//////////////////////////////
  // useEffect(() => ref.addEventListener('click', () =>{}, { once: true })) sample for once click in button
/////////////////////////////
const Button = ({ text, onClick, isEnabled, classButton }) => {
    // خود ری اکت برای اضافه کردن کلاس اما چون یک مورد هست من این مدلی نوشتم className روش بهتر استفاده از کتایخانه 
  const myButton = useRef(null);
  useEffect(()=>{
    isEnabled
    ? myButton.current?.classList.add("animate-pulse")
    : myButton.current?.classList.remove("animate-pulse");
  },[isEnabled])
  //////////////////////////// Return
  return (
    <button
      ref={myButton}
      onClick={onClick}
      disabled={!isEnabled}
      className={
        (classButton ||
        "w-full h-10 text-base mt-4 bg-gradient-to-r from-[#fc00ff] to-[#00dbde]  text-white sm:mt-6 rounded-full  font-bold")
      }
      style={!isEnabled ? { cursor: "not-allowed"} : { cursor: "pointer"}}>
      {text}
    </button>
  );
};

export default Button;
