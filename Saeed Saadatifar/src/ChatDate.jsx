export default function ChatDate({ chat, lastChat }) {
  return (
    <div className="self-center bg-[#2F313D] px-[40px] rounded-[15px]">
      {chat &&
        new Date(chat && chat.date).toLocaleString("fa-ir", {
          day: "numeric",
          month: "long",
        })}
    </div>
  );
}
