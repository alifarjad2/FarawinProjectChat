import farawin from 'farawin'
import { useState } from 'react'

function App() {
  const [userName, setUsername] = useState('')
  const [userPass, setPass] = useState('')

  const handleUserName = event => setUsername(event.target.value)
  const handlePassword = event => setPass(event.target.value)

  const finalLogin = (pN, uP) => {
    farawin.testLogin(
      pN,
      uP,
      (response) => {
        //response is object like {code: string, message: string}
        //if code is '200' mean success
        //else mean error!
        //Goodluck:)

        const success = response.code == "200";

        if (success) console.log("result from api -> ", response);
        else console.error("error from api -> ", response);

        //you response to get message
        //like
        alert(response.message);

        //redirect if you want
        // if(success)
        //   window.location.assign('url...')
      }
    )
  }

  return (
    <div className='login flex-col media flex justify-start bg-stone-100 mx-auto my-10 min-h-[90vh] max-w-lg rounded-xl'>
      <div className='mt-16 text-center h-[10rem]'><h1 className='text-6xl font-bold font-login'>Login</h1></div>
      <div className='mx-6 h-28 flex flex-col bg-stone-100' >
        <span className='h-1/6 ml-4'>Username</span>
        <input onChange={handleUserName} value={userName} type="text" placeholder='Type your username' className='focus:border-black transition duration-300 text-2xl px-4 placeholder:pl-4 bg-stone-100 outline-none border-b-2 h-5/6 border-[#a9a9a9]' />
      </div>
      <div className='mx-6 mt-6 h-28 flex flex-col bg-stone-100'>
        <span className='h-1/6 ml-4'>Password</span>
        <input onChange={handlePassword} value={userPass} type="password" placeholder='Type your password' className='focus:border-black transition duration-300 text-2xl px-4 placeholder:pl-4 bg-stone-100 outline-none border-b-2 h-5/6 border-[#a9a9a9]' />
        <div className='flex justify-end'>
          <span onClick={() => { alert('فکر کن یادت بیاد') }} className='text-right font-light cursor-pointer hover:text-[rgb(252,0,255)]'>Forgot password?</span>
        </div>
      </div>
      <div className='mx-6 my-2 h-28 flex justify-center'>
        <button onClick={() => finalLogin(userName, userPass)} className='bg-btn w-[100%] rounded-full my-7'><span className='text-neutral-50 text-center font-bold'>LOGIN</span></button>
      </div>
      <div className='bg-stone-100 mx-4 my-2 h-40 text-center flex flex-col justify-end pb-10'><a className='hover:text-[rgb(252,0,255)]' href="#">sign up</a></div>
    </div>
  )
}


export default App
