// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBraEbt_qZojc4-Lh-4Fe4LF2IuN0elSKc",
  authDomain: "bestpath-tcc.firebaseapp.com",
  projectId: "bestpath-tcc",
  storageBucket: "bestpath-tcc.firebasestorage.app",
  messagingSenderId: "557793184497",
  appId: "1:557793184497:web:09a6256afa2f50eca13750",
  measurementId: "G-7JQ40V7QG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;