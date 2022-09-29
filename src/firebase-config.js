import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, signInWithPopup, getAuth, signOut} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react12-84f97.firebaseapp.com",
  projectId: "react12-84f97",
  storageBucket: "react12-84f97.appspot.com",
  messagingSenderId: "933247104772",
  appId: process.env.REACT_APP_APP_ID
};


export const app = initializeApp(firebaseConfig);
export const signOutUser = () => signOut(auth)
export const db = getFirestore(app)
export const auth = getAuth(app)
