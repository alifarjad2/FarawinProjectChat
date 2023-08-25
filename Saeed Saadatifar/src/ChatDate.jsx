export default function ChatDate({chats}) {
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
  return (
    <div className="self-center bg-[#2F313D] px-[40px] rounded-[15px]">
      {`${chats && monthNames[new Date(chats && chats[0].date).getMonth()]} ${chats && new Date(chats &&
        chats[0].date
      ).getDay()}`}
    </div>
  );
}
