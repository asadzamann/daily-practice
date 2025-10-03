import {Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Score from './Score'
import ShowHide from './Show-hide'
import Users from './Users'

function App() {
  const usersData = fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json());

  return (
    <>
      <Score></Score>
      <ShowHide></ShowHide>
     <Suspense fallback={<h1>User is loading...</h1>}>
      <Users usersData={usersData}></Users>
     </Suspense>
    </>
  )
}
<q></q>
export default App
