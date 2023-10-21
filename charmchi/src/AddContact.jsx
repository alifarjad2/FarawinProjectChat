import { useState } from "react";
import farawin from "farawin";
import Store from "./ZUSTAND";

function AddContact({ setAddContact }) {
  const [inputNameValue, setInputNameValue] = useState([]);
  const [inputNumberValue, setInputNumberValue] = useState([]);
  const { setContacts } = Store();

  return (
    <div
      className="w-screen h-screen backdrop-blur-[2.5px] absolute flex justify-center items-center "
      onClick={(e) => {
        if (!e.target.id.match("form")) setAddContact(false);
      }}
    >
      {inputNameValue.length > 0 && inputNameValue.length < 3 ? (
        <span className="p-1.5 bg-red-500 rounded-lg absolute mr-2 ml-36">
          {" "}
          Give a name that has at <b> least 3 characters </b>{" "}
        </span>
      ) : null}
      <div
        id="form"
        className="px-2 py-8 bg-orange-400 flex flex-col gap-2 shadow-2xl shadow-black rounded-md"
      >
        <h1 id="formHeader" className="text-lg font-bold mb-5">
          {" "}
          Add Contact{" "}
        </h1>
        <label id="formNameLabel" htmlFor="formNameInput" className="ml-2 ">
          {" "}
          Name :{" "}
        </label>
        <input
          type="text"
          id="formNameInput"
          className="w-[250px] h-10 p-2 rounded ml-2 focus:outline-none "
          onChange={(e) => {
            setInputNameValue(e.target.value);
          }}
        />
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
          <span className="p-1.5 bg-red-500 rounded-lg absolute mt-[200px] ml-6 ">
            Remember the number must <b> start with 0 and 9 </b>
          </span>
        ) : !(inputNumberValue[0] != 0 || inputNumberValue[1] != 9) &&
          inputNumberValue.length >= 2 &&
          inputNumberValue.length < 11 ? (
          <span className="p-1.5 bg-red-500 rounded-lg absolute mt-[200px] ml-8 ">
            <br /> .. and be <b> 11 digits long :) </b>
          </span>
        ) : null}

        <div className="mb-1 mt-8 flex justify-evenly ">
          {inputNameValue && inputNumberValue.length < 11 ? (
            <button
              id="formButtonLabel"
              className="w-16 px-2 py-0.5 rounded-2xl bg-gray-300"
            >
              {" "}
              add{" "}
            </button>
          ) : (
            <button
              id="formButtonLabel"
              className="w-16 px-2 py-0.5 rounded-2xl bg-orange-600 font-bold"
              onClick={() => {
                farawin.testAddContact(
                  inputNumberValue,
                  inputNameValue,
                  (res) => {
                    if (res.code == 200) {
                      setContacts();
                      setAddContact(false);
                    }
                    alert(res.message);
                  }
                );
              }}
            >
              {" "}
              Add{" "}
            </button>
          )}
          <button
            id="formButtonLabel"
            className="w-16 px-2 py-0.5 rounded-2xl bg-orange-600 font-bold"
            onClick={() => setAddContact(false)}
          >
            {" "}
            Cancel{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddContact;
