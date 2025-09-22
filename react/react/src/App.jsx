import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './todo';
import Actor from './Actor'
function App() {

  function handleClick() {
    alert('I am clicked.')
  }
  return (
    <>
      <h1>React Core Concepts</h1>
    
    </>
  )
}

const { name } = { name: 'Joshim', boyosh: '20' }
function Person({ name }) {

  const age = 19;
  const firstName = 'Asad';
  const personStyle = {
    color: 'Red',
    border: 'solid 20px Yellow',
    borderRadius: '20px'
  }
  return (
    <div className="">
      <h1 style={personStyle}>Hello I am Bro {firstName} {name} {age}</h1>
    </div>

  )

}

function Student() {
  return (
    <div className='student'>
      <p>Asad</p>
    </div>
  )
}

export default App
