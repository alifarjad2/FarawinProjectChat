import Login from "./Login";
import Register from "./Register";
import { useState } from "react";

const FormAuth = () => {
  const [currentForm, setCurrentForm] = useState('login'),
  change = (name) => {setCurrentForm (name)}
  return (
    <div className="bg-white overflow-hidden h-[500px] w-[350px] rounded-[10px]">
      {(currentForm === 'login') ? <Login changeForm = {change} /> : <Register changeForm = {change}/>}
    </div>
  );
}
export default FormAuth;
