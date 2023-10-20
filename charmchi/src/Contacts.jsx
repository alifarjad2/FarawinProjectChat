import Store, { last } from "./ZUSTAND";
import { useEffect } from "react";

function Contacts({ valueInputSearchContacts }) {
  const {
    contacts,
    setContacts,
    setInformationChatter,
    informationChatter,
    setAllChats,
    allChats,
  } = Store();

  useEffect(() => {
    setContacts();
    setAllChats();
  }, []);
  let lastM = last(allChats, contacts);

  return (
    <>
      <div className="grow w-full overflow-y-auto">
        {valueInputSearchContacts
          ? contacts
              .filter(
                (contact) =>
                  contact.ref == localStorage.username &&
                  (contact.username.match(valueInputSearchContacts) ||
                    contact.name
                      .toLowerCase()
                      .match(valueInputSearchContacts.toLowerCase()))
              )
              .map((item) => (
                <div
                  key={item.username}
                  className={`flex ${
                    informationChatter &&
                    informationChatter.username == item.username &&
                    "bg-slate-300"
                  } hover:bg-slate-300 hover:cursor-pointer my-2 mx-0.5`}
                  onClick={() => setInformationChatter(item)}
                >
                  <div className=" w-full h-fit mb-1 flex m-0.5">
                    <svg
                      viewBox="0 0 32 32"
                      height="80"
                      width="70"
                      fill="white"
                    >
                      <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
                      <path d="M16,17a5,5,0,1,1,5-5A5,5,0,0,1,16,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,16,9Z" />
                      <path d="M25.55,24a1,1,0,0,1-.74-.32A11.35,11.35,0,0,0,16.46,20h-.92a11.27,11.27,0,0,0-7.85,3.16,1,1,0,0,1-1.38-1.44A13.24,13.24,0,0,1,15.54,18h.92a13.39,13.39,0,0,1,9.82,4.32A1,1,0,0,1,25.55,24Z" />
                    </svg>
                    <div
                      id="informationOfContact"
                      className=" w-full h-fit p-1.5 mt-1.5 "
                    >
                      <p> name: {item.name} </p>
                      <p> number: {item.username} </p>
                      <div
                        id="lastMessage"
                        className="w-fit h-fit p-0.5 rounded-full mr-2"
                      >
                        {lastM.get(item.username)
                          ? lastM.get(item.username).text.length > 30
                            ? `${lastM
                                .get(item.username)
                                .text.substr(0, 30)}...`
                            : lastM.get(item.username).text
                          : "No Massage!"}
                      </div>
                      <p className="text-right text-xs">
                        {lastM.get(item.username)
                          ? new Date(
                              lastM.get(item.username).date
                            ).toLocaleString("fa-ir")
                          : ""}
                      </p>
                    </div>
                  </div>
                </div>
              ))
          : contacts?.map((item) => (
              <div
                key={item.username}
                className={`flex ${
                  informationChatter &&
                  informationChatter.username == item.username &&
                  "bg-slate-300"
                } hover:bg-slate-300 hover:cursor-pointer my-2 mx-0.5`}
              >
                <div
                  id="contact"
                  className=" w-full h-fit mb-1 flex"
                  onClick={() => setInformationChatter(item)}
                >
                  <svg
                    viewBox="0 0 32 32"
                    height="80"
                    width="70"
                    fill="white"
                    className=""
                  >
                    <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
                    <path d="M16,17a5,5,0,1,1,5-5A5,5,0,0,1,16,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,16,9Z" />
                    <path d="M25.55,24a1,1,0,0,1-.74-.32A11.35,11.35,0,0,0,16.46,20h-.92a11.27,11.27,0,0,0-7.85,3.16,1,1,0,0,1-1.38-1.44A13.24,13.24,0,0,1,15.54,18h.92a13.39,13.39,0,0,1,9.82,4.32A1,1,0,0,1,25.55,24Z" />
                  </svg>
                  <div
                    id="informationOfContact"
                    className=" w-full h-fit p-1.5 mt-1.5"
                  >
                    <p> name: {item.name} </p>
                    <p> number: {item.username} </p>
                    <div
                      id="numberOfmessage"
                      className="w-fit h-fit p-0.5  rounded-full mr-2"
                    >
                      {lastM.get(item.username)
                        ? lastM.get(item.username).text.length > 30
                          ? `${lastM.get(item.username).text.substr(0, 30)}...`
                          : lastM.get(item.username).text
                        : "No Massage!"}
                    </div>
                    <p className="text-right text-xs">
                      {lastM.get(item.username)
                        ? new Date(
                            lastM.get(item.username).date
                          ).toLocaleString("fa-ir")
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
}

export default Contacts;
