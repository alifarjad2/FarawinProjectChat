import farawin from "farawin";
import LoginPage from "./loginPage";
import RegisterPage from "./registerPage";

// 1- کاربر بتونه درست لاگین و رجیستر کنه
// ۲- کارکرد صحیح سناریو های گفته شده
export default function FormAuth() {
  return (
    <div
      className="h-full"
      style={{
        background: `url(
          https://colorlib.com/etc/lf/Login_v4/images/bg-01.jpg
        )`,
      }}
    >
      {/* TODO Insert Form Here*/}
      <LoginPage/>
      <RegisterPage/>
      {/* <button
        className="mx-2 w-10"
        onClick={() => {
          farawin.testLogin("09393013397", "12345678");
        }}
      >
        test login
      </button>

      <button
        className="mx-2 w-10"
        onClick={() => {
          farawin.testRegister("09393013397", "12345678", "Ali Farjad");
        }}
      >
        test register
      </button> */}
    </div>
  );
}
