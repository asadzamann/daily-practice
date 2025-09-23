import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const handleClick = (num) => {
  alert(`I am clicked ${num}`)
}
  return (
    <>
    <button onClick={() => {handleClick(700)}}>Click Me</button>
    </>
  )
}

export default App
