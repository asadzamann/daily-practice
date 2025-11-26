// Import the functions you need from the SDKs you need
// don't share firebase details/

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Do Not share config in Public
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTGiMUdRUwB0_MU8dL_7171G3GcAQXCT8",
  authDomain: "email-password-input.firebaseapp.com",
  projectId: "email-password-input",
  storageBucket: "email-password-input.firebasestorage.app",
  messagingSenderId: "173466554122",
  appId: "1:173466554122:web:6fb41a4a01bf8372acf4f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);