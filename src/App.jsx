import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Login from '../components/Login'
import Success from '../components/Success'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Hello</div>
      <Login/>
       
    </>
  )
}

export default App
