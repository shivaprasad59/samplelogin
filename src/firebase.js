// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRWOL32Mzcg-O60z5M_bLurfwlNnhZptk",
  authDomain: "react-sample-auth-142a5.firebaseapp.com",
  projectId: "react-sample-auth-142a5",
  storageBucket: "react-sample-auth-142a5.appspot.com",
  messagingSenderId: "774048072933",
  appId: "1:774048072933:web:e423750ba82f859d9c000c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);