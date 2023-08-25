import { useEffect, useRef, useState } from "react";
import farawin from "farawin";

export default function EditContact({ setActive, nam, num, setC }) {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [firstUseName, setFirstUseName] = useState(true);
  const [successfullAdd, setSeccessfullAdd] = useState(false);

  useEffect(() => {
    setName(nam);
    setUsername(num);
  }, []);

  let nameValid = () => {
    if (name.length < 3) {
      return false;
    }
    return true;
  };
  let ref = useRef();
  let inp = useRef();
  return (
    <div
      className={`absolute flex justify-center items-center top-0 bottom-0 right-0 left-0 backdrop-blur-sm z-10`}
    >
      <div
        className={`relative flex items-center flex-col px-16 py-10 w-96 rounded-2xl bg-[#888890] z-20`}
      >
        {
          //#region closeIcon
        }
        <svg
          onClick={() => {
            setActive(false);
          }}
          className="w-6 h-6 transition-[all,2s] text-[#21242B] absolute cursor-pointer hover:text-[#FAFBFD] left-4 top-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 18"
        >
          <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
          <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
        </svg>
        {
          //#endregion
        }
        <div className="mb-14 text-2xl"> ویرایش مخاطب </div>
        {
          //#region FirstInput
        }
        <div className="relative w-full">
          <input
            onInput={(e) => {
              ref.current.textContent = "";
              setUsername(e.target.value);
            }}
            maxLength={"11"}
            type="tel"
            id="floating_outlined"
            className="focus:placeholder-[#FAFBFD] block px-2.5 pb-2.5 text-[#FAFBFD] pt-4 w-full text-sm bg-transparent placeholder-transparent rounded-lg border-[#21242B] border-[1px] focus:outline-none peer"
            value={username}
            disabled
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-[#FAFBFD] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#888890] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-1"
          >
            شماره موبایل
          </label>
        </div>
        {
          //#endregion
        }
        {
          //#region secondInput
        }
        <div className="relative w-full mt-5">
          <input
            autoFocus
            ref={inp}
            onInput={(e) => {
              ref.current.textContent = "";
              setFirstUseName(false);
              setName(e.target.value);
            }}
            type="text"
            id="floating_outlined"
            className="focus:placeholder-[#FAFBFD] placeholder-transparent block px-2.5 pb-2.5 text-[#FAFBFD] pt-4 w-full text-sm bg-transparent rounded-lg border-[#21242B] border-[1px] focus:outline-none peer"
            value={name}
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-[#FAFBFD] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#888890] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-1"
          >
            نام
          </label>
          <label
            htmlFor="floating_outlined"
            className={`${
              nameValid() || firstUseName ? "hidden" : ""
            } absolute text-red-500 text-sm z-10 origin-[0] bg-[#888890] px-2 scale-100 top-2 left-1 -translate-y-4`}
          >
            اشتباه است!
          </label>
        </div>
        {
          //#endregion
        }
        {
          //#region Peygham
        }
        <p
          ref={ref}
          className={`${
            successfullAdd ? "text-green-500" : "text-red-500"
          } mt-10`}
        ></p>
        {
          //#endregion
        }
        <button
          onClick={() => {
            if (nameValid()) {
              farawin.testEditContact(username, name, (res) => {
                ref.current.textContent = res.message;
                if (res.code == 200) {
                  farawin.getContacts((e) => {
                    setC(e.contactList.filter((e) => e.ref == localStorage.username));
                  });
                  setSeccessfullAdd(true);
                } else {
                  setSeccessfullAdd(false);
                }
              });
            }
          }}
          className={`${
            !nameValid() && "cursor-not-allowed"
          } py-4 px-12 border-[1px] border-[#21242B] rounded-lg mt-2 ${
            !nameValid() && "opacity-30"
          } ${nameValid() && "hover:bg-[#21242B]"} transition-[all,2s]`}
        >
          تغییر
        </button>
      </div>
    </div>
  );
}
