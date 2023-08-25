

const Input = () => {
    return(
            <>
           <div style={{background:"#2E333D"}} className="flex w-auto mx-3 rounded-2xl p-2 hover:bg-[#2E333D] focus-within:bg-[#2E333D]"> 
                 <img src="../../public/img/clip.svg" className="w-6 ml-2" alt="clip-icon"/>
                 <input  style={{width:"430px"}} type="text" className="bg-transparent text-[#989BA0] outline-none ml-2" placeholder="پیام شما ..."/>
           </div>
            </>
    )
}



export default Input;