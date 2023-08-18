export default function Profile(){
    let bgProfile = ["#A9D2FE" , "#CD4039" , "#4AAD6A" , "#FECCA7"];
    return(
        <div className="rounded-[14px] w-[50px] h-[50px] text-center pt-[11px] text-[16px] text-black" style={{backgroundColor: bgProfile[Math.floor((Math.random() * 4))]}}>
          عپ
        </div>
    );
}