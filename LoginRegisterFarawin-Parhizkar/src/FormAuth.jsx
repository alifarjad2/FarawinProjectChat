// مرحله 1 : نوشتن امپورت فایل های مورد نیاز که از خارجه فایل جی اس ایکس فعلی می آیند
// امپورت یک دستو است که فایل های اکسپورت شده در جی  اس یا جی اس ایکس و بقیه پسوند هارا به داخل فایل ما منتقل میکند تا از آن استفاده کنیم
import farawin from "farawin";
import Input from "postcss/lib/input";
import { useState } from "react";
import "./App.css";
// 1- کاربر بتونه درست لاگین و رجیستر کنه
// ۲- کارکرد صحیح سناریو های گفته شده

// Export defaults are used to export a single module, variable, expression, or function from a JavaScript file so that it can be used in any other file of either the same program or even in an entirely different program.
// مرحله 1 : یک فانکشن اصلی که دارنده تمام کامپوننت هاست را به داخل فایل اصلی جی اس ایکس خود صادر میکنم
export default function FormAuth() {
  // مرحله 3 : در اینجا با استفاده از هوک چک و تابع زیرش چک میکنیم آیا صفحه در لاگین است یا ریجیستر که بتوانیم وجود یک سری المنت ها و رفتار هارا کم یا اضافه کنیم
  const [isLoginPage, setIsLoginPage] = useState(true);
  const handleSwitchPage = () => {
    setIsLoginPage(!isLoginPage);
  };
  // مرحله 3 : در این قسمت با استفاده از یک هوک و تابع زیرش اسم وارد شده از کاربر را گرفته و ذخیره میکنم چون قانون خاصی برای نوشتن اسم نیست شرطی برای آن نگذاشته ام
  const [name, setName] = useState("");
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  // What is the useState Hook? useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
  //  مرحله 2 : در این قسمت یک یوز استیت استفاده کردم تا بتونم کنترل شماره تلفن ورودی را چک بکنم با قوانین مربوطه وارد شده است همچنین یک یوز استیت برای کنترل دکمه بکار برده ام که مقادیر بولین در خود ذخیره میکند
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(null);
  // مرحله 2 : در این قسمت یک تابع تعریف کردم تا با استفاده از یوز استیت های بالا 3 شرط را برای درستی شماره تلفن و نشان دادن پیغام مربوطه چک بکند
  const handleChange = (event) => {
    var phoneNumber = event.target.value;
    const mobileRegex = farawin.mobileRegex;
    phoneNumber = farawin.toEnDigit(phoneNumber);
    // ایف کلمه کلیدی ساختتن یک بلاک شرط است و با الس ایف میتوان شروط متعددی را پشت سر هم چک کرد
    // در اینجا سه شرط خالی بودن درست بودن طبق ریجکس فراوین و غلط بودن چک میشود
    if (phoneNumber === "") {
      setPhoneNumber("");
      setIsValid(null);
    } else if (mobileRegex.test(phoneNumber)) {
      setPhoneNumber(phoneNumber);
      setIsValid(true);
    } else {
      setPhoneNumber(phoneNumber);
      setIsValid(false);
    }
  };
  // مرحله 2 : در اینجا نیز دو هوک برای چک کردن درستی پسورد که ریجکس آن را از اینترنت و کنترل دکمه ثبت اطالاعات بوجود آورده ام
  const [password, setPassword] = useState("");
  const [isValidPass, setIsValidPass] = useState(null);
  // تابع زیر چک میکند که پسورد ورودی طبق ریجکس مربوطه درست است یا خیر
  const handleChangePass = (event) => {
    const password = event.target.value;
    // Strong password regex: minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d#@$!%*?&]{8,}$/;
    const isValidPass = passwordRegex.test(password);
    // سه حلقه شرط خالی بودن درستی و غلط بودن رمز عبور ورودی را چک میکنند
    if (password === "") {
      setPassword("");
      setIsValidPass(null);
    } else if (passwordRegex.test(password)) {
      setPassword(password);
      setIsValidPass(true);
    } else {
      setPassword(password);
      setIsValidPass(false);
    }
  };
  // مرحله 3 : در این قسمت با استفاده از یک هوک و تابع زیرش و یک هوک دیگر مقادیر تکرار رمز عبور را در صفحه ریجیستر چک میکنم که اولا با رمز عبور یکی باشد دوما رفتار دکمه ثبت را کنترل کند
  const [confirmPass, setConfirmPass] = useState("");
  const [isConfirmPass, setIsconfirmPass] = useState(null);
  const handleConfPass = (event) => {
    const mainPass = password;
    const confPass = event.target.value;
    if (confPass == "") {
      setConfirmPass("");
      setIsconfirmPass(null);
    } else if (mainPass == confPass) {
      setConfirmPass(confPass);
      setIsconfirmPass(true);
    } else {
      setConfirmPass(confPass);
      setIsconfirmPass(false);
    }
  };
  // مرحله 4 : اخرین مرحله متعلق به رفتار دکمه ثبت اطلاعات است که توسط شرط چک میکند اگر صفحه لاگین بود اطالعات لاگین را منتقل و اگر صفحه ریجیستر بود اطالعات ریجیستری را منتقل و ثبت کند
  // از آنجا که اطلاعات وقتی منتقل میشود تابع از سمت ای پی آی پیغامی برمیگرداند که یک پرامیس است
  // A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them.
  // به دلیل برگرداندن پرامیس توسط سرور ما باید از توابع آسینک استفاده کنیم
  // Async: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a value.
  // باعث میشود تا همزمان با اجرای دام و کار های دیگر این تابع نیز اجرا گردد و کار خودش را بکند و معطل نباشد
  const handleLogin = async () => {
    if (isLoginPage) {
      const telePhoneSend = phoneNumber;
      const passwordSend = password;
      // await is usually used to unwrap promises by passing a Promise as the expression . Using await pauses the execution of its surrounding async function until the promise is settled (that is, fulfilled or rejected). When execution resumes, the value of the await expression becomes that of the fulfilled promise.
      // در اینجا با استفاده از ایویت ما به تابع میگوییم تا زمان رسیدن پیغام از فراوین دست نگه دار و وقتی پرامیس تحویل داده شد دوباره کار خود را از سر بگیر
      const result = await farawin.testLogin(telePhoneSend, passwordSend);
      console.log(telePhoneSend + " " + passwordSend);

      //در این قسمت اگر کاربر ورود درست داشت و توکن ثبت شد پیج را برای ورود به صفحه چت ریلود میکند
      //اضافه کردن یوزر نیم یا شماره همراه به عنوان یک توکن به لوکال استورج
      if(result.code == 200){
        localStorage.username = telePhoneSend;
        location.reload();
      }else{
        alert(result.message);
      };
    } else {
      const username = name;
      const telePhoneSend = phoneNumber;
      const passwordSend = password;
      // await is usually used to unwrap promises by passing a Promise as the expression . Using await pauses the execution of its surrounding async function until the promise is settled (that is, fulfilled or rejected). When execution resumes, the value of the await expression becomes that of the fulfilled promise.
      // در اینجا با استفاده از ایویت ما به تابع میگوییم تا زمان رسیدن پیغام از فراوین دست نگه دار و وقتی پرامیس تحویل داده شد دوباره کار خود را از سر بگیر
      const resault = await farawin.testRegister(
        telePhoneSend,
        passwordSend,
        username
      );
      console.log(name + " " + telePhoneSend + " " + passwordSend);
      alert(resault.message);
    }
  };
  // مرحله 2 : در اینجا توسط متغیر زیر و با استفاده از استیت مربوطه چک میشود آیا رمزو موبایل درستی وارد شده است تا طبق آن دکمه فعال یا غیر فعال شود
  const isLoginDisabled = !isValid || !isValidPass;
  // مرحله 3 : این متغیر برای کنترل رفتار دکمه ثبت است که تا تکمیل درست مقادیر خواسته شده دکمه غیر فعال بماند
  const isRegisterDisabled = !isValid || !isValidPass || !isConfirmPass;
  // تابعی برای نشان دادن یک پیام با کلیک بر روی فراموشی رمز عبور ساخته ام
  const forgetPasword = () => {
    alert("در دست احداث :)");
  };
 
  // The return method in React is a way to return data from a component. It returns the data that was passed into the component, which the parent component can then use. The return method is generally used when you want to return a single value from a component.
  // مرحله 1 : نوشتن ریترن برای گرفتن خروجی و ساختن دام ری اکت در اینجا ما کار بادی را شبیه سازی میکنیم و ری اکت خروجی های مارا به دام اچ تی ام ال منتقل میکند
  return (
    // مرحله 1 : در داخل ریترن باید یک دیو اصلی یا <> باشد که تمام دام در آن قرار بگیرد
    // دیو یک نوع تگ برای بخش بندی است که خواص مربوط به خود را دارد
    <div
      className="w-screen h-[100vh] flex justify-center items-center"
      style={{
        background: `url(
        https://colorlib.com/etc/lf/Login_v4/images/bg-01.jpg
        
      )`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
    >
      {/* مرحله 1 : در اینجا بخشی برای کنترل جایگیری و چیدمان باکس نگه دارنده فیلد های پر شونده ساخته ام */}
      <div>
        {/* مرحله 1 : این قسمت نیز بخشی برای کنترل اجزای داخلی باکس است از نظر چیدمان و اندازه های باکس در اسکرین های مختلف */}
        <div className="bg-white rounded-lg p-5 flex flex-col gap-4 md:w-[400px]  overflow-hidden max-[425px]:w-[300px] min-[375px]:w-[300px] min-[320px]:w-[250px] items-center ">
          {/* مرحله 1 : با یک تگ اچ وان که تگ هدر است و به مرورگر میفهماند محتویات این صفحه برای چه چیزیست به آن گفته ام که این صفحه برای لاگین کردن است و هم یک یوایکس برا مخاطب است تا متوجه شود اینجا برای ورود کردن به جاییست */}
          <h1 className="font-bold">{isLoginPage ? "Login" : "Regsiter"}</h1>
          {/* مرحله : 1 ساختن بخشی برای کنترل جایگیری فیلد ها نسبت به خودشان و لیبلشان */}
          <div className="flex flex-col items-start gap-1 w-11/12">
            {/* The <label> element is used to associate a text label with a form <input> field. The label is used to tell users the value that should be entered in the associated input field. Display inline. */}
            {/* مرحله 1 : ساختن یک لیبل برای قسمت شماره تلفن */}
            <label htmlFor="phonenumber" className="">
              Telephone :{" "}
            </label>
            {/* The <input> HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. */}
            {/* مرحله 1 : در اینجا یک اینپوت برا گرفتن شماره تلفن از مخاطب ساختم که در ادامه توسط ری اکت چک میشود تا درست وارد شده باشد */}
            <input
              className="w-full p-1 outline-none border-b-2 border-b-zinc-300"
              type="text"
              value={phoneNumber}
              onChange={handleChange}
              name="phonenumber"
              placeholder="09123456789"
            />
            {/* مرحله 2 : توسط توابع ری اکت انتخاب میشود که در صورت درست بودن یا غلط بودن شماره تلفن توسط یه شرط چه پیغامی نشان داده شود */}
            {/* در این شرط خالی بودن هم چک میشود */}
            {isValid === null ? null : isValid ? (
            //  تگ پی یک تگ پاراگراف و مخصوص نمایش متن است
             <p className="text-green-500 text-xs">Valid mobile number</p>
            ) : (
              <p className="text-xs text-red-500">
                Invalid mobile number. Please enter a valid 10-digit mobile
                number starting with '09'.
              </p>
            )}
          </div>
          {/* مرحله : 1 ساختن بخشی برای کنترل جایگیری فیلد ها نسبت به خودشان و لیبلشان */}
          <div className="flex flex-col items-start  w-11/12">
            {/* مرحله 1 : ساختن یک لیبل برای قسمت شماره تلفن */}
            <label htmlFor="pass">Password : </label>
            {/* مرحله 1 : در اینجا یک اینپوت برا گرفتن رمز عبور از مخاطب ساختم که در ادامه توسط ری اکت چک میشود تا درست وارد شده باشد */}
            <input
              className="w-full p-1 outline-none border-b-2 border-b-zinc-300"
              name="pass"
              type="password"
              value={password}
              onChange={handleChangePass}
              placeholder="********"
            />
            {/* مرحله 2 : توسط توابع ری اکت انتخاب میشود که در صورت درست بودن یا غلط بودن شماره تلفن توسط یه شرط چه پیغامی نشان داده شود */}
            {/* در این شرط خالی بودن هم چک میشود */}
            {isValidPass === null ? null : isValidPass ? (
              <p className="text-green-500 text-xs">Good password</p>
            ) : (
              <p className="text-xs text-red-500">
                Invalid password. Please enter a stronger password.
              </p>
            )}
          </div>
          {/* مرحله 3 : چونکه دو صفحه لاگین ریجیستر در یک پیج وحود دارند و سوییچ میشوند وجود المنت های مربوط به صفحه ریجیستر را شرطی کرده ام تا در صورت بودن در صفحه ریجیستر نمایش داده شوند */}
          {/* توسط مقدار ایز لاگین که متعلق به استیت کنترل وجود صفحه لاگین ریجیستر است و بوجود آوردن یک شرط گفته ام در صورت نبودن در ریجیستر یا بودن در آن فیلد مورد نظر را نمایش یا مخفی کن */}
          {isLoginPage ? null : (
            <div className="flex flex-col items-start w-11/12">
              {/* در این قسمت یک لیبل و اینپوت برای گرفتن و تایید تکرار رمز عبور ساخته ام */}
              <label htmlFor="confpass">Confirm Password :</label>
              <input
                className="w-full p-1 outline-none border-b-2 border-b-zinc-300"
                type="password"
                value={confirmPass}
                onChange={handleConfPass}
                name="confpass"
                placeholder="********"
              />
              {/* مرحله 3 : با توجه به مقادیر ورودی و چک شدن آن در تابع مربوط به تکرار رمز عبور  در اینجا با استفاده از یک شرط پیغام هایی را به کاربر نشان میدهم */}
              {isConfirmPass === null ? null : isConfirmPass ? (
                <p className="text-green-500 text-xs">Matched.</p>
              ) : (
                <p className="text-xs text-red-500">
                  Confirm Your Password Correctly.
                </p>
              )}
            </div>
          )}
          {/* مرحله 3 : مانند سکشن تکرار رمز عبور در اینجا با استفاده از استیت های مربوطه شرطب گذاشتم تا در صورت بودن در صفحه ریجیستر فیلد نام کاربر نمایش داده شود یا مخفی شود */}
          {isLoginPage ? null : (
            <div className="flex flex-col items-start w-11/12">
              <label htmlFor="name">Name :</label>
              <input
                className="w-full p-1 outline-none border-b-2 border-b-zinc-300"
                type="text"
                value={name}
                onChange={handleChangeName}
                name="name"
                placeholder="Your Name"
              />
            </div>
          )}
          {/* تگ اسپن نوعی تگ بخش بندی کردن است که توانایی نشان دادن متن مثل بقیه تگ های بخش بندی کردن را داراست */}
          {/* مرحله 1 : ساختن بخشی برای فراموشی رمز عبور که رفتار آن را در مراحل بعدی توسط ری اکت مشخص میکنم تا پیغمای مبنی بر در حال ساختن نشان دهد  */}
          <span
            onClick={forgetPasword}
            className="cursor-pointer text-[#646cff] place-self-end mr-3"
          >
            {/* مرحله 3 : در اینجا توسط شرط چک میشود که در صورت بودن در صفحه ریجیستر فراموشی رمز عبور پنهان شود */}
          {isLoginPage ? "Forget Password ?" : ""}
          </span>
          {/* مرحله 3 : در اینجا توسط شرط و یوز استیت مربوطه چک میشود بنا به بودن در کدام صفحه نام دکمه و رفتار آن برای ثبت اطالاعات تغییر کند و به لاگین یا ریجیستر تبدیل شود */}
          {isLoginPage ? (
          //  The <button> tag is used to create a clickable button within HTML form on your webpage. You can put content like text or image within the <button>........ </button> tag. You should always specify the type attribute for a <button> tag. Different browsers use different default type for the button element.
          // مرحله 3 : هرچند این دکمه در مرحله 1 و 2 ساخته شد اما شکل اصلی آن در مرحله ساخته شد تا اطلاعات مورد نظر را ثبت کند
           <button
              type="button"
              onClick={handleLogin}
              disabled={isLoginDisabled}
              className=" w-11/12 p-3 rounded-3xl border-none outline-none text-white cursor-pointer uppercase my__button"
            >
              Login
            </button>
          ) : (
            <button
              type="button"
              onClick={handleLogin}
              disabled={isRegisterDisabled}
              className=" w-11/12 p-3 rounded-3xl border-none outline-none text-white cursor-pointer uppercase my__button"
            >
              Register
            </button>
          )}
          {/* مرحله 3 : بنا به یوز استیت بودن در کدام صفحه متن این تگ پی تغییر میکند توسط یک شرط */}
          <p className="text-base text-[#646cff] font-medium ">
            {isLoginPage ? "Or Sign Up Using" : "Or Login Using"}
          </p>
          {/* مرحله 3 : قسمت اصلی این مرحله ساخت این دکمه است تا با استفاده از یک سری یوز استیت و شروط صفحه را تبدیل به ریجیستر یا لاگین کند که بنا به آن متن داخل دکمه نیز توسط شروط تغییر میکند */}
          {isLoginPage ? (
            <button
              onClick={handleSwitchPage}
              className="text-blue-500 underline  p-1 mb-36"
              type="button"
            >
              Switch to Register
            </button>
          ) : (
            <button
              onClick={handleSwitchPage}
              className="text-blue-500 underline  p-1"
              type="button"
            >
              Switch to Login
            </button>
          )}
        </div>
        {/* کد های استاد  */}
        {/* <button
          className=" w-20"
          onClick={() => {
            farawin.testLogin("09393013397", "12345678");
          }}
        >
          test login
        </button>
        
        <button
          className=" w-20"
          onClick={() => {
            farawin.testRegister("09393013397", "12345678", "Ali Farjad");
          }}
        >
          test register
        </button> */}
      </div>
    </div>
  );
}
