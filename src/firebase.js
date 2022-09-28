// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage" 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXAUipDYoUVCyqIj4APai2phDA242UalU",
  authDomain: "futcor-reactch.firebaseapp.com",
  projectId: "futcor-reactch",
  storageBucket: "futcor-reactch.appspot.com",
  messagingSenderId: "312915196975",
  appId: "1:312915196975:web:8acc5270683de1586a9ada",
  measurementId: "G-NNPQ9QV77K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth= getAuth(app)
const storage= getStorage(app)

export default db
export {auth}
export {storage}