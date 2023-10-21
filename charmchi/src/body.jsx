import Sidebar from "./sidebar";
import BoxChat from "./boxChat";
import Store from "./ZUSTAND";

function Body() {
  const { informationChatter } = Store();

  return (
    <div className="w-full h-screen flex bg-yellow-500">
      {((!informationChatter && window.innerWidth < 640) ||
        window.innerWidth > 640) && <Sidebar />}
      {informationChatter ? <BoxChat /> : ""}
    </div>
  );
}

export default Body;
