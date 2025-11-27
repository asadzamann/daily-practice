import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const AuthProvider = ({ children}) => {

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = ( email, password ) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

       
      useEffect(() => {
        // mount the observer
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user auth change', currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        // unmount the observer
        return ()=>{
            unsubscribe()
        }
    } ,[])

    const signOutUser = () => {
        signOut(auth)
    }
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
     

    const authInfo = {
        createUser, signInUser, user, signOutUser, loading, signInWithGoogle
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