// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAT0siWgbyDBHKuuB0SUJgzF8JEkA9M234",
    authDomain: "borodiblogproject.firebaseapp.com",
    projectId: "borodiblogproject",
    storageBucket: "borodiblogproject.appspot.com",
    messagingSenderId: "420329681561",
    appId: "1:420329681561:web:13452400b785cc689dbe08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);