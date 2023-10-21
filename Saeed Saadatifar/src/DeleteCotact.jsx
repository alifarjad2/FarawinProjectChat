import { useRef, useState } from "react";
import farawin from "farawin";

export default function DeleteContact({
  setActive,
  setC,
  selectedContact,
  setSelect,
  num,
}) {
  const [successfullAdd, setSeccessfullAdd] = useState(false);

  let ref = useRef();
  return (
    <div
      className={`absolute flex justify-center items-center top-0 bottom-0 right-0 left-0 backdrop-blur-sm z-10`}
      onClick={(e) => {
        setActive(false);
        e.stopPropagation();
      }}
    >
      <div
        className={`relative flex items-center flex-col px-16 py-10 w-96 rounded-2xl bg-[#888890] z-20`}
        onClick={(e) => e.stopPropagation()}
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
        <div className="mb-14 text-2xl">{`آیا مایل هستید مخاطب "${selectedContact}" پاک شود؟`}</div>
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
            farawin.testDeleteContact(num, (res) => {
              ref.current.textContent = res.message;
              if (res.code == 200) {
                farawin.getContacts((e) => {
                  setC(
                    e.contactList.filter((e) => e.ref == localStorage.username)
                  );
                  setSelect(null);
                });
                setSeccessfullAdd(true);
              } else {
                setSeccessfullAdd(false);
              }
            });
          }}
          className={` py-4 px-12 border-[1px] border-[#21242B] rounded-lg mt-2 hover:bg-[#21242B] transition-[all,2s]`}
        >
          حذف
        </button>
      </div>
    </div>
  );
}
