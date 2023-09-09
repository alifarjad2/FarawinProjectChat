import farawin from "farawin";
import { useState ,useContext} from "react";
import {PhoneContext} from "../pages/Home";


const Input = () => {
    const [inputValue, setInputValue] = useState('');
    const [flag , setFlag]  = useState();
    const [userphone , setUserphone] = useContext(PhoneContext);

const handleKeyPress = (event) => {

    setFlag(true);

     
    if (event.key === 'Enter' || flag) {
      
        farawin.testAddChat(userphone , inputValue)
        setInputValue('')
        
    }
   
        setFlag(false);
    
    
  };

  

  

    return(
            <> 
          
           <div style={{background:"#2E333D"}} className="flex w-auto mx-3 rounded-2xl p-2 hover:bg-[#2E333D] focus-within:bg-[#2E333D]"> 
                 
                 {inputValue === "" ? 
                 <img src="../../public/img/clip.svg" className="w-6 ml-2" alt="clip-icon"/> 
                 :
                 <i style={{color:"white",
                 margin:"2px",
                 paddingLeft:"5px",
                 fontSize:"20px",
                 cursor:"pointer"
                            
                }}className="fa fa-arrow-up"
                onClick={handleKeyPress}
                ></i>
                } 

                 <input  style={{width:"430px"}}
                  onKeyPress={handleKeyPress}
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  type="text" 
                  className="bg-transparent text-[#989BA0] outline-none ml-2" placeholder="پیام شما ..."/>
           </div>
          
            </>
    )
}



export default Input;