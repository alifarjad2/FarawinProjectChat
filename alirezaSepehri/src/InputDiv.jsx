export default function InputDiv(props) {
  const { label, id, text, error, ...others } = props;
  return (
    <div className="w-full mt-4">
      <label
        className="w-full block mb-1 mr-1 text-right text-xs after:content-['*'] after:ml-0.5 after:text-red-500"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative border-b-[1px] border-b-slate-200">
        <div className="absolute w-6 h-full bg-[white] left-0 top-0 text-[#ef4444] text-xs font-semibold text-center pt-2">
          {error}
        </div>
        <input
          {...others}
          id={id}
          className="w-full p-1 outline-none bg-white"
        />
      </div>
    </div>
  );
}
