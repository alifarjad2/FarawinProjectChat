import farawin from "farawin";
import Store from "./ZUSTAND";
import { useEffect, useState } from "react";

function EditContact({ setShowEditContact }) {
  const { informationChatter, setInformationChatter, setContacts } = Store();
  const [inputNameValue, setInputNameValue] = useState([]);
  useEffect(() => {
    setInputNameValue(informationChatter.name);
  }, []);
  return (
    <div
      className="w-screen h-screen backdrop-blur-[2.5px] absolute flex justify-center items-center "
      onClick={(e) => {
        if (!e.target.id.match("form")) setShowEditContact(false);
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
          value={inputNameValue}
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
          id="formNumberInput"
          value={informationChatter.username}
          disabled
          className="text-gray-500 w-[250px] h-10 p-2 rounded ml-2 focus:outline-none"
        />

        <div className="mb-1 mt-8 flex justify-evenly ">
          {inputNameValue.length < 3 ? (
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
                farawin.testEditContact(
                  informationChatter.username,
                  inputNameValue,
                  (res) => {
                    if (res.code == 200) {
                      setShowEditContact(false);
                      setContacts();
                      setInformationChatter({
                        ...informationChatter,
                        name: inputNameValue,
                      });
                    }
                    alert(res.message);
                  }
                );
              }}
            >
              {" "}
              Edit{" "}
            </button>
          )}
          <button
            id="formButtonLabel"
            className="w-16 px-2 py-0.5 rounded-2xl bg-orange-600 font-bold"
            onClick={() => setShowEditContact(false)}
          >
            {" "}
            Cancel{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditContact;
