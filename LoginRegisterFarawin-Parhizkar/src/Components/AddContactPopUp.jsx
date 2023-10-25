import React, { useState, useEffect } from "react";
import CloseIcon from "../assets/CloseIco.png";
const AddPopUp = ({ closing, Toggle }) => {
  const [mobile, setMobile] = useState("");
  const [mokhatab, setMokhatab] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(null);
  const [isValidName, setIsValidName] = useState(null);
  const [refreshAdd, setRefreshAdd] = useState("");
  useEffect(() => {
    async function AddMokhatab() {
      const body = JSON.stringify({
        username: mobile,
        name: mokhatab,
      });

      const response = await fetch(
        "https://farawin.iran.liara.run/api/contact",
        {
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.token,
          },
          body: body,
          method: "POST",
        }
      );
    }

    if (refreshAdd) {
      AddMokhatab();
      Toggle((c) => c + 1);
    }
    console.log(refreshAdd);
  }, [refreshAdd]);

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

  const handleMokhatab = (event) => {
    const contactName = event.target.value;
    const regex = /^.{3,}$/;
    if (contactName === "") {
      setMokhatab("");
      setIsValidName(null);
    } else if (regex.test(contactName)) {
      setMokhatab(contactName);
      setIsValidName(true);
    } else {
      setMokhatab(contactName);
      setIsValidName(false);
    }
  };

  const handleSend = () => {
    setRefreshAdd((c) => c + 1);
    console.log(refreshAdd);
  };
  let isDisabled = !isValidName || !isValidPhone;
  return (
    <div className="w-[300px] h-[300px] bg-[#2E333D] rounded-lg flex flex-col items-center ">
      {
        <>
          <button
            className=" transition-all duration-300 w-10 rounded-lg hover:bg-red-400 hover:text-white text-lg font-bold"
            onClick={() => closing(false)}
          >
            <img src={CloseIcon} alt="" />
          </button>
          <div className="flex flex-col items-start p-1 w-11/12">
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
          <div className="flex flex-col items-start w-11/12 flex-1">
            <label className="w-fit" htmlFor="">
              {" "}
              اسم مخاطب :
            </label>
            <input
              value={mokhatab}
              onChange={handleMokhatab}
              type="text"
              className="outline-none border-b-2 w-full border-slate-300 bg-[#2E333D] p-1 mt-2 "
            />
            {isValidName === null ? null : isValidName ? (
              //  تگ پی یک تگ پاراگراف و مخصوص نمایش متن است
              <p className="text-green-500 text-xs">درست وارد شده است</p>
            ) : (
              <p className="text-xs text-red-500">
                اسم باید بیشتر از 3 حرف داشته باشد.
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
            ثبت
          </button>
        </>
      }
    </div>
  );
};

export default AddPopUp;
