import { useEffect, useRef } from "react";
import Profile from "./Profile";

export default function Contact({
  contact,
  set,
  last,
  setHideSideBar,
  selectedContact,
}) {
  // #region ProfileContent
  const createImageProfile = (contact) => {
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
        setHideSideBar(true);
        set([e.target.id, e.target.title, createImageProfile(contact)]);
      }}
      id={contact.username}
      title={contact.name}
    >
      <div
        id={contact.username}
        title={contact.name}
        className={`flex gap-2 p-[8px] ${
          selectedContact != null && selectedContact[0] == contact.username
            ? "bg-[#2F313D]"
            : ""
        } hover:cursor-pointer bg-opacity-60 hover:bg-[#2F313D] rounded-[20px]`}
      >
        <Profile
          id={contact.username}
          title={contact.name}
          name={createImageProfile(contact)}
        />
        <div
          id={contact.username}
          title={contact.name}
          className="grow ml-[5px]"
        >
          <div
            id={contact.username}
            title={contact.name}
            className="align-middle text-[18px]"
          >
            {contact.name}
          </div>
          <div
            id={contact.username}
            title={contact.name}
            className="text-[#888890] text-[14px]"
          >
            {last ? last.text : "پیامی وجود ندارد!"}
          </div>
          <div
            id={contact.username}
            title={contact.name}
            className="absolute top-[35px] left-[10px] text-[10px]"
          >
            {last &&
              ((new Date() - new Date(last?.date)) / 1000 >= 1
                ? (new Date() - new Date(last?.date)) / 1000 < 60
                  ? `${(new Date() - new Date(last?.date)) / 1000} Second`
                  : Math.ceil(
                      (new Date() - new Date(last?.date)) / (1000 * 60)
                    ) < 60
                  ? `${Math.ceil(
                      (new Date() - new Date(last?.date)) / (1000 * 60)
                    )} Minutes`
                  : Math.ceil(
                      (new Date() - new Date(last?.date)) / (1000 * 60 * 60)
                    ) < 24
                  ? `${Math.ceil(
                      (new Date() - new Date(last?.date)) / (1000 * 60 * 60)
                    )} Hours`
                  : Math.ceil(
                      (new Date() - new Date(last?.date)) /
                        (1000 * 60 * 60 * 24)
                    ) == 1
                  ? `Yesterday`
                  : `${new Date(last?.date).toLocaleString("fa-ir", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}`
                : `Just Now`)}
          </div>
        </div>
      </div>
    </div>
  );
}
