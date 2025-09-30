import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Runs from './Runs'
import Users from './Users'
import Friends from './Friends'

function App() {


  const fetchFriends = fetch('https://jsonplaceholder.typicode.com/photos')
  .then(res => res.json());
  return (
    <div className="">


      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
    <Friends friends= {fetchFriends}> </Friends>
      </Suspense>
      
    </div>

  )
}

export default App
