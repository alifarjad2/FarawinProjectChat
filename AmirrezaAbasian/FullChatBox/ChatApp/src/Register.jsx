import farawin from "farawin"
import { useState, useEffect } from "react"

const Register = ({ isRegister, setIsRegister }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
    const [username, setUsername] = useState('')
    const [isValidUsername, setIsValidUsername] = useState(false)
    const [password, setPassword] = useState('')
    const [isValidPassword, setIsValidPassword] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        const phoneNumberPattern = farawin.mobileRegex;
        const isValid = phoneNumberPattern.test(phoneNumber);
        setIsValidPhoneNumber(isValid);
    }, [phoneNumber]);

    useEffect(() => {
        username.length === 0 ? setIsValidUsername(false) : setIsValidUsername(true)
    }, [username])

    useEffect(() => {
        password.length < 8 ? setIsValidPassword(false) : setIsValidPassword(true)
    }, [password])


    const handleSubmit = (e) => {
        e.preventDefault()
        farawin.testRegister(phoneNumber, password, username, (response) => {
            const success = response.code == "200";
            if (success) console.log("result from api -> ", response);
            else console.error("error from api -> ", response);
            setMessage(response.message)
        })
        setUsername('')
        setPassword('')
        setPhoneNumber('')
        // setIsRegister(false)
    }

    return (
        <form onSubmit={handleSubmit} className='login flex-col media flex justify-start bg-stone-100 mx-auto my-10 min-h-[90vh] max-w-lg rounded-xl'>
            <div className='mt-16 text-center h-[10rem]'><h1 className='text-6xl font-bold font-login'>Register</h1></div>
            <div className='mx-6 h-28 flex flex-col bg-stone-100' >
                <span className='h-1/6 ml-4'>Phone number</span>
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="tel" placeholder='Type your phone number' className={isValidPhoneNumber ? 'focus:border-green-500 transition duration-300 text-2xl px-4 placeholder:pl-4 bg-stone-100 outline-none border-b-2 h-5/6 border-[#a9a9a9]' : 'focus:border-rose-800 transition duration-300 text-2xl px-4 placeholder:pl-4 bg-stone-100 outline-none border-b-2 h-5/6 border-rose-500'} />
            </div>
            <div className='mx-6 mt-6 h-28 flex flex-col bg-stone-100'>
                <span className='h-1/6 ml-4'>Username</span>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Type your username' className={`${username.length === 0 ? 'border-red-500 focus:border-red-500' : 'focus:border-green-500'} focus:border-black transition duration-300 text-2xl px-4 placeholder:pl-4 bg-stone-100 outline-none border-b-2 h-5/6 border-[#a9a9a9] invalid:focus:border-rose-500`} />
            </div>
            <div className='mx-6 mt-6 h-28 flex flex-col bg-stone-100'>
                <span className='h-1/6 ml-4'>Password</span>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Type your password' className={`${password.length < 8 ? 'border-red-500 focus:border-red-500' : 'focus:border-green-500'} focus:border-black transition duration-300 text-2xl px-4 placeholder:pl-4 bg-stone-100 outline-none border-b-2 h-5/6 border-[#a9a9a9]`} />
            </div>
            <span className={`text-center pt-4 font-bold`}>{message}</span>
            <div className='mx-6 h-28 flex justify-center'>
                <button type="submit" disabled={(isValidPhoneNumber && isValidPassword && isValidUsername) ? false : true} className='bg-btn w-[100%] rounded-full my-7 disabled:opacity-30 disabled:hover:bg-rose-400 disabled:cursor-not-allowed'><span className='text-neutral-50 text-center font-bold'>REGISTER</span></button>
            </div>
            <div className='bg-stone-100 mx-4 h-14 text-center'><button onClick={() => setIsRegister(false)} className='hover:text-[rgb(252,0,255)] cursor-pointer disabled:opacity-30'>or Login</button></div>
        </form>
    )
}


export default Register