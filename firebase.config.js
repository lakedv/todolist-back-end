// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADKEN02ovcoy7OYS2X_rQF6Ay9wUjkgME",
  authDomain: "todolist-3916b.firebaseapp.com",
  projectId: "todolist-3916b",
  storageBucket: "todolist-3916b.appspot.com",
  messagingSenderId: "575897748847",
  appId: "1:575897748847:web:e195b440cec03bdab4149a",
  measurementId: "G-FE0NMKDGTZ"
};
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);