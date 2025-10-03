import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Score from './Score'

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
      <Score count={count}></Score>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount (count-1)}>Decrease</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </>
  )
}

export default App
