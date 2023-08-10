import { useState } from 'react';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import { ToastContainer, toast } from 'react-toastify';
import './App.css'




const App = () => {

  const [currentForm, setcurrentForm] = useState("login");

  const toggleForm = (FormName) => {
    setcurrentForm(FormName);
  }

  return (
    <>
      <ToastContainer />
      {
        currentForm === "login" ?
          <Login onFormSwitch={toggleForm} /> :
          <Register onFormSwitch={toggleForm} />
      }

    </>

  )
}

export default App;
