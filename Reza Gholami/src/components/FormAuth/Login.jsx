import { FaLock, FaUser, InputForm, useStore, farawin } from "@/components";
///////////////////////////////////////////////
const Login = () => {
  const {
    setPhoneNumber,
    setPassword,
    phoneNumber,
    password,
    isValidatePhoneNum,
    setIsValidatePhoneNum,
    isValidatePass,
    setIsValidatePass,
  } = useStore();
  ///////////////////////////////////////////// Set phoneNumber in state
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    if (farawin.mobileRegex.test(e.target.value)) {
      setIsValidatePhoneNum(true);
    } else {
      setIsValidatePhoneNum(false);
    }
  };
  /////////////////////////////////////////// Set password in state
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length >= 8) {
      setIsValidatePass(true);
    } else {
      setIsValidatePass(false);
    }
  };
  /////////////////////////////////////////// Return
  return (
    <>
      <InputForm
        label="نام کاربری"
        type="tel"
        value={phoneNumber}
        htmlFor="InputUserName"
        placeholder="0912345678"
        onInput={handlePhoneNumber}>
        <FaUser />
      </InputForm>
      <div className="flex items-center justify-center h-8 sm:h-6 sm:text-sm 2xl:h-8 2xl:text-base">
        {isValidatePhoneNum === null ? null : isValidatePhoneNum ? (
          <span className="font-bold text-green-700">
            فرمت شماره موبایل صحیح است !
          </span>
        ) : (
          <span className="font-bold text-red-700">
            شماره موبایل با 09 شروع و 11 رقم میباشد !
          </span>
        )}
      </div>
      <InputForm
        label="رمز عبور"
        value={password}
        type="password"
        htmlFor="InputPass"
        showEyeIcon={true}
        onInput={handlePassword}>
        <FaLock />
      </InputForm>
      <div className="flex items-center justify-center h-8 sm:h-6 sm:text-sm 2xl:h-8 2xl:text-base">
        {isValidatePass === null ? null : isValidatePass ? (
          <span className="font-bold text-green-700">
            فرمت رمز ورود صحیح است !
          </span>
        ) : (
          <span className="font-bold text-red-700">
            پسورد 8 رقمی وارد کنید !
          </span>
        )}
      </div>
    </>
  );
};

export default Login;
