import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Runs from './Runs'
import Users from './Users'

function App() {
  const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());
  return (
    <div className="">
      <Suspense fallback={<h2>Loading....</h2>}>
    <Users fetchUsersCon = {fetchUsers}></Users> 
    {/* Use control + f12 to get in to specific jsx */}
      </Suspense>
      
    </div>

  )
}

export default App
