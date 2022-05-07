// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_rSkmHr4xV9vhKNlwk4yjq3wRNlAJyQs",
  authDomain: "select-object.firebaseapp.com",
  projectId: "select-object",
  storageBucket: "select-object.appspot.com",
  messagingSenderId: "587984907865",
  appId: "1:587984907865:web:5da2b35b0a807e5ae8cb48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;