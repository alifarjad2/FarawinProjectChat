import { FaLock, InputForm, useStore } from "@/components";
///////////////////////////////////
const Register = () => {
  const {
    isValidateRepPass,
    setIsValidateRepPass,
    repeatPassword,
    setRepeatPassword,
    password,
  } = useStore();
  //////////////////////////////// Set Repeat password in state
  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
    password === e.target.value
      ? setIsValidateRepPass(true)
      : setIsValidateRepPass(false);
  };
  //////////////////////////////// Return
  return (
    <>
      <InputForm
        label="تکرار رمز عبور"
        type="password"
        showEyeIcon={true}
        htmlFor="InputRepPass"
        value={repeatPassword}
        onInput={handleRepeatPassword}>
        <FaLock />
      </InputForm>
      <div className="flex items-center justify-center h-8 sm:h-6 sm:text-sm 2xl:h-8 2xl:text-base">
        {isValidateRepPass === null ? null : isValidateRepPass ? (
          <span className="font-bold text-green-700">
            تکرار رمز عبور صحیح میباشد !
          </span>
        ) : (
          <span className="font-bold text-red-700">
            تکرار رمز مطابقت ندارد !
          </span>
        )}
      </div>
    </>
  );
};

export default Register;
