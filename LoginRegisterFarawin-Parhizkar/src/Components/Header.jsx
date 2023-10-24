import { React, useState } from "react";
import { useStore } from "./Zustand/useStore";
import RefIcon from "../assets/RefIco.png";
import DeleteIcon from "../assets/DeleteIco.png";
import EditIcon from "../assets/EditIco.png";
import MenuIcon from "../assets/MenuIco.png";
import EditMokhatab from "./EditContactPopUp";
import DeleteMokhatab from "./DeleteContactPopUp";
const Header = ({ openMenu }) => {
  const sharedName = useStore((state) => state.sharedName);
  const setRefreshChat = useStore((state) => state.setRefreshChat);
  const [isEditContactPopupOpen, setEditContactPopupOpen] = useState(false);
  const [isDeleteContactPopupOpen, setDeleteContactPopupOpen] = useState(false);

  return (
    <div className="flex  justify-between">
      <div className="flex items-center ">
        <button className="w-10 lg:hidden" onClick={() => openMenu(true)}>
          <img src={MenuIcon} alt="" />
        </button>
        <div className="w-10 h-10 bg-violet-400 rounded-full text-center text-sm p-1">
          {sharedName.split("").slice(0, 2).join(" ")}
        </div>
        <h1 className={`p-2 rounded-lg text-center ${!sharedName && "hidden"}`}>
          {" "}
          {sharedName}{" "}
        </h1>
      </div>
      <div>
        <button
          onClick={() => {
            setRefreshChat(Math.random());
          }}
          className="w-8 hover:animate-spin"
        >
          <img src={RefIcon} alt="" />
        </button>
        <button
          onClick={() => {
            setDeleteContactPopupOpen(true);
          }}
          className="w-8 hover:animate-pulse"
        >
          <img src={DeleteIcon} alt="" />
        </button>
        <button
          onClick={() => {
            setEditContactPopupOpen(true);
          }}
          className="w-8 hover:animate-bounce"
        >
          <img src={EditIcon} alt="" />
        </button>
      </div>
      {isEditContactPopupOpen && (
        <div
          style={{ zIndex: 2 }}
          className="absolute top-0 left-0 right-0 bottom-0 w-screen backdrop-blur-lg"
        >
          <div className="flex justify-center items-center h-full w-full">
            <EditMokhatab closing={setEditContactPopupOpen} />
          </div>
        </div>
      )}
      {isDeleteContactPopupOpen && (
        <div
          style={{ zIndex: 2 }}
          className="absolute top-0 left-0 right-0 bottom-0 w-screen backdrop-blur-lg"
        >
          <div className="flex justify-center items-center h-full w-full">
            <DeleteMokhatab closing={setDeleteContactPopupOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
