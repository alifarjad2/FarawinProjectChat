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
  const [hideLeftArrow, setHideLeftArrow] = useState<boolean>(true);
  const [hideRightArrow, setHideRightArrow] = useState<boolean>(false);
  const [hideToptArrow, setHidetopArrow] = useState<boolean>(false);
  const [hideBottomArrow, setHideBottomArrow] = useState<boolean>(true);
  const scrollBox = useRef<any>();
  const scrollTop = useRef<any>();
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
        chatList
          .filter((item) => item.text.toUpperCase().match(searchInp))
          .sort((a, b) => new Date(b.date) - new Date(a.date))
      );
    if (scrollBox.current) scrollBox.current.scrollLeft = 0;
    if (scrollTop.current) scrollTop.current.scrollTop = 0;
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
      <div className="relative ">
        <div
          className="h-24 border-b mx-1 border-gray-600 flex overflow-auto gap-1"
          ref={scrollBox}
          onScroll={(e) => {
            if (
              e.target.scrollLeft <=
                -1 * (e.target.scrollWidth - e.target.clientWidth) &&
              fillteredContact.length > 5
            )
              setHideLeftArrow(false);
            else setHideLeftArrow(true);
            if (e.target.scrollLeft != 0) setHideRightArrow(true);
            else setHideRightArrow(false);
          }}
        >
          {searchInp &&
            (scrollBox.current && scrollBox.current.scrollLeft) < 0 &&
            hideRightArrow && (
              <div
                onClick={() => {
                  if (0 >= scrollBox.current.scrollLeft)
                    scrollBox.current.scrollLeft += 70;
                }}
                className="absolute flex transition items-center h-full text-5xl text-[#1e1b4b90] hover:text-[#1e1b4b] bg-gradient-to-r from-transparent to-[#fef9c370] hover:to-[#fef9c3] cursor-pointer"
              >
                <p>➧</p>
              </div>
            )}
          {searchInp && contacts ? (
            fillteredContact?.length > 0 ? (
              fillteredContact.map((item) => (
                <div
                  key={item.username}
                  id={item.username}
                  title={item.name}
                  className={`flex flex-col hover:cursor-pointer p-1 rounded hover:bg-[#21242B] ${
                    selectedContact != null &&
                    selectedContact[0] == item.username
                      ? "bg-[#21242B80]"
                      : ""
                  }`}
                  onClick={(e) => {
                    set([
                      e.target.id,
                      e.target.title,
                      createImageProfile(item),
                    ]);
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
            <p className="text-gray-400 mr-5 mt-3">چیزی یافت نشد!</p>
          )}
          {searchInp && fillteredContact.length > 5 && hideLeftArrow && (
            <div
              onClick={() => {
                if (
                  -1 *
                    (scrollBox.current.scrollWidth -
                      scrollBox.current.clientWidth) <
                  scrollBox.current.scrollLeft
                )
                  scrollBox.current.scrollLeft -= 70;
              }}
              className="absolute transition left-0 rotate-180 flex items-center h-full text-5xl text-[#1e1b4b90] hover:text-[#1e1b4b] bg-gradient-to-r from-transparent to-[#fef9c370] hover:to-[#fef9c3] cursor-pointer"
            >
              <p>➧</p>
            </div>
          )}
        </div>
      </div>

      <div className="relative">
        {searchInp &&
          (scrollTop.current && scrollTop.current.scrollTop) > 0 &&
          hideToptArrow && (
            <div
              onClick={() => {
                if (0 != scrollTop.current.scrollTop)
                  scrollTop.current.scrollTop -= 70;
              }}
              className="absolute flex z-10 transition justify-center top-0 w-full text-5xl text-[#1e1b4b90] hover:text-[#1e1b4b] bg-gradient-to-t from-transparent to-[#fef9c370] hover:to-[#fef9c3] cursor-pointer"
            >
              <p className="rotate-[-90deg]">➧</p>
            </div>
          )}

        <div
          ref={scrollTop}
          className="max-h-72 flex flex-col gap-2 p-3 overflow-auto"
          onScroll={(e) => {
            if (
              scrollTop.current.scrollHeight - scrollTop.current.clientHeight <
                scrollTop.current.scrollTop &&
              fillteredChats.length > 4
            )
              setHideBottomArrow(false);
            else setHideBottomArrow(true);
            if (e.target.scrollTop != 0) setHidetopArrow(true);
            else setHidetopArrow(false);
            console.log(hideBottomArrow);
          }}
        >
          {searchInp && chatList ? (
            fillteredChats?.length > 0 ? (
              fillteredChats.map((item) => (
                <div
                  key={item.id}
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
                    className="my-auto ml-2 grow flex flex-row-reverse"
                  >
                    <div
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
                      className="grow"
                    >
                      <div
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
                        className="flex flex-row-reverse"
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
                                  .filter((e) =>
                                    e.username.match(item.sender)
                                  )[0]
                                  .name[0].charCodeAt() <= 65))
                              ? "rtl"
                              : "ltr"
                          }`}
                          className="font-bold w-fit"
                        >
                          {item.sender == localStorage.username
                            ? "me"
                            : contacts.filter((e) =>
                                e.username.match(item.sender)
                              )[0].name}
                          {":"}
                        </p>
                        <div
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
                          className="grow"
                        ></div>
                      </div>
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
                        className="ml-2 flex overflow-hidden w-52"
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
                    </div>

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
                      className="bottom-2 right-2 text-[10px]"
                    >
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

        {searchInp && fillteredChats.length > 4 && hideBottomArrow && (
          <div
            onClick={() => {
              if (
                scrollTop.current.scrollHeight -
                  scrollTop.current.clientHeight >
                scrollTop.current.scrollTop
              )
                scrollTop.current.scrollTop += 70;
            }}
            className="absolute flex z-10 transition justify-center bottom-0 w-full text-5xl text-[#1e1b4b90] hover:text-[#1e1b4b] bg-gradient-to-b from-transparent to-[#fef9c370] hover:to-[#fef9c3] cursor-pointer"
          >
            <p className="rotate-[90deg]">➧</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
