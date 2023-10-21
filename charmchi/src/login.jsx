import { useState } from "react";
import farawin from "farawin";
function Login({ setLogin }) {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState(null);
  return (
    <>
      <div className="h-screen bg-yellow-500 flex items-center justify-center ">
        <div className="w-96 relative h-[400px] bg-gray-500 rounded-2xl  flex flex-col bg-opacity-40  gap-3 px-10 py-10 text-white">
          <h1 className="text-center font-semibold text-2xl "> LOGIN </h1>
          <label htmlFor="number" className="text-lg ">
            {" "}
            Number :{" "}
          </label>
          {number && !/^09[0-9]{9}$/.test(number) ? (
            <span className="bg-red-500 px-2 py-1.5 absolute top-40 left-[0] rounded-lg ">
              Remember that the number must start with 0 and 9 and have 11
              digits
            </span>
          ) : (
            ""
          )}
          <input
            maxLength={11}
            id="number"
            className=" h-12 rounded-xl focus:outline-none p-2 bg-yellow-500 "
            autoFocus
            onChange={(e) => setNumber(e.target.value)}
          />
          <label htmlFor="number" className="text-lg ">
            {" "}
            Paaword :{" "}
          </label>
          {password && password.length < 8 ? (
            <span className="bg-red-500 px-2 py-1.5 absolute bottom-28 left-14 rounded-sm ">
              {" "}
              8 length!{" "}
            </span>
          ) : (
            ""
          )}
          <input
            type="password"
            id="password"
            className=" h-12 rounded-xl focus:outline-none p-2 bg-yellow-500 "
            onChange={(e) => setPassword(e.target.value)}
          />

          {number && password?.length == 8 ? (
            <button
              className="w-fit h-fit p-2.5 rounded-xl m-auto mt-8 bg-yellow-500   "
              onClick={() =>
                farawin.testLogin(number, password, (res) => {
                  alert(res.message);
                  if (res.code == 200) {
                    localStorage.username = number;
                    location.reload();
                  }
                })
              }
            >
              LOGIN
            </button>
          ) : (
            <button
              disabled
              className="w-fit h-fit p-2.5 rounded-xl m-auto mt-8 hover:cursor-not-allowed bg-gray-500 "
            >
              LOGIN
            </button>
          )}
          <p
            onClick={() => setLogin((c) => !c)}
            className="text-center hover:cursor-pointer"
          >
            {" "}
            REGISTER{" "}
          </p>
        </div>
      </div>
    </>
  );
}
export default Login;
