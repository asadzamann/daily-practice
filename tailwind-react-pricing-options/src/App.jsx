import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar/Navbar'
import DaisyNav from '../components/Navbar/DaisyNav'
import { Menu } from 'lucide-react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <DaisyNav></DaisyNav>
     
    </>
  )
}

export default App
