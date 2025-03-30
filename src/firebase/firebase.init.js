// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVsRECz9pjLj6ELN7YeykFL8IlrZqKffA",
    authDomain: "gadget-ninja.firebaseapp.com",
    projectId: "gadget-ninja",
    storageBucket: "gadget-ninja.firebasestorage.app",
    messagingSenderId: "314032434462",
    appId: "1:314032434462:web:21780a5c067b877b3a2d0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;