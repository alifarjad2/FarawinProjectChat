import { formRegex } from "./myCode";
import ButtonForm from "./ButtonForm";
import InputDiv from "./InputDiv";

export default function RegisterPage({ form, setForm }) {
  const handleName = (event) => {
    let username = event.target.value;
    if (formRegex.username.test(username)) {
      setForm({ ...form, username: event.target.value, isNameValid: true });
    } else {
      setForm({ ...form, isNameValid: false });
    }
  };
  
  const handleMobile = (event) => {
    let mobile = event.target.value;
    mobile = farawin.toEnDigit(mobile);
    if (formRegex.mobile.test(mobile)) {
      setForm({ ...form, mobile: event.target.value, isMobileValid: true });
    } else {
      setForm({ ...form, isMobileValid: false });
    }
  };
  
  const handlePassword = (event) => {
    let password = event.target.value;
    if (formRegex.password.test(password)) {
      setForm({ ...form, password: event.target.value, isPassValid: true });
    } else {
      setForm({ ...form, isPassValid: false });
    }
  };
  
  const handleConfirm = (event) => {
    let confirm = event.target.value;
    if (confirm === form.password) {
      setForm({ ...form, isConfirm: true });
    } else {
      setForm({ ...form, isConfirm: false });
    }
  };

  async function sendData() {
    const resault = await farawin.testRegister(
      form.mobile,
      form.password,
      form.username
    );
    alert(resault.message);
  }

  return (
    <div>
      <InputDiv
        type="text"
        id="namefamily"
        label="نام و نام خانوادگی"
        onInput={handleName}
        error={form.isNameValid == false ? "!" : ""}
      />
      <InputDiv
        type="number"
        id="username"
        label="شماره موبایل"
        onInput={handleMobile}
        error={form.isMobileValid == false ? "!" : ""}
      />
      <InputDiv
        type="password"
        id="password"
        label="رمز عبور"
        onInput={handlePassword}
        error={form.isPassValid == false ? "!" : ""}
      />
      <InputDiv
        type="password"
        id="confirm-password"
        label="تایید رمز عبور"
        onInput={handleConfirm}
        error={form.isConfirm == false ? "!" : ""}
      />
      <div className="relative my-10">
        {!(
          form.isNameValid &&
          form.isPassValid &&
          form.isMobileValid &&
          form.isConfirm
        ) && (
          <div className="absolute top-0 right-0 w-full h-full bg-slate-50 opacity-70"></div>
        )}
        <ButtonForm text="ثبت نام" onClick={sendData} />
      </div>
    </div>
  );
}
