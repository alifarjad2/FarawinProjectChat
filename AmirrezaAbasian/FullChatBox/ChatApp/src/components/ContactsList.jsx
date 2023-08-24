import farawin from "farawin"
import SearchIcon from "../assets/SearchIcon"
import ContactBox from "./ContactBox"
import AddContactIcon from "../assets/AddContactIcon"
import { useState, useEffect } from "react"


const ContactsList = ({ chatName, setChatName, isContactList, setIsContactList, messageReceiver, setMessageReceiver }) => {
    // #region Stated
    const [isAddingContact, setIsAddingContact] = useState(false)
    const [newUserName, setNewUserName] = useState('')
    const [newUserPhoneNumber, setNewUserPhoneNumber] = useState('')
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false)
    const [personalContacts, setPersonalContacts] = useState([])
    // #endregion

    // For phoneNumber validation ↓↓
    useEffect(() => {
        const phoneNumberPattern = farawin.mobileRegex;
        const isValid = phoneNumberPattern.test(newUserPhoneNumber);
        setIsValidPhoneNumber(isValid);
    }, [newUserPhoneNumber]);
    // -------------------------------------------------------------

    useEffect(() => {
        const gettingContacts = async () => {
            const rawData = await farawin.getContacts(res => res)
            const personalContacts = rawData.contactList.filter((row) => row.ref === localStorage.userPhoneNumber)
            setPersonalContacts(personalContacts)
        }
        gettingContacts();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        farawin.testAddContact(newUserPhoneNumber, newUserName, (res) => { console.log(res.message); setNewUserPhoneNumber(''); setNewUserName(res.message) })
        setTimeout(() => {
            setNewUserName('')
            setNewUserPhoneNumber('')
            setIsAddingContact(false)
        }, 3000);
    }

    return (
        <div className="flex flex-col h-full">
            <div className='h-[10%] mb-2 w-full'>
                <div id="search-box" className="">
                    <div className="bg-[#2E333D] transition duration-500 focus-within:bg-[#353b46] mx-5 my-4 rounded-xl h-14 flex items-center focus-within:ring-2 shadow-inner focus-within:ring-sky-900">
                        <button className='mr-6'>
                            <SearchIcon className={'text-2xl hover:opacity-60'} />
                        </button>
                        <input type="text" placeholder="Search" className="text-white font-medium text-lg font-mono w-full h-[30px] placeholder:italic outline-none placeholder:opacity-70 rounded-md bg-transparent mx-2" />
                    </div>
                </div>
            </div>
            <div className='h-[80%] w-full overflow-y-auto'>
                {/* <ContactBox isContactList={isContactList} setIsContactList={setIsContactList} className={'mt-6 text-white'} /> */}
                {
                    personalContacts && personalContacts.map((row) => {
                        return (
                            <ContactBox chatName={chatName} setChatName={setChatName} messageReceiver={messageReceiver} setMessageReceiver={setMessageReceiver} phoneNumber={row.username} key={row.date.toString()} name={row.name} isContactList={isContactList} setIsContactList={setIsContactList} className={'mt-6 text-white'} />
                        )
                    })
                }
            </div>
            {
                !isAddingContact ? (
                    <div onClick={() => setIsAddingContact(true)} title='افزودن مخاطب' className='h-[10%] w-full flex justify-center pt-6'>
                        <AddContactIcon className={'text-4xl hover:opacity-60 transition cursor-pointer'} />
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex justify-around items-center md:mt-4">
                        <div><button disabled={(isValidPhoneNumber && newUserName.length !== 0) ? false : true} type="submit" className="bg-[#2E333D] rounded-3xl p-2 text-white hover:opacity-70 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed">افزودن</button></div>
                        <div><input onChange={(e) => setNewUserName(e.target.value)} value={newUserName} className="bg-[#2E333D] rounded-2xl h-10 outline-none text-white transition focus:outline-2 focus:outline -outline-offset-1 focus:outline-slate-800 px-2" type="text" placeholder="     نام مخاطب" /></div>
                        <div><input onChange={(e) => setNewUserPhoneNumber(e.target.value)} value={newUserPhoneNumber} className="bg-[#2E333D] rounded-2xl h-10 outline-none text-white transition focus:outline-2 focus:outline -outline-offset-1 focus:outline-slate-800 px-2" type="tel" placeholder="     تلفن مخاطب" /></div>
                    </form>
                )
            }
        </div>
    )
}

export default ContactsList