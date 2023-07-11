// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv2zo9ra1ZED1eW-Gr1cE8-OXnR-K7JHU",
  authDomain: "q8-shop-db-q8.firebaseapp.com",
  projectId: "q8-shop-db-q8",
  storageBucket: "q8-shop-db-q8.appspot.com",
  messagingSenderId: "803001544161",
  appId: "1:803001544161:web:d80de73fd0f0e55bb6f6a0",
  measurementId: "G-WBMHXE7ZH1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
