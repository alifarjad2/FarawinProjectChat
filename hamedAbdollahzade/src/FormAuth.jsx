import farawin from "farawin";

// 1- کاربر بتونه درست لاگین و رجیستر کنه
// ۲- کارکرد صحیح سناریو های گفته شده
export default function FormAuth() {
  return (
    <div
      className="h-full"
    >
      {/* TODO Insert Form Here*/}
      <div className="bg-white h-[550px] flex flex-col items-center w-[450px] mx-auto mt-6">
        Login
      <button
        className="bg-red-600 mx-2 w-10"
        onClick={() => {
          farawin.testLogin("09393013397", "12345678");
        }}
      >
        login
      </button>

      <button
        className="bg-blue-600 mx-2 w-10"
        onClick={() => {
          farawin.testRegister("09393013397", "12345678", "Ali Farjad");
        }}
      >
        register
      </button>

      </div>
      
    </div>
  );
}
