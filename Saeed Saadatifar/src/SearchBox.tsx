import Profile from "./Profile";
import React, { useEffect, useRef, useState } from "react";

interface Con {
  username: string;
  name: string;
  date: string;
  ref: string;
}

interface message {
  sender: string;
  receiver: string;
  date: string;
  id: number;
  text: string;
}

interface Props {
  contacts: Array<Con>;
  searchInp: string;
  set: ([]: Array<string>) => {};
  chatList: Array<message>;
}

const SearchBox: React.FC<Props> = ({
  searchInp,
  contacts,
  set,
  chatList,
  selectedContact,
  ...props
}) => {
  const [fillteredContact, setFillteredContact] = useState<Array<Con>>([]);
  const [fillteredChats, setFillteredChats] = useState<Array<message>>([]);
  useEffect(() => {
    contacts &&
      setFillteredContact(
        contacts.filter(
          (item) =>
            item.name.toUpperCase().match(searchInp) ||
            item.username.match(searchInp)
        )
      );
    chatList &&
      setFillteredChats(
        chatList.filter((item) => item.text.toUpperCase().match(searchInp))
      );
  }, [searchInp]);
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

  let highlightSearched = (
    name: string,
    searchInp: string,
    id: string,
    title: string
  ) => {
    const parts = name.split(new RegExp(`(${searchInp})`, "gi"));
    return (
      <span id={id} title={title}>
        {" "}
        {parts.map((part, i) => (
          <span
            id={id}
            title={title}
            key={i}
            className={
              part.toLowerCase() === searchInp.toLowerCase()
                ? "text-yellow-400 underline"
                : ""
            }
          >
            {part}
          </span>
        ))}{" "}
      </span>
    );
  };
  return (
    <div
      {...props}
      className="absolute rounded-b-[15px] z-10 w-full bg-[#30323E]"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="h-24 border-b mx-1 border-gray-600 flex overflow-auto gap-1">
        {searchInp && contacts ? (
          fillteredContact?.length > 0 ? (
            fillteredContact.map((item) => (
              <div
                key={item.username}
                id={item.username}
                title={item.name}
                className={`flex flex-col hover:cursor-pointer p-1 rounded hover:bg-[#21242B] ${
                  selectedContact != null && selectedContact[0] == item.username
                    ? "bg-[#21242B80]"
                    : ""
                }`}
                onClick={(e) => {
                  set([e.target.id, e.target.title, createImageProfile(item)]);
                }}
              >
                <Profile
                  id={item.username}
                  title={item.name}
                  name={createImageProfile(item)}
                />
                <div
                  dir={`${
                    (item.name[0].charCodeAt() >= 122 &&
                      item.name[0].charCodeAt() <= 97) ||
                    (item.name[0].charCodeAt() >= 90 &&
                      item.name[0].charCodeAt() <= 65)
                      ? "rtl"
                      : "ltr"
                  }`}
                  id={item.username}
                  title={item.name}
                  className="text-[12px] text-center"
                >
                  {highlightSearched(item.name, searchInp)}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 mr-3 mt-3">چیزی یافت نشد!</p>
          )
        ) : (
          <p className="text-gray-400 mr-3 mt-3">چیزی یافت نشد!</p>
        )}
      </div>

      <div className="h-72 flex flex-col gap-2 p-2 overflow-auto">
        {searchInp && chatList ? (
          fillteredChats?.length > 0 ? (
            fillteredChats.map((item) => (
              <div
                key={item.id}
                id={
                  item.receiver == localStorage.username
                    ? contacts.filter((e) => e.username.match(item.sender))[0]
                        .username
                    : contacts.filter((e) => e.username.match(item.receiver))[0]
                        .username
                }
                title={
                  item.receiver == localStorage.username
                    ? contacts.filter((e) => e.username.match(item.sender))[0]
                        .name
                    : contacts.filter((e) => e.username.match(item.receiver))[0]
                        .name
                }
                className={`flex flex-row-reverse relative hover:bg-[#21242B] ${
                  selectedContact != null &&
                  selectedContact[0] ==
                    contacts.filter((e) =>
                      e.username.match(
                        item.receiver == localStorage.username
                          ? contacts.filter((e) =>
                              e.username.match(item.sender)
                            )[0].username
                          : contacts.filter((e) =>
                              e.username.match(item.receiver)
                            )[0].username
                      )
                    )[0].username &&
                  item.id == selectedContact[3]
                    ? "bg-[#21242B80]"
                    : ""
                } hover:cursor-pointer p-1 rounded`}
                onClick={(e) => {
                  set([
                    e.target.id,
                    e.target.title,
                    createImageProfile(
                      item.receiver == localStorage.username
                        ? contacts.filter((e) =>
                            e.username.match(item.sender)
                          )[0]
                        : contacts.filter((e) =>
                            e.username.match(item.receiver)
                          )[0]
                    ),
                    item.id,
                  ]);
                  e.stopPropagation();
                }}
              >
                <div
                  id={
                    item.receiver == localStorage.username
                      ? contacts.filter((e) => e.username.match(item.sender))[0]
                          .username
                      : contacts.filter((e) =>
                          e.username.match(item.receiver)
                        )[0].username
                  }
                  title={
                    item.receiver == localStorage.username
                      ? contacts.filter((e) => e.username.match(item.sender))[0]
                          .name
                      : contacts.filter((e) =>
                          e.username.match(item.receiver)
                        )[0].name
                  }
                >
                  <Profile
                    id={
                      item.receiver == localStorage.username
                        ? item.sender
                        : item.receiver
                    }
                    title={
                      item.receiver == localStorage.username
                        ? contacts.filter((e) =>
                            e.username.match(item.sender)
                          )[0].name
                        : contacts.filter((e) =>
                            e.username.match(item.receiver)
                          )[0].name
                    }
                    name={
                      item.receiver == localStorage.username
                        ? createImageProfile(
                            contacts.filter((e) =>
                              e.username.match(item.sender)
                            )[0]
                          )
                        : createImageProfile(
                            contacts.filter((e) =>
                              e.username.match(item.receiver)
                            )[0]
                          )
                    }
                  />
                </div>
                <div
                  id={
                    item.receiver == localStorage.username
                      ? contacts.filter((e) => e.username.match(item.sender))[0]
                          .username
                      : contacts.filter((e) =>
                          e.username.match(item.receiver)
                        )[0].username
                  }
                  title={
                    item.receiver == localStorage.username
                      ? contacts.filter((e) => e.username.match(item.sender))[0]
                          .name
                      : contacts.filter((e) =>
                          e.username.match(item.receiver)
                        )[0].name
                  }
                  className="my-auto ml-2"
                >
                  <p
                    id={
                      item.receiver == localStorage.username
                        ? contacts.filter((e) =>
                            e.username.match(item.sender)
                          )[0].username
                        : contacts.filter((e) =>
                            e.username.match(item.receiver)
                          )[0].username
                    }
                    title={
                      item.receiver == localStorage.username
                        ? contacts.filter((e) =>
                            e.username.match(item.sender)
                          )[0].name
                        : contacts.filter((e) =>
                            e.username.match(item.receiver)
                          )[0].name
                    }
                    dir={`${
                      item.sender != localStorage.username &&
                      ((contacts
                        .filter((e) => e.username.match(item.sender))[0]
                        .name[0].charCodeAt() >= 122 &&
                        contacts
                          .filter((e) => e.username.match(item.sender))[0]
                          .name[0].charCodeAt() <= 97) ||
                        (contacts
                          .filter((e) => e.username.match(item.sender))[0]
                          .name[0].charCodeAt() >= 90 &&
                          contacts
                            .filter((e) => e.username.match(item.sender))[0]
                            .name[0].charCodeAt() <= 65))
                        ? "rtl"
                        : "ltr"
                    }`}
                    className="font-bold"
                  >
                    {item.sender == localStorage.username
                      ? "me"
                      : contacts.filter((e) => e.username.match(item.sender))[0]
                          .name}
                    {":"}
                  </p>
                  <p
                    id={
                      item.receiver == localStorage.username
                        ? contacts.filter((e) =>
                            e.username.match(item.sender)
                          )[0].username
                        : contacts.filter((e) =>
                            e.username.match(item.receiver)
                          )[0].username
                    }
                    title={
                      item.receiver == localStorage.username
                        ? contacts.filter((e) =>
                            e.username.match(item.sender)
                          )[0].name
                        : contacts.filter((e) =>
                            e.username.match(item.receiver)
                          )[0].name
                    }
                    dir={`${
                      (item.text[0].charCodeAt() <= 122 &&
                        item.text[0].charCodeAt() >= 97) ||
                      (item.text[0].charCodeAt() <= 90 &&
                        item.text[0].charCodeAt() >= 65)
                        ? "ltr"
                        : "rtl"
                    }`}
                    className="ml-2"
                  >
                    {highlightSearched(
                      item.text,
                      searchInp,
                      item.receiver == localStorage.username
                        ? contacts.filter((e) =>
                            e.username.match(item.sender)
                          )[0].username
                        : contacts.filter((e) =>
                            e.username.match(item.receiver)
                          )[0].username,
                      item.receiver == localStorage.username
                        ? contacts.filter((e) =>
                            e.username.match(item.sender)
                          )[0].name
                        : contacts.filter((e) =>
                            e.username.match(item.receiver)
                          )[0].name
                    )}
                  </p>
                  <p className="absolute bottom-2 right-2 text-[10px]">
                    {new Date(item.date).toLocaleString("fa-ir", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 mr-3 mt-3">چیزی یافت نشد!</p>
          )
        ) : (
          <p className="text-gray-400 mr-3 mt-3">چیزی یافت نشد!</p>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
