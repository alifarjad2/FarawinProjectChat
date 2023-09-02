<<<<<<< HEAD
export default function ChatDate({ chats }) {
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
    <div className="justify-self-center w-fit bg-[#2F313D] px-[40px] rounded-[15px]">
      {`${chats && monthNames[new Date(chats && chats.date).getMonth()]} ${
        chats && new Date(chats && chats.date).getDate()
      }`}
=======
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
>>>>>>> 0ce7ebd73975271029a0b45a34e4dcc7e5c93c75
    </div>
  );
}
