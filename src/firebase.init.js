// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5tPaFEEWy-LhpJu7v0Ki75jCTLcfxB0E",
  authDomain: "bookory-cc089.firebaseapp.com",
  projectId: "bookory-cc089",
  storageBucket: "bookory-cc089.appspot.com",
  messagingSenderId: "1025289162427",
  appId: "1:1025289162427:web:f476d4f08f5825f7d9e39e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = app();
export default auth;