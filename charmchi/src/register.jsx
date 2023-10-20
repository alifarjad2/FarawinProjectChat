import farawin from "farawin";
import { useState } from "react";

function Register({ setLogin }) {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState(null);

  return (
    <div className="h-screen bg-yellow-500 flex items-center justify-center ">
      <div className="relative w-96 h-[500px] bg-gray-500 rounded-2xl  flex flex-col bg-opacity-40  gap-3 px-10 py-10 text-white">
        <h1 className="text-center font-semibold text-2xl "> REGISTER </h1>
        <label htmlFor="number" className="text-lg ">
          {" "}
          Number :{" "}
        </label>
        {number && !/^09[0-9]{9}$/.test(number) ? (
          <span className="bg-red-500 px-2 py-1.5 absolute top-44 left-0 rounded-lg ">
            Remember that the number must start with 0 and 9 and have 11 digits
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
          <span className="bg-red-500 px-2 py-1.5 absolute top-64 left-14 rounded-sm ">
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
        <label htmlFor="number" className="text-lg ">
          {" "}
          Repeat Password :{" "}
        </label>
        {repeatPassword && repeatPassword != password ? (
          <span className="bg-red-500 px-2 py-1.5 absolute bottom-28 left-14 rounded-sm ">
            Rong!!
          </span>
        ) : (
          ""
        )}
        <input
          type="password"
          id="repeatPassword"
          className=" h-12 rounded-xl focus:outline-none p-2 bg-yellow-500 "
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        {number && password && repeatPassword == password ? (
          <button
            className="w-fit h-fit p-2.5 rounded-xl m-auto bg-yellow-500   "
            onClick={() =>
              farawin.testRegister(
                number,
                password,
                "nafiseCharmchi",
                (res) => {
                  alert(res.message);
                  if (res.code == "200") {
                    location.reload();
                  }
                }
              )
            }
          >
            {" "}
            REGISTER{" "}
          </button>
        ) : (
          <button
            disabled
            className="w-fit h-fit p-2.5 rounded-xl m-auto hover:cursor-not-allowed bg-gray-500 "
          >
            {" "}
            REGISTER{" "}
          </button>
        )}
        <p
          onClick={() => setLogin((c) => !c)}
          className="text-center hover:cursor-pointer"
        >
          {" "}
          LOGIN{" "}
        </p>
      </div>
    </div>
  );
}

export default Register;
