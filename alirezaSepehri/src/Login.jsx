import { formRegex } from "./myCode";
import InputDiv from "./InputDiv";
import ButtonForm from "./ButtonForm";

// برای تولید کامپوننت لاگین
export default function Login({ form, setForm, setPage, setUser }) {
  const handleMobile = (event) => {
    let mobile = event.target.value;
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

  async function sendData() {
    const result = await farawin.testLogin(form.mobile, form.password);
    if (result.code == 200) {
      setPage("chatPage");
      setUser(result.user)
    }
    alert(result.message);
  }

  return (
    <div>
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
      <button className="text-[10px] text-teal-500 mt-2">
        رمز عبور را فراموش کرده ام!
      </button>
      <div className="relative my-10">
        {!(form.isMobileValid && form.isPassValid) && (
          <div className="absolute top-0 right-0 w-full h-full bg-slate-50 opacity-70"></div>
        )}
        <ButtonForm text="ورود" onClick={sendData} />
      </div>
    </div>
  );
}