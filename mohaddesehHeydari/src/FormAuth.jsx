import { useState } from "react";
import farawin from "farawin";
import iconUser from "./assets/images/user.png";
import iconPassword from "./assets/images/password.png";
import toast, { Toaster } from "react-hot-toast";

export default function FormAuth(props) {
  //در صفحه لاکین هستیم یا رجیستر
  const [isLoginPage, setIsLoginPage] = useState(true);

  // وقتی دککه کلید شد رو حات لودینگ بریم تا اطلاعات از سمت سرور برگرده
  const [isLoding, setIsLoding] = useState(false);

  // بررسی وضعیت شماره همراه یا همان یوزر نیم
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidUsername, setisValidUsername] = useState(null);
  const handelUsername = (event) => {
    let phoneNumber = farawin.toEnDigit(event.target.value);
    setPhoneNumber(phoneNumber);
    if (farawin.mobileRegex.test(phoneNumber)) {
      setisValidUsername(true);
    } else {
      setisValidUsername(false);
    }
  };

  // بررسی وضعیت پسورد
  const [password, setPassword] = useState("");
  const [isValidPassword, setisValidPassword] = useState(null);
  const handelPassword = (event) => {
    let password = event.target.value;
    let regexPassword = /\d{8,}/;
    setPassword(password);
    if (regexPassword.test(password)) {
      setisValidPassword(true);
    } else {
      setisValidPassword(false);
    }
  };

  // بررسی وضعیت تکرار پسورد
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [isValidPasswordRepeat, setisValidPasswordRepeat] = useState(null);
  const handelPasswordRepeat = (event) => {
    const passwordRepeat = event.target.value;
    setPasswordRepeat(passwordRepeat);
    if (password == passwordRepeat) {
      setisValidPasswordRepeat(true);
    } else {
      setisValidPasswordRepeat(false);
    }
  };

  //بعد از زدن دکمه درخواست داخل فرم را بررسی می کند
  const handlAuth = async () => {
    setIsLoding(true);
    const phoneNumberSend = phoneNumber;
    const passwordSend = password;
    if (isLoginPage) {
      if (isValidUsername && isValidPassword && !isLoding) {
        farawin.testLogin(phoneNumberSend, passwordSend, (response) => {
          if (response.code === "200") {
            // props.changePage('Chat');
            toast(response.message, {
              icon: "👏",
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            });
            localStorage.setItem("username", phoneNumber);
            window.dispatchEvent(
              new Event("storage", {
                key: "username",
              })
            );
            // localStorage.username = phoneNumber;
          } else {
            toast.error(response.message);
          }
          setIsLoding(false);
        });
      } else {
        setAuth((p) => {
          return { ...p, errorLogin: "Unsuccessful Login" };
        });
      }
    } else {
      if (
        isValidUsername &&
        isValidPassword &&
        isValidPasswordRepeat &&
        !isLoding
      ) {
        farawin.testRegister(
          phoneNumberSend,
          passwordSend,
          "Mohaddeseh",
          (response) => {
            if (response.code === "200") {
              setIsLoginPage(!isLoginPage);
              toast.success(response.message);
            } else {
              toast.error(response.message);
            }
            setIsLoding(false);
          }
        );
      } else {
        setAuth((p) => {
          return { ...p, errorRegister: "Unsuccessful Register" };
        });
      }
    }
  };

  //پیام خطا لاگین و ثبت نام وقتی هنوز اطلاعات درستی وارد نشده
  const [auth, setAuth] = useState({
    errorLogin: "",
    errorRegister: "",
  });

  return (
    <div className="h-full py-5 flex justify-center items-center bg-cover bg-[url('./assets/images/bg.jpg')]">
      <div className="w-80 h-full bg-white rounded-md pt-11 px-6">
        <h1 className="text-center font-extrabold pb-2 text-2xl">
          {isLoginPage ? "Login" : "Sign Up"}
        </h1>

        <InputBox
          label={"username"}
          type={"text"}
          placeholder={"Type your username"}
          onChange={handelUsername}
          isValid={isValidUsername}
          value={phoneNumber}
          errorText="Username is your phoneNumber start whit 09 and must be 11 characters"
        />
        <InputBox
          label={"password"}
          type={"password"}
          placeholder={"Type your password"}
          onChange={handelPassword}
          isValid={isValidPassword}
          value={password}
          errorText="minimum length must be 8 characters"
        />
        {!isLoginPage && (
          <InputBox
            label={"passwordRepeat"}
            type={"password"}
            placeholder={"Repeat your password"}
            onChange={handelPasswordRepeat}
            isValid={isValidPasswordRepeat}
            value={passwordRepeat}
            errorText="Repeat is not correct"
          />
        )}
        {isLoginPage && <ForgotPass />}

        {/* برای انیمیشن دکمه در فایل tailwind.config.js نیز تغییراتی ایجاد کردم */}
        <button
          className={`w-full rounded-full text-white py-2.5 mt-7 text-xs 
        transition-all duration-500 bg-gradient-to-r to-[#00dbde] via-[#fc00ff] from-[#00dbde] bg-size-200 bg-pos-0 hover:bg-pos-100 
        ${
          isLoginPage
            ? isValidUsername && isValidPassword
              ? "opacity-100"
              : "opacity-50"
            : isValidUsername && isValidPassword && isValidPasswordRepeat
            ? "opacity-100"
            : "opacity-50"
        } 
        `}
          onClick={handlAuth}
        >
          {isLoding ? "Loding..." : isLoginPage ? "LOGIN" : "SIGN UP"}
        </button>
        <p className="mt-2 text-xs text-red-500 text-center">
          {isLoginPage ? auth.errorLogin : auth.errorRegister}{" "}
        </p>
        <p className="mx-2 w-full text-center text-xs text-gray-500 mt-7">
          Or {isLoginPage ? "Sign Up" : "Login"} Using
        </p>
        <button
          className="mx-2 w-full text-center text-xs text-gray-900 hover:text-[#a64bf4]"
          onClick={() => {
            setIsLoginPage(!isLoginPage);
          }}
        >
          {isLoginPage ? "Sign Up" : "Login"}
        </button>
      </div>
    </div>
  );
}

// کامپوننت برای تولید دکمه فراموشی رمز
function ForgotPass() {
  return (
    <p
      className="text-xs cursor-pointer text-gray-500 text-right mt-4 hover:text-[#a64bf4]"
      onClick={() => {
        alert("This possibility has not yet been implemented");
      }}
    >
      Forgot password?
    </p>
  );
}

//تولید اینپوت
const InputBox = ({
  label,
  type,
  placeholder,
  onChange,
  isValid,
  value,
  errorText,
}) => {
  return (
    <div className="mt-2">
      <label className="text-xs ml-2 text-gray-900" htmlFor={label}>
        {label}
      </label>
      <div className="flex items-center border-b">
        {type === "text" ? (
          <img src={iconUser} className="w-4 h-4" />
        ) : (
          <img src={iconPassword} className="w-4 h-4" />
        )}
        <input
          className="flex-1 p-2 text-sm outline-none text-zinc"
          id={label}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
      {isValid === false && <p className="text-xs text-red-500">{errorText}</p>}
    </div>
  );
};
