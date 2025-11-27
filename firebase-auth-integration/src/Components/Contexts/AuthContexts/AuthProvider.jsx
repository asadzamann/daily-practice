import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const AuthProvider = ({ children}) => {
    const [user, setUser] = useState(null);
    
    const createUser = ( email, password ) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

      useEffect(() => {
        // mount the observer
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user auth change', currentUser);
            setUser(currentUser);
        })
        // unmount the observer
        return ()=>{
            unsubscribe()
        }
    } ,[])

    const authInfo = {
        createUser, signInUser, user
    }

 

    // onAuthStateChanged(auth, user => {
    //     if(user){
    //         console.log('inside observer yo if', user )
    //     }
    //     else{
    //         console.log('inside observer yo else', user)
    //     }
    // })

  
    return (
        
  
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
    
    );
};

export default AuthProvider;