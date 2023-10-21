import { useState } from "react";
import farawin from "farawin";
import Store from "./ZUSTAND";

function DeleteContact({ setDeleteContact }) {
  const [inputNumberValue, setInputNumberValue] = useState([]);
  const { setContacts } = Store();

  return (
    <div
      className="w-screen h-screen backdrop-blur-[2.5px] absolute flex justify-center items-center "
      onClick={(e) => {
        if (!e.target.id.match("form")) setDeleteContact(false);
      }}
    >
      <div
        id="form"
        className="relative px-2 py-8 bg-orange-400 flex flex-col gap-2 shadow-2xl shadow-black rounded-md"
      >
        <h1 id="formHeader" className="text-lg font-bold mb-5">
          {" "}
          Delete Contact{" "}
        </h1>
        <label id="formNumberLabel" htmlFor="formNumberInput" className="ml-2">
          {" "}
          Number:{" "}
        </label>
        <input
          maxLength={11}
          id="formNumberInput"
          className="w-[250px] h-10 p-2 rounded ml-2 focus:outline-none"
          placeholder="09000000000"
          onChange={(e) => {
            setInputNumberValue(e.target.value);
          }}
        />
        {inputNumberValue.length &&
        (inputNumberValue[0] != 0 || inputNumberValue[1] != 9) ? (
          <span className="p-1.5 bg-red-500 rounded-lg absolute top-36 ml-6 ">
            Remember the number must <b> start with 0 and 9 </b>
          </span>
        ) : !(inputNumberValue[0] != 0 || inputNumberValue[1] != 9) &&
          inputNumberValue.length >= 2 &&
          inputNumberValue.length < 11 ? (
          <span className="p-1.5 bg-red-500 rounded-lg absolute top-36 ml-8 ">
            <br /> .. and be <b> 11 digits long :) </b>
          </span>
        ) : null}

        <div className="mb-1 mt-8 flex justify-evenly ">
          {inputNumberValue.length < 11 ? (
            <button
              id="formButtonLabel"
              className="w-16 px-2 py-0.5 rounded-2xl bg-gray-300"
            >
              {" "}
              Delete{" "}
            </button>
          ) : (
            <button
              id="formButtonLabel"
              className="w-16 px-2 py-0.5 rounded-2xl bg-orange-600 font-bold"
              onClick={() => {
                farawin.testDeleteContact(inputNumberValue, (res) => {
                  alert(res.message);
                  if (res.code == 200) {
                    setContacts();
                    setDeleteContact(false);
                  }
                });
              }}
            >
              {" "}
              Delete{" "}
            </button>
          )}
          <button
            id="formButtonLabel"
            className="w-16 px-2 py-0.5 rounded-2xl bg-orange-600 font-bold"
            onClick={() => setDeleteContact(false)}
          >
            {" "}
            Cancel{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeleteContact;
