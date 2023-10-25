import React, { useState, useEffect } from "react";
import CloseIcon from "../assets/CloseIco.png";
const DeleteMokhatab = ({ closing }) => {
  const [mobile, setMobile] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(null);
  const [refreshEdit, setRefreshEdit] = useState("");
  useEffect(() => {
    async function Delete() {
      const body = JSON.stringify({
        username: mobile,
      });

      const response = await fetch(
        "https://farawin.iran.liara.run/api/contact",
        {
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.token,
          },
          body: body,
          method: "Delete",
        }
      );
    }

    if (refreshEdit) {
      Delete();
    }
    console.log(refreshEdit);
  }, [refreshEdit]);

  const handleMobile = (event) => {
    var addPhoneNumber = event.target.value;
    const mobileRegex = /^09([0-9]{9})$/;
    addPhoneNumber = farawin.toEnDigit(addPhoneNumber);
    if (addPhoneNumber === "") {
      setMobile("");
      setIsValidPhone(null);
    } else if (mobileRegex.test(addPhoneNumber)) {
      setMobile(addPhoneNumber);
      setIsValidPhone(true);
    } else {
      setMobile(addPhoneNumber);
      setIsValidPhone(false);
    }
  };

  const handleSend = () => {
    setRefreshEdit((c) => c + 1);
    console.log(refreshEdit);
  };
  let isDisabled = !isValidPhone;
  return (
    <div className="  w-[300px] h-[300px] bg-[#2E333D] rounded-lg flex flex-col items-center ">
      {
        <>
          <button
            className=" transition-all duration-300 w-10 rounded-lg hover:bg-red-400 hover:text-white text-lg font-bold"
            onClick={() => closing(false)}
          >
            <img src={CloseIcon} alt="" />
          </button>
          <div className="flex flex-col items-start p-1 w-11/12 flex-1">
            <label className="w-fit" htmlFor="">
              شماره تلفن :
            </label>
            <input
              onChange={handleMobile}
              value={mobile}
              type="text"
              className="outline-none border-b-2 w-full border-slate-300 bg-[#2E333D] p-1 mt-2 "
            />
            {isValidPhone === null ? null : isValidPhone ? (
              //  تگ پی یک تگ پاراگراف و مخصوص نمایش متن است
              <p className="text-green-500 text-xs">شماره تلفن درست است</p>
            ) : (
              <p className="text-xs text-red-500">
                شماره تلفن غلط است باید با 09 آغاز و دارای 11 رقم باشد.
              </p>
            )}
          </div>
          <button
            disabled={isDisabled}
            onClick={handleSend}
            className={`cursor-pointer p-1 rounded-lg mt-2 border-2 transition-all duration-300 hover:bg-green-400  hover:text-white text-lg font-bold mb-2 w-11/12 ${
              isDisabled ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            حذف
          </button>
        </>
      }
    </div>
  );
};

export default DeleteMokhatab;
