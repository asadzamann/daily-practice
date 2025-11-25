import { useState } from 'react'
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

import './App.css'
import { auth } from './firbase/firebase.config';

function App() {

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null)

  const googleLoginHandler = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        console.log('check result', result.user)
        setUser(result.user)
      })
      .catch(error => {
        console.log('check error', error)
      })

  }

  const githubLoginHandler = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => {
      console.log(result)
      setUser(result.user)
    })
    .then(
      error => {
        console.log(error)
      }
    )
  }

  const signoutHandler = () => {

    signOut(auth)
      .then(() => {
        console.log('Signed Out Successfully');
        setUser(null)
      })
      .catch(error => {
        console.log(error)
      })
  }


  return (
    <>
      <h1>Firebase Auth React</h1>
      {
        user ? <button onClick={signoutHandler}>Signout</button> :
          <>
            <button onClick={googleLoginHandler}>Login with Google</button>
            <button onClick={githubLoginHandler}>Login with GitHub</button>
          </>

      }


      {user && <div>
        <h1>Name: {user.displayName}</h1>
        <h1>Email: {user.email}</h1>
        <img src={user.photoURL} alt="" />
      </div>}
    </>
  )
}

export default App
