// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3YN7OGBkOVUMUlv6hI1p0TttP864Joco",
  authDomain: "simple-firebase-tast.firebaseapp.com",
  projectId: "simple-firebase-tast",
  storageBucket: "simple-firebase-tast.firebasestorage.app",
  messagingSenderId: "1054842219630",
  appId: "1:1054842219630:web:cd87c0d16561d08cca0a7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;