// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh1S9K76ni78l3JE9-bKhQSXmalLNl4yg",
  authDomain: "tunga-assessment.firebaseapp.com",
  projectId: "tunga-assessment",
  storageBucket: "tunga-assessment.firebasestorage.app",
  messagingSenderId: "963695202279",
  appId: "1:963695202279:web:c8047bfbebb834cff3f742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export default app;