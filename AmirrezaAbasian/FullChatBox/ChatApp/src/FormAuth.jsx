import farawin from 'farawin'
import { useEffect, useState } from 'react'
import Login from './Login'
import Register from './Register'
import Chat from './Chat'

function FormAuth() {

  const [isRegister, setIsRegister] = useState(false)
  if (localStorage.getItem('token')) {
    return <Chat />
  }
  if (isRegister) {
    return <Register isRegister={isRegister} setIsRegister={setIsRegister} />
  }
  if (!isRegister) {
    return <Login isRegister={isRegister} setIsRegister={setIsRegister} />
  }

  //  return (
  //    <>
  //     {location.reload}
  //     {isRegister ? <Register isRegister={isRegister} setIsRegister={setIsRegister} /> : <Login isRegister={isRegister} setIsRegister={setIsRegister} />}
  //     {localStorage.token ? (<Chat />) : isRegister ? <Register isRegister={isRegister} setIsRegister={setIsRegister} /> : <Login isRegister={isRegister} setIsRegister={setIsRegister} />}

  //    </>

  //  )
}


export default FormAuth
