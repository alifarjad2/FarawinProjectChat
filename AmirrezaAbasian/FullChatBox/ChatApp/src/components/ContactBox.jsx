
const ContactBox = ({ className, sentTime, name, phoneNumber, message }) => {
    return (
        <div className={className}>
            <div className="bg-[#202329] mb-3 rounded-xl mx-3 h-20 flex flex-row justify-between transition duration-300 ease-in cursor-pointer group hover:bg-[#2E333D]">
                <div className="basis-3/12 bg-transparent rounded-lg text-center flex">
                    <div className="bg-green-200 group-hover:opacity-50 flex m-2 items-center justify-center rounded-[19px] w-8/12 h-8/12 min-w-[64px] min-h-[40px]">
                        <span className="text-stone-900 text-2xl font-extrabold font-serif text-center">JE</span>
                    </div>
                </div>
                <div className="basis-8/12 overflow-x-hidden bg-transparent rounded-lg pl-1 flex flex-col justify-around">
                    <div className="pt-2 truncate">
                        Jacob Elordi
                    </div>
                    <div className="pb-2 truncate">
                        He is an actor
                        known for the breakout Netflix Hit The Kissing Booth (2018), Swinging Safari (2017) and is anticipated in
                        HBO/A24 drama series Euphoria (2019)
                    </div>
                </div>
                <div className="mr-5 group-hover:text-[#509ef1] group-hover:transition basis-1/12 bg-transparent rounded-lg text-center text-clip font-serif text-sm">
                    <span>4m</span>
                </div>
            </div>
        </div>
    )
}

export default ContactBox