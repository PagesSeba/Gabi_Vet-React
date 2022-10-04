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
  apiKey: "AIzaSyCiAKBOe0Ni851fFkx5RZGn5IF9x4C20AU",
  authDomain: "gabi-react.firebaseapp.com",
  projectId: "gabi-react",
  storageBucket: "gabi-react.appspot.com",
  messagingSenderId: "678305078647",
  appId: "1:678305078647:web:6fb063eaa1c74b57391572",
  measurementId: "G-0H22B5VSHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app)
const auth= getAuth(app)
const storage= getStorage(app)

export default db
export {auth}
export {storage}