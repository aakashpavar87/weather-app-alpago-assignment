// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3Q0uxN1ja0UFJ7z9vll_UM7lg3q3H0BE",
  authDomain: "weather-app-8ec3e.firebaseapp.com",
  projectId: "weather-app-8ec3e",
  storageBucket: "weather-app-8ec3e.appspot.com",
  messagingSenderId: "180288020924",
  appId: "1:180288020924:web:a787b50d983baf588ccbb9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;