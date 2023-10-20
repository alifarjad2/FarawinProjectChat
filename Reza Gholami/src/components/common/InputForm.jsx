import { eye, eyeSlash } from "@/components";
import { useRef, useState } from "react";
//////////////////////////////////
const InputBox = ({
  label,
  htmlFor,
  type,
  placeholder,
  children,
  onInput,
  value,
  showEyeIcon,
}) => {
  const [eyeIcon,setEyeIcon] = useState(eye)
  const myInputPass = useRef(null);
  /////////////////////////////// Function change Type Password to text and change eye icon
  const handleEyeIcon = () => {
   if( myInputPass.current.type == "password"){
    myInputPass.current.type = "text";
    setEyeIcon(eyeSlash)
   }else{
    myInputPass.current.type = "password";
    setEyeIcon(eye);
   }
  };
  /////////////////////////////// Return
  return (
    <div className="flex flex-col">
      <label htmlFor={htmlFor} className="text-sm text-[#333] pr-2">
        {label}
      </label>
      <div className="relative w-full">
        <div className="absolute top-4 text-[#adadad] pr-1 sm:top-1.5 2xl:top-4">
          {children}
        </div>
        <input
          type={type}
          id={htmlFor}
          value={value}
          onInput={onInput}
          ref={myInputPass}
          placeholder={placeholder}
          className="focus:border-b-slate-400 transition text-lg pr-8 border-b-2 outline-none h-12 w-full placeholder:text-lg sm:h-8 2xl:h-12"
        />
        {showEyeIcon && (
          <img
            src={eyeIcon}
            onClick={handleEyeIcon}
            className="cursor-pointer w-6 h-6 absolute top-4 left-0 text-[#adadad] pr-1 sm:top-1.5 2xl:top-4"
          />
        )}
      </div>
    </div>
  );
};
export default InputBox;
