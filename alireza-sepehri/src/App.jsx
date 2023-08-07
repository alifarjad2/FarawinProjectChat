import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="read-the-docs text-3xl font-bold underline">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
