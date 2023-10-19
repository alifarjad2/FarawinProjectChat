const InputChat = ({
  label,
  htmlFor,
  type,
  placeholder,
  children,
  onInput,
  value,
}) => {
  /////////////////////////// Return
  return (
    <div className="flex flex-col">
      <label htmlFor={htmlFor} className="text-xs text-white pr-2 mb-2">
        {label}
      </label>
      <div className="relative w-full">
        <div className="absolute top-2 text-[#adadad] pr-2">{children}</div>
        <input
          type={type}
          id={htmlFor}
          value={value}
          onInput={onInput}
          placeholder={placeholder}
          className="text-[#2E333D] transition rounded-lg text-sm pr-8 border-b-2 outline-none h-8 w-full placeholder:text-sm"
        />
      </div>
    </div>
  );
};
export default InputChat;
