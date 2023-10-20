import farawin from "farawin";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaMobile,
  FaUser,
  ButtonForm,
  InputChat,
  spinner
} from "@/components";
//////////////////////////////
const AddContact = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [ isLoading, setIsLoading ] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [isValidateTel,setIsValidateTel]=useState(null)
  const [isValidateName,setIsValidateName]=useState(null)
  const classButton = "bg-gray-500 rounded-lg h-8 text-sm";
  ////////////////////////////   Set phoneNumber in state
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    farawin.mobileRegex.test(e.target.value)
      ? (setIsValidateTel(true))
      : (setIsValidateTel(false));
  };
  /////////////////////////// Set userName in state
  const handleUserName = (e) => {
    setUserName(e.target.value);
    e.target.value.length >= 3
      ? (setIsValidateName(true))
      : (setIsValidateName(false));
  };
  /////////////////////////// AddContact
  const sendAddContactData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await farawin.testAddContact(phoneNumber, userName, (response) => {
      const success = response.code == "200";
      if (success) {
        console.log("result from api -> ", response);
        navigate("/chat");
      } else console.error("error from api -> ", response);
      alert(response.message);
      setIsLoading(false);
    });
  };
  ////////////////////////// EditContact
  const sendEditContactData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await farawin.testEditContact(phoneNumber, userName, (response) => {
      const success = response.code == "200";
      if (success) {
        console.log("result from api -> ", response);
        navigate("/chat");
      } else console.error("error from api -> ", response);
      alert(response.message);
      setIsLoading(false);
    });
  };
  ////////////////////////// DeleteContact
  const sendDeleteContactData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await farawin.testDeleteContact(phoneNumber, (response) => {
      const success = response.code == "200";
      if (success) {
        console.log("result from api -> ", response);
        navigate("/chat");
      } else console.error("error from api -> ", response);
      alert(response.message);
      setIsLoading(false);
    });
  };
  ////////////////////////// Close Modal
  const closeModal = (e) => {
    e.target.id === "outsideForm" && navigate("/chat");
  };
  ////////////////////////// Return
  return (
    <div
      id="outsideForm"
      className="w-full h-full flex items-center justify-center fixed z-10  backdrop-blur-md"
      onClick={closeModal}>
      <form className="fixed flex flex-col bg-[#2E333D] text-white p-4 rounded-2xl border-[#d3d4d6] border-x-8">
        <h4 className="text-sm text-center mb-5">
          {location === "/chat/addContact"
            ? "فرم افزودن مخاطب"
            : location === "/chat/editContact"
            ? "فرم ویرایش مخاطب"
            : location === "/chat/deleteContact"
            ? "فرم حذف مخاطب"
            : ""}
        </h4>
        <InputChat
          label="نام کاربری"
          type="tel"
          value={phoneNumber}
          htmlFor="InputUserName"
          placeholder="0912345678"
          onInput={handlePhoneNumber}>
          <FaMobile />
        </InputChat>
        <div className="flex items-center justify-center h-4 py-3 text-xs mb-2">
          {isValidateTel === null ? null : isValidateTel ? (
            <span className="font-bold text-green-700">
              فرمت شماره موبایل صحیح است !
            </span>
          ) : (
            <span className="font-bold text-red-700">
              شماره با 09 شروع و 11 رقم میباشد !
            </span>
          )}
        </div>
        {location === "/chat/addContact" || location === "/chat/editContact" ? (
          <>
            <InputChat
              label="نام"
              type="tel"
              value={userName}
              htmlFor="InputName"
              onInput={handleUserName}>
              <FaUser />
            </InputChat>
            <div className="flex items-center justify-center h-2 py-3 text-xs mb-4">
              {isValidateName === null ? null : isValidateName ? (
                <span className="font-bold text-green-700">
                  تعداد کاراکتر صحیح میباشد !
                </span>
              ) : (
                <span className="font-bold text-red-700">
                  تعداد حروف باید بیشتر از 3 باشد !
                </span>
              )}
            </div>
          </>
        ) : null}

        {isLoading ? (
          <div className="h-10 w-full">
            <img
              src={spinner}
              className="w-14 h-10 mx-auto "
            />
          </div>
        ) : null}
        {location === "/chat/addContact" ? (
          <ButtonForm
            text="افزودن"
            classButton={classButton}
            onClick={sendAddContactData}
            isEnabled={isValidateName && isValidateTel}
          />
        ) : location === "/chat/editContact" ? (
          <ButtonForm
            text="ویرایش"
            classButton={classButton}
            onClick={sendEditContactData}
            isEnabled={isValidateName && isValidateTel}
          />
        ) : location === "/chat/deleteContact" ? (
          <ButtonForm
            text="حذف"
            classButton={classButton}
            onClick={sendDeleteContactData}
            isEnabled={isValidateTel}
          />
        ) : (
          ""
        )}
      </form>
    </div>
  );
};
export default AddContact;
