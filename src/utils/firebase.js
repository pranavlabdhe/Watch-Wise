// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCkWMeIgvCYOmMdARJGpQ3mqD65sc2_8U",
  authDomain: "watchwise-efe59.firebaseapp.com",
  projectId: "watchwise-efe59",
  storageBucket: "watchwise-efe59.appspot.com",
  messagingSenderId: "567426413958",
  appId: "1:567426413958:web:a29a24ba70e1967cb4a807",
  measurementId: "G-WK9WFHB0HL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()