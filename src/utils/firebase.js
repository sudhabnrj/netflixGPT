// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { FIREBASE_AUTH } from './constants';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_AUTH,
  authDomain: "netflixgptv2.firebaseapp.com",
  projectId: "netflixgptv2",
  storageBucket: "netflixgptv2.appspot.com",
  messagingSenderId: "1020164296869",
  appId: "1:1020164296869:web:4698eb98a1c0b6d9ddfd4c",
  measurementId: "G-8Q7S5TQ340"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth();