// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY7f5hYPU7MdzOOneLNpmH4MqwtYLJo74",
  authDomain: "certification-3831d.firebaseapp.com",
  projectId: "certification-3831d",
  storageBucket: "certification-3831d.firebasestorage.app",
  messagingSenderId: "121685576531",
  appId: "1:121685576531:web:7e9ede8e6836d46e0b2fa6",
  measurementId: "G-L951NLQV0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);