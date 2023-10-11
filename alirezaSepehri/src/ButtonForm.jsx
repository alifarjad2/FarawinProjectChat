export default function ButtonForm({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-center border-[1px] py-1 rounded-md text-slate-100 shadow-sm"
      style={{
        background:
          "-webkit-linear-gradient(right,#00dbde 20%,#fc00ff,#00dbde 20%,#fc00ff)",
      }}
    >
      {text}
    </button>
  );
}
