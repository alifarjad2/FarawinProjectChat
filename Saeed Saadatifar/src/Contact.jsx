import Profile from "./Profile";

<<<<<<< HEAD
export default function Contact({ contact, set , lastM }) {
=======
export default function Contact({ contact, set , last }) {
>>>>>>> 0ce7ebd73975271029a0b45a34e4dcc7e5c93c75
  // #region ProfileContent
  const createImageProfile = () => {
    let imageWordProfile = "";
    let nameSplitBySpace = contact.name.split(" ");
    let countSpace = Math.floor(nameSplitBySpace.length / 2);
    let i = 0;
    do {
      if (countSpace == 0 || i >= countSpace) {
        imageWordProfile += nameSplitBySpace[i][0];
        i++;
        continue;
      }
      imageWordProfile += nameSplitBySpace[i][0];
      i++;
    } while (i < countSpace + 1);
    let str = imageWordProfile.slice(1);
    imageWordProfile = imageWordProfile.charAt(0).toUpperCase();
    imageWordProfile += str;
    return imageWordProfile;
  };
  // #endregion
  return (    
    <div
      className="relative"
      onClick={(e) => {
        set([e.target.id , e.target.title , createImageProfile()]);
      }}
      id={contact.username}
      title={contact.name}
    >
      <div id={contact.username} title={contact.name} className="flex gap-2 p-[8px] hover:cursor-pointer hover:bg-[#2F313D] rounded-[20px]">
        <Profile id={contact.username} title={contact.name} name={createImageProfile()} />
        <div id={contact.username} title={contact.name} className="grow ml-[5px]">
          <div id={contact.username} title={contact.name} className="align-middle text-[18px]">{contact.name}</div>
<<<<<<< HEAD
          <div id={contact.username} title={contact.name} className="text-[#888890] text-[14px]">{lastM.text}</div>
          <div id={contact.username} title={contact.name} className="absolute top-[10px] left-[10px] hidden">{lastM.date && (new Date(lastM.date).setDate(new Date().getDate()))} </div>
=======
          <div id={contact.username} title={contact.name} className="text-[#888890] text-[14px]">{last}</div>
          <div id={contact.username} title={contact.name} className="absolute top-[10px] left-[10px] hidden">1 ساعت</div>
>>>>>>> 0ce7ebd73975271029a0b45a34e4dcc7e5c93c75
          <div id={contact.username} title={contact.name} className="bg-[#7186FF] absolute hidden rounded-[50%] px-[5px] text-[12px] top-[39px] right-[10px]">
            1k
          </div>
        </div>
      </div>
    </div>
  );
}
