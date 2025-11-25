// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ8pbbPRLaMm_L2kh9kxb6HyCRmaOyMrs",
  authDomain: "simple-firebase-auth-6a390.firebaseapp.com",
  projectId: "simple-firebase-auth-6a390",
  storageBucket: "simple-firebase-auth-6a390.firebasestorage.app",
  messagingSenderId: "12615129960",
  appId: "1:12615129960:web:308b56b45e282458bd94dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);