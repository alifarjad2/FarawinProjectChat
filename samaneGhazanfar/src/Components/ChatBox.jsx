export const ChatBox = ()=> {


    return (
        <div className ="flex flex-col grow m-1 bg-[#4f4e4e] w-full rounded-lg max-md:overflow-hidden">
        {/* header chat */}
       <div className ="flex flex-row m-2 bg-[#4f4e4e] rounded-lg h-14 relative">
       <div className ="w-[50px] h-[50px] self-center bg-blue-200 rounded-[20%] text-center font-bold caret
        -white leading-[48px] m-3">
               ا ک
        </div>
       <span className ="m-3 text-lg">احمد کریمی</span>
       <img
       className ="w-6 h-6 absolute top-3 left-1 cursor-pointer"
       src="../img/menu-vertical.png"
       alt="menu"
       />
       </div>

        {/* chat */}
           {/* bubble chat */}
           <div className="flex flex-col justify-end w-full h-full">

           <div
             id="Messages1Contact"
             className="flex flex-col justify-end w-full h-full"
           >
           <div className="self-center bg-[#2F313D] px-[40px] rounded-[15px]">
             Today
           </div>


           {/* sender */}
             <div className="flex items-end self-end w-3/4 justify-end m-[5px]">
               <div className="bg-[#6B8AFE] m-2 p-2.5 rounded-[20px] relative">
                 <div className="text-[18px] font-mono mb-[6px]">
                   سمانه غضنفر
                 </div>
                 <div
                   className="
                   before:absolute before:border-[#6B8AFE] before:border-[25px] before:left-[-16px] before:bottom-[0px] before:border-r-transparent before:border-l-transparent before:border-t-transparent before:rounded-[40%] grow text-[14px]"
                 >
                  سلام
                 </div>
                 <div className="bottom-[7px] text-right pr-[11px] text-[10px]">
                   20:41
                 </div>
               </div>
               <div className =" w-[50px] h-[50px] shrink-0 bg-blue-200 rounded-[20%] text-center font-bold caret
               -white leading-[48px] m-2">
               س غ
               </div>
             </div>

             
                {/* resiver */}
             <div className="flex w-3/4 m-[5px] items-end">
             <div className ="w-[50px] h-[50px] shrink-0 bg-blue-200 rounded-[20%] text-center font-bold caret
               -white leading-[48px] m-3">
               ا ک
               </div>

               <div
                 className="bg-[#30323E] self-end p-2.5 mb-2 rounded-[20px] relative"
               >
                 <div className="text-[18px] mb-[6px]">احمد کریمی</div>
                 <div
                   className="
                   before:absolute before:border-[#30323E] before:border-[25px] before:right-[-16px] before:bottom-[0px] before:border-r-transparent before:border-l-transparent before:border-t-transparent before:rounded-[40%] grow text-[14px]"
                 >
                   سلام آقای کریمی بله بفرمایین
                 </div>
                 <div className="bottom-[7px] text-right text-[10px] pr-[11px]">
                   20:42
                 </div>
               </div>
             </div>
           </div>

           </div>
       {/* footer chat */}
       <div className ="bg-[#4f4e4e] flex relative flex-row m-1 rounded-lg h-12">
       <img
       className ="absolute top-2 left-1 h-6 cursor-pointer"
       src="../img/attachment.png"
       alt="attach"
       />
       <input
       className =" flex flex-row ml-8 w-full border-[#4f4e4e] rounded-xl bg-[#4f4e4e]"
       type="text"
       placeholder="پیام ..."
       />
       </div>
       </div>
    )
}