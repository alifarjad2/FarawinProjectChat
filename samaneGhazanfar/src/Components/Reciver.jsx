function Reciver({item , selectItem}) {
    

    const timeMessage =(t)=>{
        const hour =new Date(t).toLocaleTimeString("fa-IR" , {
            hourCycle : "h24" ,
            hour : "2-digit" ,
            minute :"2-digit"
        })
        return hour ;
    }

    return(
        <div className="flex items-end self-end w-3/4 justify-end m-[5px]">
                <div className="bg-[#6B8AFE] m-2 p-2.5 rounded-[20px] relative max-w-[200px]">
                  <div className="text-[18px] font-mono">{selectItem.name}</div>
                  <div className="bg-[#6B8AFE] break-words ">{item.text}</div>
                  <div className="bottom-[7px] text-right text-[10px]">
                    {timeMessage(item.date)}
                  </div>
                </div>
                <div
                  className=" w-[50px] h-[50px] shrink-0 bg-blue-200 rounded-[20%] text-center font-bold caret
                              -white leading-[48px] m-2"
                >
                  ^^
                </div>
              </div>
    )
}
export default Reciver;