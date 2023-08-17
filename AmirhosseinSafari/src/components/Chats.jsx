import farawin from "farawin";
import { useState } from "react";



const Chats = () => {


    const [namepro , setNamepro] = useState([]);



    farawin.getContacts().then(response => {
        const filteredContacts = response.contactList.filter(contact => contact.ref === '09151144258');
        setNamepro(filteredContacts)
        
      })
 
    
     


    return (
        <>
        
        <div className="col-start-1 col-span-1  lg:block">
                <div className="my-4 pr-2 h-[430px] overflow-auto">


                   {namepro.map((e , index) => (
                         <div key={e.username} style={{marginTop:"5px"}} className="flex w-auto p-3 bg-[#527394] hover:bg-[#2E333D] rounded-2xl  cursor-pointer">
                        <div style={{background:"#0097A7"}} className="text-center w-[70px] bg-[#a9d2fe] leading-[50px] rounded-2xl">ع م</div>
                        <div className="ml-2 pr-2 w-full">
                            <div className="flex justify-between items-center">
                                <h4 id="output" className="text-[#e5e6ea]">{e.name}</h4>
                                <span className="text-[#989BA0] text-xs">4m</span>
                            </div>
                            <div style={{paddingLeft:"20px"}}>
                                <p className="inline-block text-xs text-[#989BA0]">سلام ممنون خویم😁</p>

                            </div>
                        </div>
                    </div>))}
                    
                </div>
            </div>
      
        </>
    )
}

export default Chats;