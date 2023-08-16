import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css'


const App = () => {


  return (
    <>

          <ToastContainer />
          
            <BrowserRouter>
              <Routes>
                <Route  path='/' element = { <Login/>}/>
                <Route  path='/home' element = {<Home />}/>
                <Route  path='register' element = { <Register/>}/>
              </Routes>
            </BrowserRouter>
          

    </>
          
      
    
  );
}

export default App;
