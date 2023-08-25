import farawin from "farawin";
import { useState,useEffect} from "react";


const Chats = () => {

const [namepro , setNamepro] = useState([]);
const [search , setSearch] = useState("");



useEffect(() => {
    const fetchData = async () => {
      const response = await farawin.getContacts();
      const filteredContacts = response.contactList.filter(
        (contact) => contact.ref === localStorage.getItem('phone'))
      setNamepro(filteredContacts);
    };

    fetchData();
  }, []);
           
                       
    return (
        <>
        
            <div className="col-start-1 col-span-1  lg:block">
                <div style={{height:"485px"}} className="my-4 pr-2 h-[430px] overflow-auto">
                <div className="bg-[#2E333D] inline-flex lg:flex w-auto ml-3 mr-1 lg:mx-3 rounded-l-2xl lg:rounded-2xl p-2 "> 
                <img src="../../public/img/search.png" className="w-8" alt="search-icon" />
                <input value={search}
                        onChange={(e) =>
                        setSearch(e.target.value)}
                 type="search" className="bg-transparent text-[#989BA0] w-full outline-none ml-2" placeholder="جستجو ..." />
                
            </div>

                   {namepro.filter((e) => e.name.includes(search)).map((e) => (
                         <div  key={e.username} style={{marginTop:"5px"}} className="flex w-auto p-3 bg-[#527394] hover:bg-[#2E333D] rounded-2xl  cursor-pointer">
                        <div style={{background:"#0097A7"}} className="text-center w-[70px] bg-[#a9d2fe] leading-[50px] rounded-2xl">
                            {e.name.charAt(0)}{" "}
                            {(e.name.charAt(0))!== e.name.charAt(e.name.length-1) ? e.name.charAt(e.name.length-1): null}</div>
                       
                        <div className="ml-2 pr-2 w-full">
                            <div className="flex justify-between items-center">
                                <h4 id="output" className="text-[#e5e6ea]">{e.name}</h4>
                                <span className="text-[#989BA0] text-xs">4m</span>
                            </div>
                            <div style={{paddingLeft:"20px"}}>
                                <p className="inline-block text-xs text-[#989BA0]">سلام ممنون خویم😁</p>

                            </div>
                        </div>
                    </div>
                     
                    ))}
                    
                   

                   
                </div>
            </div>
      
        </>
    )
}

export default Chats;