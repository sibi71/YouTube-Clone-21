// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore,serverTimestamp } from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCY7C0C2Dd7xh9lA-0gVpS88bf9kxttq_M",
  authDomain: "clone-3da4f.firebaseapp.com",
  projectId: "clone-3da4f",
  storageBucket: "clone-3da4f.appspot.com",
  messagingSenderId: "1089931905587",
  appId: "1:1089931905587:web:e15f33fb708b9aa5bab146"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();
const storage = getStorage();

export {app,db,auth,provider,timestamp,storage};