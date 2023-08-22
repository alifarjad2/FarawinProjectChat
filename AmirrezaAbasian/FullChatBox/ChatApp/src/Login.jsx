import farawin from 'farawin'
import { useState, useEffect } from 'react'

function Login({ isRegister, setIsRegister }) {
    const [userName, setUsername] = useState('')
    const [userPass, setPass] = useState('')
    const [message, setMessage] = useState('')
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false)

    useEffect(() => {
        const phoneNumberPattern = farawin.mobileRegex;
        const isValid = phoneNumberPattern.test(userName);
        setIsValidPhoneNumber(isValid);
    }, [userName]);

    const handleLogin = (e) => {
        e.preventDefault()
        farawin.testLogin(userName, userPass, (response) => {
            //response is object like {code: string, message: string}
            //if code is '200' mean success
            //else mean error!
            //Goodluck:)

            const success = response.code == "200";

            if (success) console.log("result from api -> ", response);
            else console.error("error from api -> ", response);

            //you response to get message
            //like
            setMessage(response.message);

            //redirect if you want
            // if(success)
            //   window.location.assign('url...')
        })
        setPass('')
        setUsername('')
    }

    return (
        <form className='login flex-col media flex justify-start bg-stone-100 mx-auto my-10 min-h-[90vh] max-w-lg rounded-xl'>
            <div className='mt-16 text-center h-[10rem]'><h1 className='text-6xl font-bold font-login'>Login</h1></div>
            <div className='mx-6 h-28 flex flex-col bg-stone-100' >
                <span className='h-1/6 ml-4'>Phone number</span>
                <input onChange={(e) => setUsername(e.target.value)} value={userName} type="text" placeholder='Type your phone number' className={`${(isValidPhoneNumber) ? 'focus:border-green-500' : 'focus:border-rose-700'} focus:border-black transition duration-300 text-2xl px-4 placeholder:pl-4 bg-stone-100 outline-none border-b-2 h-5/6 border-[#a9a9a9]`} />
            </div>
            <div className='mx-6 mt-6 h-28 flex flex-col bg-stone-100'>
                <span className='h-1/6 ml-4'>Password</span>
                <input minLength={8} onChange={(e) => setPass(e.target.value)} value={userPass} type="password" placeholder='Type your password' className='invalid:focus:border-rose-500 focus:border-black transition duration-300 text-2xl px-4 placeholder:pl-4 bg-stone-100 outline-none border-b-2 h-5/6 border-[#a9a9a9]' />
                <div className='flex justify-end'>
                    <span onClick={() => { alert('فکر کن یادت بیاد') }} className='text-right font-light cursor-pointer hover:text-[rgb(252,0,255)]'>Forgot password?</span>
                </div>
            </div>
            <div className='mx-6 my-2 h-28 flex justify-center'>
                <button disabled={(userPass.length >= 8 && isValidPhoneNumber) ? false : true} onClick={handleLogin} className='bg-btn disabled:opacity-50 disabled:cursor-not-allowed w-[100%] rounded-full my-7'><span className='text-neutral-50 text-center font-bold'>LOGIN</span></button>
            </div>
            {message && <span className='text-center font-bold -mt-8'>{message}</span>}
            <div className='bg-stone-100 mx-4 h-24 text-center flex flex-col justify-end pb-10'><button onClick={() => setIsRegister(true)} type='submit' className='hover:text-[rgb(252,0,255)] cursor-pointer'>sign up</button></div>
        </form>
    )
}


export default Login
