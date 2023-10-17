function Sender({item}) {
   
   
    const timeMessage =(t)=>{
        const hour =new Date(t).toLocaleTimeString("fa-IR" , {
            hourCycle : "h24" ,
            hour : "2-digit" ,
            minute :"2-digit"
        })
        return hour ;
    }


    return(
        <div className="flex items-end ">
                <div
                  className="w-[50px] h-[50px] shrink-0 bg-blue-200 rounded-[20%] text-center font-bold caret
               -white leading-[48px] m-3"
                >
                  ^^
                </div>

                <div className="bg-[#30323E] self-end p-3 m-1 rounded-[20px] relative max-w-[200px] ">
                  <div className="text-[18px]">سمانه غضنفر</div>
                  <div className="bg-[#30323E] break-words">
                    {item.text}
                  </div>
                  <div className="bottom-[7px] text-right text-[10px] ">
                    {timeMessage(item.date) }
                  </div>
                </div>
              </div>
    )
}

export default Sender;