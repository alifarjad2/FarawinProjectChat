import { useState } from "react";
import { Outlet, useLocation, Link, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  ButtonForm,
  farawin,
  useStore,
  spinner
} from "@/components";
/////////////////////////////////////////
const FormAuth = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const login = location == "/auth/login";
  const [isLoading,setIsLoading] = useState(null)
  const {
    phoneNumber,
    password,
    isValidatePhoneNum,
    isValidatePass,
    isValidateRepPass
  } = useStore();

  /////////////////////////////////////// Forget password alert
  const showMessage = () => {
    alert("این امکان هنوز پیاده سازی نشده است");
  };
  /////////////////////////////////////// Login
  const sendLoginData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await farawin.testLogin(phoneNumber, password, (response) => {
      const success = response.code == "200";
      if (success) {
        console.log("result from api -> ", response);
        localStorage.token = response.token;
        localStorage.username = phoneNumber;
        localStorage.name = response.user.name;
        navigate("/chat");
      } else console.error("error from api -> ", response);
      alert(response.message);
      setIsLoading(false);
    });
  };
  /////////////////////////////////////// SignUp
  const sendRegisterData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await farawin.testRegister(phoneNumber, password, "farawin", (response) => {
      const success = response.code == "200";
      if (success) {
        console.log("result from api -> ", response);
        navigate("/auth/login");
      } else console.error("error from api -> ", response);
      alert(response.message);
      setIsLoading(false);
    });
  };
  ////////////////////////////////////// Return
  return (
    <form className="animate-fade flex flex-col justify-center p-10 bg-white w-full h-full sm:h-auto sm-2xl:w-[380px] sm-2xl:max-w-[380px] sm:rounded-lg sm:px-8 sm:py-5 2xl:w-[430px] 2xl:py-5 2xl:px-8">
      <h1 className="text-3xl font-bold text-center mb-10 sm:mb-5 sm:text-2xl 2xl:text-3xl">
        {login ? "ورود" : "ثبت نام"}
      </h1>
      <Outlet />
      {login && (
        <span
          className="text-end cursor-pointer text-[#666]"
          onClick={showMessage}>
          فراموشی رمز عبور
        </span>
      )}
      {isLoading ? (
        <img
          src={spinner}
          className="w-18 h-14 mx-auto"
        />
      ) : null}
      {login ? (
        <ButtonForm
          text="ورود"
          onClick={sendLoginData}
          isEnabled={isValidatePass && isValidatePhoneNum}
        />
      ) : (
        <ButtonForm
          text="ثبت نام"
          onClick={sendRegisterData}
          isEnabled={isValidatePass && isValidatePhoneNum && isValidateRepPass}
        />
      )}

      <p className="text-center mt-8 mb-5 text-[#666] sm:mt-6 sm:mb-3 2xl:mt-8 2xl:mb-5">
        {login ? "ورود با" : "ثبت نام از طریق"}
      </p>
      {/*صرفا نمایشی تگ دیو گذاشتم وگرنه تگ لینک باید باشد */}
      <div className="flex w-full justify-center gap-3">
        <div className="flex items-center justify-center w-12 h-12 transition-all bg-[#e65f53] hover:bg-[#e98379] rounded-full">
          <FaGoogle className="h-6 w-6 text-white" />
        </div>
        <div className="flex items-center justify-center w-12 h-12 transition-all bg-[#1da1f2] hover:bg-[#75b6df] rounded-full">
          <FaTwitter className="h-6 w-6 text-white" />
        </div>
        <div className="flex items-center justify-center w-12 h-12 transition-all bg-[#3b5998] hover:bg-[#6687ce] rounded-full">
          <FaFacebookF className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="flex flex-col items-center mt-5 gap-2">
        <p className="text-[#666]">
          {login ? "ثبت نام نکرده اید ؟" : "حساب کاربری دارید؟"}
        </p>
        <Link
          to={login ? "/auth/register" : "/auth/login"}
          className="text-[#333] font-bold animate-bounce">
          {login ? "ثبت نام" : "ورود"}
        </Link>
      </div>
    </form>
  );
};
export default FormAuth;