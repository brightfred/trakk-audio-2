// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC96uMWPiEgdthCPXB81Ow5icrcXM6tifo",
  authDomain: "trakk-audio-31f3c.firebaseapp.com",
  projectId: "trakk-audio-31f3c",
  storageBucket: "trakk-audio-31f3c.appspot.com",
  messagingSenderId: "283773369407",
  appId: "1:283773369407:web:ed5e9b7ad58420b6860c8a",
  measurementId: "G-XK6R193DS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);