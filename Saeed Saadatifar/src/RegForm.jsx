import farawin from "farawin";
import { useState } from "react";

export default function RegForm() {
  // #region States
  const [userName, setUsename] = useState("");
  const [password, setPassword] = useState("");
  const [verificationPass, setVerificationPass] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);
  const [isFirstUserInp, setIsFirstUserInp] = useState(true);
  const [isFirstPassInp, setIsFirstPassInp] = useState(true);
  const [isFirstRepeatPassInp, setIsFirstRepeatPassInp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  // #endregion

  // #region Functions
  let userNameValid = () => {
    if (!farawin.mobileRegex.test(userName)) {
      return false;
    }
    return true;
  };
  let passwordValid = () => {
    if (password.length < 8) {
      return false;
    }
    return true;
  };
  let repeatPasswordValid = () => {
    if (verificationPass != password || verificationPass == "") {
      return false;
    }
    return true;
  };

  let buttonValid = () => {
    if (passwordValid() && repeatPasswordValid() && userNameValid()) {
      return true;
    }
    return false;
  };

  let togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  let toggleRepeatPasswordVisibility = () => {
    setIsRepeatPasswordVisible((prevState) => !prevState);
  };
  // #endregion

  return (
    <>
      <h1 className="font-bold text-3xl mb-16">Register</h1>
      {
        //#region UserName
      }

      <div className="flex self-start w-full">
        <label htmlFor="Username" className="grow w-max opacity-70 self-start">
          Username:
        </label>
        <span
          className={
            userNameValid()
              ? "hidden"
              : isFirstUserInp
              ? "hidden"
              : "text-[12px] text-red-500 self-end italic"
          }
        >
          Wrong
        </span>
      </div>
      <input
        id="Username"
        maxLength={11}
        type="text"
        className="focus:outline-none border-black border-b-[1px] w-full border-opacity-30"
        placeholder="09111111111"
        onInput={(event) => {
          setIsFirstUserInp(false);
          setUsename(event.target.value);
        }}
      />
      {
        //#endregion
      }
      {
        //#region Password
      }
      <div className="flex self-start w-full mt-9">
        <label htmlFor="Password" className="grow w-max opacity-70 self-start">
          Password:
        </label>
        <span
          className={
            passwordValid()
              ? "hidden"
              : isFirstPassInp
              ? "hidden"
              : "text-[12px] text-red-500 self-end italic"
          }
        >
          Wrong
        </span>
      </div>
      {
        //#region PasswordBox
      }
      <div className="flex w-full border-black border-b-[1px]  border-opacity-30">
        <input
          id="Password"
          maxLength={16}
          type={isPasswordVisible ? "text" : "password"}
          className="focus:outline-none w-full"
          placeholder="Type At Least 8 Characters"
          onInput={(event) => {
            setIsFirstPassInp(false);
            setPassword(event.target.value);
          }}
        />
        <button
          className="flex items-center ml-1 text-gray-600"
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          )}
        </button>
      </div>
      {
        //#endregion
      }
      {
        //#endregion
      }
      {
        //#region RepeatPassword
      }
      <div className="flex self-start w-full mt-9">
        <label
          htmlFor="repeatPassword"
          className="grow w-max opacity-70 self-start"
        >
          RepeatPassword:
        </label>
        <span
          className={
            repeatPasswordValid()
              ? "hidden"
              : isFirstRepeatPassInp
              ? "hidden"
              : "text-[12px] text-red-500 self-end italic"
          }
        >
          Wrong
        </span>
      </div>
      {
        //#region RepeatPasswordBox
      }
      <div className="flex w-full border-black border-b-[1px]  border-opacity-30">
        <input
          id="repeatPassword"
          type={isRepeatPasswordVisible ? "text" : "password"}
          className="focus:outline-none w-full"
          placeholder="Type Your Password Again"
          onInput={(event) => {
            setIsFirstRepeatPassInp(false);
            setVerificationPass(event.target.value);
          }}
        />
        <button
          className="flex items-center ml-1 text-gray-600"
          onClick={toggleRepeatPasswordVisibility}
        >
          {isRepeatPasswordVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          )}
        </button>
      </div>
      {
        //#endregion
      }
      {
        //#endregion
      }
      <a href="blank" className="mt-2 self-end opacity-50">
        Forgot Password?
      </a>
      {
        //#region submitButton
      }
      <button
        className={
          buttonValid()
            ? "mt-24 text-white py-3 rounded-3xl w-full cursor-pointer opacity-[0.7] hover:opacity-90 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] hover:from-[#fc00ff] hover:to-[#00dbde]"
            : "mt-24 text-white py-3 rounded-3xl w-full opacity-[0.42] cursor-not-allowed bg-gradient-to-r from-[#00dbde] to-[#fc00ff]"
        }
        onClick={() => {
          if (buttonValid()) {
            setIsLoading(true);
            farawin.testRegister(
              userName,
              password,
              "Saeed Saadatifar",
              (response) => {
                //response is object like {code: string, message: string}
                //if code is '200' mean success
                //else mean error!
                //Goodluck:)

                const success = response.code == "200";
                // این قسمت رو خودم تغییر دادم که اگر دکمه ثبت نام موفقیت آمیز بود پیام رو آلرت کنه و اگر غلط بود خطا را زیر دکمه ثبت نام چاپ کنه
                if (success) {
                  console.log("result from api -> ", response);
                } else {
                  console.error("error from api -> ", response);
                }
                alert(response.message);
                setIsLoading(false);
              }
            );
          }
        }}
      >
        <div role="status" className={isLoading ? "ml-[154px]" : "hidden"}>
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 animate-spin fill-white"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
        {!isLoading && 'Register'}
      </button>
      {
        //#endregion
      }
    </>
  );
}
