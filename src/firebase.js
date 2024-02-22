// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth function

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwA-q7EDLIhYh7Dz4Dpgk_22h7ngayo0Y",
  authDomain: "eng-quizzes.firebaseapp.com",
  projectId: "eng-quizzes",
  storageBucket: "eng-quizzes.appspot.com",
  messagingSenderId: "67486174651",
  appId: "1:67486174651:web:8d6b8d24816f8a63c3889e",
  measurementId: "G-6P9MV4JWNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
