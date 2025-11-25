// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKSWL8aKg9eAx3l_JKjBK-L8wA_jXSTIU",
  authDomain: "fir-learning-833f1.firebaseapp.com",
  projectId: "fir-learning-833f1",
  storageBucket: "fir-learning-833f1.firebasestorage.app",
  messagingSenderId: "242360556284",
  appId: "1:242360556284:web:a764eae438c2cb4cce1579"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);