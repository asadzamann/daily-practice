import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


function handleClick(){
  alert('I am clicked')
}

  return (
    <>
      
     <button onClick={handleClick}>Click ME</button>
     <button onClick={function handleClick2(){
      alert('CLick 2 DOne')
     }}>Click ME 2</button>
    </>
  )
}

export default App
