import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Runs from './Runs'
import Users from './Users'
import Friends from './Friends'

function App() {
  const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());

  const fetchFriends = fetch('https://jsonplaceholder.typicode.com/photos')
  .then(res => res.json());
  return (
    <div className="">
      <Suspense fallback={<h2>Loading....</h2>}>
    <Users fetchUsersCon = {fetchUsers}></Users> 
    {/* Use control + f12 to get in to specific jsx */}
      </Suspense>

      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
    <Friends friendsPhoto= {fetchFriends}> </Friends>
      </Suspense>
      
    </div>

  )
}

export default App
