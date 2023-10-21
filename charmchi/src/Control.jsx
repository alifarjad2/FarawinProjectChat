import { useState } from "react";
import Register from "./register";
import Login from "./login";

const Control = () => {
  const [isLogin, setLogin] = useState();
  return (
    <>
      {isLogin ? (
        <Register setLogin={setLogin} />
      ) : (
        <Login setLogin={setLogin} />
      )}
    </>
  );
};

export default Control;
