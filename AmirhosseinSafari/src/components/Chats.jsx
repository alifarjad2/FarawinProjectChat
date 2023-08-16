


const Chats = () => {



    function getRandomColor() {
        var letters = ["#388E3C" , "#CDDC39" , "#FFEB3B" ,
                        "#FBC02D","#009688","#0097A7",
                        "#00BCD4","#FF5252","#1976D2"
    ];
        var color = '';
          color = letters[Math.round(Math.random()*9)];
        return color;
      }

    
     


    return (
        <>
        
            <div className="col-start-1 col-span-1  lg:block">
                <div className="my-4 pr-2 h-[430px] overflow-auto">

                    <div  className="flex w-auto p-3 hover:bg-[#2E333D] rounded-2xl  cursor-pointer">
                        <div style={{background:getRandomColor()}} className="text-center w-[70px] bg-[#a9d2fe] leading-[50px] rounded-2xl">ع م</div>
                        <div className="ml-2 pr-2 w-full">
                            <div className="flex justify-between items-center">
                                <h4 className="text-[#e5e6ea]">علی موسوی</h4>
                                <span className="text-[#989BA0] text-xs">4m</span>
                            </div>
                            <div style={{paddingLeft:"20px"}}>
                                <p className="inline-block text-xs text-[#989BA0]">سلام ممنون خویم😁</p>

                            </div>
                        </div>
                    </div>

                    <div  className="flex w-auto p-3 hover:bg-[#2E333D] rounded-2xl  cursor-pointer">
                        <div style={{background:getRandomColor()}}className="text-center w-[70px] leading-[50px] bg-[#a9d2fe] rounded-2xl">ج ف</div>
                        <div className="ml-2 pr-2 w-full">
                            <div className="flex justify-between items-center">
                                <h4 className="text-[#e5e6ea]">جواد فرهنگی</h4>
                                <span className="text-[#989BA0] text-xs">4m</span>
                            </div>
                            <div style={{paddingLeft:"20px"}}>
                            <p className="inline-block text-xs text-[#989BA0]">سلام ممنون خویم😁</p>
                            </div>
                        </div>
                    </div>
                    
                    <div  className="flex w-auto p-3 hover:bg-[#2E333D] rounded-2xl  cursor-pointer">
                        <div style={{background:getRandomColor()}}className="text-center w-[70px] leading-[50px] bg-[#a9d2fe] rounded-2xl">ع م</div>
                        <div className="ml-2 pr-2 w-full">
                            <div className="flex justify-between items-center">
                                <h4 className="text-[#e5e6ea]">علیرضا ملایی</h4>
                                <span className="text-[#989BA0] text-xs">4m</span>
                            </div>
                            <div style={{paddingLeft:"20px"}}>
                            <p className="inline-block text-xs text-[#989BA0]">سلام ممنون خویم😁</p>
                            </div>
                        </div>
                    </div>

                    <div  className="flex w-auto p-3 hover:bg-[#2E333D] rounded-2xl  cursor-pointer">
                        <div style={{background:getRandomColor()}}className="text-center w-[70px] leading-[50px] bg-[#a9d2fe] rounded-2xl">م ا</div>
                        <div className="ml-2 pr-2 w-full">
                            <div className="flex justify-between items-center">
                                <h4 className="text-[#e5e6ea]">مهدی اکرمی</h4>
                                <span className="text-[#989BA0] text-xs">4m</span>
                            </div>
                            <div style={{paddingLeft:"20px"}}>
                            <p className="inline-block text-xs text-[#989BA0]">سلام ممنون خویم😁</p>
                            </div>
                        </div>
                    </div>

                    <div  className="flex w-auto p-3 hover:bg-[#2E333D] rounded-2xl  cursor-pointer">
                        <div style={{background:getRandomColor()}}className="text-center w-[70px] leading-[50px] bg-[#a9d2fe] rounded-2xl">ا ع</div>
                        <div className="ml-2 pr-2 w-full">
                            <div className="flex justify-between items-center">
                                <h4 className="text-[#e5e6ea]">امیرحسین علیرضایی</h4>
                                <span className="text-[#989BA0] text-xs">4m</span>
                            </div>
                            <div style={{paddingLeft:"20px"}}>
                            <p className="inline-block text-xs text-[#989BA0]">سلام ممنون خویم😁</p>
                            </div>
                        </div>
                    </div>

                    <div  className="flex w-auto p-3 hover:bg-[#2E333D] rounded-2xl  cursor-pointer">
                        <div style={{background:getRandomColor()}}className="text-center w-[70px] leading-[50px] bg-[#a9d2fe] rounded-2xl">د ر</div>
                        <div className="ml-2 pr-2 w-full">
                            <div className="flex justify-between items-center">
                                <h4 className="text-[#e5e6ea]">داوود رهباردار</h4>
                                <span className="text-[#989BA0] text-xs">4m</span>
                            </div>
                            <div style={{paddingLeft:"20px"}}>
                            <p className="inline-block text-xs text-[#989BA0]">سلام ممنون خویم😁</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
      
        </>
    )
}

export default Chats;