import farawin from 'farawin'
import { useState } from 'react'
import Login from './Login'
import Register from './Register'

function FormAuth() {

  const [isRegister, setIsRegister] = useState(false)



  return (
    <>
      {isRegister ? <Register isRegister={isRegister} setIsRegister={setIsRegister} /> : <Login isRegister={isRegister} setIsRegister={setIsRegister} />}
    </>

  )
}


export default FormAuth
